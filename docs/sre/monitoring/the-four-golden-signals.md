---
id: the-four-golden-signals
title: The 4 Golden Signals
---

The four golden signals of monitoring are latency, traffic, errors, and saturation. If you can only measure four metrics of your user-facing system, focus on these four.

## Latency

The time it takes to service a request.  

- It is important to distinguish between the latency of successful requests and the latency of failed requests.
- Slow errors are worse than fast errors!

## Traffic

A measure of how much demand is being placed on your system.  

- Traffic is measured in a high-level system-specific metric
- For a web service, this metric is typically HTTP requests per second. For an audio streaming system, this metric may focus on network I/O or concurrent users.

## Errors

The rate of requests that fail.  

## Saturation

How "full" your system is.  

- When creating rules for monitoring and alerting, asking the following questions can help you avoid false positives and pager burnout
- Does this rule detect an otherwise undetected condition that is urgent, actionable, and actively or imminently user-visible?
- Will I ever be able to ignore this alert, knowing it’s benign? When and why will I be able to ignore this alert, and how can I avoid this scenario?
- Does the alert definitely indicate that users are being negatively affected? Are there detectable cases in which users aren’t being negatively impacted, such as test deployments that should be filtered out?
- Can I take action in response to this alert? Is that action urgent, or could it wait until morning? Could the action be safely automated? Will that action be a long-term fix, or just a short-term workaround?
- The alert system should be designed to alert on imminent real problems, alert on potential long term problems, and support rapid diagnosis.
- These questions reflect a fundamental philosophy on pages and pagers:
- Every time the pager goes off, I should be able to react with a sense of urgency. I can only react with a sense of urgency a few times a day before I become fatigued.
- Every page should be actionable.
- Every page response should require intelligence. If a page merely merits a robotic response, it shouldn’t be a page.
- Pages should be about a novel problem or an event that hasn’t been seen before.
