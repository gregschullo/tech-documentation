---
id: google-site-reliability-engineering
title: Google Site Reliability Engineering
---

## Preface

For the systems you look after, for the groups you work in, or for the organizations you’re building, please bear the SRE Way in mind: thoroughness and dedication, belief in the value of preparation and documentation, and an awareness of what could go wrong, coupled with a strong desire to prevent it. Welcome to our emerging profession

## [Chapter 1 - Introduction](https://landing.google.com/sre/sre-book/chapters/introduction/)

"Hope is not a strategy"

The Sysadmin Approach to Service Management

* Development/Ops split has a number of disadvantages that fall broadly under two categories. Direct Costs and Indirect Costs
* Direct Costs are not subtle or ambiguous
* Indirect Costs are often subtle and often more costly to the organization than direct costs

Google's Approach to Service Management: Site Reliability Engineering

* Site Reliability Engineering is what you get when you ask a software engineer to design an operations team
* By design, it's crucial SRE teams are focused on engineering. Without constant engineering, operations load increases and teams will need more people just to keep pace with the workload and doing the same tasks over and over.

Pursuing Maximum Change Velocity Without Violating a Service’s SLO

* Error Budget - Shooting for 100% reliability is wrong for basically everything. Users receive little benefit between 99.999% and 100%
* The correct reliability to shoot for is not a technical question, but a production one. Some questions to take into consideration should be:
  1. What level of availability will the users be happy with, given how they use the product?
  1. What alternatives are available to users who are dissatisfied with the product’s availability?
  1. What happens to users’ usage of the product at different availability levels?
  * The business must determine the availability target. Once established, the error budget is one minus the availability target. A service that is 99.99% available is 0.01% unavailable. The permitted 0.01% unavailability is the error budget, which can be spent on anything you want as long as you don't overspend.

Monitoring

* Monitoring is one of the primary means by which service owners keep track of a system’s health and availability.
* There are 3 kinds of valid monitoring output
  1. Alerts
  * Need to be handled by a human immediately
  1. Tickets
  * Signify that humans need to take action, but not immediately
  1. Logging
  * No one needs to look at this information, but it is recorded for diagnostic or forensic purposes. The expectation is that no one reads logs unless something else prompts them to do so.

## [Chapter 2 - The Production Environment at Google, from the Viewpoint of an SRE](https://landing.google.com/sre/sre-book/chapters/production-environment/)

Goes into detail about hardware and how data centers are structured at Google

* Whether it is at Google or elsewhere, monitoring is an absolutely essential component of doing the right thing in production.

## [Chapter 3 - Embracing Risk](https://landing.google.com/sre/sre-book/chapters/embracing-risk/)

* Again, shooting for 100% reliability is often not the best case scenario. A user cannot tell the difference between 99.99 and 99.999% uptime. With this in mind, rather than maximizing uptime, Site Reliability Engineering seeks to balance the risk of unavailability with the goals of rapid innovation and efficient service operations, so users' overall happiness with features, service, and performance is optimized.

Measuring Service Risk

Time Based Availability

* Availability = uptime/(uptime+downtime)
* Instead of using metrics around uptime, define availability in terms of request success rate (Aggregate Availability)

Aggregate Availability

* Availability = successful requests/total requests
* In a typical application, not all requests are equal
* It is best practice to test a new release on a small subset of a typical workload. This is known as canarying.
* Managing service reliability is largely about managing risk, and managing risk can be costly.

## [Chapter 4 - Service Level Objects](https://landing.google.com/sre/sre-book/chapters/service-level-objectives/)

* It is important to understand which behaviors really matter for a service and how to measure and evaluate those behaviors. We need to define and deliver a certain level of service to our users.

Indicators

* Service Level Indicator (SLI) - a quantitative measure of some aspect of the level of service that is provided.
* Most services consider request latency and error rate as key SLIs.

Objectives

* Service Level Objective (SLO) - a target value or range of values for a service level that is measured by an SLI.
* Agreements
* Service Level Agreements (SLA) - an explicit or implicit contract with your users that includes consequences of meeting (or missing) the SLOs they contain.

Choosing Targets

