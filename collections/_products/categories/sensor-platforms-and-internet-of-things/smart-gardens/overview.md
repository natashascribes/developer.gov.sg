---
title: Smart Gardens – Deploying Digital Technologies for Better Park Management
layout: layout-page-sidenav
category: Sensors and IOT
sub_collection_render: true
single_level_nav: true
_data: single-level-nav
redirect_from:
  - /products/categories/sensor-platforms-and-internet-of-things/smart-gardens/
  - /products/categories/sensor-platforms-and-internet-of-things/smart-gardens.html
  - /technologies/sensor-platforms-and-internet-of-things/smart-gardens/
  - /technologies/sensor-platforms-and-internet-of-things/smart-gardens.html
description: Smart Gardens at Gardens by the Bay deploys digital technologies to better manage park operations, improve visitor safety and enhance park experience.
bios:
  - name: Tan Chin Hiong, System Architect
    img_src: smart-gardens-tan-chin-hiong.png
    desc: |
      Chin Hiong is a system architect at GovTech. Chin Hiong graduated from the National University of Singapore with a PhD in Electrical & Computer Engineering. He has over 15 years of experience in systems engineering and Research and Development (R&D), including the fields of neural networks, computer vision and evolutionary algorithms. Chin Hiong is passionate about harnessing technology to improve people’s lives and inspiring the next generation of engineers.

  - name: Christopher Tong, Product Manager
    img_src: smart-gardens-christopher-tong.png
    desc: |
      Christopher is an Engineering Product Manager at GovTech. Chris graduated with an undergraduate degree in Operations Research and a Masters of Science in Civil Engineering from UC Berkeley. A former Smart Nation Resident Fellow at GovTech, his current areas of focus include infrastructure, IOT, and lighting systems. He is interested in all things to do with cities and urbanisation.

  - name: Sufie Luo, Software Engineer - Backend Developer
    img_src: smart-gardens-sufie-luo.png
    desc: |
      Sufie is a software engineer. Sufie worked at Envision Digital and she graduated from the Southeast University of China with a Masters Degree in Computer Science and Technology. Sufie specialises in distributed middleware and software development. She enjoys turning technology into products that make life better.

  - name: Soong Yi Ning, Frontend Developer
    img_src: smart-gardens-soong-yi-ning.png
    desc: |
      Yi Ning joined GovTech in 2020 after graduating from Singapore Institute of Technology, drawn in by a desire to use technology for public good. She applies her expertise to her personal life by developing and using various applications for leisure.
---

### Overview

Smart Gardens at Gardens by the Bay was launched in November 2020. It is an integrated system of lampposts, sensors, and robots developed as part of the Smart Nation initiative to ensure that Singapore remains an outstanding global city. The Smart Nation initiative aims to create new opportunities in a digital age, and transform the way people live, work and play. The goal of the Smart Gardens is to utilise networked sensors to collect abiotic and biotic information that can be used to improve park operations, ensure visitor safety and improve the overall park experience.

### What are Smart Gardens?

Smart Gardens aims to streamline processes, enable smart deployment of manpower through data insights, and improve service quality by leveraging artificial intelligence (AI) and machine learning (ML).

To achieve these goals, Smart Gardens will deploy digital technologies in the areas of plant monitoring and irrigation, lake management, integrated security, lighting, and facilities management. In the aspect of irrigation, sensors will provide analytics on soil moisture and lake health and optimise plant maintenance by integrating with the existing irrigation system. Next, in the areas of lighting, smart lampposts will be implemented to address preventative maintenance and energy savings. Next, autonomous drones will also be employed to inspect the irrigation pipes of the 18 Supertrees. The drone is expected to cut the current three-person job down to a single person. The drones can also be applied to other inaccessible areas such as the 3,800 sqm plant-clad mountain in the Cloud Forest. Finally, other technologies include automated people counting sensors at the entrances for crowd management, smart waste bins to reduce the size of the cleaning crew and a centralised command and control centre to aid in security.

### Why Should Smart Gardens be Adopted?

While Smart Gardens will eventually enhance the experience for visitors, it is developed primarily to assist employees at Gardens by the Bay with the operations. There is also an expected cost savings of \$2.3 million a year when the first phase of the Smart Garden vision is implemented in 2022. In terms of productivity, the company will save about 14,700 man-days. Finally, it reduces its reliance on foreign labour through automation, enables smarter deployment of a skilled local workforce using data, and improves service quality through AI and ML.

### What's Next?

Currently, the Sensors and IoT (SIOT) team at GovTech is working on an operation mobile app to onboard devices such as light controllers, gateways, and sensors to **De**vice management, **C**ontrol **A**nd **D**ata **A**cquisition system (DECADA) cloud for employee usage. The team is also looking to develop a commercial app to enhance visitors’ experience.

The SIOT team is also working to develop IoT systems for the Whole-Of-Government (WOG) and integrate the Gardens by the Bay IoT systems into a DECADA system. This is a multi-tenant IoT Cloud platform that provides support for device management, dashboard, controls and data acquisition capabilities.

### Contact Information

For enquiries, email <Christopher_TONG@tech.gov.sg>.

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
