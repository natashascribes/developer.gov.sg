---
title: "DECADA Cloud – The Singapore Government’s Secure IoT platform"
layout: layout-page-sidenav
category: Sensors and IOT
sub_collection_render: true
single_level_nav: true
_data: single-level-nav
redirect_from:
  - /products/categories/sensor-platforms-and-internet-of-things/decada-cloud/
  - /products/categories/sensor-platforms-and-internet-of-things/decada-cloud.html
  - /technologies/sensor-platforms-and-internet-of-things/decada-cloud/
  - /technologies/sensor-platforms-and-internet-of-things/decada-cloud.html
description: DECADA Cloud is the Singapore Government’s secure IoT platform for device management and sensor data analysis.
bios:
  - name: Toh Kian Hui, Technical Lead
    img_src: iot-toh-kian-hui.png
    desc: |
      Kian Hui is a senior systems engineer and the team lead for DECADA. He finds joy in implementing software solutions that make a positive impact on people.

  - name: Tony Varghese, Product Manager
    img_src: iot-tony-varghese.png
    desc: |
      Tony is the Product Manager for DECADA. He joined GovTech in Nov 2018 with the ambition of being part of the team that builds Singapore’s Smart Nation efforts. 
      Aside from his work commitments, Tony enjoys playing cricket.

  - name: Shawn Ng, Systems Engineer
    img_src: iot-shawn-ng.png
    desc: |
      Shawn is a DevOps engineer working on DECADA’s infrastructure and development. Shawn enjoys getting swole in his spare time when he's not in front of the terminal.

  - name: Teo Si-Yan, Systems Engineer
    img_src: iot-teo-si-yan.png
    desc: |
      Si-Yan is a full-stack web developer who designs and builds custom applications in DECADA. She enjoys learning new things and has many hobbies including baking, 
      calligraphy and board games.
---

### Overview

An IoT deployment requires a means for devices to be managed, and for sensor data to be stored and analysed. DECADA Cloud is the Singapore Government’s secure IoT platform that provides these features and more, allowing us to rapidly build and operate IoT systems on it.

### What is DECADA Cloud?

DECADA Cloud is a centralized, multi-tenant cloud platform for the Singapore Government’s IoT systems. It serves as the digital infrastructure of the IoT stack, providing data aggregation and device management services. It also provides user-facing services, such as dashboarding and report generation to automate IoT operations.

DECADA’s core features include:

- Device Enrollment & Asset Management
- Data Acquisition through multiple protocols
- Event Triggers & Alerts
- Data Analytics
- APIs and SDKs

DECADA Cloud’s APIs and SDKs can also be used by third parties to further build customized applications to suit agencies' use cases.

### Why Should DECADA Cloud be Adopted?

DECADA Cloud is a standardised IoT cloud platform for the whole of government. It is designed to be vendor-agnostic and compliant with government security policies. At the same time, it is flexible enough to handle diverse use cases - such as environmental monitoring, smart facilities management, and large-scale device deployments. This flexibility allows DECADA to be customised to any sort of application.

Because DECADA comprises modular reusable components, standard applications can be quickly productionized, and with standard interfaces, further custom logic or third-party services can be designed in order to meet the needs of the end-users.

### How Do You Use DECADA Cloud?

You can use DECADA Cloud in conjunction with DECADA Embedded or Edge, or on its own with a cloud-to-cloud connection.

### Success Stories

DECADA Cloud is used in nearly all of SIOT’s deployments. Some notable use-cases deployed today that exploit the full functionality of DECADA Cloud are the SmartGym and the SafeEntry Gateway projects.

[SmartGym](/products/categories/sensor-platforms-and-internet-of-things/smartgym){:target="\_blank"} uses DECADA Cloud to collect and store user data from sensors located in SportSG gyms. OTA updates are also pushed to deployed Edge devices through the Cloud.

The [SafeEntry Gateway](/products/categories/digital-solutions-to-address-covid-19/safeentry){:target="\_blank"} pushes token data to DECADA Cloud, and relies on integrations within DECADA Cloud with other GovTech services to ensure that up-to-date information is always available to enable smooth contact tracing efforts.

### Contact Information

If you are interested to learn more and get started with DECADA, please email <tony_varghese@tech.gov.sg>.

### Meet the Team!

<div class="card-grid-container grid-25rem">
  {% for bios in page.bios %}
  {% assign img_url = "/assets/img/" | append: bios.img_src %}
  <div class="sgds-card">
    <div class="sgds-card-content">
      <img style="float: left; margin-right: 20px;" src="{{ img_url }}" alt="{{ bios.name}}">
      <p><strong>{{ bios.name}}</strong><br>
        {{ bios.desc }}
      </p>
    </div>
  </div>
  {% endfor %}  
</div>