* Don't pick targets based on current performance. While understanding the merits and limits of a system is essential, adopting values without reflection may lock you into supporting a system that requires heroic efforts to meet its targets, and that cannot be improved without significant redesign.
* Keep it simple
* Avoid absolutes
* Have as few SLOs as possible
* Control Measures
* SLIs and SLOs are crucial elements in the control loops used to manage systems:
  1. Monitor and measure the system’s SLIs.
  1. Compare the SLIs to the SLOs, and decide whether or not action is needed.
  1. If action is needed, figure out what needs to happen in order to meet the target.
  1. Take that action.

## [Chapter 5 - Eliminating Toil](https://landing.google.com/sre/sre-book/chapters/eliminating-toil/)

* Invent more, toil less
* Toil - Operational work tied to running a production service that tends to be manual, repetitive, automatable, tactical, devoid of enduring value, and that scales linearly as a service grows.
  * Toil leads to career stagnation, low morale, creates confusion, slows progress, sets precedent, promotes attrition, and causes breaches in faith (specifically for those who join SRE roles from elsewhere)

## [Chapter 6 - Monitoring Distributed Systems](https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/)

This section offers guidelines for what issues should interrupt a human via a page, and how to deal with issues that aren’t serious enough to trigger a page.

Monitoring - Collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifetimes.

White Box Monitoring - Monitoring based on metrics exposed by the internals of the system, including logs, interfaces like the Java Virtual Machine Profiling Interface, or an HTTP handler that emits internal statistics.

Black Box Monitoring - Testing externally visible behavior as a user would see it.

Dashboard - An application (usually web-based) that provides a summary view of a service’s core metrics. A dashboard may have filters, selectors, and so on, but is prebuilt to expose the metrics most important to its users. The dashboard might also display team information such as ticket queue length, a list of high-priority bugs, the current on-call engineer for a given area of responsibility, or recent pushes.

Alert - A notification intended to be read by a human and that is pushed to a system such as a bug or ticket queue, an email alias, or a pager. Respectively, these alerts are classified as tickets, email alerts, and pages.

Root Cause - A defect in a software or human system that, if repaired, instills confidence that this event won’t happen again in the same way. A given incident might have multiple root causes: for example, perhaps it was caused by a combination of insufficient process automation, software that crashed on bogus input, and insufficient testing of the script used to generate the configuration. Each of these factors might stand alone as a root cause, and each should be repaired.

Node and Machine - Used interchangeably to indicate a single instance of a running kernel in either a physical server, virtual machine, or container. There might be multiple services worth monitoring on a single machine. The services may either be:

* a. Related to each other: for example, a caching server and a web server
* b. Unrelated services sharing hardware: for example, a code repository and a master for a configuration system like Puppet or Chef
  * Push - Any change to a service’s running software or its configuration.

WHY MONITOR?

* Analyze long term trends
* Comparing over time or comparing experiment groups
* Alerting
* Building dashboards
* Debugging

The 4 Golden Signals

* The four golden signals of monitoring are latency, traffic, errors, and saturation. If you can only measure four metrics of your user-facing system, focus on these four.
  1. Latency - The time it takes to service a request
  1. Traffic - A measure of how much demand is being placed on your system
  1. Errors - The rate of requests that fail
  1. Saturation - How "full" your system is.

* When creating rules for monitoring and alerting, asking the following questions can help you avoid false positives and pager burnout
* Does this rule detect an otherwise undetected condition that is urgent, actionable, and actively or imminently user-visible?
* Will I ever be able to ignore this alert, knowing it’s benign? When and why will I be able to ignore this alert, and how can I avoid this scenario?
* Does the alert definitely indicate that users are being negatively affected? Are there detectable cases in which users aren’t being negatively impacted, such as test deployments that should be filtered out?
* Can I take action in response to this alert? Is that action urgent, or could it wait until morning? Could the action be safely automated? Will that action be a long-term fix, or just a short-term workaround?
* The alert system should be designed to alert on imminent real problems, alert on potential long term problems, and support rapid diagnosis.
* These questions reflect a fundamental philosophy on pages and pagers:
* Every time the pager goes off, I should be able to react with a sense of urgency. I can only react with a sense of urgency a few times a day before I become fatigued.
* Every page should be actionable.
* Every page response should require intelligence. If a page merely merits a robotic response, it shouldn’t be a page.
* Pages should be about a novel problem or an event that hasn’t been seen before.

