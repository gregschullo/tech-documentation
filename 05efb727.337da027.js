(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{193:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},61:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(193)),i={id:"docker-overview",title:"Docker Overview"},c={unversionedId:"infrastructure/containerization/docker/docker-overview",id:"infrastructure/containerization/docker/docker-overview",isDocsHomePage:!1,title:"Docker Overview",description:"Docker Vendor Documentation",source:"@site/docs/infrastructure/containerization/docker/docker-overview.md",slug:"/infrastructure/containerization/docker/docker-overview",permalink:"/docs/infrastructure/containerization/docker/docker-overview",version:"current",sidebar:"containerization",previous:{title:"Minikube Overview",permalink:"/docs/infrastructure/containerization/kubernetes/minikube-overview"},next:{title:"Docker Commands",permalink:"/docs/infrastructure/containerization/docker/docker-commands"}},l=[{value:"Docker Concepts",id:"docker-concepts",children:[]},{value:"Images and Containers",id:"images-and-containers",children:[]},{value:"Containers and Virtual Machines",id:"containers-and-virtual-machines",children:[]},{value:"Docker Compose",id:"docker-compose",children:[{value:"Services",id:"services",children:[]}]}],s={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker Vendor Documentation"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gregschullo/documentation/blob/master/docs/container-platforms/docker-for-the-virtualization-admin.pdf"}),"Docker for the Virtualization Admin"),"  "),Object(o.b)("p",null,"Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same way you manage your applications. By taking advantage of Docker's methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.  "),Object(o.b)("p",null,"Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host. Containers are lightweight because they don't need the extra load of a hypervisor, but run directly within the host machine's kernel.  "),Object(o.b)("h2",{id:"docker-concepts"},"Docker Concepts"),Object(o.b)("p",null,"Docker is a platform to develop, deploy, share, and run applications with containers. The use of containers to deploy applications is called containerization.  "),Object(o.b)("p",null,"Containerization is increasingly popular because containers are:  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Flexible - even the most complex applications can be containerized  "),Object(o.b)("li",{parentName:"ul"},"Lightweight - containers leverage and share the host kernel  "),Object(o.b)("li",{parentName:"ul"},"Interchangeable - deploy updates and upgrades on the fly  "),Object(o.b)("li",{parentName:"ul"},"Portable - build locally, deploy to the cloud, and run anywhere  "),Object(o.b)("li",{parentName:"ul"},"Scalable - increase and automatically distribute container replicas  "),Object(o.b)("li",{parentName:"ul"},"Stackable - stack services vertically and on the fly  ")),Object(o.b)("h2",{id:"images-and-containers"},"Images and Containers"),Object(o.b)("p",null,"A container is launched by a running image. An image is an executable package that includes everything needed to run an application. The code, a runtime, libraries, environment variables, and configuration files.  "),Object(o.b)("p",null,"A container is a runtime instance of an image - what the image becomes in memory when executed (that is, an image with state or a user process). You can see a list of running containers with the command, ",Object(o.b)("inlineCode",{parentName:"p"},"docker ps"),", just as you would in Linux.  "),Object(o.b)("h2",{id:"containers-and-virtual-machines"},"Containers and Virtual Machines"),Object(o.b)("p",null,"A container runs natively on Linux and shares the kernel of the host machine with other containers. It runs a discrete process, taking no more memory than any other executable, making it lightweight.",Object(o.b)("br",{parentName:"p"}),"\n",'By contrast, a virtual machine (VM) runs a full blown "guest" operating system with virtual access to host resources through a hypervisor. In general, VMs provide an environment with more resources than most applications need.'),Object(o.b)("h2",{id:"docker-compose"},"Docker Compose"),Object(o.b)("p",null,"Docker Compose is a tool provided by Docker to build and run multi container applications.  "),Object(o.b)("h3",{id:"services"},"Services"),Object(o.b)("p",null,"Services are the components of your architecture or application. A service is something that would usually have an independent Dockerfile created for.  "))}u.isMDXComponent=!0}}]);