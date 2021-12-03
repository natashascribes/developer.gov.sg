---
title: 'DECADA Edge Gateway – Facilitates Easy and Secure Onboarding of Sensor Nodes to DECADA'
layout: layout-page-sidenav
category: Sensors and IOT
description: DECADA Edge Gateway is a specially developed edge gateway that improves the performance of DECADA.
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
---

### Overview

Edge gateways are a commonly used architectural component in Internet of Things (IoT) systems. They improve the performance of IoT systems by running functions such as analytics closer to the device and allow a variety of devices to be connected to the Cloud. DECADA Edge Gateway is a specially developed edge gateway that provides these benefits for the Government Internet of Things Tech Stack, also known as DECADA. 

### What is DECADA Edge Gateway?

DECADA Edge Gateway is a product and software solution to onboard new and existing sensor nodes to DECADA easily and securely. It is both a gateway that communicates with DECADA Cloud, and an edge device that communicates with sensor nodes, and processes and aggregates their data. Agencies can make use of its web user interface to allow for various combinations of sensor nodes connection and data processing. It also relays information to sensors that might be unable to store a X.509 certificate or sensors that reside in a secure network.

**Design Overview**

DECADA Edge Gateway software is written on top of open-source QT C++ framework. There are two main parts in the software - Core modules and Plugins. Core modules comprise managers that provides services for plugins to function.

<figure style="text-align: center">
  <img
    src="/assets/img/decada-edge-gateway-fig1.png" width="75%" height="75%" 
    alt="Fig 1: Architecture of DECADA Edge Gateway, consisting of Core modules and Plugins"
  />
  <figcaption>Fig 1: Architecture of DECADA Edge Gateway, consisting of Core modules and Plugins</figcaption>
</figure>

### Why Should DECADA Edge Gateway be Adopted?

DECADA Edge Gateway is an easy-to-use, flexible and powerful solution for connecting devices securely to DECADA Cloud, as well as running data aggregation and analytics pipelines on the edge.

The full list of DECADA Edge Gateway features are as follows:
- Secured connection to DECADA Cloud
- Firmware Over-The-Air (FOTA) update capability (in development)
- Transformation between communication protocols
- Web User Interface configuration
- Data Resiliency
- Data Aggregation
- Data Analytics

### How Do You Use DECADA Edge Gateway?

Depending on your system’s needs, DECADA Edge Gateway software can be deployed on a variety of hardware, ranging from low-power ARM Single-Board-Computer(SBC)s to full-fledged Intel i7 gateways, with the hardware and the residing operating system environment conforming to the Singapore Government's security guidelines.

You can configure DECADA Edge Gateway through its web user interface, which allows for different combinations of sensor nodes connection and data processing. Partners can also develop and contribute their own Edge Gateway plugin modules to connect and process their sensors' data before sending it to DECADA.

DECADA Edge Gateway software supports plugins from its plugin ecosystem. Each individual plugin can be viewed as a single function to achieve a single task. Plugins enable adaptive and fast deployment, reducing the need to redevelop existing software in order to fulfil the unique requirements of different systems. New and existing plugins can be added and replaced without affecting existing Edge Gateway Software instances. Plugins are delayed loaded into DECADA Edge Gateway using the QT Plugins' architecture.

An example of the combination of plugins to achieve data acquisition from various sensor nodes, with data processing and sending to DECADA via a single MQTT channel is shown below.

<figure style="text-align: center">
  <img
    src="/assets/img/decada-edge-gateway-fig2.png" width="75%" height="75%" 
    alt="Fig 2: Combination of plugins to acquire data from various sensors, process the data, and send it to DECADA Cloud"
  />
  <figcaption>Fig 2: Combination of plugins to acquire data from various sensors, process the data, and send it to DECADA Cloud</figcaption>
</figure>

Plugins in the following categories are currently available:

|Category of Plugins|Description|
|---|---|
|I/O|Acquire data from sensors|
|Processing|Transform, decorate, and/or filter metrics|
|Information|Collect information of the system|
|Aggregation|Create aggregate metrics (e.g., mean, min, max, quantiles)|
|Web|Provide web interfaces for configuration or visualisation|
|Analytics|Perform video and data analytics|

### Success Stories

DECADA Edge has been successfully deployed and is running in various projects including Smart Offices, [Smart Gym](https://www.developer.tech.gov.sg/technologies/sensor-platforms-and-internet-of-things/smartgym){:target="_blank"} and Smart Lamppost (CETRAN).

### Contact Information

If you are interested to learn more and get started on DECADA, please email <tony_varghese@tech.gov.sg>.

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