## [Chapter 7 - The Evolution of Automation at Google](https://landing.google.com/sre/sre-book/chapters/automation-at-google/)

The value of automation

Consistency: any action performed by a human or humans hundreds of times won’t be performed the same way each time: very few of us will ever be as consistent as a machine. This inevitable lack of consistency leads to mistakes, oversights, issues with data quality, and reliability problems. Consistency is, in many ways, the primary value of automation.

A Platform: automatic systems can be extended and applied to more systems. A platform also centralizes mistakes.

Faster Repairs

Faster Action

Time Saving

The evolution of automation follows a path:

No automation

Externally maintained system specific automation

Externally maintained generic automation

Internally maintained system specific automation

Systems that don't need automation (automation is automatic)

Automate yourself out of a job: Automate ALL The Things

## [Chapter 8 - Release Engineering](https://landing.google.com/sre/sre-book/chapters/release-engineering/)

Release engineering is a relatively new and fast-growing discipline of software engineering that can be described as building and delivering software.

Philosophy - Release engineering is guided by an engineering and service philosophy that’s expressed through four major principles.

Self Service Model - Release engineering has developed best practices and tools that allow product development teams to run their own release processes.

High Velocity - Aim to roll out new features as quickly as possible. Frequent releases results in fewer changes between versions.

Hermetic Builds - Build tools must allow us to ensure consistency and repeatability.

Enforcement of Policies and Procedures

Continuous Build and Deployment

Rapid - A Google developed automated release system that leverages a number of Google technologies to provide a framework that delivers scalable, hermetic, and reliable releases 

Building, Branching, Testing, Packaging, Rapid, Deployment

When equipped with the right tools, proper automation, and well-defined policies, developers and SREs shouldn’t have to worry about releasing software. Releases can be as painless as simply pressing a button.

## [Chapter 9 - Simplicity](https://landing.google.com/sre/sre-book/chapters/simplicity/)

Boring is a good thing in software

Remove code if it is not being run. Don't flag it. Don't comment it out. Remove it.

Software simplicity is a prerequisite to reliability.

## [Chapter 10 - Practical Alerting from Time-Series Data](https://landing.google.com/sre/sre-book/chapters/practical-alerting/)

"May the queries flow and the pager stay silent." - Traditional SRE Blessing

Monitoring, the bottom layer of the Hierarchy of Production Needs, is fundamental to running a stable service.

Monitoring enables service owners to make rational decisions about the impact of changes to the service, apply the scientific method to incident response, and to ensure their reason for existence: to measure the service’s alignment with business goals.

A service should be run in a symbiotic relationship with its monitoring.

Monitoring a large system is challenging for a few reasons:

1. The number of components to analyze.
1. The need to maintain a low maintenance burden on engineers responsible for the system

Mass data collection allows for cheap and efficient solutions where data can be used to generate charts and to create alerts. Because collection is no longer a short lived process, the history of collected data can be used for alert computation.

* These features help to meet the goal of simplicity by allowing the system overhead to be kept low so that the people running the services can remain agile and respond to continuous change in the system as it grows.
* Time series data - Chronological lists of data points
* Arena - A fixed-sized block of memory structure
* Vectors - slices and cross sections of a multidimensional matrix of data points in an arena
* Labelset - the name of a time-series that's implemented as a set of labels expressed as key value pairs
* A few of these label names are declared important, as the time-series must, at a minimum, have the following labels defined to be identifiable in the time-series database:
* var - the name of the variable
* job - the name given to the type of server being monitored
* service - a loosely defined collection of jobs that provide a service to the users, either internal or external 
* zone - A Google convention that refers to the location (typically the datacenter) of the Borgmon that performed the collection of this variable. 

## [Chapter 11 - Being On Call](https://landing.google.com/sre/sre-book/chapters/being-on-call/)

* SREs are typically have a diverse background in systems and software engineering as SREs place heavy emphasis on the use of engineering to approach problems previously experienced by operations teams that exist at a scale that would be intractable without software engineering solutions.
* 50% of an SREs time should be allocated to engineering projects that further scale the impact of the team through automation, in addition to improving the service

