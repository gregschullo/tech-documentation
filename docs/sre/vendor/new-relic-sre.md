---
id: new-relic-sre
title: New Relic SRE
---

[New Relic SRE Article](https://newrelic.com/resource/site-reliability-engineering)

## Introduction

The day to day responsibilities of developers and operations engineers are increasing and evolving as companies look for new ways to improve stability, reliability, and automation-first practices. Because of the need to reduce downtime as systems scale, the SRE role is taking shape in many organizations.

## Chapter 1: SRE Philosophy and Principles

According to Matthew Flaming of New Relic, SRE is the purest distillation of DevOps principles in a single role.

The fundamental goal of SRE is greater reliability with less manual intervention as a system scales.

The two axes of scaling

1. Workload

* the number of physical hosts, VMs, and other resources that must be able to grow efficiently in relation with the services that run on them.

1. Complexity

* the number of dependencies between those services and the growth of the organization itself.

SRE is about enabling both forms of scalability.

## Chapter 2: What Makes an SRE Successful?

SREs see the big picture outside of the day to day and understand and interpret things at a higher level. 

* Consider how work is going to affect the rest of a system.

SREs automate at every opportunity.

* The SRE role is thinking about inefficient and time-consuming things people are doing and stopping them as soon as possible.

SREs embraces new tools and approaches (when necessary)

SREs are change agents

* Great SREs have to be effective sales people. They have to be able to sell their colleagues on processes and projects that appear to involve some near term pain or that go against legacy norms.
* For an SRE, part of being pragmatic means being willing to dump processes, procedures, and tools that are no longer productive.

## Chapter 3: SRE Tools and Processes

DevOps and SRE Toolchain

Create: Integrated Development Environments (IDEs), text editors,  and shared library components are used as "building blocks" to build applications. Source control tools such as GitHub and Subversion help erase boundaries between development and operations roles.

Verify: Build and continuous integration/continuous delivery (CI/CD) tools such as Jenkins or CircleCI 

Package: Tools to manage the build, packaging, release staging, and approval process of production ready software, such as Rake or JFrog

Release: Tools to manage releases and the lifecycle of an application, like Apache, Maven, or XebiaLabs

Configure: Tools like Terraform, Chef, and Ansible fit the "automate everything" SRE philosophy. These tools also help automate away much of the manual work formerly needed to implement necessary rules and processes. The increasing use of containers may ultimately reduce the need for these tools and many organizations. Because containerized applications include all of their dependencies and configurations in immutable configurations, container platforms like Docker and orchestration services like Kubernetes or Mesosphere are becoming indispensable to SREs

Monitor: Tools like Dynatrace and New Relic that collect metrics from applications, infrastructure, logs, or analytics data and alerts on that data via dashboards and queries.

Use Service Level Objectives (SLOs) and Service Level Indicators (SLIs) to Measure Reliability

* Service Level Objectives are a common way to measure the performance of a service provider. Clearly defined and measured SLO metrics at the product and service level help organizations to:
  * Tune investment and overall prioritization to meet reliability goals and to meaningfully adjust those high-level reliability goals to fit company strategy.
  * Maintain and build customers' confidence
  * Help teams decide when and how to focus efforts on reliability
  * Help engineering make better assumptions about risk tolerance and how fast they can go, as well as reason better about dependencies and reduce toil.
* Service Level indicators can also be used to measure reliability. These performance metrics track some facet of the business. To measure reliability, teams turn to metrics like mean time between failures (MTBF), mean time to repair (MTTR), and mean time to detect (MTTD), all of which help organizations define their "risk matrices." These become powerful tools for prioritizing issues and risks that will have a quantifiable impacts on SLOs, but they also allow organizations to downshift on issues that may not be especially urgent.

## Chapter 4: The SRE Role at New Relic

Different descriptions and roles for SRE will be different for different organizations.

Set SREs up for success!

## Conclusion

Once the SRE role is defined and the right organizational structure and incentives are in place, it all comes down to execution.

A successful SRE team depends on a variety of skills and traits.

You can always teach technical skills, but you can't necessarily impart essential qualities like empathy and curiosity.

Teams and individual SREs need organizational support, communication, and trust in order to thrive.

You can't prevent things from ever breaking. Instead, work to see the big picture, incorporate automation, encourage healthy patterns, learn new skills and tools, and improve reliability in everything that you do.

Perfection may be unattainable, but constantly striving to do things better is the way to get as close as possible.