---
id: incident-command-system
title: Incident Command System
---

## Purpose

The intention of this document is to help understand how to build a foundation for an effective incident response process in our organization. To accomplish this, this document covers suggested practices needed for successful incident response, practices that limit damage and reduce recovery time and costs, how to scale the Incident Command System (ICS) up or down as necessary for your teams, mapping ICS roles to real responders in your organization as well as describe considerations when taking on multiple roles, and how to effectively communicate with stakeholders during major incidents.  

## Contents

[History and Introduction of Incident Response](#history-and-introduction-of-incident-response)  
[People Roles and Incident Categorization](#people-roles-and-incident-categorization)  
[Best Practices for Incident Commanders](#best-practices-for-incident-commanders)  
[Other Roles in Incident Command](#other-roles-in-incident-command)  
[Incident Response at Scale](#incident-response-at-scale)  
[Incident Response Pitfalls and How to Avoid Them](incident-response-pitfalls-and-how-to-avoid-them)  
[Follow Up and Postmortem](#follow-up-and-postmortem)  
[Summary](#summary)  
[Other Incident Response Resources](#other-incident-response-resources)  

## History and Introduction of Incident Response

Consumers expect perfection.  
Consumers wait less than one minute before abandoning an application.  

Teams face massive complexity. 5 hours is the average amount of time it takes organizations to resolve a major (customer-impacting) incident.  

Vital to have a strategy to minimize the impact of incidents and reduce their recovery time and associated cost.
Incident Response is the continuous process of developing, practicing, and refining that strategy.  

Incident - An incident is any unplanned disruption or event that is actively affecting customers' ability to use the product.  
The goal of incident response is to handle a situation in a way that **limits damage and reduces recovery time and cost**.  

Replace chaos with calm.  

Incident Response is an _organized_ approach to addressing and managing an incident in a way that **reduces damages, recovery time, and cost**.  
To accomplish this goal, you must:  

- Mobilize and inform only the right people at the right time.  
- Use systematic learning and improvement.  
- Work toward total automation.  

### The Incident Command System (ICS)

National model for command structures for any major incident.  
Used so emergency personnel can have a standardized response everyone is familiar with. It helps to prevent confusion and chaos during an incident.  

What our version of ICS **should not** be in technology.  

- Inflexible set of rules
  - Culture and processes are constantly evolving
  - Frameworks need to allow for improvement and growth
- Indication of Future Failure
  - Organizations can adapt from any starting point
  - Only prerequisite is keeping an open mind
- Do or Die Mentality
  - Every company is set up differently
  - Culture change requires buy-in and time to adjust

### When to use a system like ICS

An incident is any unplanned disruption or event that is affecting customer ability to use the product.  

**Commonalities of Minor Incidents**  
Not Urgent; can be handled during normal business hours.  
Situation is a known failure mode with a known fix.  
Within the responsibilities of a **small team**.  

**Commonalities of Major Incidents**  
Timing is a surprise: typically little to no warning.  
Time matters. Need to respond quickly.  
Situation is rarely perfectly understood at the start.  
Require coordination and mobilization; often cross-functional.  

A major incident requires a coordinated response between multiple teams. This definition may differ for different teams and/por organizations.  
Need to define what a major incident is to your team or organization.  

Use the Incident Command System for Major Incidents.  
Major Incidents rarely start out as Major Incidents. Major Incidents usually evolve from a series of minor incidents.  

## People Roles and Incident Categorization

### Anatomy of Incident Command

Severity can often be calculated by how severely our metrics are impacted.  

### Criteria for Severity

Severity 1 - Critical issue that warrants public notification and liaison with executive teams.  
Criteria:  

- The system is in a critical state and is actively impacting a large number of customers.  
- Functionality has been severely impaired for a long time, breaking SLA.  
- Customer-data-exposing security vulnerability has come to our attention.  
- Major incident response.  

Severity 2 - Critical system issue actively impacting many customers' ability to use the product.  
Criteria:  

- Notification pipeline is severely impaired.  
- Incident response functionality (ack, resolve, etc) is severely impaired.  
- App is unavailable or experiencing severe performance degradation for most/all users.  
- Monitoring of PagerDuty systems for major incident conditions is impaired.  
- Any other event to which a PagerDuty employee deems necessary for incident response.  
- Major incident response.  

Severity 3 - Stability or minor customer-impacting issues that require immediate attention from service owners.  
Criteria:

- Partial loss of functionality, not affecting majority of customers.  
- Something that has the likelihood of becoming a Sev-2 if nothing is done.  
- No redundancy in a service (failure of 1 more node will cause outage).  
- High-Urgency page to service team.  

Severity 4 - Minor issue requiring action, but not affecting customer ability to use the product.  
Criteria:  

- Performance issues (delays, etc.) (I would argue performance IS a requirement for applications these days and is a more severe page in many cases).  
- Individual host failure (i.e one node out of a cluster).  
- Delayed job failure (not impacting event and notification pipeline).  
- Cron failure (not impacting event and notification pipeline).  
- Low-Urgency page to service team.  

Severity 5 - Cosmetic issues or bugs. not affecting customer ability to use the product.  
Criteria:  

- Bugs not impacting the immediate ability to use the system.  
- Jira/ServiceNow ticket (or GitHub issue).  

**Anyone** can trigger the Incident Response Process at any time.  
Automatic incident detection, triggering, and resolution whenever it can be done reliably, effectively, and accurately to reduce the human time to evaluate an incident is highly encouraged. But encouraging humans to trigger the incident response process is also highly encouraged when an incident not caught through automation is observed. It will lead to more incidents being resolved more quickly.  
For example, someone in marketing things a chart looks wrong, it should be encouraged they start the incident response process to notify the correct team of potential issue. Create a culture of transparency and trust from all areas of the organization.  

PagerDuty example: They use Slack command and a bot to trigger the Incident Response process.  
`!ic page`  

Use business metrics to drive automation of incident creation. Use metrics that let you know how your business is doing, not how a piece of equipment is doing.  
Examples: Netflix may use stream starts per second. Amazon may use orders per second.  

Avoid using metrics that are not tied to business (such as high CPU Utilization) for incidents. It is very difficult if not impossible to determine severity if using non business driven metrics.  

### The Difference in Emergency Operations

Hierarchy, clear order, work fast.  
Resolution team has the highest authority.  
Team works together to resolve incident, document what happened, and keep stakeholders updated.  
Emergency mode until the incident is officially resolved.  

One and only one person/role in charge.  

Avoid Decision Paralysis  
Taking the wrong action is better than taking no action.  

### Response Team Goals

- Work to resolve the incident quickly. (Deploy immediately to production instead of a typical build process).  
- Work to resolve the incident efficiently. (Methodical in approach by following the tenets of Incident Command).  
- Document decisions and follow up items. (Incidents should be documented real time to avoid hindsight bias).  
- Keep stakeholders informed. (Incidents impact business functionality. Keeping stakeholders informed helps manage the impact felt by other parts of the organization).  
- Stay in wartime until the incident is officially resolved. (Incidents impact business functionality. Keeping stakeholders informed helps manage the impact felt by other parts of the organization).  

### Role of Incident Commander

- Keep the process on track. Focus on taking actions and keep the process moving in an organized, calm, and effective manner.  
- They are in charge and the single source of reference.  
- Permission to perform any task should go through the incident commander. This is less about authority and more about voicing tasks and actions and giving the scribe and other members of the command layer to understand and document what is happening.  
- The incident commander is **not a resolver**, they coordinate and delegate.  
- Gain consensus of actions to be taken. "Are there any strong objections?"  
- Make a decision. Again, making the wrong decision is better than making no decision.  
- Ask for a status, decide action, gain consensus, assign task, follow up on task completion. Repeat.  
- Size-up, stabilize, update, verify. Repeat.  

Importance of Incident Commander Role:  

- Keeps everyone focused
- Keeps decision-making moving
- Helps to avoid the bystander effect (specifically select/assign a person to do a specific task)
- Keep things moving towards a resolution during a major incident
- A common framework for heterogeneous teams
- Dedicated role(s) for communicating stakeholder updates
- Dedicated role(s) for customer response
- A team focused on helping to mitigate future incidents
- Trained team creates space for responders to work as they normally would 

## Best Practices for Incident Commanders

**Stabilization Loop**
Size-up the situation, stabilize the situation, give an update on the situation, and verify if the situation has been stabilized. Repeat.  
Within the stabilize loop:  
Ask for a status, decide action, gain consensus, assign task, follow up on task completion. Repeat.  

The incident commander is not a resolver, they coordinate and delegate.  
The incident commander is the highest authority (even higher than the CEO).  

- Practice the two ears and one mouth rule.

1st rule of incidents. Don't Panic

Good communication is essential.  
Introduce yourself by name.  
Say "Incident Commander" - Establishes you are the one running the war room (in charge)  
"Hello, this is Greg. I am the Incident Commander."

Avoid acronyms if possible.  
Clear is better than concise.  

If no one with Incident Commander training is on the call, it is best to not assign an Incident Commander role.

Size-Up  
Stabilize  
Update  
Verify  

Stabilize:

1. Ask for a status
1. Decide action, gain consensus
1. Assign Task
1. Follow up on task completion

Ask what actions we can take. Ask the experts of their service.  
What are the risks involved with the proposed action?  
Make a decision. Making a wrong decision is better than not making a decision.  
Gain consensus.  
"I propose `<action>`. Are there any strong objections to this `<action>`? It is difficult to gain consensus on large calls. As an incident commander, you only care about those who strongly disagree with the proposed action(s).  
Clear Ownership. Clearly delegate tasks. Assign tasks to a specific person. It is ok to assign tasks to a role if names of people on the call are unknown.  
Make sure you get acknowledgement from the assigned person they understand the task and they are the one to do it.  
Time box all tasks  

What if they need more time? May be good to ask the experts how much time they think they will need to complete the task.  

1. What's wrong?  
1. What action can we take? What are the risks?  
1. Clear ownership with a timebox.  
1. What's the status?

## Other Roles in Incident Command

These roles are the minimum bases to cover. Bigger organizations may have other roles that fit with their business.  

### Deputy Role

Keeps the Incident Commander focused  
They are not a shadow to the Incident Commander. They are expected to perform important tasks.  
Takes on any and all additional tasks as necessary  
Serves to follow up on reminders and ensure tasks aren't missed  
Acts as a "hot standby" for the Incident Commander  

### Scribe Role

Documents the incident timeline and important events as they occur  
The incident log will be used during the postmortem process  
Note when important actions are taken, follow-up items, and status updates  
Anyone can be a Scribe - role is typically assigned by the Incident Commander at the start of the call  

### Communications Liaison

Can be external, internal, or both  
Notifies customers of current conditions and informs the Incident Commander of relevant feedback  
Crafts language appropriate status updates and notification messages  
Typically a member of the Support team  
Notify Stakeholders  

- Recommended to not send updates/notifications more frequently than every 20 to 30 minutes unless a big update occurs.  

## Incident Response at Scale

### Setting this up at scale

For a department-wide Incident Response process, you will need a few things set up to begin. This includes:

An on-call schedule for a primary and backup Incident Commander (this role is team agnostic)  
On-call schedules for primary and backup subject matter experts (one primary and one backup for each team)  
Additional on-call rotations for other roles  
A method of paging team members (response mobilization)  

### Incident Response - Typical Sequence of Events

1. Subject Matter Expert (SME) - Usually first individual to respond and solve (or escalate)  
1. If the incident is not resolved by the SME and the incident worsens and becomes a major incident (war room situation), an escalation will be triggered.  
1. Once that incident is triggered, the Incident Commander, Scribe, Deputy, and Liaisons should be paged in.  
1. If needed, additional SMEs should be paged in.  

### How Do Roles Scale Down

For a small team-based incident response, you will beed a few things set up to begin. This includes:

- An on call schedule for primary and backup subject matter experts  
- A method of paging out other team members  

### How to Prepare to Manage Incident Response Teams

1. Step 1 - Ensure explicit processes and expectations exist.  
1. Step 2 - Set up runbooks and automated actions
    - Create priority based triages  
1. Step 3 - Find ways to create more space for your teams to work  
1. Step 4 - Make Checklists (refer to Checklist Manifesto Notes)  Mitigate risk and minimize mistakes wherever possible.  
    - Checklists also create break points and opportunities to step back where needed.  
1. Step 5 - Practice Running Major Incidents as a Team. (Have a failure Friday? Intentionally break something and create an incident and practice as a team)

## Incident Response Pitfalls and How to Avoid Them

### Anti-patterns

Executive joins the call. "Ignore the IC, Do what I say!" - remember the IC is the ultimate authority on the war room.  
Strategy to avoid this:  
You can ask that executive, "Do you wish to take command?"  
You can state, "We understand your concern, but your slowing down the process of resolving the issue."  

Executive joins the call. "Can I get a spreadsheet of all the affected customers?"
Strategy to avoid this:  
You can state, "We can either get you that list, or fix the incident. Not both. The incident takes priority."  

Executive joins the call. "Is this really a Sev-1?"  
Strategy to avoid this:
Do not discuss severity during the call. **Don't debate severity during call.** When it doubt, default to a higher severity. The place for the severity discussion is during the post mortem.  

Failure to Notify Customers  

Getting Everyone on the Call / Forcing Everyone to Stay on the Call  

- Don't do this. No one wants to be on calls they are not needed for. Let people drop off if they are not needed.  

Being overly focused on an issue.  

- Keep bigger picture in mind. Try not to get tunnel vision.  

Requiring deeply technical Incident Commanders

- Don't need deep technical knowledge. Rely on SMEs for tech know how.  

Taking on multiple roles  

- Don't take on multiple roles. Do your job and trust others to do theirs.  

Litigating policy during an incident.  

- Don't try and adjust policy or process during an incident. This should be handled during the postmortem.  

The Belligerent Responder  

- If there is an unruly person on the call (strong egos, big opinions), be firm and let the person know they are being disruptive. Let them know of their behavior and state they will be removed if they continue. No second chances.  

Handoffs are encouraged  

- Incident commanders are people too. When fatigue sets in, it's important to hand off the incident commander role to someone else.  

## Follow Up and Postmortem

### After Incident Resolution

Don't neglect the postmortem.  
Without a postmortem you will fail to recognize what is going right and, most importantly, how to avoid the same situation in future.  
An incident is not considered complete until a postmortem is published.  
BLAMELESS - you can't fire your way to reliability  
When there is a culture of blame, engineers will hesitate to speak up and this results in longer resolution times. Psychological safety.  
Review the incident response process during postmortem. 

## Summary

An incident is any unplanned disruption or event that is actively affecting customers' ability to use the product.  
A major incident requires a coordinated response between multiple teams.  
Anyone can trigger the Incident Response Process at any time.  
Incident Response is the practice of developing, practicing, and refining incident strategy.  
The goals of Incident Response are to limit damage and its associated costs.  
Use ICS only for major incidents.  

Don't neglect the postmortem.  
The postmortem is just as important as the resolution process.  

Incident Command is a cycle that repeats until an incident is resolved.  

- Size-Up  
- Stabilize  
- Update  
- Verify  

Each role specializes in a specific task to streamline response.  

- Automate responses and workflows based on machine learning.  

Getting started takes buy-in, preparation, and practice.  

- Create clearly defined definitions and process  
- Set up runbooks and other automated actions  
- Make Checklists  
- Practice running major incidents as a team.  

## Other Incident Response Resources

[PagerDuty Incident Response](https://response.pagerduty.com/)  
[Optum SRE Incident Response](https://new-wiki.optum.com/display/optumSRE/SRE+Cert+-+Incident+Response)  
[Google - Managing Incidents](https://landing.google.com/sre/sre-book/chapters/managing-incidents/)  
[Optum Percipio - Exploring Incident Management](https://optum.percipio.com/courses/e0237714-ea51-11e6-965b-0242c0a80b04/videos/e0237717-ea51-11e6-965b-0242c0a80b04)  