Balanced On Call

* Balance in Quantity
* If a service entails enough work to justify growing a single-site team, we (Google) prefer to create a multi-site team. A multi-site team is advantageous for two reasons.
* Night shifts have detrimental effects on people's health, and a multi-site "follow the sun" rotation allows teams to avoid night shifts all together.
* Limiting the number of engineers in the on-call rotation ensures that engineers do not lose touch with the production system(s).
* However, multi-site teams input communication and coordination overhead. Therefore, the decision to go multi-site or single-site should be based upon the trade-offs each option entails, the importance of the system, and the workload each system generates.

Balance in Quality

* For each on call shift, an engineer should have sufficient time to deal with any incidents and follow-up activities such as writing postmortems. Google has found that on average, dealing with the tasks involved in an on-call incident - root-cause analysis, remediation, and follow-up activities (like writing a postmortem and fixing bugs) takes about 6 hours.

Compensation

* Adequate compensation needs to be considered for out-of-hours support. Different organizations handle on-call compensation in different ways; Google offers time-off-in-lieu or straight cash compensation, capped at some proportion of overall salary. The compensation cap represents, in practice, a limit on the amount of on-call work that will be taken on by any individual. This compensation structure ensures incentivization to be involved in on-call duties as required by the team, but also promotes a balanced on-call work distribution and limits potential drawbacks of excessive on-call work, such as burnout or inadequate time for project work.

Feeling Safe

* Being an SRE on-call typically means assuming responsibility for user-facing, revenue-critical systems or for the infrastructure required to keep these systems up and running.
* Modern research identifies two distinct ways of thinking that an individual may (consciously or subconsciously) choose when faced with a challenge:
* Intuitive, automatic, and rapid action
* Rational, focused, and deliberate cognitive functions
* When one is dealing with outages related to complex systems, the second option is more likely to produce better results and lead to well planned incident handling.
* To ensure that engineers are in the appropriate frame of mind to leverage the mindset of rational, focused, and deliberate cognitive functions, it is important to reduce the stress related to being on-call. The importance and the impact of the services and the consequences of potential outages can create significant pressure on the on-call engineers, damaging the well-being of individual team members and possibly prompting SREs to make incorrect choices that can endanger the availability of the service. Stress hormones like cortisol and corticotropin-releasing hormone (CRH) are known to cause behavioral consequences—including fear—that can impair cognitive functions and cause suboptimal decision making
* Under the influence of these stress hormones, the more deliberate cognitive approach is typically subsumed by unreflective and unconsidered (but immediate) action, leading to potential abuse of heuristics. Heuristics are very tempting behaviors when one is on-call. For example, when the same alert pages for the fourth time in the week, and the previous three pages were initiated by an external infrastructure system, it is extremely tempting to exercise confirmation bias by automatically associating this fourth occurrence of the problem with the previous cause.
* While intuition and quick reactions can seem like desirable traits in the middle of incident management, they have downsides. Intuition can be wrong and is often less supportable by obvious data. Thus, following intuition can lead an engineer to waste time pursuing a line of reasoning that is incorrect from the start. Quick reactions are deep-rooted in habit, and habitual responses are unconsidered, which means they can be disastrous. The ideal methodology in incident management strikes the perfect balance of taking steps at the desired pace when enough data is available to make a reasonable decision while simultaneously critically examining your assumptions.
* It’s important that on-call SREs understand that they can rely on several resources that make the experience of being on-call less daunting than it may seem. The most important on-call resources are:
  * Clear escalation paths
  * Well-defined incident-management procedures
  * A blameless postmortem culture  
    * It should always be possible to escalate to a partner team when necessary. Appropriate escalation of outages is generally a principled way to react to serious outages with significant unknown dimensions (what does that mean?)
    * When an incident occurs, it's important to evaluate what went wrong, recognize what went well, and take action to prevent the same errors from happening again in the future.

* Focus on events rather than people. 
  * Mistakes happen, and software should make sure that we make as few mistakes as possible.
  * Recognize automation opportunities. It's one of the best ways to prevent human error.

Avoiding Inappropriate Operational Load

