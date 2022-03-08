---
title: Container Stack (CStack) – Your Code-in-a-Container, Our Stack-in-a-Cluster
layout: layout-page-sidenav
category: DevOps
description: Container Stack is a cloud-based container hosting platform and a Runtime component within Singapore Government Tech Stack.
redirect_from:
    - /singapore-government-tech-stack/runtime/container-stack
    - /products/categories/devops/container-stack/
    - /products/categories/devops/container-stack.html
sub_collection_render: true
single_level_nav: true
_data: single-level-nav
collection_group: [Singapore Government Tech Stack]
---

### Overview

CStack is part of the Runtime component in the [Singapore Government Tech Stack (SGTS)](/singapore-government-tech-stack/overview){:target="_blank"}. It helps agencies reduce overheads in setting up and maintaining the infrastructure required for DevSecOps so that development teams can focus on building great products. By leveraging CStack, agencies can kickstart their DevSecOps practices and accelerate their journey into agile application development.

### What is CStack?

CStack is a cloud-based container development and hosting platform ([IM8 compliant](/guidelines/standards-and-best-practices/im8){:target="_blank"}) that:

- Leverages features of Kubernetes to automate deployment, and manage & scale containerised applications.
- Integrates with [SHIP-HATS](/products/categories/devops/ship-hats){:target="_blank"} to enable Continuous Integration, Continuous Delivery/Deployment (CICD) and automated application testing.
- Automates application deployment where Git is the single source of truth.
- Provisions and integrates cloud managed services such as object storage and relational databases using a declarative approach.
- Provides dashboards for developers to monitor their system metrics.
- Secures your workloads by providing an integrated set of container security tools.

### Why Should CStack be Adopted?

The benefits of CStack include:

- **Leverage** CStack product team’s collective expertise to manage Kubernetes for you so that your team can focus on building great products.
- **Kickstart** your DevSecOps practices and agile development from day one rather than spending time setting up tools for development yourself.
- **Elevate** developer experience and performance: CStack fills the gap between operations and developers by enabling developers to manage infrastructure through code. CStack also allows agencies to deploy fast and learn from feedback with each release.
- **Stay** secure and compliant with every release: CStack’s infrastructure-as-code and policies-as-code mechanisms offer agencies the ability to enable automated auditing, thereby ensuring that your applications or services stay secure and compliant with every release.

### How Do You Use CStack?

1. Build your applications by maintaining your source code in CStack repositories.
2. Deploy your applications automatically using infrastructure-as-code.
3. Secure your applications using the out-of-box base pipeline that scans your code and container images for security vulnerabilities.

**List of Supported Managed Services (Cloud Managed Services)**

- Simple Storage Service (S3)
- Relational Database Service (RDS)
    - MySQL
	- PostgreSQL
- NoSql Database Service – DynamoDB
- Simple Notification Service (SNS)
- Simple Queue Service (SQS)
- Simple Email Service (SES)
- Redis ElastiCache

** List of Unsupported Managed Services**

- API Gateway (Encouraged to use APEX Cloud)
- Lambda (Kubernetes FaaS under consideration)

CStack is currently in private beta. To receive an invitation, please fill in this [form](https://go.gov.sg/cstack-signup){:target="_blank"}

### Success Stories

The MOE Digital Office leveraged CStack to launch a campaign microsite for Teacher’s Day 2021. The microsite was custom developed using a containerised Wordpress engine that is deployed using CStack.

CStack provided the development team a compliant platform which allowed them to reduce the scope of Vulnerability Assessment and Penetration Testing (VAPT).  The reduced scope then allowed them to complete the VAPT exercise within 1.5 months, despite the small team consisting of only three members.

### Contact Information

For enquiries, email <enquiries_cstack@tech.gov.sg>.

<br/>**Technical Resources**

- [Container Stack user guide](https://docs.developer.tech.gov.sg/docs/container-stack-user-guide){:target="_blank"}