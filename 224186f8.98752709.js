(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{193:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return b}));var t=r(0),c=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),u=function(e){var n=c.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=u(e.components);return c.a.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},y=c.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=u(r),y=t,b=m["".concat(o,".").concat(y)]||m[y]||l[y]||a;return r?c.a.createElement(b,s(s({ref:n},i),{},{components:r})):c.a.createElement(b,s({ref:n},i))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var i=2;i<a;i++)o[i]=r[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},79:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return u}));var t=r(2),c=r(6),a=(r(0),r(193)),o={id:"cypress-commands",title:"Cypress Commands"},s={unversionedId:"qa/cypress/cypress-commands",id:"qa/cypress/cypress-commands",isDocsHomePage:!1,title:"Cypress Commands",description:"cy.exec() - run system commands",source:"@site/docs/qa/cypress/cypress-commands.md",slug:"/qa/cypress/cypress-commands",permalink:"/docs/qa/cypress/cypress-commands",version:"current",sidebar:"cypress",previous:{title:"Cypress Dashboards",permalink:"/docs/qa/cypress/cypress-dashboards"}},p=[],i={rightToc:p};function u(e){var n=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},i,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"cy.exec()")," - run system commands\n",Object(a.b)("inlineCode",{parentName:"p"},"cy.task()")," - run code in Node via the pluginsFile\n",Object(a.b)("inlineCode",{parentName:"p"},"cy.request()")," - make HTTP requests\n",Object(a.b)("inlineCode",{parentName:"p"},"cy.visit()")," -",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"cy.contains()")," -",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"cy.url()")," -",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"cy.get()")," -  "))}u.isMDXComponent=!0}}]);