* Misconfigured monitoring is a common cause of operational overload.
* Paging alerts should be aligned with the symptoms that threaten a service's SLOs
* All paging alerts should be actionable
* Low priority, frequent alerts disrupt productivity and can cause serious alerts to be treated less seriously 
* It is important to control the number of alerts for a single incident
* Silence duplicate or uninformative alerts generated by a single incident
* SRE teams should be sized to allow every engineer to be on call at least once or twice a quarter. This allows for familiarity with the production system(s) and addresses an appropriate confidence level.

## [Chapter 12 - Effective Troubleshooting](https://landing.google.com/sre/sre-book/chapters/effective-troubleshooting/)

* We can think of the troubleshooting process as an application of the hypothetico-deductive method: given a set of observations about a system and a theoretical basis for understanding system behavior, we iteratively hypothesize potential causes for failure and try to test those hypotheses.
* A process for troubleshooting
a. Problem Report
b. Triage
c. Examine
d. Diagnose
e. Test/Treat
f. Cure

Test Hypotheses in two ways. Compare the observed state of the system against our theories to confirm or disconfirm or we could "treat" the system by changing the system in a controlled way and observe the results.

Ineffective troubleshooting sessions are caused by problems at the triage, examine, and diagnose steps usually due to lack of deep system understanding. Common issues include looking at symptoms that aren't relevant or misunderstanding the meaning of system metrics, misunderstanding how to change the system, its inputs or environment to safely and effectively test a hypotheses, thinking up improbable theories or latching on to causes of past issues, and hunting down correlations that are coincidences or are correlated with shared causes

Not all failures are equally probable

Correlation does not equal causation

Problem Report

* An effective problem reports should tell you the expected behavior, actual behavior, and how to reduce the unwanted behavior if possible.

Triage

* Your first response in a major outage may be to start troubleshooting and try to find a root cause as quickly as possible. Ignore this instinct
* Your first response should be to make the system work as well as it can under the circumstances.

Examine

* We need to be able to examine what each component in the system is doing in order to understand whether or not it's behaving correctly
* Monitoring systems can record metrics and metrics are a good place to start figuring out what's wrong.
* Logging is a valuable tool as it allows for understanding exactly what a process is doing at a given point in time.
  * Analyzing system logs across one or many processes may be necessary.
* Tracing requests through the WHOLE STACK provides a VERY POWERFUL way to understand how a distributed system is working.

More on Logging

* Text logs are helpful for reactive debugging in real time
* Stored logs in a structured format can make it possible to build tools to conduct analysis with more information.
* Having multiple verbosity levels available along with a way to increase these levels on the fly is useful. This functionality enables you to examine operations in detail without having to restart your process when there are issues, while still allowing you to dial back the verbosity levels when your service is operating normally.

Diagnose  

* Simplify and reduce
* Inject known test data as input to check the output is what is expected. Having reproducible test cases makes debugging much faster
* In a multi-layer system, it is useful to start systematically from one end of the stack and to the other end, examining each component in turn.
* Ask "what," where," and "why." A malfunctioning system is often still attempting to do something, just not what you want it to be doing. Finding out what it's doing instead of what you want and why it's doing it, and where resources are being used can help to gain understanding how things have gone wrong.

Test and Treat

* Test hypotheses using the experimental method to rule out hypotheses.

Negative Results are Magic

* A negative result is an experiment outcome where the expected effect is absent. Any experiment that doesn't work out as planned.
* Negative results should not be ignored or discounted as realizing you are wrong has value
* Experiments with negative results are conclusive
* Tools and methods can outlive an experiment and inform future work
* Publishing negative results improves our industry's data-driven culture
* Publish results of your experiments

Cure

* Proving a cause is often difficult in production systems. Most of the time we can only find a probable cause because systems are complex and reproducing an issue may not be an option in a production system.

Making Troubleshooting Easier

* The most fundamental ways to simplify and speed up troubleshooting are building observability and by designing systems with well understood and observable interfaces between components.

## [Chapter 13 - Emergency Response](https://landing.google.com/sre/sre-book/chapters/emergency-response/)

Things break; that's life.

What to Do When Systems Break

* Don't panic... Typically, no one is in physical danger... Things could be worse.
* Pull in more people where necessary, but be familiar with and follow your company's incident response process

Test-Induced Emergency

