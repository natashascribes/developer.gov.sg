---
title: GovWallet – Reimagining Government Disbursements
layout: layout-page-sidenav
category: Platform
sub_collection_render: true
single_level_nav: true
_data: single-level-nav
redirect_from:
  - /products/categories/platform/govwallet/
  - /products/categories/platform/govwallet.html
  - /technologies/platform/govwallet/
  - /technologies/platform/govwallet.html
description: GovWallet is a payment facilitator between agencies and beneficiaries.
bios:
  - name: Patricia Zhao, Product Manager
    img_src: supplyally-pat-zhao.png
    desc: |
      Pat leads the team in developing solutions that help multiple Government agencies and non-profit partners in their distribution programmes.

  - name: Wynn Chen, Software Engineer
    img_src: supplyally-wynn.png
    desc: |
      Wynn doesn’t mind developing and kick-starting projects that he might be unfamiliar with. He likes spending his time cafe hopping and reflecting.

  - name: Te(Ting) Sze Ying, Software Engineer
    img_src: supplyally-szeying.png
    desc: |
      Sze Ying aims to create software that is usable and maintainable. In her free time, she volunteers with various organisations to make education accessible.

  - name: Satoshi Hayashi, Delivery Manager
    img_src: supplyally-satoshi.png
    desc: |
      Satoshi works with the team to achieve smooth delivery of the various product rollouts.

  - name: Yong Jia Jie, Software Engineer
    img_src: supplyally-jiajie.png
    desc: |
      Jia Jie is interested in learning new things and developing solutions that are extensible and efficient. He is a lover of keyboards and keyboard-related items.

  - name: Sebastian Quek, Tech Lead / Software Engineer
    img_src: supplyally-sebastian.png
    desc: |
      Sebastian strives to design technical solutions that are elegant, scalable, maintainable, and satisfies the needs of citizens and Government agencies alike.

  - name: Auron Siow, Software/Quality Engineer
    img_src: supplyally-auron.png
    desc: |
      Auron contributes to both development and quality aspects of product building. He is able to switch between the two roles to help the team meet its goals.

  - name: Immanuella (Imma) Lim, Software Engineer
    img_src: supplyally-immanuella.png
    desc: |
      Imma likes to build stuff and learn how to create better solutions. She has a knack for teaching and is often seen sharing her knowledge with the team.

  - name: Koh Kai Hong, DevOps Engineer
    img_src: supplyally-kaihong.png
    desc: |
      Kai Hong is a cloud-native citizen who is tasked with building castles in the sky. He enjoys developing reliable and scalable solutions for smooth operations.

  - name: Dalson Tan, Software Engineer
    img_src: supplyally-dalson.png
    desc: |
      Dalson aspires to develop creative, high-quality, and scalable solutions to solve real-world problems. He enjoys working on projects that support social causes.

  - name: Ryan Goh, DevOps Engineer
    img_src: supplyally-ryan.png
    desc: |
      Ryan is interested in reliably and frequently getting code to product. He is also interested in using cloud infrastructure to build scalable and reliable systems.

  - name: Dickson Tan, Software Engineer
    img_src: supplyally-dickson.png
    desc: |
      Dickson loves building software that delight users. His day doesn't begin before his morning latte.

  - name: Eida Tan, UX Designer
    img_src: supplyally-eida.png
    desc: |
      As a young child, Eida had a strong affection for Playmobil toys. She would role-play with them in various settings, from immigration checkpoints to restaurants. These days she gets to facilitate and work with others to improve users’ experience across different touchpoints.

  - name: Visalakshi Chidambaram, Quality Engineer
    img_src: supplyally-visa.png
    desc: |
      Visalakshi loves to challenge a piece of working code to find bugs and crash the system before it reaches the end-user, so that they can have a smooth experience.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/wZTU7YibAVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Overview

GovWallet is a module integration that was developed by GovTech’s Government Digital Services (GDS) team to provide an alternative means to distribute government pay-outs. Currently, agencies may develop individual systems to conduct their respective distribution exercises. Beneficiaries may then find themselves going through multiple touchpoints, which can be tedious.

To prevent isolated systems, GovWallet was developed as an internal pilot project at GovTech which enabled GovTechies to credit staff benefits into GovWallet and transfer them to their PayNow accounts or use them at merchants that accept PayNow e-Payment.

Since then, GovWallet has partnered local banks and agencies to become a payment facilitator between agencies distributing pay-outs and beneficiaries who are receiving them.

### What is GovWallet?

GovWallet facilitates distribution of pay-outs from agencies to beneficiaries. It allows agencies to maintain control of their distribution exercises and enables beneficiaries to track their pay-out and spending history via the [LifeSG](https://www.life.gov.sg){:target="\_blank"} app. A key feature of GovWallet is that it enables agencies to select specific merchants and control where pay-outs can be used.

By leveraging local banks’ PayNow e-Payment ecosystem, GovWallet is able to perform instant transfers from agencies to beneficiaries. For beneficiaries without bank accounts and mobile devices, the GovWallet team has partnered with the Central Provision Fund Board (CPFB) and OCBC Bank to allow beneficiaries to withdraw their pay-outs from OCBC’s ATMs.

### Why Should GovWallet be Adopted?

GovWallet serves to improve the user experience as the single wallet to view and use the available pay-outs from various agencies. It mitigates confusion on how much pay-out is received by beneficiaries, while enhancing security without the need to click on potentially suspicious SMSes.

Furthermore, the 164,000 merchants already onboarded with PayNow, such as e-commerce platforms like Shopee and Lazada, and charity organisations like Giving.sg, can enjoy lower barrier of entry if they wish to participate in government disbursement programmes.

### How Do You Use GovWallet?

GovWallet can be accessed using official government apps, such as LifeSG. On the LifeSG app, you can scan the SGQR code or PayNow QR to pay the merchant. More government apps are in the pipeline to use GovWallet.

For agencies interested in onboarding GovWallet, email <patricia_zhao@tech.gov.sg>.

### Success Stories

GovWallet has worked with CPFB to administer the Workfare Income Supplement scheme for more than 2,500 unbanked beneficiaries, thus removing the need for cheque issuance. The beneficiaries can withdraw their government pay-outs in the form of cash at the OCBC ATMs or spend them as eCredits using the LifeSG app.

Other agencies have expressed interest to adopt GovWallet for the management of household and social development, sector-specific relief, and staff recognition programmes. More details will be released in due time.

### What's Next?

The GovWallet team is looking to expand beyond the PayNow e-Payment ecosystem, to leverage the NETs payment ecosystem which includes more than 120,000 acceptance points in Singapore across 42,000 merchants.

### Contact Information

For general enquiries, email <govwallet_support@tech.gov.sg>.

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
