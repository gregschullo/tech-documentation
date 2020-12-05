(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{174:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,p=d["".concat(l,".").concat(m)]||d[m]||b[m]||i;return a?n.a.createElement(p,o(o({ref:t},s),{},{components:a})):n.a.createElement(p,o({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),i=(a(0),a(174)),l={id:"alerting-strategy",title:"Alerting Strategy"},o={unversionedId:"sre/alerting/alerting-strategy",id:"sre/alerting/alerting-strategy",isDocsHomePage:!1,title:"Alerting Strategy",description:"Evaluate and Document Current Alerting Strategy",source:"@site/docs/sre/alerting/alerting-strategy.md",slug:"/sre/alerting/alerting-strategy",permalink:"/docs/sre/alerting/alerting-strategy",version:"current",sidebar:"alerting"},c=[{value:"Evaluate and Document Current Alerting Strategy",id:"evaluate-and-document-current-alerting-strategy",children:[]},{value:"Review and Improve Alerting Strategy",id:"review-and-improve-alerting-strategy",children:[]},{value:"Validate and Implement Advanced Alerting",id:"validate-and-implement-advanced-alerting",children:[]}],s={rightToc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"evaluate-and-document-current-alerting-strategy"},"Evaluate and Document Current Alerting Strategy"),Object(i.b)("p",null,"Analyze alerts that are configured in production and have a conversation with the support team to determine the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"What tools are being used to generate alerts? (SiteScope, Alertmanager, Splunk, etc)  "),Object(i.b)("li",{parentName:"ul"},"What metrics are being leveraged to generate alerts? (CPU Utilization, Response Time, HTTP 5xx, RER, etc)  "),Object(i.b)("li",{parentName:"ul"},"How are alerts distributed? (OpsBridge, PagerDuty, Email, SMS, ChatOps, etc)  "),Object(i.b)("li",{parentName:"ul"},"Who do the alerts go to? (Distribution List, Individuals, On-Call Rotation, etc)  "),Object(i.b)("li",{parentName:"ul"},"How are alerts classified (P1/P2, Alert/Ticket, Sev1, etc)  "),Object(i.b)("li",{parentName:"ul"},"How are alert thresholds determined?  "),Object(i.b)("li",{parentName:"ul"},"Are alert thresholds static or dynamic?  "),Object(i.b)("li",{parentName:"ul"},"How many alerts fire per week?  "),Object(i.b)("li",{parentName:"ul"},"What percentage of alerts are actionable?  "),Object(i.b)("li",{parentName:"ul"},"If able to determine, what is the average Mean Time to Detect (MTTD)?  ")),Object(i.b)("p",null,"Completion Criteria: Produce a document with these findings articulated.  "),Object(i.b)("h2",{id:"review-and-improve-alerting-strategy"},"Review and Improve Alerting Strategy"),Object(i.b)("p",null,"Produce an Alerting Strategy document that describes the strategy and approach the team will take when crafting alerts in each monitoring system. If necessary implement changes to the strategy that enable the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All alerts that page a human should be actionable"),Object(i.b)("li",{parentName:"ul"},"Alerts that are not actionable should be converted to either tickets or logging"),Object(i.b)("li",{parentName:"ul"},"Thresholds are set for alerts, and should be revisited"),Object(i.b)("li",{parentName:"ul"},"Dynamic thresholds for alerts should be utilized when appropriate"),Object(i.b)("li",{parentName:"ul"},"All alerts should be set with the SLA/SLE in mind"),Object(i.b)("li",{parentName:"ul"},"The team should construct alerts in service of the shortest reasonable MTTD (Strive for <10 min)"),Object(i.b)("li",{parentName:"ul"},"Alerting strategy should minimize noise (alert storms / non-actionable alerts)"),Object(i.b)("li",{parentName:"ul"},"Who will alerts go to? Does this change under certain circumstances (Priority, service, etc)?"),Object(i.b)("li",{parentName:"ul"},"All members of the team have reviewed the alerting strategy document and have committed to following it in the future, or updating it as a team")),Object(i.b)("p",null,"Completion Criteria: A document that describes the teams' Alerting Strategy is produced and agreed upon by the team."),Object(i.b)("h2",{id:"validate-and-implement-advanced-alerting"},"Validate and Implement Advanced Alerting"),Object(i.b)("p",null,"Enable advanced alerting techniques. This is highly specific to the application, thus the SRE will need to generate and document specific recommendations for the team using the below items as guidelines:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The team leverages a persistent chat tool like Flowdock or Slack or Cisco Spark"),Object(i.b)("li",{parentName:"ul"},"The team understands the core concepts of ChatOps"),Object(i.b)("li",{parentName:"ul"},"The team is leveraging bots in their chat tool to pipe in alerts and is able to take action like acknowledging or escalating them"),Object(i.b)("li",{parentName:"ul"},"Achieve <10 min MTTD"),Object(i.b)("li",{parentName:"ul"},"The team is using dynamic thresholds for most alerts"),Object(i.b)("li",{parentName:"ul"},"Alerts configured on absence conditions (0 orders placed, etc)"),Object(i.b)("li",{parentName:"ul"},"Minimal false positive alerts"),Object(i.b)("li",{parentName:"ul"},"Majority of alerts are actionable"),Object(i.b)("li",{parentName:"ul"},"Alerts are consistently tuned as the applications changes over time"),Object(i.b)("li",{parentName:"ul"},"Confidence in alerts is high enough to enable automated actions")),Object(i.b)("p",null,"Completion Criteria: Produce a report that outlines all of the recommendations that SRE made, along with whether or not they were implemented (If not, why not?). Include in the report links to the relevant tools, systems and dashboards."))}u.isMDXComponent=!0}}]);