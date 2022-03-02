---
title: National Digital Identity
layout: layout-page-sidenav
sub_collection_render: true
single_level_nav: true
_data: single-level-nav
redirect_from:
    - /products/categories/digital-identity/national-digital-identity/
    - /products/categories/digital-identity/national-digital-identity.html
    - /technologies/digital-identity/national-digital-identity/
    - /technologies/digital-identity/national-digital-identity.html
description: >
  National Digital Identity
  allows citizens to conduct transactions with both the public and private sectors 
  using a single, secure digital credential. NDI comprises various solutions such as MyInfo and SG-Verify.
---

## Overview

### Myinfo

All Singpass users are automatically provisioned with a Myinfo profile. Users are able to view their personal data and access records of past usage via the Singpass app.

By integrating with Myinfo API, Singpass users can share their data by providing consent via Singpass and organisations no longer have to deal with manual data management. With data from participating government sources, this allows the provisioning of products instantly, where applicable.

Myinfo allows residents and businesses to benefit from:

- Reduced repetitive filling of personal information for multiple online transactions;
- Reduced incidence of mistakes due to human error; and
- No more need for physical documents as verification to complete transactions.

For more information on Myinfo API, please read the [documentation](https://api.singpass.gov.sg/library/myinfo/business/introduction).

### Myinfo business

Myinfo business extends the rollout of Myinfo, a service that enables businesses to manage the use of its corporate and applicant's personal data for simpler online transactions.

Business users can control and consent to share their data securely with participating businesses for more seamless digital transactions. They can enjoy less form-filling and a reduced need for providing supporting documentation for verifications.

While Myinfo allows businesses to acquire individual customers in a more seamless way, Myinfo business supports Business-to-business (B2B) use cases such as SME loan application, merchant acquisition and KYC.

For more information on Myinfo business API, please read the [documentation](https://api.singpass.gov.sg/library/myinfobiz/business/introduction).

### Login

Singpass Login, is now available for private sector use via an API integration. With Login, users can do away with remembering one additional set of credentials. Businesses will be able to authenticate and onboard existing Singpass users with higher assurance.

With Singpass Login, businesses will be able to :

- authenticate users without the need to implement and operate additional infrastructure and systems;
- offer users the Singpass password-less login experience, and a fast, convenient and secure means of authentication; and
- provide access to their online services to over 4 million Singpass users.

For more information, refer to Singpass Login API [here](https://api.singpass.gov.sg/library/login/developers/overview-at-a-glance).

### Verify

Verify enables users to perform secure in-person identity verification and data sharing through scanning QR codes. This service provides businesses a digital alternative for visitor registration and access, customer acquisition at roadshows, or other use cases that require user identification.

Verify helps businesses:

- align with PDPC's NRIC Advisory Guidelines, by verifying users digitally without collecting or retaining physical NRICs, FIN cards, and NRIC/FIN numbers. Please refer to the PDPC's Technical Guide [here](https://www.pdpc.gov.sg/-/media/Files/PDPC/PDF-Files/Other-Guides/Technical-Guide-to-Advisory-Guidelines-on-NRIC-Numbers---260819.pdf).
- enable self-service and contactless verification (e.g. kiosks for registration, or age-verification stations).

For more information on Verify API, please read the [documentation](https://api.singpass.gov.sg/library/verify/business/introduction).

### Sign

Sign enables users to digitally sign documents using their Singpass App by scanning the QR code displayed on the screen before authenticating themselves. Sign employs technology to ensure the integrity of the signed document and to counter repudiation.
Businesses and services such as document signing applications can integrate and provide trusted signatures directly with Singpass, increasing trust and assurance with their existing document signing products. Signing with Singpass provides convenience, productivity and efficiency - citizens no longer need to be physically present to sign documents and agreements, and businesses can digitalise document verification and filing.

Sign with Singpass uses signing certificates issued by the National Certification Authority. Upon the National Certification Authority's accreditation, signatures made using the Sign with Singpass will be regarded as secure electronic signatures under Singapore's Electronic Transactions Act.

For more information on Digital Signing API and Digital Signing Application Partners, please read the [documentation](https://api.singpass.gov.sg/library/sign/business/introduction).

### SafeEntry API

[SafeEntry](https://www.safeentry.gov.sg) is a national digital check-in system that logs the NRIC/FINs and mobile numbers of individuals visiting hotspots , workplaces of essential services, as well as selected public venues to prevent and control the transmission of COVID-19 through contact tracing and identification of COVID-19 clusters.

Organisations can now integrate their registration systems with SafeEntry APIs to perform automated check-in or check-out, in addition to the default mode where individuals scan a location’s SafeEntry QR code.

This ensures a fuss-free and seamless experience for individuals as well as the business.

For more information on SafeEntry API, please read the [documentation](https://api.singpass.gov.sg/library/safeentry-api/business/introduction).

### Identiface

Identiface is a secure authentication method by simply having the user scan their face - With a valid NRIC/FIN number and upon obtaining consent, users can simply scan their face to be authenticated.

Organisations do not have to build, secure and maintain a biometric database and biometric system implementation. Integration is achieved easily though bundled SDKs and APIs.

This service is ideal for use cases that require step-up authentication or to ascertain the user's presence.

### Authorise (Coming Soon)

Authorise enables businesses to notify and seek authorisation for transactions from customers without being physically present. Businesses will be able to make use of Singpass to obtain trusted authorisations/instructions from citizens.

For example, businesses can request authorisation from users to share information/instruction from another public or private body. Users will receive notifications on Singpass app, informing them that there are pending requests for authorisation. Users can consent to this request, and the authorisation will be share with the requesting party, doing away with the need for him to be physically present and without the need to approach two different parties to pass the information/instruction around them.

### For more information

Please read the [Singpass-API documentation](https://api.singpass.gov.sg/) or [contact the Singpass Engagement team](https://go.gov.sg/engage-ndi).
