const path = require("path");
const express = require("express");
const beautifyHtml = require("js-beautify").html;
const yaml = require("js-yaml");
const Octokit = require("@octokit/rest");
const axios = require("axios");
const Cryptr = require("cryptr");
const { oauthLoginUrl } = require("@octokit/oauth-login-url");
const uuidv4 = require("uuid/v4");
const utils = require("../lib/utils");
const github = require("../lib/github");
const packageInfo = require("../../package.json");
const {
    githubBaseRef,
    githubRepoOwner,
    githubRepoName,
    clientID,
    clientSecret,
    tokenHash
} = require("./config");
const lib = require("../lib");

const cryptr = new Cryptr(tokenHash);

const octokit = github.octokit;

const router = express.Router();

router.get("/", (req, res) =>
    res.json({
        version: packageInfo.version
    })
);

router.get("/oauth", (req, res) => {
    res.redirect(
        oauthLoginUrl({
            clientId: clientID,
            scopes: ["public_repo"]
        }).url
    );
});

router.get("/oauth/github/callback", (req, res) => {
    const requestToken = req.query.code;
    axios({
        method: "post",
        url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
        headers: {
            accept: "application/json"
        }
    })
        .then(response => {
            const accessToken = cryptr.encrypt(response.data.access_token);
            // during local test
            if (req.hostname === "localhost") {
                res.cookie("_devpo", accessToken, { httpOnly: true });
                res.redirect(`http://localhost:8888/review`);
            } else {
                res.cookie("_devpo", accessToken, { secure: true });
                res.redirect(`${req.protocol}://${req.hostname}.com/review`);
            }
        })
        .catch(err => {
            // TODO something went wrong
        });
});

router.get("/reviews", async (req, res) => {
    const octokit = new Octokit({
        auth: cryptr.decrypt(req.cookies._devpo)
    });

    try {
        const result = await octokit.pulls.list({
            owner: githubRepoOwner,
            repo: githubRepoName
        });
        res.json(result.data);
    } catch (err) {
        // delete cookie and force user to resign in if token fails to make an api call
        res.clearCookie("_devpo");
        res.status(500).json({
            error: err.message || "Error fetching pull requests."
        });
    }
});

router.post("/request-otp", async (req, res) => {
    const requestBody = req.body;
    if (!requestBody.email) {
        res.status(400).json({
            error: "The email parameter is missing."
        });
        return;
    }

    try {
        let otpResponse = await lib.otp.requestOtp(requestBody.email);
        res.json(otpResponse.data);
    } catch (err) {
        res.status(500).json({
            error: err.message || "Error requesting for email verification OTP."
        });
    }
});

router.post("/submit-article-changes", async (req, res) => {
    let submission = req.body;

    let missingParams = lib.utils.getMissingParams(
        [
            "email",
            "otp",
            "page_path",
            "page_title",
            "page_category",
            "page_content",
            "page_layout"
        ],
        submission
    );
    if (missingParams.length > 0) {
        res.status(400).json({
            error: `The following parameters are missing: ${missingParams.join(
                ", "
            )}`
        });
        return;
    }

    let email = submission.email;
    let otp = submission.otp;

    try {
        await lib.otp.verifyOtp(email, otp);
    } catch (err) {
        res.status(403).json({
            error: `OTP validation failed. ${err.message}`
        });
        return;
    }

    let pagePath = submission.page_path;
    let pageTitle = submission.page_title;
    let pageCategory = submission.page_category;
    let pageContent = submission.page_content;
    let pageLayout = submission.page_layout;

    let pullRequestLabels = [
        pageCategory.toLowerCase(),
        utils.toLowerCaseSlug(pageTitle)
    ];
    try {
        const conflictingPr = await lib.github.checkForConflictingPr(
            pullRequestLabels
        );
        if (conflictingPr) {
            res.status(400).json({
                error: `Can't make submission; pending changes at ${
                    conflictingPr.url
                }`
            });
            return;
        }
    } catch (err) {
        res.status(500).json({
            error: "Couldn't check for conflicting pull requests"
        });
        return;
    }

    let newPage =
        `---\n` +
        `title: ${pageTitle}\n` +
        `layout: ${pageLayout}\n` +
        `permalink: ${pagePath}\n` +
        `category: ${pageCategory}\n` +
        `breadcrumb: ${pageTitle.toUpperCase()}\n` +
        `---\n`;

    const formattedContent = beautifyHtml(pageContent, {
        wrap_line_length: 120
    });
    newPage += formattedContent;

    try {
        const newBranchId = await lib.utils.generateId();
        const pr = await lib.github.createNewBranchAndPullRequest({
            filePath: path.join("contents", pagePath, "index.html"),
            fileContent: newPage,
            baseBranchName: githubBaseRef,
            newBranchName: `${pageCategory.toLowerCase()}-edit-${new Date()
                .toISOString()
                .substring(0, 10)}-${newBranchId}`,
            commitMessage: `New edits for ${pageTitle} page by ${email}`,
            prTitle: `New edits for ${pageTitle} page by ${email}`,
            prBody: newPage
        });

        await lib.github.addLabelsToPullRequest({
            labels: pullRequestLabels,
            prNumber: pr.data.number
        });

        res.json({
            pr: pr.data.html_url
        });
    } catch (err) {
        res.status(500).json({
            error:
                err.message ||
                `Error submitting ${pageCategory.toLowerCase()} changes.`
        });
    }
});

