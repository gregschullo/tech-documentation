---
id: alerting-strategy
title: Alerting Strategy
---

## Evaluate and Document Current Alerting Strategy

Analyze alerts that are configured in production and have a conversation with the support team to determine the following:

- What tools are being used to generate alerts? (SiteScope, Alertmanager, Splunk, etc)  
- What metrics are being leveraged to generate alerts? (CPU Utilization, Response Time, HTTP 5xx, RER, etc)  
- How are alerts distributed? (OpsBridge, PagerDuty, Email, SMS, ChatOps, etc)  
- Who do the alerts go to? (Distribution List, Individuals, On-Call Rotation, etc)  
- How are alerts classified (P1/P2, Alert/Ticket, Sev1, etc)  
- How are alert thresholds determined?  
- Are alert thresholds static or dynamic?  
- How many alerts fire per week?  
- What percentage of alerts are actionable?  
- If able to determine, what is the average Mean Time to Detect (MTTD)?  

Completion Criteria: Produce a document with these findings articulated.  

## Review and Improve Alerting Strategy

Produce an Alerting Strategy document that describes the strategy and approach the team will take when crafting alerts in each monitoring system. If necessary implement changes to the strategy that enable the following:

- All alerts that page a human should be actionable
- Alerts that are not actionable should be converted to either tickets or logging
- Thresholds are set for alerts, and should be revisited
- Dynamic thresholds for alerts should be utilized when appropriate
- All alerts should be set with the SLA/SLE in mind
- The team should construct alerts in service of the shortest reasonable MTTD (Strive for <10 min)
- Alerting strategy should minimize noise (alert storms / non-actionable alerts)
- Who will alerts go to? Does this change under certain circumstances (Priority, service, etc)?
- All members of the team have reviewed the alerting strategy document and have committed to following it in the future, or updating it as a team

Completion Criteria: A document that describes the teams' Alerting Strategy is produced and agreed upon by the team.

## Validate and Implement Advanced Alerting

Enable advanced alerting techniques. This is highly specific to the application, thus the SRE will need to generate and document specific recommendations for the team using the below items as guidelines:

- The team leverages a persistent chat tool like Flowdock or Slack or Cisco Spark
- The team understands the core concepts of ChatOps
- The team is leveraging bots in their chat tool to pipe in alerts and is able to take action like acknowledging or escalating them
- Achieve <10 min MTTD
- The team is using dynamic thresholds for most alerts
- Alerts configured on absence conditions (0 orders placed, etc)
- Minimal false positive alerts
- Majority of alerts are actionable
- Alerts are consistently tuned as the applications changes over time
- Confidence in alerts is high enough to enable automated actions

Completion Criteria: Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.