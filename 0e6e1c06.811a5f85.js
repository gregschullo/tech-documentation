(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(1),i=n(9),r=(n(0),n(227)),a={id:"monitoring-pattern",title:"Monitoring Pattern"},s={id:"monitoring-alerting/monitoring/monitoring-pattern",title:"Monitoring Pattern",description:"## Context",source:"@site/docs/monitoring-alerting/monitoring/monitoring-pattern.md",permalink:"/tech-documentation/docs/monitoring-alerting/monitoring/monitoring-pattern",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/monitoring-alerting/monitoring/monitoring-pattern.md",sidebar:"monitoring",next:{title:"The 4 Golden Signals",permalink:"/tech-documentation/docs/monitoring-alerting/monitoring/the-four-golden-signals"}},c=[{value:"Context",id:"context",children:[]},{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Monitoring",id:"monitoring",children:[{value:"Goal of Monitoring",id:"goal-of-monitoring",children:[]},{value:"A Monitoring System Should",id:"a-monitoring-system-should",children:[]}]},{value:"The 4 Golden Signals",id:"the-4-golden-signals",children:[]},{value:"Types of Monitoring",id:"types-of-monitoring",children:[]},{value:"Raw Error Rate",id:"raw-error-rate",children:[]},{value:"Mean Time to Detect",id:"mean-time-to-detect",children:[]},{value:"Vital Business Function (VBF) Monitoring",id:"vital-business-function-vbf-monitoring",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"context"},"Context"),Object(r.b)("p",null,"This document provides monitoring best practices and guidance for application teams architecting for resiliency."),Object(r.b)("h2",{id:"problem"},"Problem"),Object(r.b)("p",null,"Complex infrastructure and customer experiences are often difficult to instrument and measure holistically. When monitoring with application resiliency as the focus, it is vital to instrument monitoring so a thorough understanding of application infrastructure and transaction flow may be achieved. In other words, it is necessary to first understand where and why problems will and could occur before any type of resiliency practices may take place."),Object(r.b)("h2",{id:"solution"},"Solution"),Object(r.b)("p",null,"There are many monitoring solutions available and an appropriate solution or solutions will vary from application to application."),Object(r.b)("h2",{id:"monitoring"},"Monitoring"),Object(r.b)("p",null,"First we must define monitoring in a technology focus. Google SRE defines monitoring as collecting, processing, aggregating, and displaying real-time quantitative data about a system, over a period of time, to observe and check the progress or quality of the system."),Object(r.b)("h3",{id:"goal-of-monitoring"},"Goal of Monitoring"),Object(r.b)("p",null,"The main goal of monitoring is to fully understand your application. This would include understanding long term trends, comparison over time or comparing to experiment groups, alerting on anomalies, data visualization, and creating the ability to conduct adhoc retrospective analysis. These capabilities are crucial to understanding and maintaining your application. "),Object(r.b)("h3",{id:"a-monitoring-system-should"},"A Monitoring System Should"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Measure performance provided to users to meet and enforce required service level agreements (SLAs), service level objectives (SLOs), and detecting and managing problems"),Object(r.b)("li",{parentName:"ul"},"Send appropriate alerts or notifications to appropriate recipients "),Object(r.b)("li",{parentName:"ul"},"Aspire to learn to contribute to and drive application reliability within what you can control, regardless of platform."),Object(r.b)("li",{parentName:"ul"},"If focus on infrastructure is necessary, monitor what you can control to determine your application\u2019s underlying infrastructure components and their health. "),Object(r.b)("li",{parentName:"ul"},'Monitor the interaction of "neighbor" applications and upstream and downstream dependencies to understand the relationship and communication between them and your application.',Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"An example of this would be to monitor response time between neighbor applications rather than just if a connection between components or endpoint is up or down. "),Object(r.b)("li",{parentName:"ul"},"Another example may be to measure volume or throughout sent to your application from a downstream dependency to understand the impact on your application from a known source.")))),Object(r.b)("p",null,"It is important to understand and define what a healthy system performs like. A healthy system should be defined based on specific criteria for each application and that criteria will vary from app to app and potentially change over time. Some examples of what can define a healthy system include the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Successful responses"),Object(r.b)("li",{parentName:"ul"},"Response Times and Threshold definitions"),Object(r.b)("li",{parentName:"ul"},"Dependency Failures Dependency SLA\u2019s"),Object(r.b)("li",{parentName:"ul"},"Page load times")),Object(r.b)("p",null,"These should be very dynamic in nature and specific to each application. This should be maintained as a policy for each service and be validated by the monitoring system on a frequency basis."),Object(r.b)("h2",{id:"the-4-golden-signals"},"The 4 Golden Signals"),Object(r.b)("p",null,"The 4 Golden Signals are the basis for any well monitored system and should be prioritized. More information on the 4 Golden Signals can be found ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://gregschullo.github.io/documentation/docs/sre/monitoring/the-four-golden-signals"}),"here")," or in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/"}),"Google Site Reliability Engineering book"),"."),Object(r.b)("h2",{id:"types-of-monitoring"},"Types of Monitoring"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Observability")," - The practice of obtaining data from timeseries metrics (telemetry), logging data, and transaction traces for the purpose of discovering unexpected patterns. Observability is achieved when data made available from the monitored system provides granular insights with rich context into the behavior of a system for analysis. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Telemetry")," - The collection of measurements or other data that is automatically transmitted to receiving equipment for monitoring purposes. In terms of information services, 'measurements or other data' could mean OS & host data, but it also can reference web logs (hits per second), network service (throughput), or anything else that signifies the 'health' of your system. A few examples of telemetry tools include Telegraf, Prometheus, and HP OpsBridge and can be visualized with tools such as ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://grafana.optum.com/"}),"Grafana"),", Kibana, and Geckoboard."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Log Aggregation")," - The collection of log files to organize the data in them and make them searchable. Log aggregation is useful for the capturing of known knowns. Examples of log aggregation tools include Elastic Logs and Splunk. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Application Performance Monitoring (APM)")," - The monitoring and management of performance and availability of software applications. APM strives to detect and diagnose complex application performance problems to maintain a defined level of service. Examples of application performance monitoring tools include Elastic APM, Dynatrace, and New Relic. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tracing"),' - Used to profile and monitor applications, especially those built using a microservices architecture. Distributed tracing helps pinpoint where failures occur and what causes poor performance through the building blocks commonly referred to as "',Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://opentracing.io/docs/overview/spans/"}),"spans"),'". Tracing is useful for the capturing of unknown unknowns. Examples of tracing tools include Jaeger and Pinpoint. '),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Synthetic")," - A technique using emulation or scripted recordings of a transaction. Scripts are created to simulate an action or path that a customer or end-user would perform on a site, application, or other software. Examples of synthetic monitoring include HP BSM, New Relic Synthetics, or Dynatrace Synthetics."),Object(r.b)("h2",{id:"raw-error-rate"},"Raw Error Rate"),Object(r.b)("p",null,"Raw Error Rate is an availability metric that is designed to give an accurate indication of how your application or service is performing and is to be measured from the customer's point of view. Raw Error Rate is both an indicator of customer experience as well as the availability of the underlying technology that provides the service."),Object(r.b)("p",null,"Raw Error Rate is a very simple formula, although it is not necessarily easy to calculate.  "),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-docker"}),"Raw Error Rate = Failed Requests / Total Requests\n\nWhere failed requests are requests that are not successful or requests that return successfully, but not in an acceptable amount of time and where total requests are any and all observable requests.\n")),Object(r.b)("p",null,"Customer Success Rate is a more positive spin on Raw Error Rate. It is the inverse of Raw Error Rate... (1-RER) * 100 = Customer Success as a Percentage"),Object(r.b)("p",null,"More information on Raw Error Rate can be found on the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://hubconnect.uhg.com/groups/optum-system-reliability-engineering-sre/blog/2018/04/03/introducing-raw-error-rate"}),"SRE HubConnect Blog")),Object(r.b)("h2",{id:"mean-time-to-detect"},"Mean Time to Detect"),Object(r.b)("p",null,'Mean Time to Detect is a metric that measures the average time it takes to discover an issue or problem is occurring. Monitoring is the first and most essential component of having a low Mean Time to Detect as monitoring acts as the "trip wire" or notifier of a problem. The more accurate and detailed your monitoring is, the faster your mean time to detect score is, resulting in resolving issues or potential issues more quickly.'),Object(r.b)("h2",{id:"vital-business-function-vbf-monitoring"},"Vital Business Function (VBF) Monitoring"),Object(r.b)("p",null,"These particular functions have been deemed essential to an application and the success of the business. It is extremely important that these functions perform well, so monitoring these should be priority over other functions or services."),Object(r.b)("p",null,"Setting up monitoring to capture metrics surrounding error rate or increases in response time are beneficial to gaining insight quickly to when there may be an issue with a VBF, helping to reduce Mean Time to Detection (MTTD) and Mean Time to Restoration (MTTR). This helps ensure VBFs are performing well and giving a satisfactory customer experience."),Object(r.b)("p",null,"More detailed information on Fundamental Monitoring Theory can be found at:",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/"}),"Google SRE - Monitoring Distributed Systems"),Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://new-wiki.optum.com/display/EM/Fundamental+Monitoring+Theory"}),"Optum Fundamental Monitoring Theory"),"  "))}u.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,b=p["".concat(a,".").concat(d)]||p[d]||m[d]||r;return n?i.a.createElement(b,s({ref:t},l,{components:n})):i.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);