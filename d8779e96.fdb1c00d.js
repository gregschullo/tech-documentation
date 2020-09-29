(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{212:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var i=t(1),r=t(9),a=(t(0),t(227)),o={id:"incident-response",title:"Incident Response"},s={id:"sre/incidents/incident-response",title:"Incident Response",description:"Ideas for Demonstration - What keeps an application team from achieving a shorter mean time to resolution?",source:"@site/docs/sre/incidents/incident-response.md",permalink:"/tech-documentation/docs/sre/incidents/incident-response",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sre/incidents/incident-response.md",sidebar:"incidents"},c=[],d={rightToc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Ideas for Demonstration - What keeps an application team from achieving a shorter mean time to resolution?"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Communicate issues in flow or correlate issues in tracking system\n\n                            \u25cb Multiple war rooms opened due to multiple applications being impacted by one issue.\n\n                            \u25cb Communicate with other SREs via ChatOps channel or TCC tracking system about other known applications impacted\n\n                                            \xa7 App/chatbot that assists with on call rotation and scheduling per channel\n\n                            \u25cb Add value where you can in a ChatOps channel \n\n            \u2022 On call process and procedure in EPS group\n\n            \u2022 What roadblocks or issues do application teams continually run into or questions are asked over and over again that keep application teams from achieving a better mean time to resolution?\n\n            \u2022 External vendor contacts and helpdesk information available for applications that depend upon external resources. Visibility into vendor code changes\n\n            \u2022 Set up monitoring for New Relic infrastructure to show traffic being sent from pods to bluecoat proxy. Pods to host pods run on   \n")),Object(a.b)("p",null,"Incident Response Topics"),Object(a.b)("p",null,"Before an Incident"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Playbooks / Runbooks\n\n            \u2022 On call strategy\n\n            \u2022 Tabletop exercises\n\n            \u2022 Incident Planning and Preparedness\n")),Object(a.b)("p",null,"During an Incident"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Decision Making\n\n            \u2022 Troubleshooting\n\n            \u2022 Recovery Strategy\n\n            \u2022 Communication\n\n            \u2022 Confidence\n")),Object(a.b)("p",null,"After an Incident"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Post Mortem / Post Incident Review (PIR)\n\n            \u2022 Measuring the incident\n\n                            \u25cb MTTR - Mean Time to Restore\n\n                                            \xa7 MTTD - Mean Time to Detect\n\n                                            \xa7 MTTA - Mean Time to Acknowledge\n\n                                            \xa7 MTTI - Mean Time to Identify\n\n                                            \xa7 MTTF - Mean Time to Fix\n\n                            \u25cb Raw Error Rate (RER)\n\n            \u2022 Learning from an incident\n")),Object(a.b)("p",null,"Incident Management at Optum"),Object(a.b)("p",null,Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://hub.uhg.com/sites/hub/Optum/Businesses/Optum-Technology/Support/ITSM/Incident-Management/Pages/IncidentManagementGettingStarted_SN.aspx"}),"https://hub.uhg.com/sites/hub/Optum/Businesses/Optum-Technology/Support/ITSM/Incident-Management/Pages/IncidentManagementGettingStarted_SN.aspx")," "),Object(a.b)("p",null,"Incident management is the IT Service Management process to restore normal service operation as quickly as possible and minimize adverse impacts to business customers. The goal is to maintain the best possible service quality and availability at all times."),Object(a.b)("p",null,"Information Technology Service Management Incident Management Process and Policy"),Object(a.b)("p",null,"Key Terminology"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'            \u2022 Incident - An incident is any event which is not part of the standard operation of a service and which causes, or may cause, an interruption to, or degradation in the quality of that service.\n\n            \u2022 Work Around - A method to reduce or eliminate the impact of an Incident or Problem for which a full resolution is not let available.\n\n            \u2022 Solution - A permanent method of removing the impact of an Incident. The solution is the "final fix" to the Incident.\n\n            \u2022 Problem - An unknown underlying cause of one or more Incidents.\n\n            \u2022 Service Request - A user request for new or additional service or for information in general.\n')),Object(a.b)("p",null,"Goal of Incident Management"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 To restore normal service operation as quickly as possible and minimize the adverse impacts on business operations, ensuring that the nest possible levels of service quality and availability are maintained.\n")),Object(a.b)("p",null,"Relationship Between Incident and Problem Management"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Incident management is reactive.\n\n            \u2022 Incident management process is focused on restoring service and minimizing the impact incidents have on the business within established service targets.\n")),Object(a.b)("p",null,"Roles and Responsibilities at Optum"),Object(a.b)("p",null,"Client / Caller "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Detects an Incident\n\n            \u2022 Reports the Incident to the Technology Support Center\n\n            \u2022 Provides detail about affected components, systems and/or applications, symptoms, impact \n")),Object(a.b)("p",null,"Service Desk Analyst"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Creates Incident records for Incidents reported by clients\n\n            \u2022 Looks for active Parent Incidents related to the new Incident\n\n            \u2022 Uses Knowledge to identify workarounds and solutions\n\n            \u2022 Restores and closes Incident records when possible\n\n            \u2022 Assigns Incidents to appropriate Workgroups when restoration at the TSC is not possible\n\n            \u2022 Engages an Incident Manager for new Priority 1 and 2 \n")),Object(a.b)("p",null,"Incidents Incident Manager"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Reviews multiple user incidents to determine high priority eligibility\n\n            \u2022 Creates Parent Incidents\n\n            \u2022 Provides parent incident information to the Help Desk\n\n            \u2022 Transfers high priority incidents to the Command Center\n\n            \u2022 Performs escalations per process\n\n            \u2022 Follows up on client complaints\n\n            \u2022 Provides workgroup to workgroup paging (as needed)\n\n            \u2022 Assists in reassigning incidents \n")),Object(a.b)("p",null,"IT Technician (Level 2/3 Support)"),Object(a.b)("p",null,"For Priority 1 and 2 Incidents:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Contacts the TSC Incident Management Team when a new Priority 1 or 2 Incident is identified\n\n            \u2022 Attends War Room activities as requested\n\n            \u2022 Completes restoration activities as assigned\n\n            \u2022 Communicates status of assigned activities to the TCC Incident Manager\n")),Object(a.b)("p",null,"For Priority 3 and 4 Incidents:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Investigates assigned Incidents\n\n            \u2022 Creates an Incident record for Incidents that are not reported by a client. Clients reporting Incidents should be referred to the TSC or the TSC Self Service Portal\n\n            \u2022 Keeps assigned Incident records up-to-date with current information\n\n            \u2022 Keeps the client informed of Incident status, and documents all client interactions in the Incident record\n\n            \u2022 Optionally, opens and manages Parent Incident records for Low Priority Incidents.\n\n            \u2022 Confirms Incident restoration with the client\n\n            \u2022 Utilizes the Change Management Process as necessary to implement workarounds and solutions\n\n            \u2022 Closes the Incident when a solution has been implemented\n\n            \u2022 As appropriate, opens a Problem record when further root cause analysis is required\n\n           \n\n           \n")),Object(a.b)("p",null,"Technology Command Center "),Object(a.b)("p",null,"For Priority 1 and 2 Incidents: "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Validates the Priority of the Incident \n\n            \u2022 Creates and manages the Incident record and associated Incident Alert record throughout the life of the Incident \n\n            \u2022 Facilitates the War Room (as needed) \n\n            \u2022 Identifies and engages appropriate resources \n\n            \u2022 Gathers and documents Service Availability data \n\n            \u2022 Creates a Problem record in response to all Priority 1 Incidents and for Priority 2 Incidents when it was caused by a Change, impacted a Critical Business Application (CBA), resulted in adjusted downtime minutes (ADTM), or upon request \n\n            \u2022 Creates an Incident Change record if a Change is needed to restore a High Priority Incident \n\n            \u2022 Closes the Incident and Incident Alert records \n")),Object(a.b)("p",null,"Assignment group Owner "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Maintains the Workgroup record: membership, classification codes, description \n\n            \u2022 Monitors active Incidents assigned to the Workgroup \n\n            \u2022 Serves as the escalation point for service issues associated with the items assigned to the Workgroup \n\n            \u2022 Reassigns Incidents to appropriate group when necessary \n\n            \u2022 Opens and assigns related Incident Tasks when necessary \n")),Object(a.b)("p",null,"Service Level Owner / Delegates "),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"            \u2022 Responsible for attending a War Room where an appropriate service is impacted \n\n            \u2022 Validates service is restored \n\n            \u2022 Validates amount of service impact during War Room closure \n\n            \u2022 Decides if a problem is necessary when process doesn\u2019t require one \n\n            \u2022 Enters business impact statements for High Priority incidents impacting their service\n")))}l.isMDXComponent=!0},227:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),l=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},p=function(e){var n=l(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),b=i,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||a;return t?r.a.createElement(m,s({ref:n},d,{components:t})):r.a.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);