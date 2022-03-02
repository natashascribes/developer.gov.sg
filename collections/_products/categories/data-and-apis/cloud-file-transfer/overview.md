---
title: Cloud File Transfer (CFT) - Powering secure and compliant cross-zone file transfers.
layout: layout-page-sidenav
category: Data and APIs
_data: single-level-nav
redirect_from:
    - /singapore-government-tech-stack/communications/cloud-file-transfer
    - /products/categories/data-and-apis/cloud-file-transfer/
    - /products/categories/data-and-apis/cloud-file-transfer.html
    - /technologies/data-and-apis/cloud-file-transfer/
    - /technologies/data-and-apis/cloud-file-transfer.html
sub_collection_render: true
single_level_nav: true
collection_group: [Singapore Government Tech Stack]
description: CFT is an API-driven managed file transfer service that enables agencies to conduct secure and compliant cross-zone file transfer
---
## Cloud File Transfer

Cloud File Transfer (CFT) is a lightweight, fully managed, API-driven service that allows agencies or businesses to **transfer files easily, securely and efficiently at scale**, whether you are transferring files across internet and intranet zones or within the same internet or intranet zones. This product is currently in private beta version.

### A Singapore Government Tech Stack (SGTS) Product

CFT is one of the **Communications** components within [the Base Layer of the SGTS](/singapore-government-tech-stack/overview).

### APEX vs CFT

Today, the [IM8](/guidelines/standards-and-best-practices/im8) policy requires applications to be separated into internet and intranet zones. Transferring information across zones requires a bridging system. [API Exchange (APEX)](/data-and-apis/apex) was built to allow information sharing across zones. However, APEX is typically used for API requests - to share small payloads, usually as text.

To transfer large files such as PDFs, images or textual files, an agency would need to set up additional servers to act as file repositories in addition to the cross zones bridging capability. Implementing and maintaining such an infrastructure and constantly ensuring its compliance with IM8 policies/audits requires the agency to fork out additional time, money and manpower.

### CFT Transfer options

With CFT, agencies and businesses can easily and securely transfer files.

From an application in | To an application in
-----------------------|---------------------
Internet zone | Intranet zone
Intranet zone | Internet zone
Internet zone | Internet zone
Intranet zone | Intranet zone

### Benefits

##### Plug and play

Start transferring files in minutes without the operational cost and overheads of building and maintaining a similar service. Developed by the same team that built the cross zones bridging in APEX, CFT lets you focus your project resources on user centric functionalities that matter most to citizens and businesses.

##### Built-in scalability with no lock-in on your side

Eliminates the need to manage your own infrastructure or worry about over or under provisioning. CFT runs on planet-scale infrastructure. Whether it is zero to N transfers, or seasonal spikes, CFT scales automatically for you.

##### Application Infrastructure Architecture Standard Compliant

Compliance is hard. Staying compliant is harder. CFT complies to IM8's AIAS policy and will ensure compliance with future policy updates.

### Key Features

##### Keep tabs on your files

Register your webhooks to respond to events for advanced workflows or register your email to be notified real time when your files are ready to download. Or, just simply track all your transfers in a single dashboard.

##### Vulnerabilities Scanning

CFT safeguards recipients from malicious file upload attacks by scanning files automatically for malware threats.

##### Large files transfer

CFT transfers up to 1GB in a single file. Larger files can be split into smaller chunks to be processed as a single transaction.

### Get Started

CFT is currently in private beta version. [Contact us](mailto:enquiries_CFT@tech.gov.sg) for an invitation.