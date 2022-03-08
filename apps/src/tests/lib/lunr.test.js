import assert from "assert";
import {
  getFirstMatchIndex,
  getHighlightedSearchResult,
  getTruncatedContent,
  highlightContentMatches,
} from "../../lib/lunr";

function buildMatchDataObj(indexFieldFound, firstMatchIndex) {
  return {
    metadata: {
      mockMatchKey: {
        [indexFieldFound]: {
          position: [[firstMatchIndex, 1]],
        },
      },
    },
  };
}

describe("lunr text suite", () => {
  it("should highlight the correct text.", () => {
    const parentText = "Test parent text.";
    const targetText = "text";

    let highlightedText = highlightContentMatches(parentText, targetText);
    assert.strictEqual(highlightedText, "Test parent <mark>text</mark>.");
  });

  describe("truncate content suite", () => {
    // This string has 22 char
    const fullContent = "This is a test content";
    const firstMatchIndex = 6;
    it("should truncate with '...'", () => {
      const minChar = 4;
      const maxChar = 10;

      let truncatedContent = getTruncatedContent(
        firstMatchIndex,
        minChar,
        maxChar,
        fullContent
      );
      assert.strictEqual(truncatedContent, "...is is a test c...");
    });

    it("should not truncate with '...'", () => {
      const minChar = 7;
      const maxChar = 20;

      let truncatedContent = getTruncatedContent(
        firstMatchIndex,
        minChar,
        maxChar,
        fullContent
      );
      assert.strictEqual(truncatedContent, "This is a test content");
    });
  });

  describe("first match index suite", () => {
    const mockIndexField = "content";
    it("should return index if indexField contains search text", () => {
      const mockSearchResult = {
        matchData: buildMatchDataObj("content", 3),
      };
      const firstMatchIndex = getFirstMatchIndex(
        mockSearchResult,
        mockIndexField
      );
      assert.strictEqual(firstMatchIndex, 3);
    });

    it("should return index -1 if indexField does not contain search text", () => {
      const mockSearchResult = {
        matchData: buildMatchDataObj("title", 3),
      };
      const firstMatchIndex = getFirstMatchIndex(
        mockSearchResult,
        mockIndexField
      );
      assert.strictEqual(firstMatchIndex, -1);
    });
  });

  describe("highlight search result suite", () => {
    const indexFields = {
      field1: "target text",
      field2: "should not highlight this",
      content: "content target text",
    };

    const expectedResult = {
      field1: "<mark>target text</mark>",
      field2: "should not highlight this",
      content: "content <mark>target text</mark>",
    };

    it("should highlight target text in relevant index fields of a search result object", () => {
      const mockSearchResult = {
        ...indexFields,
        matchData: buildMatchDataObj("content", 8),
      };
      const highlightedSearchResult = getHighlightedSearchResult(
        ["field1", "field2", "content"],
        mockSearchResult,
        "target text"
      );
      expectedResult.matchData = buildMatchDataObj("content", 8);
      assert.deepEqual(expectedResult, highlightedSearchResult);
    });

    it("should bypass index fields that don't exist in search result object", () => {
      const mockSearchResult = {
        ...indexFields,
        matchData: buildMatchDataObj("content", 8),
      };

      const highlightedSearchResult = getHighlightedSearchResult(
        ["field1", "field2", "content", "nonExistingKey"],
        mockSearchResult,
        "target text"
      );
      expectedResult.matchData = buildMatchDataObj("content", 8);

      assert.deepEqual(expectedResult, highlightedSearchResult);
    });

    it("should not highlight content item if it's not a key in the metadata", () => {
      const mockSearchResult = {
        ...indexFields,
        matchData: buildMatchDataObj("title", 8),
      };
      const highlightedSearchResult = getHighlightedSearchResult(
        ["field1", "field2", "content"],
        mockSearchResult,
        "target text"
      );
      expectedResult.matchData = buildMatchDataObj("title", 8);
      expectedResult.content = "content target text";
      assert.deepEqual(expectedResult, highlightedSearchResult);
    });
  });
});
