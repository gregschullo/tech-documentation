---
id: observability
title: Observability
---

Observability is instrumenting systems and applications to collect events, metrics, and logs. It's designing and building applications with the idea that they will be watched and monitored.

"You can monitor a system using various instrumentation. But if the system doesn't externalize its state well enough that you can figure out what's going on in there, then you're stuck" - Ernest Mueller

Observability is a necessary component of an application because with ever increasing complexity of infrastructure, monitoring needs to be better higher up the stack and deeper in the system.

## Pillars of Observability

Metrics - Numbers describing a particular process or activity measured over intervals of time.  
Tracing - Data that shows which line of code is failing to gain better visibility at the individual user level for events that have occurred.  
Structured Logs - Logs admitted by each process and may contain a wide array of information.  

## Observability vs Monitoring

Observability is often mistakenly interchanged with monitoring.  

Monitoring | Observability
 --------- | -------------
Tells if the system is working | Let's you ask why it's not working
A collection of metrics and logs about a system | The dissemination of information from that system
Failure-centric | Understand system behavior regardless of an outage
Is "the how" / Something you do | Is "the goal" / Something you have
I ***monitor*** you | You ***make yourself*** observable

## Culture of Observability

Observability is not a replacement for monitoring; they are complementary. It's difficult to implement effective monitoring without a culture of observability. Tools by themselves are not sufficient alone and none are going to automatically give observability.  

Observability as a culture is the degree to which a team or company values the ability to observe, inspect, and understand systems, their workload, and their behavior.  

Code isn't done until you've built analytics to observe and support it.

## Modern Event Handling Techniques

Events - Immutable record of discrete events that happen over time. 

Three techniques used in handling events with the end goal of shared insights, a collaborative response, data-enabled IT, and intelligent operations.  

Collect All Relevant Data - This allows complete visibility across stacks, technologies, and environments

- Cloud Native
- Traditional, on-premises, monolithic, etc.
- Hybrid environments

De-spam - Separate valuable signals from the noise.

Add Context - Prioritize resolution to ensure service availability and to provide business detail.

## Metrics that Matter

Metrics

- System Metrics (CPU, memory, disk)
- Infrastructure metrics (AWS CloudWatch)
- Web tracking scripts (Google Analytics)
- Application agents (APM, error tracking)
- Business metrics (revenue, customer signups, bounce rate, cart abandonment)

Events

Events come in three forms - plain text, structured, and binary.

- System and server logs (syslog, journald)
- Firewall and intrusion detection system logs
- Social media feeds (Twitter, etc)
- Application, platform, and server logs (log4j, log4net, Apache, MySQL, AWS)

## Sources

[Observability - Wikipedia](https://en.wikipedia.org/wiki/Observability)  
[Monitoring and Observability, Ernest Mueller](www.agileadmin.com)  
[Splunk Beginners Guide to Observability](https://www.splunk.com/en_us/form/beginners-guide-to-observability.html)  
[Observability of Distributed Systems - Google Cloud Platform](https://www.youtube.com/watch?v=SoZZzB-yTOk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=8)  
