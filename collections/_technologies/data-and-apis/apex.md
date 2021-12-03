---
title: API Exchange (APEX) - A Centralised Data Sharing Platform for the Public Sector
layout: layout-page-sidenav
category: Data and APIs
redirect_from: /singapore-government-tech-stack/communications/apex
description: GovTech’s APEX platform enables Singapore’s public sector to share data conveniently and securely through the use of APIs. Find out here.
---

### Overview

APEX is a self-service API platform that acts as a centralised and secure API gateway for the government. Through APEX, users can easily publish, monitor, and
discover APIs across government agencies securely. The increasing role of data driven decision making has increased the need for a centralised and secure data 
sharing platform for the government through APEX.

### What is APEX?

APEX can be thought of as a centralised data sharing platform within the government. It enables convenient and secure data sharing through the use of APIs which contain coded rules that manages who has access to the data and how data gets transferred.

<figure style="text-align: center">
  <img
    src="/assets/img/apex_api_catalogue.png"  
    alt="Fig 1: APEX’s API Library allows inter-agency sharing of use case."
  />
  <figcaption>Fig 1: APEX’s API Library allows inter-agency sharing of use case.</figcaption>
</figure>

In addition to secure data sharing, APEX’s API catalogue provides government agencies with a searchable library of government APIs. This promotes knowledge sharing within the government, while reducing digital silos and the duplication of efforts.

<figure style="text-align: center">
  <img
    src="/assets/img/apex_logging_1.png"  
  />
  <img
    src="/assets/img/apex_logging_2.png"  
    alt="Fig 2 & 3: APEX’s central logging system enables agencies to view the logs of all API calls."
  />
  <figcaption>Fig 2 & 3: APEX’s central logging system enables agencies to view the logs of all API calls.</figcaption>
</figure>

The central logging system of APEX also provides an overview of all API call logs, this allows agencies to troubleshoot issues when necessary.

<figure style="text-align: center">
  <img
    src="/assets/img/apex_admin.png"  
    alt="Fig 4: APEX’s Central Administration Dashboard"
  />
  <figcaption>Fig 4: APEX’s Central Administration Dashboard</figcaption>
</figure>

The central administration dashboard of APEX serves as a monitoring tool for system health checks and provides analytics.  

Other key features of APEX include its self-service model, provision of professional services, ability to support multi-tenanted Environments and modern RESTful and SOAP APIs.

