---
title: Government on Commercial Cloud
layout: layout-page-sidenav
category: Infrastructure and Hosting
sub_collection_render: true
single_level_nav: true
_data: single-level-nav
collection_group: [Singapore Government Tech Stack]
redirect_from:
  - /singapore-government-tech-stack/government-on-commercial-cloud
  - /products/categories/infrastructure-and-hosting/government-on-commercial-cloud/
  - /products/categories/infrastructure-and-hosting/government-on-commercial-cloud.html
  - /technologies/singapore-government-tech-stack/government-on-commercial-cloud
  - /technologies/infrastructure-and-hosting/government-on-commercial-cloud/
  - /technologies/infrastructure-and-hosting/government-on-commercial-cloud.html
description: >
  GCC is a “wrapper” platform that allows government agencies to adopt commercial cloud solutions to provide secure, seamless and efficient services.
---

### Overview

In late 2018, the Singapore Government announced a five-year plan to migrate most of its information technology (IT) systems from on-premises infrastructure to the commercial Cloud platform to accelerate service delivery and improve services for citizens and businesses. This led to the establishment of the GCC in 2019 to homogenise the onboarding experience and administrative tasks of government agencies on the Cloud, including workload administration, account and billing management, secure access, and compliance to governance policies. In 2020, a whole-of-government (WOG) target to move 70% of eligible government systems onto the Cloud by 2023 was represented in the Digital Government Blueprint. To date, the government has over 600 systems on the Cloud.

Currently, key government services such as [MyCareersFuture](https://www.mycareersfuture.gov.sg/){:target="\_blank"}, [GoBusiness](https://www.gobusiness.gov.sg/){:target="\_blank"}, [GoBusiness Licensing Portal](https://licence1.business.gov.sg/feportal/web/frontier/home){:target="\_blank"}, [SafeEntry](/products/categories/digital-solutions-to-address-covid-19/safeentry){:target="\_blank"}, [SupplyAlly](/products/categories/digital-solutions-to-address-covid-19/supplyally){:target="\_blank"}, [Whole of Government Application Analytics (WOGAA)](/products/categories/analytics/wogaa/getting-started){:target="\_blank"}, and [SHIP-HATS](/singapore-government-tech-stack/toolchain/overview.html){:target="\_blank"} utilise the GCC.

Ultimately, cloud migration is not just a data migration exercise, but a holistic strategy to pursue government digital transformation and advancement of citizen and business services through cloud capabilities. For example, during the COVID-19 pandemic, Singapore’s Ministry of Education (MOE) was able to successfully enable home-based learning (HBL) within a week’s notice due to the hosting of its Student Learning Space (SLS) on the GCC, which allowed SLS to tap on cloud IaaS and PaaS functionalities to deliver a seamless and smooth HBL experience for students. This also allowed SLS to meet the increased demand for HBL during the pandemic, by scaling its uptake from 100,000 concurrent students to 300,000 concurrent students.

### What is GCC?

GCC 1.0 was launched in 2018 as a “wrapper” platform that provides government agencies with a consistent means to adopt commercial cloud solutions offered by Amazon, Microsoft, and Google. However, feedback received include concerns over the tedious process of onboarding the GCC, increased need for automation, cloud native solutions and for less service requests.
In response to the learning points from GCC 1.0, a rethink was required on how the GCC is built and operated. As such, GCC was redesigned with the following approaches to give rise to GCC 2.0:

- **Software approach to infrastructure:** Utilise Infrastructure-as-Code (IaC) to implement a core cloud platform
- **Encourage more usage of native cloud solutions** with more dynamic configuration controls and less static system wide controls
- **Identity and access management (IAM) focused:** Utilisation of roles for security beyond networks, where multiple accounts are consolidated to Single Sign On (SSO) accounts to enable strong account identity

<figure style="text-align: center">
  <img
    src="/assets/img/gcc-fig1.png" width="70%" height="70%" 
    alt="Fig 1: Illustration of GCC’s &quot;Wrapper&quot; Platform"
  />
  <figcaption>Fig 1: Illustration of GCC’s “wrapper” platform</figcaption>
</figure>

### Why Should GCC be Adopted?

GCC 2.0 represents a refinement from our initial platform, based on feedback from users and learning points over the past two years. The GCC 2.0’s platform vision includes:

- **Customer centricity:** Recognising the developer as the customer so they are set up right to deliver to citizens and businesses
- **Automation focus:** To reduce toil and service requests
- **Improved observability and auditability:** Promote visibility into apps and traceability over time periods
- **Compliance and security by design:** Allows agencies to comply with most IMs
- **API first:** Exposes service connections via APIs to facilitate government developers
- **Native solutions over builds:** Light touch by adopting cloud technology over heavy customisations to move fast

The key benefits of GCC 2.0 include:

- **Single Identity:** Simplifying and accelerating identity and device security through [TechPass](/singapore-government-tech-stack/service-management/techpass.html){:target="\_blank"}, which will be the single credential for all logins to access GCC 2.0 or Singapore Government Tech Stack services;
- **Endpoint Posture Checks:** Through Secure Engineering Environment Device Platform (SEED), there will be real-time periodic posture checks with the capability to terminate access to services when non-compliant (e.g., malware detected on device) only individual services;
- **Access Control:** Cloudflare Access Control - Realtime secured identity with multi-factor authentication (MFA) and device posture through an encrypted channel to access GCC 2.0;
- **Native Workload Administration:** Cloud Native - Relies on more reliable CSP native workload administration; and
- **Controls & Compliance:**
  - GCC 2.0 infra - Security controls using identity access management and policy-as-code (i.e. real time configuration checks), and
  - GCC 2.0 CMP - Less dependence on cloud management portal for better control and more automation over service requests.

### How Do You Use GCC?

GCC 2.0 is currently in the Early Adopter Release phase but to tap on GCC 1.0, government agencies can first sign up for the [GCC Foundation Training](/gcc-foundation-training){:target="\_blank"} to equip public officers with the knowledge on how to utilise appropriate GCC Services (GCCS) to host ICT systems. Refer to the STACK-X Cloud conference for more details on GCC [here](/communities/events/stack-x-cloud-2021){:target="\_blank"}.

### What's Next

GCC 2.0 is currently in the Early Adopter Phase and will be leveraged as a whole-of-government (WOG) platform along with the Singapore Government Tech Stack (SGTS) for modern app development in the Government. The roadmap for GCC 2.0 is as shown below.

<figure style="text-align: center">
  <img
    src="/assets/img/gcc-fig2.png" width="70%" height="70%" 
    alt="Fig 2: GCC 2.0 roadmap (subject to changes)"
  />
  <figcaption>Fig 2: GCC 2.0 roadmap (subject to changes)</figcaption>
</figure>

### Contact Information

For enquiries, email <info@tech.gov.sg>.
