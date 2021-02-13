# Getting to Know an Application

Originally Published: TBD  

## What Does it Mean to Know an Application

Often in the SRE and monitoring space, we expect application owners to be familiar with the applications they support. We expect them to know the application. But what does it mean to know an application? What knowledge is expected to be had and what other requirements are considered to be necessary to fulfill "knowing the application?"

This blog post aims to address some of the key items expected to be knowledgeable of to "know your application." It is not intended to be an exhaustive list of everything that could and should be known, but rather a pattern that may be followed for a majority of applications.

What does it mean to know an application?  
What are the *most* important things to know about your application?  
How do you get to know those things?  

## Learning an Application

Core areas to focus on when beginning to learn an application include:  
Business Value  
Infrastructure  
VBFs  

### Core Components

What is the overall purpose of the application?  
What are the business requirements of the application?  
How does the business expect users to interact with the application?  

Business Value -  

- Business Requirements
- How business expects users to interact with the application  
  - How do users interact with the application?  
    - Is it a website?  
    - Is it a client application?  
    - Where is the application hosted? On prem or in the cloud?  
- Vital Business Functions  
  - Service Level Definitions
    - URIs
    - SLAs
    - SLOs
    - SLIs

Infrastructure -  

What is the core functionality of your application?  (Decision Tree from business value above)
What are the dependencies of the application?  (Infrastructure Perspective)
What functionality do dependencies provide to your application? High level, executive summary of what the dependencies do and how they impact your app.

- Web Servers  
- Application Servers  
- Database Servers  
- Network and Firewalls
- Load Balancers
  - GTM
  - LTM
- Kubernetes Namespaces

Metrics -

- Success metrics
- Failure metrics
- Begin with Four Golden Signals (Traffic, Latency, Errors, Saturation)
- Key Performance Indicators
- RER

Performance Testing -

Alerting -
  
- Notification Channels
- Event correlation best practices
- Alerting Playbooks
