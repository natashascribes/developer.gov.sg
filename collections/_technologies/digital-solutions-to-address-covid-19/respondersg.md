---
title: ResponderSG – A Lifesaving App From the Community, For the Seniors
layout: layout-page-sidenav
category: Digital Solutions to Address COVID-19
description: ResponderSG is a mobile app that alerts members of the public to nearby calls for assistance from seniors living alone.
bios:
  - name: Joy Ng, Senior UX Designer
    img_src: pab-joy-ng.png
    desc: |
      Joy is a UX Designer working on GovTech Assisted Living Ecosystem (GALE). Prior to GovTech, she worked in Fintech and academia. She has interests in designing crowdsourcing platforms and has worked on projects such as OneService App and ResponderSG App. She holds a Masters in Communications and New Media from NUS.
      
  - name: Kelvin Lim, UX Designer
    img_src: pab-kelvin-lim.png
    desc: |
      Kelvin is a UX Designer who worked on the research and design of the PAB. He graduated from LASALLE College of the Arts, with an honours degree in Design Communication. Kelvin is also a trained and detail-oriented graphic designer. In his free time, Kelvin likes to tinker with mechanical keyboards and get his hands dirty from collecting rare house plants.

  - name: Adrian Tan, Delivery Manager
    img_src: pab-adrian-tan.png
    desc: |
      Adrian Tan is a Product Lead and Delivery Manager at GovTech. He has over eight years of experience in Product Management, Business Analyst, Scrum Master, and Product Owner roles. Before joining GovTech, he was a start-up founder, Product Manager at a development house, and Product Owner/Product Manager at Municipal Services Office. Adrian specialises in facilitating inception workshops, managing multiple scrum teams, and mentoring new Delivery Managers. He is deeply interested in using technology to solve complex real-world problems.
---

### Overview

With fewer in-person social activities due to the COVID-19 pandemic, seniors living alone are at higher risk of serious incidents such as falls. Believing that enlisting help from the members of public is the optimal and most practical way to handle urgent cases involving seniors, GovTech developed ResponderSG that aims to build a resilient community with accessible help for seniors and others at risk by enlisting help from volunteers in the community. 

ResponderSG was developed over a span of 5 months. In the early research phase, a kick-off workshop was conducted with stakeholders to ideate and come up with the app features. After estimating the effort required to develop the app the product team decided to adopt agile methodology to work together with the stakeholders, conducting meetings with them every two weeks. After further security scanning and user acceptance testing, the pilot took place over 7 months – between October 2019 and May 2020 – involving 33 volunteers including a few GovTechies.

### What is ResponderSG?

ResponderSG is a mobile app for the public that alerts nearby responders equipped with life-saving skills for urgent cases such as cardiac arrest and falls. As part of [Government Assisted Living Ecosystem (GALE)](https://www.developer.tech.gov.sg/technologies/digital-solutions-to-address-covid-19/government-assisted-living-ecosystem){:target="_blank"}, an ecosystem built to support the assisted living infrastructure in Singapore, ResponderSG leverages the existing ecosystem to provide an end-to-end solution for skilled responders to attend to them.

As time is of the essence for urgent cases, ResponderSG provides timely help based on the proximity of the responders to the case venue. Beyond responding to urgent cases, responders also receive alert notifications of less time-sensitive cases such as delivery tasks and errands for seniors.

<figure style="text-align: center">
  <img
    src="/assets/img/respondersg-fig1.png" width="30%" height="30%" 
    alt="Fig 1: ResponderSG"
  />
  <figcaption>Fig 1: ResponderSG</figcaption>
</figure>

### Why Should ResponderSG be Adopted?

The ResponderSG team believes that the involvement of citizens is core to the Smart Nation initiative. Other app features that provide ease of use and seamless operation include:

-	Broadcasting SMS messages to all responders.
-	Notifying responders of nearby cases. 
-	Tracking of responders’ real-time location.
-	Record of responders’ previous case notes from past cases. 

### How Do You Use ResponderSG?

**For seniors**:

[Personal Alert Buttons (PABs)](https://www.developer.tech.gov.sg/technologies/sensor-platforms-and-internet-of-things/personal-alert-button.html){:target="_blank"} are being installed in the homes of seniors. When the PAB is activated, a notification will be sent to [DECADA](https://www.developer.tech.gov.sg/technologies/sensor-platforms-and-internet-of-things/decada-iot-tech-stack){:target="_blank"}. DECADA is used to manage the button devices and route alerts to the relevant Senior Activity Centre (SAC) or telecare operators to handle the case. 

A ping will then be sent from DECADA to the GALE Case Management System (CMS) which is an interface to connect the case to the SAC and telecare operators. The operators can see the live location of responders. Upon which, the operators will ascertain the details of the case and direct it to appropriate responder on ResponderSG or relevant authorities.

<figure style="text-align: center">
  <img
    src="/assets/img/respondersg-fig2.png" width="40%" height="40%" 
    alt="Fig 2: GALE Case Management System"
  />
  <figcaption>Fig 2: GALE Case Management System</figcaption>
</figure>

**For responders**:

Responders will be notified via the app when a case arises nearby and they will be able to pick it up and view the senior’s details. Once the case is accepted, the responder will be able to view the detailed address along with guided map view and block layout to pinpoint the exact location of the senior, alongside a timer to display the time that has elapsed since. After arriving at the senior’s residence, the responder will need to press “I’ve arrived” on the app. 

After checking on the condition of the senior and ascertaining the extent of urgency, the responder can either call 995 immediately, or call the operator in cases of uncertainty. Under other circumstances where the senior is not in need of urgent assistance, they can press “I’ve left” after making sure that assistance is no longer required.

<figure style="text-align: center">
  <img
    src="/assets/img/respondersg-fig3.png" width="40%" height="40%" 
    alt="Fig 3: Responders can leave case notes on the app after closing a case"
  />
  <figcaption>Fig 3: Responders can leave case notes on the app after closing a case</figcaption>
</figure>

### What's Next?

Although the pilot project ended in May 2020, the ResponderSG team sees value in having a platform where community heroes residing in our neighbourhoods can reach out and assist the vulnerable. Hence, the team welcomes any opportunities for use cases for our community volunteers to be activated and collaborations with other interested parties.

### Contact Information

For interested parties looking to collaborate and for other queries, please email <gale_support@tech.gov.sg>.

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