* Break systems, watch how they fail, and make changes to improve reliability and prevent future failures from occurring.

Change-Induced Emergency

* Perform tests on configuration changes to ensure they don’t result in unexpected and undesired behavior. Scale and complexity of infrastructure make it hard to anticipate every dependency or interaction. These tests can help uncover unknown

Process-Induced Emergency

* Sometimes, automation efficiency can be scary to think about, especially when automation does not go as planned.

All Problems Have Solutions

* Systems will not only break, but will break in ways that could never previously be imagined.
* Once an emergency has been mitigated, don't forget to set aside time to clean up and write up the incident

Learn from the Past. Don't Repeat it.

* Keep a history of outages. History is about learning from everyones' mistakes.
* Ask the big, even improbable questions. What if...?

## [Chapter 14 - Managing Incidents](https://landing.google.com/sre/sre-book/chapters/managing-incidents/)

Effective incident management is key to limiting the disruption caused by an issue and restoring normal business operations as quickly as possible.

Anatomy of Unmanaged Incidents

* Sharp Focus on the Technical Problem
  * Many times we think about trying to resolve an issue rather than the big picture and how to mitigate an issue if the technical task at hand is overwhelming
* Poor Communication
* Freelancing
  * Work with others in solving problems. Sometimes troubleshooting efforts can make a situation worse.

Elements of Incident Management Process

* Incident management skills and practices exist to channel the energies of enthusiastic individuals. A well designed incident management process has the following features

1. Recursive Separation of Responsibilities

* Know your role and don't do someone elses. A clear separation of responsibilities allows individuals more autonomy.

1. Incident Command
1. Operational Work
1. Communication
1. Planning
1. A Recognized Command Post

* It is important for interested parties to know where they can interact with the incident commander. This may include a War Room or incident updates via email and INC tickets.

1. Live Incident State Document

* The incident commander's most important responsibility is to keep a living incident document.

1. Clear, Live Handoff

When to Declare an Incident

* It is better to declare an incident early and then find a simple fix than to have to spin up the same incident management framework hours into an ongoing problem.
* Set clear conditions for declaring an incident
Example:
* Do you need to involve a second team to resolve this problem?
* Is the outage visible to customers?
* Is the issue involved even after an hour's concentrated analysis?

Best Practices for Incident Management

Prioritize - Stop the bleeding, restore service, and preserve the evidence for root-causing.

Prepare - Develop and document your incident management procedures in advance, in consultation with incident participants.

Trust - Give full autonomy within the assigned role to all incident participants.

Introspect - Pay attention to your emotional state while responding to an incident. If you start to feel panicky or overwhelmed, solicit more support.

Consider alternatives - Periodically consider your options and re-evaluate whether it still makes sense to continue what you’re doing or whether you should be taking another tack in incident response.

Practice - Use the process routinely so it becomes second nature.

Change it around - Were you incident commander last time? Take on a different role this time. Encourage every team member to acquire familiarity with each role.

## [Chapter 15 - Postmortem Culture: Learning from Failure](https://landing.google.com/sre/sre-book/chapters/postmortem-culture/)

"The cost of failure is education."

A postmortem is a written record of an incident, its impact, the actions taken to mitigate or resolve it, the root cause(s), and the follow-up actions to prevent the incident from recurring.

Google's Postmortem Philosophy

The primary goals of writing a postmortem are to:

a. Ensure that the incident is documented
b. all contributing root cause(s) are well understood
c. effective preventative actions are put in place to reduce the likelihood and/or impact of recurrence

* Common postmortem triggers include:
  * User-visible downtime or degradation beyond a certain threshold
  * Data loss of any kind
  * On-call engineer  intervention (release rollback, rerouting of traffic, etc.)
  * A resolution time about some threshold
  * A monitoring failure (which usually implies manual incident discovery)

Blameless postmortems are essential. They must focus on identifying the contributing cause(s) of the incident without indicating any individual or team for bad or inappropriate behavior. People are much more willing to bring issues to light if a blameless culture is in place and practiced.

* Best Practice: Avoid blame and keep things constructive.

Collaborate and Share Knowledge

* The postmortem workflow includes collaboration and knowledge-sharing at every stage
* Postmortem tools should include the following key features:
  * Real-time collaboration
  * An open commenting/annotation system
  * Email notifications

