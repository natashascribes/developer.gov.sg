---
title: SGFinDex –  World's First Public Digital Infrastructure for Retrieval and Consolidation of Data
layout: layout-page-sidenav
sub_collection_render: true
description: >
  A public digital infrastructure driven by public-private sector collaboration, consent-based data-driven innovation and national digital identity.
bios:
  - name: Kendrick Lee, Director, Trusted Data & Services
    img_src: sgfindex-kendrick-lee.png
    desc: |
      Kendrick Lee is the Director of National Digital Identity (NDI) programme at the Government Technology Agency of Singapore (GovTech). NDI is one of eight strategic national projects that drives Singapore’s Smart Nation vision.
      <br><br>In his role, Kendrick oversees product management of Singpass application programming interfaces (APIs) as well as digital payments; with the aim of enabling secure and seamless transactions for residents, businesses and government agencies.
      <br><br>He also serves industry as adjunct lecturer of digital product strategy at the Institute of Systems Science (ISS-NUS), digital identity expert group member at the Biometrics Institute, and technical working group member of “Trustworthy Digital Infrastructure for Identity Systems” project with the Alan Turing Institute.


  - name: Daryl Low, Assistant Director, Trusted Data & Services
    img_src: sgfindex-daryl-low.png
    desc: |
      Daryl Low is Assistant Director of Trusted Data & Services at the Government Technology Agency of Singapore (GovTech). In this position, he oversees product management of national digital identity’s (NDI) Singapore Data Exchange (SGDex) with the aim of enabling seamless data exchange between government and private institutions. He also currently coordinates NDI’s COVID-19 technology response applications across multiple teams in GovTech and agencies.<br><br>Before joining the public service in 2020, Daryl was a technology entrepreneur with a keen focus on communications, engagement and relationships – with inventions ranging from hardware driven customer relationship management systems to talent acquisition and screening technologies.
---

### Overview

Singapore Financial Data Exchange (SGFinDex) was developed by the Monetary Authority of Singapore (MAS) and the Smart Nation and Digital Government Group (SNDGG) in collaboration with The Association of Banks in Singapore and seven participating banks to provide a simple solution to a complicated problem.

In Singapore, where individuals have accounts with multiple financial institutions (FIs), it is a challenge for them to transfer their personal financial data held by each FI to another FI or the Government. Private sector FIs, such as banks and insurance companies, have historically faced challenges in sharing data with other entities due to a lack of common data standards and interoperability between platforms.

The SGFinDex team believed that an opportunity presented itself amidst these circumstances and SGFinDex was hence developed as the world’s first public digital infrastructure for retrieval of financial data across agencies, built on Singapore's National Digital Identity (Singpass) infrastructure and a centrally managed online consent system.

### What is SGFinDex?

SGFinDex is the world's first public digital infrastructure to use a national digital identity and **centrally managed online consent system** to enable individuals to access, through applications, their financial information held across different government agencies and financial institutions.

During the second phase launch, individuals are now able to view information on their investment holdings at The Central Depository (CDP) as part of their consolidated financial position via participating banks’ financial planning applications and MyMoneySense, a free government financial planning digital service.

In the next phase of SGFinDex, individuals will be able to access information on their insurance policies held with insurers.

### Why Should SGFinDex be Adopted?

Awarded with the Most Innovative Use of Data for Digital Transformation award at the [INSPIRE Tech Awards 2021](https://cioacademyasia.org/inspire-tech-awards-2021/){:target="\_blank"}, SGFinDex illustrates the importance of public-private sector collaborations, consent-based data-driven innovations, and trusted online systems.

<figure style="text-align: center">
  <img
    src="/assets/img/sgfindex-fig1.png" width="100%" height="100%"
    alt="Fig 1: Kendrick Lee, Director, Trusted Data Division, National Digital Identity, GovTech receiving the award for SGFinDex at the INSPIRE Tech Awards 2021 ceremony."
  />
  <figcaption>Fig 1: Kendrick Lee, Director, Trusted Data Division, National Digital Identity, GovTech receiving the award for SGFinDex at the INSPIRE Tech Awards 2021 ceremony.</figcaption>
</figure>

The developers of SGFinDex take great pride in the following features and principles that drives the development of SGFinDex:

-	**Highly scalable national infrastructure**: Powered by the National Digital Identity tech stack, the public digital infrastructure of SGFinDex can be extended and replicated to other industries beyond the finance sector.

-	**Consent-driven retrievals facilitated by integrated consuming applications**: Financial data can be retrieved only through explicit consent of the individual, whose identity must be verified through SingPass.

-	**Data privacy**: SGFinDex is designed to ensure data protection and privacy of personal financial information. SGFinDex will only transmit but neither store nor read the user’s personal financial data.

-	**Data encryption**: Users’ personal financial data is encrypted when it is retrieved through SGFinDex. Only the financial planning application/website that the user has authorised to receive the data is able to decrypt it.

### How Do You Use SGFinDex?

Users first log into the respective bank or MyMoneySense with their Singpass and approve the connection of the bank to SGFinDex. Once the bank is connected to SGFinDex, the financial information from the bank and MyInfo can be retrieved securely.

### Success Stories

Since its inception on 7 December 2020, SGFinDex has spurred financial planning among participating bank customers with over 150,000 unique users sign ups, 290,000 bank accounts linked and 620,000 data retrievals made.

### What's Next?

As there is strong demand from other government agencies to integrate with SGFinDex to deliver more value-added services, the current service delivery model can be further tapped upon.

The underlying SGFinDex infrastructure can also be extended to other industries to provide secure data access across more organisations, hence bringing the breakthrough innovation of SGFinDex beyond the financial sector.

### Contact Information

For enquiries, email <support@sgdex.gov.sg>.

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
