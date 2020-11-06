---
id: reliability-roadmap
title: Reliability Roadmap
---

## SRE Phases Uplift

### Phase 0 - Base-level understanding of current capabilities, categorization of application

Review current monitoring tools in place  
Review current alerting strategy  
Review Incident Response
Review On Call strategy
Review previous incidents for critical issues/known-problems  
Review Application Architecture & Design  

### Phase 1 - Extinguish immediate fires, immediate risk mitigation, configure basic monitoring if missing  

Telemetry Monitoring  
Host Level Checks - Multiple checks using tools like Sensu, Nagios, etc to check on various host statistics. (CPU, Memory/Heap, GC, Network I/O, Disk I/O, etc)  
Log File Analysis - Use of a tool such as Splunk or ELK stack to parse log files in real-time  
Application Performance Monitor configuration (APM)  
Synthetics - Use of a custom agent to "probe" a web site, execute complex customer actions, and report on success/failure of those actions.  
Implement emergency Architecture changes  
Validate Readiness for Performance Testing  
LTM Checks - HealthChecks  
On-Call Rotation - Who is responsible for being notified of a potential problem  
Alerting coverage & MTTD - Ability for teams to be systematically notified when specific KPIs are outside normal operating thresholds  
Validate Built/Hosted Environments (QA, Stage, Prod) are identical  

### Phase 2 - Prepare for Long-Term Success  