* Writing postmortems involves a formal review and publication. Review criteria may include:
  * What key incident data collected for posterity?
  * Are the impact assessments complete?
  * Was the root cause sufficiently deep?
  * Is the action plan appropriate and are resulting bug fixes appropriate priority?
  * Did we share the outcome with relevant stakeholders?

* Best Practice: No Postmortem Left Unreviewed.

Introducing a Postmortem Culture

* Introducing a blameless postmortem culture into an organization can be difficult. One of the biggest challenges is that some may question their value given the cost of their preparation. The following strategies can help in facing this challenge:
  * Ease postmortems into the workflow. A trial period with several complete and successful postmortems may help prove their value, in addition to helping identify what criteria should initiate a postmortem.
  * Make sure that writing effective postmortems is a rewarded and celebrated practice, both publicly and through individual and team performance management.
  * Encourage senior leadership's acknowledgement and participation. 

* Best Practice: Visibly Reward People for Doing the Right Thing.
* Best Practice: Ask for Feedback on Postmortem Effectiveness

## [Chapter 16 - Tracking Outages](https://landing.google.com/sre/sre-book/chapters/tracking-outages/)

Escalator - all alert notifications require acknowledgement from a human. If no acknowledgment is received from the primary on call, the alert gets escalated to the secondary on-call.

Outalator - Google's homegrown outage management solution

* Many organizations use messaging systems like Slack, Hipchat, or even IRC for internal communication and/or updating status dashboards. These systems are a great place to hick into with an outage tracking system.

Aggregation

* A single even will often trigger multiple alerts.
* While it may be worthwhile to attempt to minimize the number of alerts triggered by a single event, triggering multiple alerts is unavoidable in most trade offs between false positives and false negatives.
* The ability to group multiple alerts together into a single incident is critical in dealing with duplication.

Tagging

* Tagging can be used to add meta data to notifications. An example may look something like cause:network:switch
* Tags can be parsed and turned into a convenient link.

Analysis

* Historical data is useful when one is responding to an incident. What was done last time, is often a good starting point when diagnosing issues. Historical data is far more useful when it concerns systematic, periodic, or other wider problems that may exist. Enabling such analysis is one of the most important functions of an outage tracking tool.

Reporting and Communication

* It is important to have the ability to select zero or more outages including their subjects, tags, and "important" annotation in an email to the next on-call engineer.

Unexpected Benefits

* Benefits of being able to identify an alert coincides with a given other outage has obvious benefits that include increasing the speed of diagnosis and reducing lead on other teams by acknowledging there is a real incident. Non-obvious benefits include improving cross team visibility, which makes a difference in incident resolution  and incident mitigation.

## [Chapter 17 - Testing for Reliability](https://landing.google.com/sre/sre-book/chapters/testing-reliability/)

"If you haven't tried it, assume it's broken."

A key responsibility of SREs is to quantify confidence in the systems they maintain by adapting classical software testing techniques to systems at scale.

* Confidence can be measured both by past reliability and future reliability by analyzing data provided from monitoring system behavior. In order for these predictions to be strong and useful, one of the following must be true:
  * The site remains completely unchanged over time with no software releases or changes in the server fleet, which  means that future behavior will be similar to past behavior.
  * You can confidently describe all change to the sire, in order for analysis to allow for the uncertainty incurred by each of these changes.

Relationships Between Testing and Mean Time to Repair

* Passing a test or series of tests doesn't prove reliability, but tests that are failing generally prove the absence of reliability.
* A monitoring system can uncover bugs, but only as quickly as as the reporting pipeline can react. The Mean Time to Repair (MTTR) measures how long it takes the operations team to fix the bug, either through a rollback or another action.
* It's possible for a testing system to identify a bug with zero MTTR. Zero MTTR occurs when a system-level test is applied to a subsystem and that test detects the exact same problem that monitoring would detect. The more bugs you can find with zero MTTR, the higher the Mean Time Between Failures (MTBF) experienced by your users.

Types of Software Testing

* Software testing can be broken out into two main groups. Traditional and Production. Traditional tests are common in software development where production tests are performed on live web services to evaluate whether a deployed software system is working correctly.

