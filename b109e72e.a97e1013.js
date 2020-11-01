(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(158)),i={id:"osi-model",title:"OSI Model"},s={unversionedId:"infrastructure/osi-model",id:"infrastructure/osi-model",isDocsHomePage:!1,title:"OSI Model",description:"Application Layer - Responsibility of the host. Services layer.",source:"@site/docs/infrastructure/osi-model.md",slug:"/infrastructure/osi-model",permalink:"/docs/infrastructure/osi-model",version:"current",sidebar:"networking",previous:{title:"Networking Overview",permalink:"/docs/infrastructure/networking/networking-overview"},next:{title:"gRPC",permalink:"/docs/infrastructure/grpc"}},c=[],l={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Application Layer - Responsibility of the host. Services layer."),Object(a.b)("p",null,"Presentation Layer - Responsibility of the host. Services layer."),Object(a.b)("p",null,"Session Layer - Responsibility of the host. Middleware layer."),Object(a.b)("p",null,"Transport Layer - Responsibility of the host. Responsibility of the network. Middleware layer."),Object(a.b)("p",null,"Network Layer - Responsibility of the network. The operating systems layer."),Object(a.b)("p",null,"Data Link Layer - Responsibility of the network. The operating systems layer."),Object(a.b)("p",null,"Physical Layer - Responsibility of the network. The hardware layer."),Object(a.b)("p",null,"Physical Layer - Transmits electrical signals to the hosts. The hardware (Network Interface Card or NIC, switch port, etc) is responsible for this.",Object(a.b)("br",{parentName:"p"}),"\n","Data Link Layer - Defines the rules and procedures for accessing the physical layer. Defines how hosts are identified on the network and how the network mediums are accessed. It also specifies how to verify data received from the physical layer.",Object(a.b)("br",{parentName:"p"}),"\n","Network Layer - This enables the routing of the data. It specifies how to recognize the address of neighboring nodes and routers, for example. It basically specifies how to determine the next network point a packet should be forwarded toward its destination. The internet protocol operates at this layer.",Object(a.b)("br",{parentName:"p"}),"\n","Transport Layer - On the sending host, the transport layer receives information from the upper layers on the OSI model. It then divides that data into small, transmittable chunks called packets. On the receiving host, the transport layer resembles those packets from the lower layers of the OSI model. The transport layer also provides error checking mechanisms that ensure the data arrives at the destination host in tact. The transmission control protocol or TCP, and the User Datagram Protocol or UDP, all operate at layer 4.",Object(a.b)("br",{parentName:"p"}),"\n","Session Layer - Responsible for establishing and maintaining connections between source and destination network hosts. These connections are referred to as sessions.",Object(a.b)("br",{parentName:"p"}),"\n","Presentation Layer - Responsible for insuring the information passing through all of the OSI layers is formatted correctly for the application on the destination system.",Object(a.b)("br",{parentName:"p"}),"\n","Application Layer - Responsible for providing applications with a way that actually accesses the network.  "))}p.isMDXComponent=!0},158:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,d=u["".concat(i,".").concat(f)]||u[f]||h[f]||a;return r?o.a.createElement(d,s(s({ref:t},l),{},{components:r})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);