Metric Resolution & Data Types - Ability for metrics to be collected and reviewed, in real time, with less than a 30 second delay  
VIP-Level Checks - Multiple checks against the VIP level for Health-Check and Service availability  
Real-User-Monitoring (RUM) - Capture of live, real-customer render timings, usage, analytics. Captured as Telemetry data and used for various purposes (Session monitoring, customer engagement, browser performance  
Advanced Splunk Configuration (Splunk ITSI if available)  WHAT DOES THIS CONSIST OF?
Advanced Data Visualization  WHAT DOES THIS CONSIST OF?
Advanced Alerting and configuration  WHAT DOES THIS CONSIST OF?

### Phase 3 - Advanced Operations

Automated Recovery  
Automated Release  
Advanced Machine-Learning analytics  
GTM/LTM Control of Hosts - Is the LTM able to selective remove Application servers from it's eligibility pool?  
Experimentation - What type of tests are conducted to validate application performance?  
KPIs/Custom Metrics - Identification of Key-Performance-Indicators and custom metrics to support their measurement  
KPI Predictions - Use of advanced techniques to predict KPI trends over X time  

## Reliability Checklist

### Document in-use monitoring tools

Identify and document all of the monitoring tools that are presently implemented to support the application for:

- Host Level Checks (CPU/Mem/Disk/Swap/etc)
- Up/Down Probes (assuming this means non-http checks such as snmp, ping/icmp, tcp, udp, etc)
- Synthetics
- Application Performance Monitoring (APM)
- Log file aggregation
- Telemetry
- Real User Monitoring (RUM)
- Javascript Front End Logging
- Dashboard solutions
- Any other relevant monitoring tools

Completion Criteria: Produce a report with these findings articulated.

### Document current alerting strategy

Analyze alerts configured in production to determine the following:

- What tools are being used to generate alerts? (SiteScope, Alertmanager, Splunk, Grafana, etc)  
- What metrics are being leveraged to generate alerts? (CPU Utilization, Response Time, HTTP 5xx, RER, etc)  
- How are alerts distributed (OpsBridge, PagerDuty, direct email, sms, ChatOps, VictorOps, etc)
- Who do the alerts go to? (Distribution List, Individuals, on-call rotation, etc)
- How are alerts classified (P1/P2, Alert/Ticket, Sev1, etc)
- How does the team decide on alert thresholds?
- Are alert thresholds static or dynamic?
- How many alerts fire per week?
- What percentage of alerts are actionable?
- If able to determine, what is the Mean Time to Detect (MTTD)?

Completion Criteria: Produce a report with these findings articulated.

### Document Supply Chain and Dependencies

Identify and document all of the back end dependencies of the application.  

- What applications does our application rely on?
- Who manages back end applications?
- What monitoring do back end dependencies leverage?
- How are alerts implemented in downstream applications?
- Implement observability of dependencies

### Establish and document business impact measurements

Determine and document last 6 months of the following metrics for the application:

- Raw Error Rate (ReR)
- Mean Time To Restore (MTTR) (including sub components if possible - MTTD, MTTA, MTTI, MTTF)
- Service Level Agreements / Service Level Objectives / Service Level Expectations
- [Net Promoter Score](https://en.wikipedia.org/wiki/Net_Promoter) (NPS)

Completion Criteria: Produce a report with these metrics articulated.  

### Document Incident Response Procedures

By using any available reporting and by working with the DevOps team, determine the following:

- Are there playbooks available for common tasks, if so where are they stored? (Application restart, DC traffic switching, etc).
- How does the team handle Post Incident Reviews (PIRs)?
- How successful are root cause analysis reviews?
- Average time to problem ticket closure
- Does the team leverage an "Incident Commander" or "Technical Lead" during war-rooms?
- Any other relevant info about Incident Response

Completion Criteria: Produce a report with these findings articulated.

### Discover and Document Application Architecture & Design

Work with the application team and utilize any existing architectural documentation to determine the current design of the application. This should include:

- What is the hosting infrastructure (Public / Private cloud, Managed Services, XaaS, etc)
- Is this a commercial product, or are there commercial products in the ecosystem? (i.e. Adobe Experience Manager)
- Describe vendor support model and content
- Enumerate all the nodes in the eco system
- Document the network topology (Data Center, GTM, LTM, Web Servers, App Servers, DB Servers, Caching, Queuing, etc)
- How does traffic normally flow?
- What are the connections between nodes
- Is the app available in Navigator with configuration up to date
- Describe load balancing strategy
- DC load balancing
- App load balancing
- Describe any dependencies or single points of failure
- Any other relevant architectural considerations

Completion Criteria: Produce a report with an overview of these findings, along with links to all the most updated documents and diagrams. Call out any obvious gaps that should be addressed in future phases.

### Implement Emergency Architecture changes

Emergency architecture recommendations should address the following:

- Any system or network architecture that is a single point of failure and can be easily modified at low cost to reduce or eliminate SPOF risk
- Any system or network architecture change that can be implemented to enable High Availability
- Host level load balancing strategy
- Data Center Load balancing Strategy
- Cloud Region load balancing strategy
- Capacity concerns (vertical/horizontal scaling)

Completion Criteria: All emergency architecture changes have been implemented and a document has been produced describing each of the recommended changes and validating it's completion.

### Document On-Call strategy

Work with the DevOps team to determine the following:

- Does the team have a structure and plan for handling an on-call rotation
- Is it a single human?
- Do they have "always on" follow the sun?
- How are on-call schedules determined?
- How often is someone on call?
- How long is someone on call for?
- Are there defined SLAs for acknowledging a page?
- On average how many alerts fire during a given on-call shift?
- How do people find out if they are on-call or not?
- How are escalations handled?
- How are schedule overrides handled?
- If available, what is MTTA?
- Any other relevant info about On-Call strategy

Completion Criteria: Produce a report with these findings articulated.

### Review and Improve Alerting Strategy

- Produce an Alerting Strategy document that describes the strategy and approach the team will take when crafting alerts in each monitoring system. If necessary implement changes to the strategy that enable the following:
- All alerts should be set with the SLA/SLE in mind
- All alerts that page a human should be actionable
- Alerts that are not actionable should be converted to either tickets or logging
- Thresholds are set for alerts, and should be revisited
- Dynamic thresholds for alerts should be utilized when appropriate
- The team should construct alerts in service of the shortest reasonable MTTD (Strive for <10 min)
- Alerting strategy should minimize noise (alert storms / non-actionable alerts)
- Who will alerts go to? Does this change under certain circumstances (Priority, service, etc)?
- All members of the team have reviewed the alerting strategy document and have committed to following it in the future, or updating it as a team
- Completion Criteria: SRE and the DevOps team should work together to produce a document that describes the teams Alerting Strategy. The epic is complete when the document has been completed and agreed to by the team.

### Review and Improve On-Call Rotation

- Work with the team to set up an On-Call rotation that minimizes MTTA, while being realistic about the human factors. Produce a document that specifies the on-call process and expectations. The on-call rotation should have the following attributes:
- On-call rotation should be in a system that the organization has access to.
- This team as well as others must know who is on call at any given moment
- One specific human being must be on call at any given time
- No one should be on call all the time
- There should be a clear delineation of when a person goes on-call and goes off-call
- There should be a handoff procedure to share context between the person going off and the person coming on
- Everyone in the rotation should have correct notification preferences/settings (email, SMS, etc)
- There should be an escalation process
- There should be an override process
- There should be a clear definition about what it means to be on-call
- Always have your laptop with you
- Always have your phone with you and be in service area
- Always be near an internet connection and able to leverage VPN
- Can be online and connected in less than 20 minutes
- MTTA less than 10 minutes
- Be in a mental state conducive to complex problem solving
- Determine if there are any special considerations for on-call employees
- Do we need to pay them differently?
- Do we need to provide phone/laptop, etc?
- Ensure all team members understand the on-call process and the expectations of being on-call
- Completion Criteria: An on-call rotation has been setup to SRE standards and is in practice. The SRE and the DevOps team have produced a document that describes the on-call process and expectations.

### Review and Improve Host-Level Checks

- Ensure that all hosts are observable in a tool like OpsBridge, Sensu or Nagios. Ensure critical host statistics are available:
  - CPU
  - Memory/Heap
  - GC
  - Network I/O
  - Disk I/O
- Any other relevant host level metrics
- Additional required actions:
- Alerts should be set up following the Alerting Strategy
- Make sure all key teams have access to the tool
- Train all key teams on the tool and how it fits into the monitoring strategy
- Completion Criteria: All hosts must have relevant statistics available in a monitoring tool and be configured to alert according to the E1.2 alerting strategy. . Preferably with the ability to view time-charts by host or in aggregate. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Review and Improve Synthetic Monitoring

- Synthetic monitoring is an important part of the "defense in depth" strategy of observability. Depending on the "customer" of the app (internal or external) synthetic recommendations may vary. The App should utilize a tool like BSM, SiteScope, Dynatrace, New Relic, Datadog, or Catchpoint for synthetic transactions. Identify the non-negotiable items and work to have them implemented.
- Required:
- The application must leverage simple internal synthetic transactions to validate expected response on a key endpoints (Up/Down).
- The team must have a cadence and process to periodically review all synthetic transactions as they may change as the app evolves.
- There must be no regularly occurring maintenance windows were transactions are paused.
- Alerts should be set up following the Alerting Strategy
- Make sure all key teams have access to the tool
- Train all key teams on the tool and how it fits into the monitoring strategy
- Recommended:
- If the app is user facing (i.e. has a user interface for humans to interact with) it must leverage complex synthetic transactions to simulate critical customer journeys and exercise key integrations
- If the app is internet facing it must leverage both internal synthetics (run from inside the network) and external synthetics (run from outside the network).
- Additionally, the app should run external synthetics from at least two geographic regions (for example, east coast / west coast)
- Synthetic probes / transactions should find a balance between testing individual hosts and validating VBFs and Customer Objectives
- Synthetic transactions should be staggered so as to minimize gaps between runs, there by maximizing MTTD.
- Synthetic transaction results should be visualized on a dashboard, preferably a time-series dashboard
- Completion Required synthetic monitoring must be implemented and configured to alert according to the E1.2 alerting strategy. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Review and Improve Log File Aggregation Solution

- Identify the non-negotiable items and work to have them implemented.
- Required:
- The application must leverage a log file aggregation tool (Splunk / Elk), if not implement one.
- All nodes in the app must be shipping logs to the aggregation tool
- Log formats must comply with industry standards and organization best practices
- There should be no blind spots or gaps in logs
- Logs should be properly parsed by the aggregation tool (status codes, response times, etc)
- Build dashboards based on log data to visualize KPIs and VBFs
- Must have an RER Dashboard
- Alerts should be set up following the Alerting Strategy in E1.2
- Make sure all key teams have access to the tool
- Train all key teams on the tool and how it fits into the monitoring strategy
- Recommended:
- Prefer Splunk
- Prefer phi-splunk instance
- Gain access to all supply-chain log aggregation tools
- Build app specific dashboards on supply chain log aggregation tools
- Completion Criteria: All "required" items have been implemented or completed. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Review and Improve Application Performance Monitor (APM) solution

- Identify the non-negotiable items and work to have them implemented.
- Required:
- The application should leverage an APM solution (Dynatrace / New Relic). If the app and team are sufficiently mature, an APM may not be required, but this is rare and should be highly scrutinized. In most cases an APM solution should be utilized.
- Asses the solution being used (DTSaaS, AppMon, etc) is it that right one for this app? Are changes needed? If so implement them.
- All nodes should have the APM agent installed and properly configured
- Ensure all KPIs and VBFs are observable in the APM
- Build dashboards based to visualize KPIs and VBFs
- Alerts should be set up following the Alerting Strategy in E1.2
- Make sure all key teams have access to the tool
- Train all key teams on the tool and how it fits into the monitoring strategy
- Recommended:
- Prefer Dynatrace
- Gain Access to all supply-chain APM solutions
- Build app specific dashboards on supply chain APM tools
- Completion Criteria: All "required" items have been implemented or completed. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Review and Improve Web/App Analytics solution

- This epic is only applicable if the application has a user interface used by humans. If it does, the app must leverage a front-end analytics solution of some kind (Adobe Analytics, Google Analytics etc). This is applicable for web applications, mobile applications and thick client applications. Identify the non-negotiable items and work to have them implemented. Front-end analytics are in important part of the defense-in-depth monitoring strategy. Front-end analytics enable observability at the node closest to the end customer.
- Required:
- The app must leverage a front-end analytics solution of some kind (Adobe Analytics, Google Analytics)
- Ensure all KPIs and VBFs are observable in the analytics solution (all pages or screens should be tagged for inclusion
- Build dashboards based to visualize KPIs and VBFs
- All error pages must be tagged and included in the analytics solution (4xx, 5xx)
- The team should understand how analytics indicators relate to NPS scores
- Make sure all key teams have access to the tool
- Train all key teams on the tool and how it fits into the monitoring strategy
- Recommended:
- Build dashboards to visualize key customer journeys (funnels)
- Tag and track all error "states". These are scenario's that result in a 200 status code, but an error of some kind is shown to the customer (invalid actions, etc)
- Completion Criteria: All "required" items have been implemented or completed. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Review and Improve Performance Testing Strategy

- Determine if the team has a dedicated performance testing strategy and plan. Observe at least one production performance test and document any improvements that are identified. Identify the non-negotiable items and work to have them implemented.
- Required:
- Performance tests should be executed at least 4 times per year
- The performance testing strategy must mirror real customer interactions as closely as possible
- The application must be sufficiently instrumented with monitoring tools to draw conclusions from the performance test about the scalability of the application
- The application should have a scaling strategy to meet additional load (horizontal scaling, vertical scaling, auto-scaling, manual scaling, etc)
- Document and evaluate the metrics that trigger a scaling event
- Performance test load should simulate 1x Peak Season predictions
- Recommended:
- There should be specific monitoring dashboards used to monitor KPI's during a performance test
- Performance tests should be executed in production environments
- Performance test load should simulate 2x Peak Season predictions
- Completion Criteria: The SRE has observed at least one performance test and documented recommendations. All "required" items have been implemented or completed. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Review and Improve Local Traffic Manager (LTM) Checks

- Determine if/how the LTM is monitored. Generate and document recommendations.
- Validate that monitoring exists for the Load Balancer LTM
- If not, implement monitoring
- Ensure load balancer is truly 'balanced' and not overworking nodes
- Make sure all key teams have access to the monitoring tool or dashboard for the LTM
- Completion Criteria: LTM is properly monitored. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Review and Improve Incident Response

- Observe at least one P1 or P2 War Room, then generate and document recommendations. Guide the team towards a culture of responsibility and ownership of their service that leads to urgency during a War Room. Identify the non-negotiable items and work to have them implemented.
- Required:
- The team is accurately measuring and analyzing MTTD and MTTR
- There are playbooks available for common tasks stored in a common location. (Application restart, DC traffic switching, etc).
- The team is following the Alerting Strategy from E1.2 to trigger war rooms
- The team is following the On-Call Strategy from E1.3 to respond to Alerts
- The team is conducting blameless Post Incident Reviews (PIRs) for every P1 or P2
- Root Cause Analysis is completed for every P1 and P2
- Findings and recommendations from PIRs and RCAs were shared with the team
- A culture of learning is established recognizing every incident not as a failure but an opportunity to better understand our complex systems
- Recommended:
- The team designates an "Incident Commander" or "Technical Lead" during war-rooms
- The team accurately measures and analyzes MTTR and all sub-components (MTTD, MTTA, MTTI, MTTF)
- Completion Criteria: All "required" items have been implemented or completed. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Review and Improve Environmental Equivalency

- Work with the team to understand the various relevant environments for the application (build, QA, Stage, Prod-Like, Productions, etc). Lower environments should be as similar to production as possible. Are there concerns from the team that testing is not valuable because lowers are too dis-similar from Prod? Generate and document recommendations.
- Lower environments should be sufficiently similar to production to make testing in lowers valid
- Ideally lower env config should be identical to production
- Lower env should be refreshed at that same time as production
- Lower env data should be refreshed on a regular schedule to closely mirror production schemas
- If the lower env use stub services to simulate supply chain dependencies, the stubs should be periodically reviewed for equivalency to their production counterparts (data contract, response time, etc)
- Completion Criteria: The SRE should assess that the environmental equivalency meets the needs of the application. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Implement / Validate Real User Monitoring (RUM) Solution

- Generate and document recommendations for Real User Monitoring. The application should leverage some type of RUM Solution (Bucky.js, Dynatrace UEM, etc). RUM is an important tool in the defense-in-depth monitoring strategy. It serves to capture technical data on the clients actual device. It gives us the most accurate and actionable data about the Real User Experience. The Rum Solution should contain the following data / attributes:
- Required:
- Capture data at the client end (Browser, mobile device)
- Capture data like:
- Browser Type/Version/Capabilities
- Browser Timings (Network Time, DOM Complete, Page Interactive, etc)
- Have the ability to generate alerts based on the Alerting Strategy
- The team should understand how RUM indicators relate to NPS scores
- Make sure all key teams have access to the tool
- Train all key teams on the tool and how it fits into the monitoring strategy
- Recommended:
- Implement dashboard to visualize RUM data, preferably Time-Series dashboards
- Capture data in a mechanism consistent with monitoring telemetry. Store the data in a time series database like InfluxDB or Graphite
- Leverage the RUM Solution to implement Front End Logging to catch client side errors
- Completion Criteria: RUM data is being collected on all front end experiences. All "required" items have been implemented or completed. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Implement / Validate Telemetry Monitoring Solution

- Generate and document recommendations for Telemetry monitoring. Identify the non-negotiable items and work to have them implemented. The application should leverage some type of Telemetry Solution (TICK, Prometheus, etc). Telemetry is an important tool in the defense-in-depth monitoring strategy. It captures critical metrics about system state at a very high frequency and and resolution. Telemetry enables significantly improved MTTD, as well as advanced KPI observability.
- Required:
- Method to capture telemetry data at each host at a frequency every 30 seconds or less
- TimeSeries Database to store the data collected from each host
- Dashboard solution to visualize the telemetry data either by individual metric or in aggregate
- Method to alert on the telemetry data in accordance with the Alerting Strategy defined in E1.2
- Data should be able to be viewed in "real-time" with no more than a 1 minute lag.
- Solution implemented on all application and web servers that support the app/service
- Captured metrics should include host level data like CPU, Mem, Disk, etc
- For web applications and services where applicable: Status codes, Response times, Threads, Workers
- Make sure all key teams have access to the tool
- Train all key teams on the tool and how it fits into the monitoring strategy
- Recommended:
- Collect data at a frequency of every 10 seconds
- Alert triggers configured to support a MTTD of less than 1 minute (assuming sufficient traffic loads)
- Solution implemented on all nodes in the applications ecosystem
- Custom Telemetry data implemented in the application for KPIs and VBFs
- Solution should support zero-configuration for new hosts. Should be able to build the host with the agent and an endpoint and start collecting metrics.
- This is required for auto-scaling applications
- Completion Criteria: Telemetry data is being collected on all web and app servers, dashboards are available, and alerts are configured. All "required" items have been implemented or completed. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Implement / Validate VIP-Level Checks

- Determine if/how the VIP's are monitored. Generate and document recommendations.
- Validate that monitoring exists for the associated VIP's
- If not, implement monitoring
- Make sure all key teams have access to the monitoring tool or dashboard for the VIP
- Completion Criteria: VIP's are properly monitored. Produce a report that outlines all of the recommendation that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Implement / Validate Advanced Splunk Configuration

- If the application is using a log file aggregation tool other than Splunk. Enable advanced Splunk features like Splunk AI, and IT Service Intelligence (ITSI). Generate and document recommendations.
- Enable and configure ITSI and Glass Tables
- Enable Splunk AI Event Analytics
- Configure advanced dashboards that tie back to customer experiences and VBFs
- Leverage high quality and efficient splunk searches (base search, selection boxes, etc)
- Configure alerts in accordance with the Alerting Strategy defined in E1.2
- Make sure all key teams have access to the tool
- Train all key teams on the tool and how it fits into the monitoring strategy
- Completion Criteria: Splunk advanced features have been enabled and the team understands how they fit into the defense-in-depth monitoring strategy. Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Implement / Validate Advanced Data Visualization

- Based on the all the previous epics, data acquired across multiple monitoring tools should be aggregated and visualized as dashboards to highlight KPIs and VBFs. Dashboards show actionable metrics & avoid ego metrics. Generate and document recommendations.
- Leverage a dashboard solution that can pull data from multiple sources, such as Grafana, Kibana, etc.
- Integrate as many key metrics from different systems into the dashboard solutions as feasible to eliminate tools switching for high level observability
- Focus on the metrics that matter. If you could pick only one metric to visualize the health of the system what would it be?
- In e-commerce, this might be orders per minute. For Netflix it is Stream Starts per second
- The metric should encapsulate many of the key services that make up the application
- The metric should represent an action that you would sacrifice other pieces of functionality to preserve
- Enable High Level dashboards with the ability to drill in
- These dashboards should be open and available to anyone in the organization, promoting data transparency
- Build clusters of dashboards around VBFs or activities (Release Dashboards, Incident Dashboards, etc)
- Make sure all key teams have access to the tool
- Train all key teams on the tool and how it fits into the monitoring strategy
- Completion Criteria: An advanced data visualization tool has been implemented. Useful dashboards have been built. The team knows how to use the dashboards, update them and create new ones. Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards.

### Implement / Validate Advanced Alerting

Enable advanced alerting techniques. This is highly specific to the application, thus the SRE will need to generate and document specific recommendations for the team using the below items as guidelines.

- The team leverages a persistent chat tool like flowdock or Slack or Cisco Spark
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

### Implement / Validate Advanced Incident response

- Observe at least one war room. Asses and shape the team's Incident response culture and performance. Generate and document recommendations.
- The team is mature in their on-call rotation strategy, with only one person on call at a time
- The team is leveraging a multi-modal user defined notification tool (sms, phone, push, chat, email, etc) with automatic timeout escalation
- MTTA is less than 5 minutes
- The team is using an Incident Commander model, clearly identifying the one person on the War Room who is responsible for making decisions
- The Incident commander leverages resources at their disposal to nominate a second in command, scribe, external comms resource if necessary
- The team focuses on fast path to resolution, making hard decisions in service of the customer experience
- The team is fully engaged in the chat ops model. They keep track of timelines and execute actions via persistent chat, while also utilizing a voice call
- The team is leveraging self-service war-rooms
- The team is conducting simulated war-rooms at least 4 times a year
- PIRs are blameless and productive learning sessions
- Root cause or contributing causes are identified within one week
- Completion Criteria: The team has demonstrated a mature Incident response process and culture. Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant reports, tools, systems and dashboards.

### Introduce Chaos Engineering

Based on all the previous epics, the application should be sufficiently reliable and resilient to meet it's SLA/SLEs. At this stage it is necessary to introduce the concepts of Chaos Engineering in order to better understand the behavior of the system.

- Teach and train the team on the core concepts of Chaos Engineering
- Pick a scenario for an initial Chaos Experiment
- This should be a relatively simple and well controlled experiment like switching traffic from one data center to the other
- Plan out the experiment
- Hypothesis
- Simulated P1 incident
- Playbook for actions
- Identify and limit blast radius
- Indicator metrics
- Roll back steps
- Success criteria
- Table Top Chaos Experiment
- Production Chaos Experiment
- Procedure and rhythm established for future chaos experiments

Completion Criteria: A successful Chaos Experiment has been conducted in production. Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant reports, tools, systems and dashboards.

### Implement / Validate Automated Recovery

- Based on the all the previous epics, identify the top 3 likely conditions to result in an incident and implement an automated recovery process. Generate and document recommendations.
- Leverage advanced alerting techniques to identify issues
- Implement a fully automated recovery process
- Ensure proper logging of the automated recovery
- Define a fall back recovery process if the automated process fails
- Execute a Chaos Experiment to validate performance of the recovery process
- Completion Criteria: A successful Chaos Experiment has been conducted to validate the automated recovery process works as expected. Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant reports, tools, systems and dashboards.

### Implement / Validate Advanced AI/ML

- Identify areas to implement AI/ML and advanced heuristics for analyzing trends and war room avoidance. Generate and document recommendations.
- The team has implemented advanced heuristics and statistical models for alerting thresholds
- Holt Winters Forecasting
- Machine Learning algorithms to predict acceptable trend thresholds
- Identify KPIs and make predictions about their trends and behaviors under certain circumstances
- Leverage Change Control Risk Prediction
- Leverage intelligent agents to manage infrastructure
- Completion Criteria: Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant reports, tools, systems and dashboards.

### Implement / Validate GTM/LTM Control of Hosts

- Implement fine-grain GTM/LTM controls so that that the team can selectively remove hosts from the pool. Generate and document recommendations.
- Team should be able to selectively remove any given host from the pool
- Team should be able to route traffic to a DC, AZ or pool.
- Make sure all key teams have access to the tool
- Train all key teams on the tool and how to utilize it in an incident scenario
- Execute a Chaos Experiment to validate fine grain controls
- Completion Criteria: Successfully execute a chaos experiment that shows the ability to selectively remove a host from the pool. Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant reports, tools, systems and dashboards.

### Implement / Validate Advanced Performance Testing

- Implement processes, procedures and controls to enable advanced performance testing practices. Observe at least one performance test. Generate and document recommendations.
- Performance / Load tests should be run in the production environment
- Performance test scripts should exercise all production dependencies
- The team should be running a performance test after every release, or if CI/CD, every two weeks
- Simulate at least 2x predicted Peak Season Load
- At least four times a year, execute a performance test that pushes the application to the breaking point to determine max load
- Completion Criteria: Perf testing in production at high frequency. At least one max load test has been performed. Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant reports, tools, systems and dashboards.

### Implement / Validate Immutable Infrastructure

- If possible, the application should shift to an immutable infrastructure architecture. This eliminates config drift and drastically simplifies trouble-shooting. Generate and document recommendations.
- NEVER make a change to a production instance.
- Only make change to the Pod/Container/Image, then build a new instance and deploy the new instance
- Completion Criteria: Only immutable infrastructure is used in production. Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant reports, tools, systems and dashboards.

### Implement / Validate Supply Chain Observability

- Leverage a common construct to pass context up and down the stack. Generate and document recommendations.
- The below items should be present and logged in every request. If the application doesn't receive them, it should generate them and pass them downstream.
- Transaction GUID
- Session GUID
- Top Level First Seen Timestamp
- Top Level Timeout
- Additionally, if the application is anything other than the first hop, it should compare the current time with the remaining time left on the top level timeout and cancel the request if it can't be completed in time to meet the Top Level Timeout.
- Completion Criteria: The above listed values are logged for captured, logged and sent to downstream requests for every transaction. Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant reports, tools, systems and dashboards.
