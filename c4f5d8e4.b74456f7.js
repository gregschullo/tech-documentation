(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{207:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),c=t.n(r),l=t(229),i=t.n(l),s=t(235),o=t(230),m=t(228),u=t(234),h=t(208),d=t.n(h),g=[{title:c.a.createElement(c.a.Fragment,null),imageUrl:"img/instagram.png",imageLink:"https://www.instagram.com/greg.schullo/",description:c.a.createElement(c.a.Fragment,null)},{title:c.a.createElement(c.a.Fragment,null),imageUrl:"img/linkedin.png",imageLink:"https://www.linkedin.com/in/gregory-schullo/",description:c.a.createElement(c.a.Fragment,null)},{title:c.a.createElement(c.a.Fragment,null),imageUrl:"img/twitter.png",imageLink:"https://twitter.com/gregschullo",description:c.a.createElement(c.a.Fragment,null)}];function p(e){var a=e.imageUrl,t=e.title,n=e.description,r=e.imageLink,l=Object(u.a)(a);return c.a.createElement("div",{className:i()("col col--4",d.a.feature)},l&&c.a.createElement("div",{className:"text--center"},c.a.createElement(o.a,{to:r,target:"_blank"},c.a.createElement("img",{className:d.a.featureImage,src:l,alt:t}))),c.a.createElement("h3",null,t),c.a.createElement("p",null,n))}a.default=function(){var e=Object(m.a)().siteConfig,a=void 0===e?{}:e;return c.a.createElement(s.a,{title:"",description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:i()("hero hero--primary",d.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline))),c.a.createElement("main",null,g&&g.length&&c.a.createElement("section",{className:d.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},g.map((function(e,a){return c.a.createElement(p,Object(n.a)({key:a},e))})))))))}},237:function(e,a,t){"use strict";t(24),t(20),t(75),t(52),t(19);var n=t(0),r=t.n(n),c=t(229),l=t.n(c),i=t(232),s=t(228),o=!1;a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),m=Object(i.b)(),u=Object(s.a)().siteConfig,h=(void 0===u?{}:u).baseUrl,d=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=h+t.url;document.createElement("a").href=n,m.push(n)}}),a.current=!0)},g=function(){o?d():Promise.all([fetch(h+"search-data.json").then((function(e){return e.json()})),Promise.all([t.e(89),t.e(91)]).then(t.bind(null,239)),t.e(60).then(t.t.bind(null,238,7))]).then((function(e){var a=e[0],t=e[1].default;o=!0,window.searchData=a,window.DocSearch=t,d()}))},p=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:g,onMouseOver:g,onFocus:p,onBlur:p,ref:c}))}}}]);