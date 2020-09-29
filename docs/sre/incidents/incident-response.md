---
id: incident-response
title: Incident Response
---

Ideas for Demonstration - What keeps an application team from achieving a shorter mean time to resolution?

                • Communicate issues in flow or correlate issues in tracking system

                                ○ Multiple war rooms opened due to multiple applications being impacted by one issue.

                                ○ Communicate with other SREs via ChatOps channel or TCC tracking system about other known applications impacted

                                                § App/chatbot that assists with on call rotation and scheduling per channel

                                ○ Add value where you can in a ChatOps channel 

                • On call process and procedure in EPS group

                • What roadblocks or issues do application teams continually run into or questions are asked over and over again that keep application teams from achieving a better mean time to resolution?

                • External vendor contacts and helpdesk information available for applications that depend upon external resources. Visibility into vendor code changes

                • Set up monitoring for New Relic infrastructure to show traffic being sent from pods to bluecoat proxy. Pods to host pods run on   

 

Incident Response Topics

Before an Incident

                • Playbooks / Runbooks

                • On call strategy

                • Tabletop exercises

                • Incident Planning and Preparedness

During an Incident

                • Decision Making

                • Troubleshooting

                • Recovery Strategy

                • Communication

                • Confidence

After an Incident

                • Post Mortem / Post Incident Review (PIR)

                • Measuring the incident

                                ○ MTTR - Mean Time to Restore

                                                § MTTD - Mean Time to Detect

                                                § MTTA - Mean Time to Acknowledge

                                                § MTTI - Mean Time to Identify

                                                § MTTF - Mean Time to Fix

                                ○ Raw Error Rate (RER)

                • Learning from an incident

 

Incident Management at Optum

https://hub.uhg.com/sites/hub/Optum/Businesses/Optum-Technology/Support/ITSM/Incident-Management/Pages/IncidentManagementGettingStarted_SN.aspx 

 

Incident management is the IT Service Management process to restore normal service operation as quickly as possible and minimize adverse impacts to business customers. The goal is to maintain the best possible service quality and availability at all times.

 

Information Technology Service Management Incident Management Process and Policy

Key Terminology

                • Incident - An incident is any event which is not part of the standard operation of a service and which causes, or may cause, an interruption to, or degradation in the quality of that service.

                • Work Around - A method to reduce or eliminate the impact of an Incident or Problem for which a full resolution is not let available.

                • Solution - A permanent method of removing the impact of an Incident. The solution is the "final fix" to the Incident.

                • Problem - An unknown underlying cause of one or more Incidents.

                • Service Request - A user request for new or additional service or for information in general.

 

Goal of Incident Management

                • To restore normal service operation as quickly as possible and minimize the adverse impacts on business operations, ensuring that the nest possible levels of service quality and availability are maintained.

 

Relationship Between Incident and Problem Management

                • Incident management is reactive.

                • Incident management process is focused on restoring service and minimizing the impact incidents have on the business within established service targets.

 

Roles and Responsibilities at Optum

Client / Caller 

                • Detects an Incident

                • Reports the Incident to the Technology Support Center

                • Provides detail about affected components, systems and/or applications, symptoms, impact 

 

Service Desk Analyst

                • Creates Incident records for Incidents reported by clients

                • Looks for active Parent Incidents related to the new Incident

                • Uses Knowledge to identify workarounds and solutions

                • Restores and closes Incident records when possible

                • Assigns Incidents to appropriate Workgroups when restoration at the TSC is not possible

                • Engages an Incident Manager for new Priority 1 and 2 

 

Incidents Incident Manager

                • Reviews multiple user incidents to determine high priority eligibility

                • Creates Parent Incidents

                • Provides parent incident information to the Help Desk

                • Transfers high priority incidents to the Command Center

                • Performs escalations per process

                • Follows up on client complaints

                • Provides workgroup to workgroup paging (as needed)

                • Assists in reassigning incidents 

 

IT Technician (Level 2/3 Support)

For Priority 1 and 2 Incidents:

                • Contacts the TSC Incident Management Team when a new Priority 1 or 2 Incident is identified

                • Attends War Room activities as requested

                • Completes restoration activities as assigned

                • Communicates status of assigned activities to the TCC Incident Manager

For Priority 3 and 4 Incidents:

                • Investigates assigned Incidents

                • Creates an Incident record for Incidents that are not reported by a client. Clients reporting Incidents should be referred to the TSC or the TSC Self Service Portal

                • Keeps assigned Incident records up-to-date with current information

                • Keeps the client informed of Incident status, and documents all client interactions in the Incident record

                • Optionally, opens and manages Parent Incident records for Low Priority Incidents.

                • Confirms Incident restoration with the client

                • Utilizes the Change Management Process as necessary to implement workarounds and solutions

                • Closes the Incident when a solution has been implemented

                • As appropriate, opens a Problem record when further root cause analysis is required

               

               

Technology Command Center 

For Priority 1 and 2 Incidents: 

                • Validates the Priority of the Incident 

                • Creates and manages the Incident record and associated Incident Alert record throughout the life of the Incident 

                • Facilitates the War Room (as needed) 

                • Identifies and engages appropriate resources 

                • Gathers and documents Service Availability data 

                • Creates a Problem record in response to all Priority 1 Incidents and for Priority 2 Incidents when it was caused by a Change, impacted a Critical Business Application (CBA), resulted in adjusted downtime minutes (ADTM), or upon request 

                • Creates an Incident Change record if a Change is needed to restore a High Priority Incident 

                • Closes the Incident and Incident Alert records 

 

Assignment group Owner 

                • Maintains the Workgroup record: membership, classification codes, description 

                • Monitors active Incidents assigned to the Workgroup 

                • Serves as the escalation point for service issues associated with the items assigned to the Workgroup 

                • Reassigns Incidents to appropriate group when necessary 

                • Opens and assigns related Incident Tasks when necessary 

 

Service Level Owner / Delegates 

                • Responsible for attending a War Room where an appropriate service is impacted 

                • Validates service is restored 

                • Validates amount of service impact during War Room closure 

                • Decides if a problem is necessary when process doesn’t require one 

                • Enters business impact statements for High Priority incidents impacting their service

