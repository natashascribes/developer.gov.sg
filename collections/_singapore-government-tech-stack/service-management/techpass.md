---
title: TechPass
layout: layout-page-sidenav
category: Digital Identity
sub_collection_render: true
description: TechPass is an Identity & Access Management (IAM) system that is equipped with Single Sign On (SSO).
---

### Overview

As more services go digital, the need for Identity and Access Management (IAM) solutions becomes more urgent and important to enforce strict privileged access to these digital services. However, existing IAM solutions are often decentralised, making it cumbersome for users as they have to manage multiple digital identities to access different digital services, and it lowers the effectiveness of controls and governance over these identities. Furthermore, there is increasing emphasis on various security frameworks such as Zero Trust to protect end users and their organisations. In response to these problems, TechPass was developed as a federated and centralised Single Sign On (SSO) IAM for downstream developer services. With TechPass, users can reduce the number of digital identities they need to manage, and administrators can easily control access to their digital services on a single platform, while having the assurance that the management of these identity accounts complies with the relevant government policies.

TechPass is one of three tools in the Engineering Suite, which is part of the Service Management component in the [Singapore Government Tech Stack (SGTS)](/singapore-government-tech-stack/overview/index.html){:target="_blank"}. Engineering Suite offers a collection of service management tools for government officers to discover, subscribe, and manage SGTS services on a single console. TechPass is currently in beta, while the other two Engineering Suite tools (TechBiz and TechHelp) are currently in development.

### What is TechPass?

TechPass is an IAM solution that is equipped with SSO. It taps on [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/){:target="_blank"}, which is an enterprise identity service from Microsoft. 

It complies with Government Instruction Manual ICT&SS Management (also known as [IM8](/guidelines/standards-and-best-practices/im8.html){:target="_blank"}). It utilises popular open standards [OAuth 2.0](https://oauth.net/2/){:target="_blank"}, [OpenID Connect](https://openid.net/connect/){:target="_blank"}, and [Security Assertion Markup Language 2.0](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html){:target="_blank"} for authentication and authorisation processes.

View technical documentations for TechPass [here](https://docs.developer.tech.gov.sg/docs?product=TechPass){:target="_blank"}.

### Why Should TechPass be Adopted?

The benefits of TechPass include:

- For Product Owners: 
  - Simplified IAM solution with easy integration and without procurement complexities. 
  - Ready-to-use: Reduce time-to-market before your product or service goes live.
  - Conveniently manage users with the [TechPass Portal](https://portal.techpass.gov.sg/public/home){:target="_blank"}.

- For Users:
  - With SSO, users can enjoy convenient access to multiple developer services while only signing in once.
  - Retrieve your access logs to validate your sessions.

### How Do You Use TechPass?

**Public officers** can sign up for a TechPass account using their non-Secure Email Government Standard Image Builds (non-SE GSIBs) by following these steps:

1. Visit the [TechPass Portal](https://portal.techpass.gov.sg/public/home){:target="_blank"} and click “Sign Up”.
2. Enter your organisational email address and click “Submit”.
3. An invitation will be sent to your email address. Upon receiving the invitation, follow the instructions to complete the sign-up process.

For more detailed step-by-step instructions, click [here](https://docs.developer.tech.gov.sg/docs/techpass-user-guide/#/onboard-public-officers-using-non-se-machines){:target="_blank"}.

**Vendors** can get in touch with the agency they are working with to sign up for a TechPass account.

For more information, click [here](https://docs.developer.tech.gov.sg/docs/techpass-user-guide/#/onboard-vendors-to-techpass){:target="_blank"}.

**SGTS product owners** can onboard TechPass by contacting enquiries_esuite@tech.gov.sg for further instructions.

### What's Next?

TechPass is working to support one-time password (OTP) authentication, system-to-system account authentication, Central Account Management (AM), and more. Stay tuned for updates!

### Contact Information

For enquiries or feedback, please fill in this [form](https://go.gov.sg/engineering-suite-form){:target="_blank"} and the product team will respond within 5 working days.

<br/>**Technical Resources**

- [TechPass technical documentations](https://docs.developer.tech.gov.sg/docs?product=TechPass){:target="_blank"}