(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),i=(n(0),n(167)),o={id:"elastic-apm-overview",title:"Elastic APM Overview"},c={unversionedId:"monitor-alert/elastic/elastic-apm-overview",id:"monitor-alert/elastic/elastic-apm-overview",isDocsHomePage:!1,title:"Elastic APM Overview",description:"Elastic APM agents capture spans, transactions, errors, and metrics (also known as Events) within their instrumented applications.",source:"@site/docs/monitor-alert/elastic/elastic-apm-overview.md",slug:"/monitor-alert/elastic/elastic-apm-overview",permalink:"/docs/monitor-alert/elastic/elastic-apm-overview",version:"current"},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Elastic APM agents capture spans, transactions, errors, and metrics (also known as Events) within their instrumented applications."),Object(i.b)("p",null,"Spans - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/apm/get-started/7.0/transaction-spans.html"}),"https://www.elastic.co/guide/en/apm/get-started/7.0/transaction-spans.html")),Object(i.b)("p",null,"Spans contain information about a specific code path that has been executed. They measure from start to end of an activity and they can have a parent/child relationship with other spans."),Object(i.b)("p",null,"Agents automatically instrument a variety of libraries to capture these spans from within the application. In addition, you can use the Agent API for ad hoc instrumentation of specific code paths."),Object(i.b)("p",null,"A span contains:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"            \u2022 a transaction.id attribute that refers to their parent transaction.\n\n            \u2022 a parent.id attribute that refers to their parent span, or their transaction.\n\n            \u2022 start time and duration\n\n            \u2022 name\n\n            \u2022 type\n\n            \u2022 stack trace (optional)\n")),Object(i.b)("p",null,"Spans are stored in span indices. These indices are separate from transaction indices by default."),Object(i.b)("p",null,"Transactions - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/apm/get-started/7.0/transactions.html"}),"https://www.elastic.co/guide/en/apm/get-started/7.0/transactions.html")),Object(i.b)("p",null,"Transactions are a special kind of span that have additional attributes associated with them. They describe an event captured by an Elastic APM agent instrumenting a service. You can think of transactions as the highest level of work you're measuring within a service. As an example, a transaction may be a:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"            \u2022 Request to your server\n\n            \u2022 Batch job\n\n            \u2022 Background job\n\n            \u2022 Custom transaction type\n")),Object(i.b)("p",null,"Agents decide whether to sample transactions or not and provide settings to control sampling behavior. If sampled, the spans of a transaction are sent and stored as separate documents. Within one transaction there can be 0, 1, or many spans captured."),Object(i.b)("p",null," A transaction contains:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"            \u2022 the timestamp of the event\n\n            \u2022 A unique id, type, and name\n\n            \u2022 data about the environment in which the event is recorded:\n\n                            \u25cb Service - environment, framework, language, etc\n\n                            \u25cb Host - architecture, hostname, IP, etc\n\n                            \u25cb Process - args, PID, PPID, etc\n\n                            \u25cb URL - full, domain, port, query, etc\n\n                            \u25cb User - (if supplied) email, ID, username, etc\n\n            \u2022 other relevant information depending on the agent. An example would be, the JavaScript RUM agent captures transaction marks, which are points in time relative to the start of the transaction with some label.\n")),Object(i.b)("p",null,"Transactions are stored in transaction indices."),Object(i.b)("p",null,"Errors - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/apm/get-started/7.0/errors.html"}),"https://www.elastic.co/guide/en/apm/get-started/7.0/errors.html")),Object(i.b)("p",null,"An error event contains at least information about the original exception that occurred or about a log created when the exception occurred. For simplicity, errors are represented by a unique ID."),Object(i.b)("p",null,"An error contains:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"            \u2022 Both the captured exception and the captured log of an error can contain a stack trace, which is helpful for debugging\n\n            \u2022 The culprit of an error indicates where it originated\n\n            \u2022 An error may relate to the transaction during which it happened, via the transaction.id\n\n            \u2022 Data aboht \n")),Object(i.b)("p",null,"Metrics - "))}l.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);