(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),a=(n(0),n(174)),l={id:"installing-kubectl",title:"Installing Kubectl"},o={unversionedId:"infrastructure/containerization/kubernetes/kubectl/installing-kubectl",id:"infrastructure/containerization/kubernetes/kubectl/installing-kubectl",isDocsHomePage:!1,title:"Installing Kubectl",description:"Kubernetes kubectl Installation Documentation",source:"@site/docs/infrastructure/containerization/kubernetes/kubectl/installing-kubectl.md",slug:"/infrastructure/containerization/kubernetes/kubectl/installing-kubectl",permalink:"/docs/infrastructure/containerization/kubernetes/kubectl/installing-kubectl",version:"current",sidebar:"containerization",previous:{title:"Kubectl Overview",permalink:"/docs/infrastructure/containerization/kubernetes/kubectl/kubectl-overview"},next:{title:"Docker Overview",permalink:"/docs/infrastructure/containerization/docker/docker-overview"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installing Kubectl",id:"installing-kubectl",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-macos"}),"Kubernetes kubectl Installation Documentation"),"  "),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Ensure virtualization is supported on your macOS, open terminal and run:",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"sysctl -a | grep -E --color 'machdep.cpu.features|VMX'")),Object(a.b)("p",null,"If you see VMX in the output (should be colored), the VT-x feature is enabled in your machine."),Object(a.b)("h2",{id:"installing-kubectl"},"Installing Kubectl"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install the latest version of kubectl\n",Object(a.b)("inlineCode",{parentName:"li"},'curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl"')),Object(a.b)("li",{parentName:"ol"},"Make the kubectl binary executable\n",Object(a.b)("inlineCode",{parentName:"li"},"chmod +x ./kubectl")),Object(a.b)("li",{parentName:"ol"},"Move the binary in to your PATH\n",Object(a.b)("inlineCode",{parentName:"li"},"sudo mv ./kubectl /usr/local/bin/kubectl")),Object(a.b)("li",{parentName:"ol"},"Test to ensure the version you installed is up to date.\n",Object(a.b)("inlineCode",{parentName:"li"},"kubectl version --client"))),Object(a.b)("p",null,"Alternatively, install kubectl with Homebrew\n",Object(a.b)("inlineCode",{parentName:"p"},"brew install kubectl")))}s.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,f=b["".concat(l,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(f,o(o({ref:t},u),{},{components:n})):i.a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);