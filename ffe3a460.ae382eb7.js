(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(6),i=(n(0),n(165)),l={},o={unversionedId:"sre/observability",id:"sre/observability",isDocsHomePage:!1,title:"observability",description:"Observability",source:"@site/docs/sre/observability.md",slug:"/sre/observability",permalink:"/docs/sre/observability",version:"current"},b=[{value:"Pillars of Observability",id:"pillars-of-observability",children:[]},{value:"Observability vs Monitoring",id:"observability-vs-monitoring",children:[]},{value:"Culture of Observability",id:"culture-of-observability",children:[]},{value:"Modern Event Handling Techniques",id:"modern-event-handling-techniques",children:[]},{value:"Metrics that Matter",id:"metrics-that-matter",children:[]},{value:"Sources",id:"sources",children:[]}],s={rightToc:b};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"observability"},"Observability"),Object(i.b)("p",null,"Observability is instrumenting systems and applications to collect events, metrics, and logs. It's designing and building applications with the idea that they will be watched and monitored."),Object(i.b)("p",null,"\"You can monitor a system using various instrumentation. But if the system doesn't externalize its state well enough that you can figure out what's going on in there, then you're stuck\" - Ernest Mueller"),Object(i.b)("p",null,"Observability is a necessary component of an application because with ever increasing complexity of infrastructure, monitoring needs to be better higher up the stack and deeper in the system."),Object(i.b)("h2",{id:"pillars-of-observability"},"Pillars of Observability"),Object(i.b)("p",null,"Events - Immutable record of discrete events that happen over time.",Object(i.b)("br",{parentName:"p"}),"\n","Metrics - Numbers describing a particular process or activity measured over intervals of time.",Object(i.b)("br",{parentName:"p"}),"\n","Tracing - Data that shows which line of code is failing to gain better visibility at the individual user level for events that have occurred.",Object(i.b)("br",{parentName:"p"}),"\n","Logs - "),Object(i.b)("h2",{id:"observability-vs-monitoring"},"Observability vs Monitoring"),Object(i.b)("p",null,"Observability is often mistakenly interchanged with monitoring.  "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Monitoring"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Observability"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Tells if the system is working"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Let's you ask why it's not working")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A collection of metrics and logs about a system"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The dissemination of information from that system")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Failure-centric"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Understand system behavior regardless of an outage")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'Is "the how" / Something you do'),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'Is "the goal" / Something you have')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"I ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("em",{parentName:"strong"},"monitor"))," you"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"You ",Object(i.b)("strong",{parentName:"td"},Object(i.b)("em",{parentName:"strong"},"make yourself"))," observable")))),Object(i.b)("h2",{id:"culture-of-observability"},"Culture of Observability"),Object(i.b)("p",null,"Observability is not a replacement for monitoring; they are complementary. It's difficult to implement effective monitoring without a culture of observability. Tools by themselves are not sufficient alone and none are going to automatically give observability.  "),Object(i.b)("p",null,"Observability as a culture is the degree to which a team or company values the ability to observe, inspect, and understand systems, their workload, and their behavior.  "),Object(i.b)("p",null,"Code isn't done until you've built analytics to observe and support it."),Object(i.b)("h2",{id:"modern-event-handling-techniques"},"Modern Event Handling Techniques"),Object(i.b)("p",null,"Three techniques used in handling events with the end goal of shared insights, a collaborative response, data-enabled IT, and intelligent operations.  "),Object(i.b)("p",null,"Collect All Relevant Data - This allows complete visibility across stacks, technologies, and environments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cloud Native"),Object(i.b)("li",{parentName:"ul"},"Traditional, on-premises, monolithic, etc."),Object(i.b)("li",{parentName:"ul"},"Hybrid environments")),Object(i.b)("p",null,"De-spam - Separate valuable signals from the noise."),Object(i.b)("p",null,"Add Context - Prioritize resolution to ensure service availability and to provide business detail."),Object(i.b)("h2",{id:"metrics-that-matter"},"Metrics that Matter"),Object(i.b)("p",null,"Metrics"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"System Metrics (CPU, memory, disk)"),Object(i.b)("li",{parentName:"ul"},"Infrastructure metrics (AWS CloudWatch)"),Object(i.b)("li",{parentName:"ul"},"Web tracking scripts (Google Analytics)"),Object(i.b)("li",{parentName:"ul"},"Application agents (APM, error tracking)"),Object(i.b)("li",{parentName:"ul"},"Business metrics (revenue, customer signups, bounce rate, cart abandonment)")),Object(i.b)("p",null,"Events"),Object(i.b)("p",null,"Events come in three forms - plain text, structured, and binary."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"System and server logs (syslog, journald)"),Object(i.b)("li",{parentName:"ul"},"Firewall and intrusion detection system logs"),Object(i.b)("li",{parentName:"ul"},"Social media feeds (Twitter, etc)"),Object(i.b)("li",{parentName:"ul"},"Application, platform, and server logs (log4j, log4net, Apache, MySQL, AWS)")),Object(i.b)("h2",{id:"sources"},"Sources"),Object(i.b)("p",null,'"Observability," Wikipedia, 2018',Object(i.b)("br",{parentName:"p"}),"\n",'Ernest Mueller, "Monitoring and Observability," ',Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.agileadmin.com"}),"www.agileadmin.com"),Object(i.b)("br",{parentName:"p"}),"\n","Splunk Beginners Guide to Observability  "))}c.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);