(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{174:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),p=n,d=b["".concat(i,".").concat(p)]||b[p]||f[p]||o;return r?a.a.createElement(d,s(s({ref:t},c),{},{components:r})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(174)),i={id:"the-four-golden-signals",title:"The 4 Golden Signals"},s={unversionedId:"sre/monitoring/the-four-golden-signals",id:"sre/monitoring/the-four-golden-signals",isDocsHomePage:!1,title:"The 4 Golden Signals",description:"The four golden signals of monitoring are latency, traffic, errors, and saturation. If you can only measure four metrics of your user-facing system, focus on these four.",source:"@site/docs/sre/monitoring/the-four-golden-signals.md",slug:"/sre/monitoring/the-four-golden-signals",permalink:"/docs/sre/monitoring/the-four-golden-signals",version:"current",sidebar:"monitor",previous:{title:"Monitoring Pattern",permalink:"/docs/sre/monitoring/monitoring-pattern"},next:{title:"Observability",permalink:"/docs/sre/monitoring/observability"}},l=[{value:"Latency",id:"latency",children:[]},{value:"Traffic",id:"traffic",children:[]},{value:"Errors",id:"errors",children:[]},{value:"Saturation",id:"saturation",children:[]}],c={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The four golden signals of monitoring are latency, traffic, errors, and saturation. If you can only measure four metrics of your user-facing system, focus on these four."),Object(o.b)("h2",{id:"latency"},"Latency"),Object(o.b)("p",null,"The time it takes to service a request.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It is important to distinguish between the latency of successful requests and the latency of failed requests."),Object(o.b)("li",{parentName:"ul"},"Slow errors are worse than fast errors!")),Object(o.b)("h2",{id:"traffic"},"Traffic"),Object(o.b)("p",null,"A measure of how much demand is being placed on your system.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Traffic is measured in a high-level system-specific metric"),Object(o.b)("li",{parentName:"ul"},"For a web service, this metric is typically HTTP requests per second. For an audio streaming system, this metric may focus on network I/O or concurrent users.")),Object(o.b)("h2",{id:"errors"},"Errors"),Object(o.b)("p",null,"The rate of requests that fail.  "),Object(o.b)("h2",{id:"saturation"},"Saturation"),Object(o.b)("p",null,'How "full" your system is.  '),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When creating rules for monitoring and alerting, asking the following questions can help you avoid false positives and pager burnout"),Object(o.b)("li",{parentName:"ul"},"Does this rule detect an otherwise undetected condition that is urgent, actionable, and actively or imminently user-visible?"),Object(o.b)("li",{parentName:"ul"},"Will I ever be able to ignore this alert, knowing it\u2019s benign? When and why will I be able to ignore this alert, and how can I avoid this scenario?"),Object(o.b)("li",{parentName:"ul"},"Does the alert definitely indicate that users are being negatively affected? Are there detectable cases in which users aren\u2019t being negatively impacted, such as test deployments that should be filtered out?"),Object(o.b)("li",{parentName:"ul"},"Can I take action in response to this alert? Is that action urgent, or could it wait until morning? Could the action be safely automated? Will that action be a long-term fix, or just a short-term workaround?"),Object(o.b)("li",{parentName:"ul"},"The alert system should be designed to alert on imminent real problems, alert on potential long term problems, and support rapid diagnosis."),Object(o.b)("li",{parentName:"ul"},"These questions reflect a fundamental philosophy on pages and pagers:"),Object(o.b)("li",{parentName:"ul"},"Every time the pager goes off, I should be able to react with a sense of urgency. I can only react with a sense of urgency a few times a day before I become fatigued."),Object(o.b)("li",{parentName:"ul"},"Every page should be actionable."),Object(o.b)("li",{parentName:"ul"},"Every page response should require intelligence. If a page merely merits a robotic response, it shouldn\u2019t be a page."),Object(o.b)("li",{parentName:"ul"},"Pages should be about a novel problem or an event that hasn\u2019t been seen before.")))}u.isMDXComponent=!0}}]);