router.post("/terms", async (req, res) => {
    let submission = req.body;
    let missingParams = lib.utils.getMissingParams(
        ["email", "otp", "term", "full_term", "description"],
        submission
    );
    if (missingParams.length > 0) {
        res.status(400).json({
            error: `The following parameters are missing: ${missingParams.join(
                ", "
            )}`
        });
        return;
    }

    const email = submission.email;
    const otp = submission.otp;
    try {
        await lib.otp.verifyOtp(email, otp);
    } catch (err) {
        res.status(403).json({
            error: "OTP validation failed."
        });
        return;
    }

    try {
        let termsFileContents = await octokit.repos.getContents({
            owner: githubRepoOwner,
            repo: githubRepoName,
            path: "terms.json",
            ref: githubBaseRef
        });

        let termsFileRaw = Buffer.from(
            termsFileContents.data.content,
            "base64"
        ).toString();

        let existingTerms = JSON.parse(termsFileRaw);

        let newTerm = {
            id: uuidv4(),
            term: submission.term,
            full_term: submission.full_term,
            description: submission.description,
            links: submission.links.length > 0 ? submission.links : [],
            tags: submission.tags.length > 0 ? submission.tags : []
        };

        existingTerms.push(newTerm);
        lib.utils.sortTerms(existingTerms);

        const updatedTerms = JSON.stringify(existingTerms, null, 4);

        const newBranchId = await lib.utils.generateId();
        const pr = await lib.github.createNewBranchAndPullRequest({
            filePath: "terms.json",
            fileContent: updatedTerms,
            baseBranchName: githubBaseRef,
            newBranchName: `term-new-${new Date()
                .toISOString()
                .substring(0, 10)}-${newBranchId}`,
            commitMessage: `New term suggestion from ${submission.email}`,
            prTitle: `New term suggestion from ${submission.email}`,
            prBody: yaml.safeDump(newTerm, {
                lineWidth: 120
            })
        });

        let pullRequestLabels = [
            "term",
            utils.toLowerCaseSlug(submission.term)
        ];

        await lib.github.addLabelsToPullRequest({
            labels: pullRequestLabels,
            prNumber: pr.data.number
        });

        res.json({
            pr: pr.data.html_url
        });
    } catch (err) {
        res.status(500).json({
            error: err.message || "Error submitting new term"
        });
    }
});

router.put("/terms", async (req, res) => {
    let submission = req.body;
    let missingParams = lib.utils.getMissingParams(
        ["email", "otp", "id", "term", "full_term", "description"],
        submission
    );
    if (missingParams.length > 0) {
        res.status(400).json({
            error: `The following parameters are missing: ${missingParams.join(
                ", "
            )}`
        });
        return;
    }

    const email = submission.email;
    const otp = submission.otp;

    try {
        await lib.otp.verifyOtp(email, otp);
    } catch (err) {
        res.status(403).json({
            error: "OTP validation failed."
        });
        return;
    }

    try {
        const updatedTerm = {
            id: submission.id,
            term: submission.term,
            full_term: submission.full_term,
            description: submission.description,
            links: submission.links.length > 0 ? submission.links : [],
            tags: submission.tags.length > 0 ? submission.tags : []
        };

        let termsFileContent = await octokit.repos.getContents({
            owner: githubRepoOwner,
            repo: githubRepoName,
            path: "terms.json",
            ref: githubBaseRef
        });

        let termsFileRaw = Buffer.from(
            termsFileContent.data.content,
            "base64"
        ).toString();

        let existingTerms = JSON.parse(termsFileRaw);

        let updatedTermIndex = existingTerms.findIndex(
            term => term.id === submission.id
        );
        existingTerms.splice(updatedTermIndex, 1, updatedTerm);

        let newContent = JSON.stringify(existingTerms, null, 4);

        const newBranchId = await lib.utils.generateId();
        let pr = await lib.github.createNewBranchAndPullRequest({
            filePath: "terms.json",
            fileContent: newContent,
            baseBranchName: githubBaseRef,
            newBranchName: `term-edit-${new Date()
                .toISOString()
                .substring(0, 10)}-${newBranchId}`,
            commitMessage: `New term edits from ${submission.email}`,
            prTitle: `New term edits from ${submission.email}`,
            prBody: yaml.safeDump(updatedTerm, {
                lineWidth: 120
            })
        });
        let pullRequestLabels = [
            "term",
            utils.toLowerCaseSlug(submission.term)
        ];
        await lib.github.addLabelsToPullRequest({
            labels: pullRequestLabels,
            prNumber: pr.data.number
        });

        res.json({
            pr: pr.data.html_url
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
});
module.exports = router;