* Traditional Tests
  * Hierarchy of Traditional Tests
  * Unit Tests - A unit test is the smallest and simplest form of software testing employed to assess a separable unit of software, such as a class or function for correctness independent of the larger software system containing the unit. Unit tests are also employed as a form of specification to ensure that a function or module exactly performs the behavior required by the system and are commonly used to introduce test-driven development concepts.
  * Integration Tests - Software components that pass individual unit tests are assembled into larger components. Integration tests are then run on an assembled component to verify that if functions correctly. Dependency injection is an extremely powerful technique for creating mocks of complex dependencies to an engineer can cleanly test a component.  
  Example: Replace a stateful database with a lightweight mock that has precisely specified behavior.
  * System Tests - The largest scale test that engineers run for an undeployed system. All modules belonging to a specific component, such as a server that  passed integration tests, are assembled into the system. Then the end to end functionality of the system is tested in many different flavors:
    * Smoke Tests - tests where simple but critical behavior is evaluated. Also known as sanity testing.
    * Performance Tests - test to ensure performance of the system stays acceptable over the duration of its lifecycle. A performance test also ensures that over time, a system doesn't degrade or become too expensive.
    * Regression Tests - test to prevent bugs from entering the codebase. Document bugs and don't accidentally introduce bugs that have already invested time and effort to eliminate back into the codebase.

* Production Tests - tests that interact with a live, production system, as opposed to a system in a hermetic testing environment. These tests are in many ways similar to black-box monitoring and are sometimes called black-box tests. Production tests are essential to running a reliable production service.
  * Rollout Entangle Test - to manage uncertainty and hide risk from users, changes may be pushed in a different order than they were added to source control. Rollouts often happen in stages, using mechanisms that gradually shuffle users around, in addition to monitoring at each stage to ensure that the new environment isn't hitting anticipated, yet unexpected problems.
  * Configuration Test - tests that examine production to see how a particular binary is actually configured and reports discrepancies against that file. Configuration tests are built and tested for a specific version of the checked-in configuration file.
  * Stress Test - tests used to understand the limits of the system and its components. Stress tests answer questions such as, how full can a database get before writes start to fail or how many queries a second can be sent to an application server before it comes overloaded, causing requests to fail?
  * Canary Test - test where a subset of components (servers is a good example) are upgraded to a new version or configuration and then left in an incubation period, leaving the rest of the components in a known good state. Provided things don't go awry, the rest of the components are upgraded as well. If things do go awry, those upgraded components may be quickly restored to a known good state.

Creating a Test and Build Environment

* Start with testing that delivers the most impact with the least effort.
  * Prioritize the codebase and focus on functions or classes that are mission and business critical.

* A few ways to establish a strong testing culture is to start documenting all reported bugs as test cases and to set up testing infrastructure with versioned source control that tracks every change to a codebase.
  * Once source control is in place, the addition of a continuous build system that builds software and runs tests every time code is submitted is very helpful.

* When the build system notifies engineers of an issue, it is crucial that fixing it becomes top priority for a few reasons:
  * It's harder to fix what is broken if there are changes to the codebase after the defect is introduced
  * Broken software slows down the team because they must work around the breakage
  * Release cadences, such as nightly and weekly builds, lose their value
  * The ability of the team to respond to a request for an emergency release (for example, in response to a security vulnerability disclosure) becomes much more complex and difficult.  

Testing Disaster

* Many disaster recovery tools can be carefully designed to operate offline. Such tools do the following:
  * Compute a checkpoint state that is equivalent to cleanly stopping the service
  * Push the checkpoint state to be loadable by existing non-disaster validation tools
  * Support the usual release barrier tools, which trigger the clean start procedure

Pushing to Production

* Software testing infrastructure often can't see production configuration

Testing is one of the most profitable investments engineers can make to improve the reliability of their product.

Testing is a continuous activity.

The amount of effort required to write good tests is substantial, as is the effort to build and maintain infrastructure that promotes a strong testing culture.

You can't fix a problem until you understand it, and in engineering, you can only understand a problem by measuring it.

## [Chapter 18 - Software Engineering in SRE](https://landing.google.com/sre/sre-book/chapters/software-engineering-in-sre/)
