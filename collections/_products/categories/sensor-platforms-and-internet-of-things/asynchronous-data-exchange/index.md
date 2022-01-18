---
title: Asynchronous Data Exchange (ADEX) – Empowering a Smart Nation
layout: layout-page-sidenav
category: Sensors and IOT
sub_collection_render: true
description: >
  ADEX is a centralised data exchange platform for the whole of government (WOG) that allows for seamless data sharing and event streaming.
---

### Overview

Asynchronous Data Exchange (ADEX) is a centralised, self-service data exchange and event streaming platform for WOG and local business entities to share and receive lightweight, real-time data securely.

ADEX originated as the Sensor Data Exchange (SDX), part of the Smart Nation Sensor Platform (SNSP). Currently, ADEX has broadened its scope to support the exchange of both sensor and non-sensor data. In this context, non-sensor data may also refer to processed sensor data (i.e. raw sensor data after processing/analytics). For example, mall footfalls are considered as raw sensor data (i.e. how many steps counted at Level 1 of a shopping centre). After processing/analytics, the data can be defined as "Level 1 is at 80% capacity", which can be considered as non-sensor data.

ADEX is part of the [Singapore Government Tech Stack (SGTS)](https://www.developer.tech.gov.sg/singapore-government-tech-stack/overview/index.html). It is positioned as one of the Communications components, along with [API Exchange (APEX)](https://www.developer.tech.gov.sg/technologies/data-and-apis/apex.html) it is part of the Base Layer of SGTS.

ADEX is hosted on the [Government Commercial Cloud (GCC)](https://www.developer.tech.gov.sg/technologies/infrastructure-and-hosting/government-commercial-cloud.html). It can support an exchange of data that is up to the RESTRICTED classification and considered NON-SENSITIVE.

### What is ADEX?

ADEX provides WOG with real-time, asynchronous, fire-and-forget data transfer. Agencies can look forward to making better, real-time decisions based on up-to-date information with ADEX.

ADEX enables government agencies to publish and subscribe to real-time data using a self-service portal in GCC, both on the GCC Internet and GCC Intranet.

Agencies can either connect via Intranet through the SGWAN interface or via MPLS from their private network. Agencies can use ADEX to discover and share event data such as status updates or event streams in real-time, across Internet and Intranet. Subscribers will receive updates as soon as the events are published. Publishers can choose who will be able to subscribe.

This diagram shows the components of ADEX and its ability to distribute real-time data across networks. More details on ADEX can be found in [this video](https://d3uzjhjcl6zsbz.cloudfront.net/ADEX-overview.mp4).

<figure style="text-align: center">
  <img
    src="/assets/img/technologies/adex-how-it-works.png" width="100%" height="100%" 
    alt="Fig 1: How ADEX works"
  />
  <figcaption>Fig 1: How ADEX works</figcaption>
</figure>

### Differences between APEX & ADEX

| **APEX**                                                                                                                                   | **ADEX**                                                                                                                                       |
| :----------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **API gateway**<br>• REST and SOAP<br>• Up to Confidential                                                                                 | **Message-queue + stream hub**<br>• MQTT and Kafka<br>• Up to Restricted                                                                       |
| **On-Demand**<br>• Consumers call API when needed<br>• Orchestration and transformation supported<br>• Retry-able                          | **Event-driven**<br>• Consumers get informed when Provider has new data<br>• Stream processing (upcoming feature in ~Q1 FY22)<br>• Replay-able |
| **Synchronous**<br>• Request-Response model<br>• Provider responds to acknowledge request from Consumer<br>• Immediate feedback of receipt | **Asynchronous**<br>- Response is decoupled<br>• Provider doesn't need response from Consumer<br>• No immediate feedback of receipt            |

### Why Should ADEX be Adopted?

**Asynchronous data exchange (ADEX) for WOG**<br>
ADEX is a platform for real-time, asynchronous fire-and-forget data transfer.

**Provides data sharing marketplace**<br>
With ADEX’s data marketplace, Agencies can browse all datasets across WOG for sharing.

**Offers central exchange service to facilitate sharing**<br>
Agencies can publish and subscribe to real-time data using a self-service portal along with workflow engine. This helps to secure data across network zones, eliminating diverse protocols and interfaces.

**Creates catalyst for discovery and innovation**<br>
Agencies can enjoy a culture of sharing for collaboration and innovation across the public service, and potentially discover use cases for new services.

### How Do You Use ADEX?

Your Agency can use ADEX (as a mechanism of data transfer instead of direct connect, SFTP or via API) by enrolling as a Publisher to provide data or Subscriber to consume data on this centralised, self-service data exchange and event streaming platform.

ADEX will be particularly beneficial if you need real-time sharing and across agencies, for instance, if your Agency’s data is required by more than one agency, a one-time setup is all that is required for the Publisher. Only the other subscriber will need to connect to ADEX. Thereafter, the Publisher will just need to approve in portal for subscriber to use the topic.

### Getting Started

Getting started with ADEX is simple. All you must do is follow these steps:

1. Get in touch with ADEX Team at sense@tech.gov.sg to discuss your agency’s use case, operational requirements, intention to enroll as publisher and/or subscriber on ADEX, and implementation timeline.

2. Sign the ADEX Services Sheet (SS), which together with GovTech's Universal Service Terms (UST) for Public Sector Entities, form the Memorandum of Understanding (MOU). (The SS and UST will be shared upon request after the initial discussion.)

3. Fill the ADEX Service Request Form to submit IP addresses for IP Whitelisting. (The form will be shared upon request after the initial discussion.)

4. Create an account with ADEX [here](https://sdx.sensors.gov.sg/auth/signup;app=sdx/create-account) via an Internet-enabled PC or laptop. Ensure that you register with a valid government agency’s email address.

5. Upon creating an account, the system will send a verification email to the email address you provided.

6. Once you are successfully signed in, create a Team and invite team members to explore the portal together with agency members.

7. Click on ‘Create’ to start a new Project and add a topic to begin publishing and/or subscribing to data for that topic#.

8. Set up MQTT connection by using a MQTT client (e.g. MQTTBox can be used but for testing only) to establish the mandatory connection before Publisher can start publishing data or Subscriber can start consuming data for that topic.

To learn how to set up MQTT connections on ADEX, click [here](https://d3uzjhjcl6zsbz.cloudfront.net/how-to-set-up-mqtt-connections-on-ADEX.mp4).

A video guide on how to get started with ADEX can be found [here](https://d3uzjhjcl6zsbz.cloudfront.net/how-to-get-started-on-ADEX.mp4).

### What is a Topic?

1. A topic is a dataset that is published by a data provider on ADEX. A publisher would publish a topic on ADEX, and a subscriber would subscribe to a topic on ADEX.

2. Examples of sensor-related topics are rainfall volume, air temperature, relative humidity, surface wind speed and surface wind direction.

3. Examples of non-sensor related topics are traffic congestion, road accident alerts, people density by area/building and bus arrival info.

### What Type of Messages Can I Send Across?

The content inside each MQTT message is known as “payload”.

ADEX is capable of transferring text-based payloads and binary payloads. An example of binary payload is shown below.

Each payload should be lightweight and less than 1 MB.

<figure style="text-align: center">
  <img
    src="/assets/img/technologies/adex-payload.png" width="100%" height="100%" 
    alt="Fig 2: ADEX payload"
  />
  <figcaption>Fig 2: ADEX payload</figcaption>
</figure>

### Success Stories

ADEX is currently live and serving the needs of Government agencies. Some examples include:

- MOH and HTX to publish enforcement data for COVID-19 social distancing measures to participating agencies.
- SDC to publish and subscribe to SafeEntry dataset for crowd control at the various recreation nodes in Sentosa.
- NEA to publish environmental topics like rainfall, temperature, wind speed, wind direction, wind gust speed, wind gust direction, PSI and PM2.5.

### What's Next?

The ADEX team plans to incorporate event streaming service into the platform ~Q1 FY22.

ADEX has extended its fee waiver trial till end of FY21 (31 March 2022) and will commence charging for its subscription service, starting from 1 April 2022.

If your agency has real-time data sharing needs across agencies, ADEX could be a suitable platform for your use case. Alternatively, if you require another agency's data, sensors or non-sensors, we can help to broker.

### Contact Information

For enquiries, email <sense@tech.gov.sg>.
