# Operational Healing Practices

## Context

This document provides operational healing, better thought about as "fault tolerance", best practices and guidance for application teams architecting for resiliency by outlining the operational practices of healing, automation, and self-healing.

## Problem

Application teams need to architect their applications in such a way where issues can be addressed and restored quickly and efficiently.

## Solution

Applications can only successfully heal from their failures when they have best in class monitoring infrastructure and a solid understanding of how the application functions. There is no "one size fits all" approach where operational healing is concerned and architecting for resiliency through operational healing will be unique for every application with a wide array of solutions as every application is different.

## Healing

Application healing is where steps are taken by a team to address issues or abnormalities in an application or service to restore it to a healthy, desired state.

Ensuring adequate component redundancy or replication is an important consideration while designing a healing policy. In the event that one component instance fails, malfunctions, or is attacked, it can be replaced with another component version that offers equivalent functionalities.

Know your application. This an important idea in many areas, not just where operational healing is concerned. Manual healing must take place before any automation or self-healing to ensure the healing process is understood. Time is often wasted if production problems in your application or service are not understood before self-healing actions are attempted to be implemented.

Basic questions to ask when starting to think about understanding your application, healing, and architecting for resiliency:

* Is your application monitored?
  * Deploy holistic logging and monitoring systems
* Does your application have a fallback mechanism?
* Does your application have a baseline established for what is "healthy”?
  * Setting up automated alerts is a great starting point to understanding which errors or problematic scenarios are most common.
  * Log and monitor failures to give operational insight
* What measures are taken when the application fails?

Prevention is always better than cure, but trying to plan for and solve every contingency, while a noble goal, is unrealistic. It is important to consider this and not let attempting to plan for every possible scenario be a hinderance in delivering value to your application. Having a flexible and efficient resilience and recovery design is almost always better than attempting to prevent absolutely everything.

## Automation

Automation is the idea of transforming predictable, repeatable manual tasks or process into code in order to perform these tasks automatically in an attempt to streamline development and service efforts.

It is valuable to understand why the automation aspect of application resiliency is important. Automation is something that is heard about at often in an enterprise and is seen as a practice that adds value, but the why of automation and how it impacts operations is often excluded from the conversations surrounding it. Automation is important because it reduces human time recovery and increases efficiency, results in a reduction of human errors, reduces mean time to detection and mean time to resolution, increases an application's or service's availability and increases the performance of those applications or services, and it reduces manual, human tasks around the organization which allows for employees to shift their focus to other issues or tasks elsewhere.

In many cases, automation leads to self-healing (fault tolerance) as handling errors or known application limitation without human intervention is an anchor of self-healing.

## Self-Healing

Self-healing is a paradigm to automatically recover an application or service from a customer-impacted state to an available, healthy, desired, and running state without manual human intervention. The standards of what constitutes acceptable behavior will vary both with time and from user to user. There is no industry defined road-map to achieve an operational healing, autonomous state for IT Infrastructure.

Self-healing is about designing a system capable of making decisions by continually checking and optimizing its current state and adapting to conditions as they change. The goal is to respond to failures gracefully and ensure application availability is as high as possible.

Other articles relating to Operational Healing can be found at:
[Azure Self Healing Design Principles](https://docs.microsoft.com/en-us/azure/architecture/guide/design-principles/self-healing)
[Self Healing Systems](https://technologyconversations.com/2016/01/26/self-healing-systems/)
