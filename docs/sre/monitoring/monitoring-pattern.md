---
id: monitoring-pattern
title: Monitoring Pattern
---

Complex infrastructure and customer experiences are often difficult to instrument and measure holistically. When monitoring with application resiliency as the focus, it is vital to instrument monitoring so a thorough understanding of application infrastructure and transaction flow may be achieved. In other words, it is necessary to first understand where and why problems will and could occur before any type of resiliency practices may take place.

There are many monitoring solutions available and an appropriate solution or solutions will vary from application to application.

## Monitoring

First we must define monitoring in a technology focus. Google SRE defines monitoring as collecting, processing, aggregating, and displaying real-time quantitative data about a system, over a period of time, to observe and check the progress or quality of the system.

### Goal of Monitoring

The main goal of monitoring is to fully understand your application. This would include understanding long term trends, comparison over time or comparing to experiment groups, alerting on anomalies, data visualization, and creating the ability to conduct adhoc retrospective analysis. These capabilities are crucial to understanding and maintaining your application.  
The secondary goal of monitoring is to address what is broken and why. Through understanding your application and designing monitoring to identify what is broken and why, resolving issues becomes much easier and faster.  

### A Monitoring System Should

- Measure performance provided to users to meet and enforce required service level agreements (SLAs), service level objectives (SLOs), and detecting and managing problems
- Send appropriate alerts or notifications to appropriate recipients  
- Aspire to learn to contribute to and drive application reliability within what you can control, regardless of platform.
- If focus on infrastructure is necessary, monitor what you can control to determine your application’s underlying infrastructure components and their health.  
- Monitor the interaction of "neighbor" applications and upstream and downstream dependencies to understand the relationship and communication between them and your application.
  - An example of this would be to monitor response time between neighbor applications rather than just if a connection between components or endpoint is up or down.  
  - Another example may be to measure volume or throughout sent to your application from a downstream dependency to understand the impact on your application from a known source.  

It is important to understand and define what a healthy system performs like. A healthy system should be defined based on specific criteria for each application and that criteria will vary from app to app and potentially change over time. Some examples of what can define a healthy system include the following:

- Successful responses
- Response Times and Threshold definitions
- Dependency Failures Dependency SLA’s
- Page load times

These should be very dynamic in nature and specific to each application. This should be maintained as a policy for each service and be validated by the monitoring system on a frequency basis.

## The 4 Golden Signals

The 4 Golden Signals are the basis for any well monitored system and should be prioritized. More information on the 4 Golden Signals can be found [here](/sre/monitoring/the-four-golden-signals.md) or in the [Google Site Reliability Engineering book](https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/).

## Types of Monitoring

**Operating System/Host** - Metrics such as memory, CPU, or swap space utilization that reflect symptoms of an underlying issue. OS and host metrics are typically the easiest metrics to obtain and visualize. Often, up/down checks are grouped into this category, simply using a seperate host to check if application infrastructure is up or down. This type of monitoring is also often confused with telemetry monitoring. Although most OS and host metrics are telemetry measurements, not all types of telemetry metrics are OS or host related.  

**Observability** - The practice of obtaining data from timeseries metrics (telemetry), logging data, and transaction traces for the purpose of discovering unexpected patterns. Observability is achieved when data made available from the monitored system provides granular insights with rich context into the behavior of a system for analysis.  

**Telemetry** - The collection of measurements or other data that is automatically transmitted to receiving equipment for monitoring purposes. In terms of information services, 'measurements or other data' could mean OS & host data, but it also can reference web logs (hits per second), network service (throughput), or anything else that signifies the 'health' of your system. A few examples of telemetry tools include Telegraf, Prometheus, and HP OpsBridge and can be visualized with tools such as [Grafana](https://grafana.optum.com/), Kibana, and Geckoboard.

**Log Aggregation** - The collection of log files to organize the data in them and make them searchable. Log aggregation is useful for the capturing of known knowns. Examples of log aggregation tools include Elastic Logs and Splunk.  

**Application Performance Monitoring (APM)** - The monitoring and management of performance and availability of software applications. APM strives to detect and diagnose complex application performance problems to maintain a defined level of service. Examples of application performance monitoring tools include Elastic APM, Dynatrace, and New Relic.  

**Tracing** - Used to profile and monitor applications, especially those built using a microservices architecture. Distributed tracing helps pinpoint where failures occur and what causes poor performance through the building blocks commonly referred to as "[spans](https://opentracing.io/docs/overview/spans/)". Tracing is useful for the capturing of unknown unknowns. Examples of tracing tools include Jaeger and Pinpoint.  

**Synthetic** - A technique using emulation or scripted recordings of a transaction. Scripts are created to simulate an action or path that a customer or end-user would perform on a site, application, or other software. Examples of synthetic monitoring include HP BSM, New Relic Synthetics, or Dynatrace Synthetics.

**Real User Monitoring (RUM)** - 

**Packet Capture/Inspection** - This type of monitoring is the practice of taking a packet capture from an application host and analyzing the results in a tool such as Wireshark or Opnet to determine how the application is working. Often, SSL keys will need to be obtained and applied to the packet capture to get visibility into encrypted traffic. This type of monitoring has seen decreased use since the encouraged use of TLS 1.3 security standards.  

## Raw Error Rate

Raw Error Rate is an availability metric that is designed to give an accurate indication of how your application or service is performing and is to be measured from the customer's point of view. Raw Error Rate is both an indicator of customer experience as well as the availability of the underlying technology that provides the service.

Raw Error Rate is a very simple formula, although it is not necessarily easy to calculate.  

```terminal
Raw Error Rate = Failed Requests / Total Requests

Where failed requests are requests that are not successful or requests that return successfully, but not in an acceptable amount of time and where total requests are any and all observable requests.
```

Customer Success Rate is a more positive spin on Raw Error Rate. It is the inverse of Raw Error Rate... (1-RER) * 100 = Customer Success as a Percentage

More information on Raw Error Rate can be found on the [SRE HubConnect Blog](https://hubconnect.uhg.com/groups/optum-system-reliability-engineering-sre/blog/2018/04/03/introducing-raw-error-rate)

## Mean Time to Detect

Mean Time to Detect is a metric that measures the average time it takes to discover an issue or problem is occurring. Monitoring is the first and most essential component of having a low Mean Time to Detect as monitoring acts as the "trip wire" or notifier of a problem. The more accurate and detailed your monitoring is, the faster your mean time to detect score is, resulting in resolving issues or potential issues more quickly.

## Vital Business Function (VBF) Monitoring

These particular functions have been deemed essential to an application and the success of the business. It is extremely important that these functions perform well, so monitoring these should be priority over other functions or services.

Setting up monitoring to capture metrics surrounding error rate or increases in response time are beneficial to gaining insight quickly to when there may be an issue with a VBF, helping to reduce Mean Time to Detection (MTTD) and Mean Time to Restoration (MTTR). This helps ensure VBFs are performing well and giving a satisfactory customer experience.

More detailed information on Fundamental Monitoring Theory can be found at:  
[Google SRE - Monitoring Distributed Systems](https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/)  
[Optum Fundamental Monitoring Theory](https://new-wiki.optum.com/display/EM/Fundamental+Monitoring+Theory)  