The various open source codes under APEX can be found through these links:
- [Node.js API signature library](https://github.com/GovTechSG/node-apex-api-security){:target="_blank"}
- [Java API signature library](https://github.com/GovTechSG/java-apex-api-security){:target="_blank"}
- [Node.js HTTP Proxy Server for attaching Apex authentication headers](https://github.com/GovTechSG/apex-proxy-node){:target="_blank"}
- [Apex API signature validator](https://github.com/GovTechSG/apex-signature-validator){:target="_blank"}

### Why Should APEX be Adopted?

APEX serves over 100 million API calls in a month and supports around 2,400 API functions published by government agencies. Currently, 31 agencies have been onboarded alongside 44 projects. The key benefits of APEX are as shown below.

- **Real-time management of data APIs and data consumption:** Government agencies can garner an overview of the popularity and usage of their shared datasets. This allows agencies to constantly improve their datasets according to popularity and demand. Less popular data sets can also be deprioritised to allow for more time and resources to be allocated to impactful datasets that will be more beneficial for inter-agency sharing and use.
- **Safe and secure transfer of data between public-facing front-end (Internet) and back-end (Intranet) platforms:** APEX allows public information such as idea submissions, documents and other hosted materials to be securely exchanged between public-facing Internet portals and an administrative Intranet portal within a platform.
- **Saves manpower hours:** When a government agency requires data from multiple agencies, APEX can facilitate the data sharing process more conveniently and quickly without the need to submit a request to and await approval from the data source agency. This is because APEX’s self-service model allows the requesting agency to pull data sets from various agencies directly due to pre-configured access controls set by the data source agency.
- **Data Governance:** APEX provides a central point to manage, monitor and harden security for APIs. 
- **Data Sharing:** An easy and reusable data exchange channel using data transformation. The automated workflow reduces the effort required for both the provider and the consumer, thus encouraging the creation of innovative digital services that will be published through an API catalogue.
- **Rapid Development for Service Delivery:** Rapid development is possible without affecting the backend. Using the API catalogue, agencies can discover and reuse existing APIs that can be integrated into their existing technology stack. This reduces an agency’s development, integration and troubleshooting timespan, thereby speeding up service delivery.
- **Co-creation:** Applications and backend can be developed together. 

### How Do You Use APEX?

To begin using APEX, users have to identify their usage model as shown below.

1. API Provider: The back-end resource provider that exposes or serves the respective function(s).
2. API Consumer : The agencies that consumes the APIs.

**For API Providers:**

As a provider, a project must be created first. The steps below detail the project creation process.

**Step 1 - Getting Onboarded**

Potential users can request and fill in the onboarding form from the APEX team by writing to  enquiries_apex@tech.gov.sg and submitting the completed form it accordingly. The APEX team will perform the necessary evaluation tasks to determine how many units (Apex Units) of subscription is required for the user’s system case. After which, a kickoff session will be arranged with the APEX onboarding team to go through the briefing list of items that agencies are required to follow up on. This includes a training session for creating APIs and APPs in APEX.

**Step 2 - Opening of Firewalls**

After the kickoff session, users are required to identify and request for opening of firewalls to allow APEX to communicate with the relevant systems.

**Step 3 - Perform Certificate Exchanges, if Required**

Tenants may need to perform the exchange of certificates based a needs basis.
The APEX team will setup the requested project and cover the following:

- Set up the subscribed environment, if required.
- Link the user’s account to the subscribed environment.

**Step 4 - Verify the Subscribed Environment**

Tenants will be notified via email when the environment setup is completed, this allows tenants to perform a check on the environment set up, if required.

**Step 5 – Access the Portal and start API Creation**

Tenants can start to create APIs that would be taught in the APEX training session. If there are any exceptions in this stage, the tenant can approach the support team for assistance.

**For API Consumers:**

As a consumer, users can follow the steps below to begin their APEX onboarding.

**Step 1 - Getting Access from the Provider**

Consumers can visit this [site](https://portal.apex.gov.sg/catalogue/highlights){:target="_blank"}(only accessible through Intranet) to identify the required APIs before requesting access from the Provider.  Consumers can also sign up for the training session provided by the APEX team to understand how APPs can be created in APEX.

**Step 2 - Opening of Firewalls**

After the kickoff session, users are required to identify and request for opening of firewalls to allow APEX to communicate with the relevant systems.

**Step 3 - Perform Certificate Exchanges, if Required**

Tenants may need to perform the exchange of certificates based a needs basis.

**Step 4 – Access the Portal and start API Creation**

Tenants can start to create APIs that would be taught in the APEX training session. If there are any exceptions in this stage, the tenant can approach the support team for assistance.

For more technical information, refer to the APEX Quickstart guide [here](https://docs.developer.tech.gov.sg/docs/apex-quickstart){:target="_blank"} and FAQs [here](https://docs.developer.tech.gov.sg/docs/frequently-asked-questions-faqs){:target="_blank"}.

### Success Stories

- MyInfo is a government service in which users only have to provide their personal data to the government once before they can tap on their government-verified data to pre-fill online forms for subsequent government and private sector digital services. Thus, making digital transactions to quicker and simpler. Currently, APEX has enabled over 220 government digital services and more than 2,400 commercial services to be linked to the MyInfo service. This helps citizens to access services more efficiently and quickly by retrieving their data from various government sources through one platform, eventually doing away with the need for physical documents as verifications to complete transactions. 
- Ideas! is the government portal for crowdsourcing activities. It is where the government can reach out to and receive feedback and suggestions from the public through challenges or contests. Currently, Ideas! relies on APEX to securely exchange content such as public information, idea submissions, documents and other hosted materials, between the public-facing Internet portal and an administrative Intranet portal of the platform.

### What's Next?

A later version of APEX 2.0 running on containers is planned in Q1 FY22, which will come with a slew of features enhancement such as 2FA soft token.

### Getting Started

Administrative access to APEX is only available on the government intranet. Register for APEX through this [link](https://portal.apex.gov.sg/register){:target="_blank"} or email us at <enquiries_apex@tech.gov.sg>.

### Contact Information

You can email us at <enquiries_apex@tech.gov.sg>.

<br/>**Technical Resources**

- [APEX Quickstart guide](https://docs.developer.tech.gov.sg/docs/apex-quickstart){:target="_blank"}
- [APEX FAQs](https://docs.developer.tech.gov.sg/docs/frequently-asked-questions-faqs){:target="_blank"}
- [Node.js API signature library](https://github.com/GovTechSG/node-apex-api-security){:target="_blank"}
- [Java API signature library](https://github.com/GovTechSG/java-apex-api-security){:target="_blank"}
- [Node.js HTTP Proxy Server for attaching Apex authentication headers](https://github.com/GovTechSG/apex-proxy-node){:target="_blank"}
- [Apex API signature validator](https://github.com/GovTechSG/apex-signature-validator){:target="_blank"}
