(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{158:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,m=l["".concat(o,".").concat(d)]||l[d]||p[d]||b;return r?a.a.createElement(m,c(c({ref:t},i),{},{components:r})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,o=new Array(b);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<b;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),b=(r(0),r(158)),o={id:"ruby-syntax",title:"Ruby Syntax"},c={unversionedId:"dev/ruby/ruby-syntax",id:"dev/ruby/ruby-syntax",isDocsHomePage:!1,title:"Ruby Syntax",description:"For comments, use a hashtag (#)",source:"@site/docs/dev/ruby/ruby-syntax.md",slug:"/dev/ruby/ruby-syntax",permalink:"/docs/dev/ruby/ruby-syntax",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dev/ruby/ruby-syntax.md",version:"current"},u=[{value:"Math",id:"math",children:[]},{value:"Strings",id:"strings",children:[]},{value:"Interpolation",id:"interpolation",children:[]},{value:"Truths",id:"truths",children:[]},{value:"Untruths",id:"untruths",children:[]},{value:"Convert Truths",id:"convert-truths",children:[]},{value:"Arrays",id:"arrays",children:[]}],i={rightToc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"For comments, use a hashtag (#)  "),Object(b.b)("p",null,"Assign local variables, x = 1  "),Object(b.b)("h2",{id:"math"},"Math"),Object(b.b)("p",null,"1 + 2 # => 3",Object(b.b)("br",{parentName:"p"}),"\n","2 ",Object(b.b)("em",{parentName:"p"}," 7 # => 14",Object(b.b)("br",{parentName:"em"}),"5 / 2 # => 2 (both arguments are whole numbers)",Object(b.b)("br",{parentName:"em"}),"5 / 2.0 # => 2.5 (one argument has a decimal)",Object(b.b)("br",{parentName:"em"}),"1 + (2 ")," 3) # => 7 (order of operations)  "),Object(b.b)("h2",{id:"strings"},"Strings"),Object(b.b)("p",null,"'single quoted' # => 'single quoted'",Object(b.b)("br",{parentName:"p"}),"\n",'"double quoted" # => "double quoted"',Object(b.b)("br",{parentName:"p"}),"\n","'It\\'s alive!' # => It's alive! (\\ is an escape character)",Object(b.b)("br",{parentName:"p"}),"\n","'1 + 2 = 5' # => 1 + 2 = 5  "),Object(b.b)("p",null,"x = 'Bob'",Object(b.b)("br",{parentName:"p"}),"\n",'"Hi, #{x}" # => "Hi, Bob"\n\'Hello, #{x}\' # => "Hello, ',"#","{x}\" (single quotes don't work for variables)  "),Object(b.b)("h2",{id:"interpolation"},"Interpolation"),Object(b.b)("p",null,"When strings have quotes withing quotes, use double quotes \" \" in the outer quotes, and then single quotes ' ' for the inner quotes."),Object(b.b)("h2",{id:"truths"},"Truths"),Object(b.b)("p",null,"true # => true",Object(b.b)("br",{parentName:"p"}),"\n","false # => false",Object(b.b)("br",{parentName:"p"}),"\n","nil # => nil",Object(b.b)("br",{parentName:"p"}),"\n","0 # => true (only false and nil are false in Ruby. If it exists in Ruby, even as a 0, it's true)",Object(b.b)("br",{parentName:"p"}),"\n","1 == 1 # => true (== checks for equality)",Object(b.b)("br",{parentName:"p"}),"\n","1 == true # => false (== checks for equality)  "),Object(b.b)("h2",{id:"untruths"},"Untruths"),Object(b.b)("p",null,"!true # => false",Object(b.b)("br",{parentName:"p"}),"\n","!false # => true",Object(b.b)("br",{parentName:"p"}),"\n","!nil # => true",Object(b.b)("br",{parentName:"p"}),"\n","1! = 2 # => true (1 is not equal to 2)",Object(b.b)("br",{parentName:"p"}),"\n","1! = 1 => false (1 is not, not equal to itself)  "),Object(b.b)("h2",{id:"convert-truths"},"Convert Truths"),Object(b.b)("p",null,"!!true # => true",Object(b.b)("br",{parentName:"p"}),"\n","!!false # => false",Object(b.b)("br",{parentName:"p"}),"\n","!!nil # => false",Object(b.b)("br",{parentName:"p"}),"\n","!!0 # => true (zero is not false)  "),Object(b.b)("h2",{id:"arrays"},"Arrays"),Object(b.b)("p",null,"x = ","['a','b','c']"," # => ",'["a","b","c"]',Object(b.b)("br",{parentName:"p"}),"\n","x","[0]",' # => "a" (zero is first index)',Object(b.b)("br",{parentName:"p"}),"\n",'x.first # => "a"',Object(b.b)("br",{parentName:"p"}),"\n",'x.last # => "c"',Object(b.b)("br",{parentName:"p"}),"\n","x + ","['d']"," # => ",'["a","b","c","d"]',Object(b.b)("br",{parentName:"p"}),"\n","x # => ",'["a","b","c"]',Object(b.b)("br",{parentName:"p"}),"\n","x = x + ","['d']"," # => ",'["a","b","c","d"]',Object(b.b)("br",{parentName:"p"}),"\n","x = # => ",'["a","b","c","d"]',"  "))}s.isMDXComponent=!0}}]);