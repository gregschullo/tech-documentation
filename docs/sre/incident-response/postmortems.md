---
id: postmortems
title: Postmortems
---

Performing Postmortems after incidents is how we learn what we are doing right, where we can improve, and how to not make the same mistake again and again.

## Purpose

The intention of this document is to help with understanding the value behind running consistent postmortems, defining what a postmortem is and best practices for them, identifying different forms of biases in the workplace and how to combat them, and how to build a culture of blamelessness and continuous learning.

## Contents  

[Postmortem Basics and Introduction](#postmortem-basiscs-and-introduction)  
[Blame and Biases in the Workplace](#blame-and-biases-in-the-workplace)  
[Introducing Postmortems to your Organization](#introducing-postmortems-to-your-organization)  
[The Postmortem Report](#the-postmortem-report)  
[Putting Concept Into Practice](#putting-concept-into-practice)  
[Quick Tips for Success](#quick-tips-for-success)  
[Summary](#summary)  
[Other Postmortem Resources](#other-postmortem-resources)  

## Postmortem Basics and Introduction

### Why to Do Postmortems

Postmortems provide a peacetime opportunity to dig deep into what what wrong and what went well to improve your incident response process.  
A postmortem is a process intended to help you learn from incidents. It typically involves a blame free analysis and discussion soon after an incident takes place.  
Other ways to describe a postmortem:  

- After-Action Review
- Post-Incident Review
- Learning Review
- Incident Review
- Incident Report

Avoid Root Cause Analysis (RCA) whenever possible. This is because there are often many contributing factors to the cause of an incident.  

**The postmortem process drives focus, instills a culture of learning, and identifies opportunities for improvement that otherwise would be lost.**  

Write postmortems in a way in which people actually want to read them.  

### When to Do Postmortems

**Do a postmortem after every major incident.**  

### Who is Responsible for the Postmortem

The Incident Commander selects and directly notifies one responder to own the postmortem. The owner of the postmortem is not the sole person responsible for completing the postmortem.  
Writing a postmortem is a collaborative effort and should include those involved in the incident resolution process.  

Important to designate a single owner. Avoid the bystander effect.  

### Ownership Criteria

Designate a **single owner**.

- Took leadership role during the incident
- Performed a task that led to stabilizing the service
- Was the primary on-call responder for the most heavily affected service
- Manually triggered the incident to initiate incident response  

The owner of a postmortem is an accountable individual who performs the administrative tasks needed to complete the postmortem. They follow up for information, they drive the postmortem to completion.  

**Postmortems are not a punishment**  
Very rarely a single cause to any incident. More often than not, multiple sources can be identified.  

## Blame and Biases in the Workplace

Blame is not healthy for our team.  
Failure is inevidible in large systems.  

Old way of thinking about human error: human error causes problems.  
New way of thinking about human error: human error is a symptom of a systemic problem.  

The impulse to blame and punish has the unintended effect of disincentivizing the knowledge sharing required to learn from incidents.  

The goal of the postmortem is to understand the systemic factors leading to the incident and identify actions that can improve the resiliency of the affected systems.  

### Why Blamelessness is Hard

J. Paul Reed argues that blamelessness is a myth and is unachievable by humans.  
"Humans are hardwired through millions of years of evolutionary neurobiology and thousands of years of social conditioning to use the technique of blaming as a way to give voice to painful and uncomfortable feelings, in order to effectively disperse them from our psyches."  

It is more productive to be **blame aware**.  
Becoming aware of our biases, we can identify when they occur and work to move past them.  

### Common Biases

**Fundamental Attribution Error** - Tendency to believe what people do reflects their character rather than their circumstances.  

- This bias is tied to the old way of thinking about human error (assigning responsibility to bad actors).  
- To combat this bias, try to intentionally focus on situational causes rather than on discrete actions individuals take.  
- Discuss 'what' questions instead of 'who'. Focus on the system, infrastructure, and the situation - not the people involved.  

**Confirmation Bias** - Tendency to favor information that reinforces existing beliefs/positions.  

- To combat this bias, appoint someone to play devils advocate to take a different view during the investigation.  

**Hindsight Bias** - Seeing the incident as inevitable despite there having been little or no objective basis for predicting it because we know the outcome.   Memory distortion where we recall events to form a judgement. We often recall events in a way that makes ourselves look better.  

- To combat this bias, explain events in terms of foresight rather than the hindsight. Start your timeline analysis from a point before the incident and work forward, rather than from resolution and working backwards.  

**Negativity Bias** - Notion that things of a more negative nature have a greater effect on our mental state than those things that are of neutral or positive nature.  

- Things tend to go right much more frequently than they go wrong, but it is in our nature as humans to focus much more energy and importance on what goes wrong.
- Focusing on, exaggerating, and internalizing incidents as negative events can be demoralizing and can lead to burnout. Rethink/Rephrase incidents as learning opportunities and an opportunity to make our applications and services better.  

### How to Avoid Blame

Ask "what" and "how" questions rather than "who" or "why".  
Ask why a reasonable, rational, and decent person may have taken a particular action. Avoid victim vs villain mentalities.  
Consider multiple and diverse perspectives.  
Abstract to an inspecific responder.  

## Introducing Postmortems to Your Organization

As leaders, you must help introduce blameless postmortems.  
Driving culture change is difficult. Get buy in from contributors and leadership.  
Sell the business value of blamelessness.  
Acknowledge that practicing blamelessness is difficult for everyone.  
Blame is harmful to trust and collaboration. Work together to be more blame aware.  

Build a culture of continuous learning.  

- Adopt culture change that promotes blamelessness
- Recognize and reduce patterns that make a team susceptible to blame

### Psychological Safety

For a blameless culture to exist, people need to feel comfortable and safe when talking about failure. They need to feel safe before they will be willing to talk about incidents.  
"Psychological safety is a sense of confidence the team will not embarrass, reject, or punish someone for speaking up." - Amy Edmondson, Harvard Business School  
The number 1 thing you can do for your teams is to build a culture of psychological safety with blameless postmortems.  
Psychological safety is a key driver of high performing software delivery teams.  

## The Postmortem Report

Start analysis by looking at the monitoring attached to affected services. Search for irregularities from the baseline such as spikes or flatlines when the incident began and leading up to the incident.  

Ask why the system was designed in a way to make the incident possible. Why did those design decisions seem to be the best decision at the time? Answering these questions can be helpful in uncovering the contributing factors that lead to the incident.  

Participants in a postmortem meeting:  
Incident Commander  
Incident Commander Shadow, Scribe, Deputy, Liaison  
Service Owners  
Product Managers  
Engineering Managers  

### Important Concepts to Include in Every Analysis

- Avoid the concept of "human error"
- Discuss incidents within the frame of the health and resiliency of affected services

Conducting effecting meetings

- Documenting an accurate timeline of events
- Effective action items

An individual's action should never be considered a root cause.  

### Helpful Questions

- Is this an isolated incident or part of a trend?  
- Was there a specific bug, a failure in a class of problem we anticipated, or did it uncover a class of issue we did not architecturally anticipate?  
- Was there work the team chose not to do in the past that contributed to this incident?  
- Research if there were any similar or related incidents in the past. Does this incident demonstrate a larger trend in your system?  
- Will this class of issue get worse or more likely as you continue to grow and scale the use of the service?  

### Follow Up Actions

Actionable

- Phrase each action item as a sentence start with a verb
- The action should result in a useful outcome

Specific

- Define each action item's scope as narrowly as possible
- Make it clear what is in and out of scope

Bounded

- Word each action item to indicate how to tell when it is finished
- Avoid open-ended or ongoing tasks

### External Messaging

Different than internal messaging. External messaging is a summarized and sanitized version of information used internally.  
The goal of external messaging is to build trust with customers. Give enough information about what happened and what you are doing about it without revealing too much information.  

Summary - Two or three sentences that summarize the duration of the incident, and the observable customer impact.  
What Happened - Summary of contributing factors. Summary of customer-facing impact during the incident. Summary of mitigation efforts during the incident.  
What Are We Doing About This - Summary of action items.  

### Postmortem Review

Postmortem Writing & Collaboration Community  

Does the postmortem provide enough detail?  
Rather than just pointing out what went wrong, does it drill down to the underlying causes of the issue?  
Does it separate "What happened?" from "How to fix it?"  
Do the proposed action items make sense? Are they well-scoped enough?  
Is the postmortem well-written and understandable?  
Does the external message resonate with customers or is it likely to cause outrage?  

### Do's and Don'ts of Postmortem Review

Dos:  
Make sure timeline is an accurate representation of events.  
Define technical lingo for newcomers.  
Separate what happened from how to fix it.  
Discuss how incidents fit into health and resiliency of services.  

Don'ts:  
Don't use the word "outage" unless it really was a full outage.  
Don't change details to make things "look better."  
Don't name and shame.  
Avoid the concept of "human error."  

## Putting Concept into Practice

Create a community of experienced postmortem writers to review drafts and spread good practices.  

Information Sharing  
Scale culture through sharing. Adopt practices that promote openness and sharing of information.  
People want to share their successes and people want to replicate practices that result in success.  
Information sharing and transparency promotes a culture of accountability.  

Schedule postmortem meetings on a shared calendar.  

Email completed postmortems to all teams involved in incident response. An alternative to this may be to put postmortems in a public GitHub repository.  

## Quick Tips for Success

Develop good facilitators.  
The facilitator has a different role than others on the postmortem call/meeting/discussion. They will not share their opinions or participate in the discussion. They will keep the meeting on track and nothing more.  

Facilitator Responsibilities:

- Reads non-verbal cues to assess how people are feeling. Sees who might have something to say.  
- Paraphrases what is said to clarify for self and others. Asks open questions that stimulate deeper thinking.  
- Comfortable interrupting when discussion gets off track or someone is dominating the conversation. Redirects conversation to focus on goals.  
- Drives discussion to decision making and action items. Develop a community of experienced facilitators to develop good practices.  

Start Small  

Being transparent about system failure reinforces a culture of blamelessness.  

Clarify policy and ownership of postmortem action items.  

Engage leaders that prioritize work.  

An essential outcome of the postmortem meeting is buy-in for the action plan.  

There is no single root cause of major failure in complex systems, but rather a combination of contributing factors that together lead to failure.  
An individual's action should never be considered a root cause.  

"All practitioner actions are actually gambles, that is, acts that take place in the face of uncertain outcomes." - Dr Richard Cook, Department of Integrated Systems Engineering at Ohio State University.  

Avoid Blame.  
Practice makes perfect.  

## Summary

Improve Team Culture

- Postmortems can drive a culture of continuous improvement.  
- The number one thing you can do for your teams is support a culture of psychological safety.  

Reduce Blame

- Blame disincentivizes the knowledge sharing required to improve system resiliency.  
- An individual's actions should never be considered a root cause.  

Focus on Circumstances

- Ask "what" and "how" questions, rather than "who" and "why."  
- There is no single root cause, but a combination of contributing factors.  

Take Action

- Understand systemic factors that led to the incident  
- An essential outcome of the postmortem meeting is buy-in for the action plan

## Other Postmortem Resources

[PagerDuty Postmortems](https://postmortems.pagerduty.com/)  
[Google Postmortem Culture: Learning from Failure](https://landing.google.com/sre/sre-book/chapters/postmortem-culture/)  
[Awesome SRE Postmortem](https://github.com/dastergon/awesome-sre#post-mortem)  
[Etsy Blameless Postmortem](https://codeascraft.com/2012/05/22/blameless-postmortems/)  
