---
title: ePAD – An Enabling Photography & Videography Digital System
layout: layout-page-sidenav
category: Sensors and IOT
description: >
  ePAD is an assistive digital system that enable Persons with Disabilities (PWDs) to perform professional photography and videography services.
bios:
  - name: Ong Lay Teen, Team Lead, Lead R&D/Systems Engineer
    img_src: ecanvas-ong-lay-teen.png
    desc: |
      Lay Teen is the team leader of the Enabling (Assistive) Tech Team and a Lead R&D/Systems Engineer at GovTech.  She has over 20 years of international research and development experience in the industry and academia. Her specialisation includes advanced algorithm development, signal processing and RF/Microwave Engineering.  She received her Ph.D. in Engineering from Cardiff University, UK, Master of Science from the National University of Singapore (NUS) and Degree in Engineering from Nanyang Technological University (NTU). Lay Teen is passionate about learning, exploring, and sharing advanced technologies from/with research institutions and industry.  Her current focus is on leading the team in developing Enabling/Assistive Technology that enable people of special needs to live independently and have a more fulfilling life.
      
  - name: Tan Yi Ming, Associate R&D Engineer
    img_src: ecanvas-tan-yi-ming.png
    desc: |
      Yi Ming graduated from NTU with a degree in Electrical and Electronic Engineering. He specialises in Intelligent Systems & Control Engineering. Yi Ming is passionate about developing assistive solutions that can help empower and enable users with special needs to live their lives independently.
---

### Overview

The Enabling Photo/Video-graphy Digital System (ePAD) was developed to address the pain points of users with limited upper limb mobility.

Upon visiting [Cerebral Palsy Alliance Singapore (CPAS)](https://cpas.org.sg/){:target="_blank"}, it was discovered that users struggled with photography applications on the computer tablet. Apart from being unable to stabilise the tablet during photographs, users also found it difficult to access the touch screen of the tablet despite the use of a tripod.

This inspired the development of ePAD - an accessible mounting platform that pans and tilts computer tablets, providing Persons with Disabilities (PWDs) with the independence and autonomy to use the tablet effectively.

Due to the COVID-19 pandemic, the ePAD team had to pipeline the project as an ad hoc project. Restrictions caused delays in development and trials at CPAS as well. With the persistence of the ePAD team, the first ePAD prototype trial was successfully conducted at CPAS in August 2020.

### What is ePAD

ePAD is an assistive digital technology that enables PWDs to carry out photography and videography professionally despite limited mobility in their upper limbs. 

Users can access and stabilise their tablets to capture proper photos, via an accessible mounting platform. The platform allows for panning and tilting of the tablet, providing greater mobility and independence for PWDs in using the software photography app on the tablet.

<figure style="text-align: center">
  <img
    src="/assets/img/epad-fig1.png" width="75%" height="75%" 
    alt="Fig 1: ePAD"
  />
  <figcaption>Fig 1: ePAD</figcaption>
</figure>

### Why Should ePAD be Adopted?

Upper mobility limitations can hinder one’s ability to hold a camera or even use software applications for editing.

ePAD was designed with inclusiveness in mind, with the belief that technology should be used to empower minority groups in society that are often overlooked. As Singapore digitalises and progresses as a nation, it is crucial for assistive technologies to be implemented as well.

ePAD serves as an assistive technology for PWDs to overcome their physical limitations and pursue their creative needs independently.

### How do You Use ePAD?

The ePAD consists of a digital mounting platform for tablets where users can control its movement with just the press of a button. 

**Direction Buttons**<br>
Equipped with four buttons differentiated by colour and “Up”, “Down”, “Left”, and “Right” labels, users can pan the tablet camera accordingly.

**Designated buttons for camera activation**<br>
The ePAD also has buttons to capture photos, as well as one for managing videoing on the tablet.

After moving the tablet to a desired angle, users can press the camera-designated button to snap a photo. Alternatively, users who wish to take a video can do so by pressing the video-designated button once and pressing it once more to stop videoing. 

### Success Stories

The team’s continuous efforts coupled with strong support from GovTech and CPAS’ staff resulted in the successful delivery of the first ePAD prototype trial in August 2020. CPAS subsequently indicated interest for more ePAD devices to be brought in for clients’ usage, indicating the trial’s success. With feedback on its design from the first trial, the team delivered a new and improved version to CPAS a second trial in July 2021.

The ePAD prototype has also received interest from [Blk.sg](https://blk.sg/){:target="_blank"}*, a social enterprise that volunteers teaching professional photography at CPAS. ePAD will be deployed at Blk.sg’s events such as “Disabled can Volunteer – as an inclusive photographer”, which is a ground-up movement organised with the [Singapore Kindness Movement (SKM)](https://www.kindness.sg/){:target="_blank"}. The inaugural event at ChangiSimei, expected to take place in early December 2021, commemorates initiatives that pay tribute to front line warriors by helping them to take family portraits. 

CPAS, among other beneficiaries of ePAD, will be involved in the event as part of Blk.sg’s efforts to imbue students with the necessary skills, knowledge, and attitude. Despite having cerebral palsy, students can gain social skills and showcase their creative talents via ePAD’s enabling system.

*_Blk.sg is undergoing a revamp and will be back online by 01 December 2021._

### What's Next?

Different PWDs have different mobility and concerns. The ePAD is thus not a one size fits all solution and will require the team’s continuous efforts in ensuring it caters to varying needs.

The team is also working on eCamera, a software application that aims to be more accessible than current camera apps available on the market for tablets. eCamera alongside the ePAD, serves as an additional assistive tool for PWDs to further their creative capabilities. It has received positive feedback from CPAS and the social enterprise as well.

Both the ePAD and eCamera will be showcased as a complete and integrated assistive system in December 2021. It will be presented during the “Disabled can Volunteer – as an inclusive photographer” event.

### Contact Information

For enquiries, email <info@tech.gov.sg>. 

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

Intern:

- Li Cheng Li, Ngee Ann Polytechnic, Diploma in Information Technology 
