(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(167)),i={id:"monitoring-glossary",title:"Monitoring Glossary"},c={unversionedId:"sre/monitoring/monitoring-glossary",id:"sre/monitoring/monitoring-glossary",isDocsHomePage:!1,title:"Monitoring Glossary",description:"Application - A program in which you interact with",source:"@site/docs/sre/monitoring/monitoring-glossary.md",slug:"/sre/monitoring/monitoring-glossary",permalink:"/docs/sre/monitoring/monitoring-glossary",version:"current",sidebar:"monitor",previous:{title:"The 4 Golden Signals",permalink:"/docs/sre/monitoring/the-four-golden-signals"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Application - A program in which you interact with"),Object(a.b)("p",null,"Process - The filename that runs when you launch an application. A process can manage multiple services."),Object(a.b)("p",null,"Service - A process that runs in the background (you do not directly interact with it). A service can start as soon as the OS is booted and can run even if you are logged off your account. Only one instance of a service can run at one time. A service can manage multiple processes."),Object(a.b)("p",null,"APM - monitoring and management of performance and availability of software applications. APM strives to detect and diagnose complex application performance problems to maintain an expected level of service."),Object(a.b)("p",null,"Metrics (Time Series Data) - aggregated measurements over time. Examples include throughput over time, average response time over a one minute interval, or CPU utilization of time."),Object(a.b)("p",null,"Events - discrete events that happen at a specific moment in time. Examples include a log or error being reported or a configuration change.\n\u2022 Some events are aggregated over time to create metrics (for example: a count of errors over time)."),Object(a.b)("p",null,"Logs - files that record\xa0events\xa0that occur in an\xa0operating system\xa0or\xa0software"),Object(a.b)("p",null,"Traces - a complete picture of a single\xa0transaction, down to the database queries and exact invocation patterns. With traces, you get much deeper visibility into a single slow transaction, which can help you understand a broader problem"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\u2022 transaction - one logical unit of work in an application. This term primarily refers to server-side transactions monitored\n")),Object(a.b)("p",null,"Thread - "),Object(a.b)("p",null,"Transaction - one of the system level calls generated by an action that is logged on your system. "),Object(a.b)("p",null,"Transaction trace - a stack trace of a transaction."),Object(a.b)("p",null,"Apdex_t = the goal time of the transaction. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'apdex_t "tolerating" = a load time greater than the apdex_t value, but less than 4 times that number (e.x. if the apdex_t is .5, apdex_t "tolerating" is between .51 and 1.99)'),Object(a.b)("li",{parentName:"ul"},'apdex_t "frustrated" = a load time 4x greater than the apdex_t value. ')),Object(a.b)("p",null,"Key transactions - transactions you have decided are really important, this enables more detailed alerting options."),Object(a.b)("p",null,"Telemetry - "),Object(a.b)("p",null,"Key Performance Indicator (KPI) - a recurring saved search that returns the value of performance metric, such as CPU load percentage, memory used percentage, response time, and so on."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Defining KPIs for APIs being used is a critical part of understanding not just how they work but how well they can work and the impact they have on your services. Some KPIs are 'soft' - your documentation, the formal definitions of how the API works, and other are 'hard' - focusing on the underlying functionality of the service being measured.")))}u.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);