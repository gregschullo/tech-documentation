(window.webpackJsonp=window.webpackJsonp||[]).push([[15,100],{234:function(e,a,t){"use strict";t.r(a);t(24),t(20),t(19),t(56),t(254);var n=t(0),r=t.n(n),c=t(237),l=t(238),i=t(67),o=t(245),s=t(1),u=t(239),d=t.n(u),m=t(268),f=t(269),h=t(240),b=t(246),p=t(148),v=t.n(p);function E(e){var a=e.item,t=e.onItemClick,c=e.collapsible,l=a.items,i=a.href,o=a.label,u=a.type,m=Object(n.useState)(a.collapsed),f=m[0],p=m[1],v=Object(n.useState)(null),k=v[0],g=v[1];a.collapsed!==k&&(g(a.collapsed),p(a.collapsed));var w=Object(n.useCallback)((function(e){e.preventDefault(),p((function(e){return!e}))}));switch(u){case"category":return l.length>0&&r.a.createElement("li",{className:d()("menu__list-item",{"menu__list-item--collapsed":f}),key:o},r.a.createElement("a",{className:d()("menu__link",{"menu__link--sublist":c,"menu__link--active":c&&!a.collapsed}),href:"#!",onClick:c?w:void 0},o),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(E,{key:e.label,item:e,onItemClick:t,collapsible:c})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:o},r.a.createElement(h.a,Object(s.a)({className:"menu__link",to:i},Object(b.a)(i)?{activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),o))}}var k=function(e){var a=Object(n.useState)(!1),t=a[0],c=a[1],i=Object(l.a)(),o=i.siteConfig,u=(o=void 0===o?{}:o).themeConfig.navbar,b=(u=void 0===u?{}:u).title,p=u.hideOnScroll,k=void 0!==p&&p,g=i.isClient,w=Object(f.a)(),_=w.logoLink,y=w.logoLinkProps,C=w.logoImageUrl,N=w.logoAlt,O=e.docsSidebars,j=e.path,S=e.sidebar,x=e.sidebarCollapsible;if(Object(m.a)(t),!S)return null;var M=O[S];if(!M)throw new Error('Cannot find the sidebar "'+S+'" in the sidebar config!');return x&&M.forEach((function(e){return function e(a,t){var n=a.items,r=a.href;switch(a.type){case"category":var c=n.map((function(a){return e(a,t)})).filter((function(e){return e})).length>0;return a.collapsed=!c,c;case"link":default:return r===t}}(e,j)})),r.a.createElement("div",{className:v.a.sidebar},k&&r.a.createElement(h.a,Object(s.a)({className:v.a.sidebarLogo,to:_},y),null!=C&&r.a.createElement("img",{key:g,src:C,alt:N}),null!=b&&r.a.createElement("strong",null,b)),r.a.createElement("div",{className:d()("menu","menu--responsive",v.a.menu,{"menu--show":t})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){c(!t)}},t?r.a.createElement("span",{className:d()(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},M.map((function(e){return r.a.createElement(E,{key:e.label,item:e,onItemClick:function(){c(!1)},collapsible:x})})))))},g=t(264),w=t(265),_=t(242),y=t(153),C=t.n(y);a.default=function(e){var a=e.route,t=e.docsMetadata,n=e.location,s=a.routes.find((function(e){return Object(_.a)(n.pathname,e)}))||{},u=t.permalinkToSidebar,d=t.docsSidebars,m=t.version,f=u[s.path],h=Object(l.a)(),b=h.siteConfig,p=(b=void 0===b?{}:b).themeConfig,v=void 0===p?{}:p,E=h.isClient,y=v.sidebarCollapsible,N=void 0===y||y;return 0===Object.keys(s).length?r.a.createElement(w.default,e):r.a.createElement(o.a,{version:m,key:E},r.a.createElement("div",{className:C.a.docPage},f&&r.a.createElement("div",{className:C.a.docSidebarContainer},r.a.createElement(k,{docsSidebars:d,path:s.path,sidebar:f,sidebarCollapsible:N})),r.a.createElement("main",{className:C.a.docMainContainer},r.a.createElement(c.a,{components:g.a},Object(i.a)(a.routes)))))}},247:function(e,a,t){"use strict";t(24),t(20),t(75),t(52),t(19);var n=t(0),r=t.n(n),c=t(239),l=t.n(c),i=t(242),o=t(238),s=!1;a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),u=Object(i.b)(),d=Object(o.a)().siteConfig,m=(void 0===d?{}:d).baseUrl,f=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=m+t.url;document.createElement("a").href=n,u.push(n)}}),a.current=!0)},h=function(){s?f():Promise.all([fetch(m+"search-data.json").then((function(e){return e.json()})),Promise.all([t.e(99),t.e(101)]).then(t.bind(null,249)),t.e(63).then(t.t.bind(null,248,7))]).then((function(e){var a=e[0],t=e[1].default;s=!0,window.searchData=a,window.DocSearch=t,f()}))},b=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:b,onBlur:b,ref:c}))}},254:function(e,a,t){"use strict";var n=t(12),r=t(255)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),n(n.P+n.F*c,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),t(76)("find")},255:function(e,a,t){var n=t(26),r=t(55),c=t(28),l=t(25),i=t(256);e.exports=function(e,a){var t=1==e,o=2==e,s=3==e,u=4==e,d=6==e,m=5==e||d,f=a||i;return function(a,i,h){for(var b,p,v=c(a),E=r(v),k=n(i,h,3),g=l(E.length),w=0,_=t?f(a,g):o?f(a,0):void 0;g>w;w++)if((m||w in E)&&(p=k(b=E[w],w,v),e))if(t)_[w]=p;else if(p)switch(e){case 3:return!0;case 5:return b;case 6:return w;case 2:_.push(b)}else if(u)return!1;return d?-1:s||u?u:_}}},256:function(e,a,t){var n=t(257);e.exports=function(e,a){return new(n(e))(a)}},257:function(e,a,t){var n=t(13),r=t(258),c=t(2)("species");e.exports=function(e){var a;return r(e)&&("function"!=typeof(a=e.constructor)||a!==Array&&!r(a.prototype)||(a=void 0),n(a)&&null===(a=a[c])&&(a=void 0)),void 0===a?Array:a}},258:function(e,a,t){var n=t(21);e.exports=Array.isArray||function(e){return"Array"==n(e)}},265:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(245);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);