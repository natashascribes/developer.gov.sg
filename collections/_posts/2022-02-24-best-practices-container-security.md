---
title: Best Practices for Container Security
layout: layout-blog
author: Bryan Wang
description: >
  Container security
tags:
  - container
  - Cloud
  - cloud deployment
  - orchestrator
  - container runtime
  - container image
  - containerised system architecture
---

**Containers** are executable software units in which application code is packaged together with relevant components such as libraries and dependencies that allow them to be run **anywhere**, including on the desktop, traditional IT, or the cloud. 

They offer a better way to create, package, and use software across different environments efficiently. As such, organisations are veering towards containers-based applications and away from traditionally heavy loaded virtual machine workloads in the following cases:

![CS_cases](/assets/img/cs_cases.png)

### TYPICAL HIGH-LEVEL CONTAINERISED SYSTEM ARCHITECTURE

![CS_components](/assets/img/cs_architecture.png)

The key components include:
![CS_components](/assets/img/cs_components.png)

### THE IMPORTANCE OF CONTAINER SECURITY
Containers have grown popular among developers due to their reusability and agility in deploying services faster. Consequently, attackers have more chances to exploit insecure containers and their architecture. Here are some of the common weaknesses:
![CS_importance](/assets/img/cs_weakness.png)

### BEST PRACTICES FOR MANAGING CONTAINER SECURITY
When it comes to insecure containers and their architecture, the best security practices should be carried out to prevent, mitigate, and deter threats to the container components. Here are some of the key container components, common attacks and vulnerabilities they are subjected to, and the recommended general best practices to ameliorate the probability of each attack.

![CS_best_practices](/assets/img/cs_bestpractices.png)

Developers play an important role in not only code security but also in enhancing the security posture of applications by hardening containerised applications with the recommended security practices. More detailed practices and guidance are also available in the application container security guide by the National Institute of Standards and Technology (NIST) (SP 800-190). For a head start in secure container deployments, organisations are recommended to explore [Container Stack](https://www.developer.tech.gov.sg/singapore-government-tech-stack/runtime/container-stack) – the SGTS Runtime product. The platform incorporates IM8 compliance and best practices from NIST.

To find out more, contact the team at enquiries_cstack@tech.gov.sg or sign up [here](http://go.gov.sg/cstack-signup). Click [here](https://docs.developer.tech.gov.sg/docs/container-stack-user-guide/#/getting-started/quick-start/) for documented tutorials to get started.
