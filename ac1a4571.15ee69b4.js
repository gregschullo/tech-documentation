(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(6),b=(t(0),t(174)),p={id:"regular-expression",title:"Regular Expression"},i={unversionedId:"os/linux/regular-expression",id:"os/linux/regular-expression",isDocsHomePage:!1,title:"Regular Expression",description:"Anchors",source:"@site/docs/os/linux/regular-expression.md",slug:"/os/linux/regular-expression",permalink:"/docs/os/linux/regular-expression",version:"current",sidebar:"linux",previous:{title:"VI Cheatsheet",permalink:"/docs/os/linux/vi-cheatsheet"}},c=[{value:"Anchors",id:"anchors",children:[]},{value:"Character Classes",id:"character-classes",children:[]},{value:"POSIX Character Classes",id:"posix-character-classes",children:[]},{value:"Assertions",id:"assertions",children:[]},{value:"Sample Patterns",id:"sample-patterns",children:[]},{value:"Quantifiers",id:"quantifiers",children:[]},{value:"Special Characters",id:"special-characters",children:[]},{value:"String Replacement (Backreferences)",id:"string-replacement-backreferences",children:[]},{value:"Ranges",id:"ranges",children:[]},{value:"Pattern Modifiers",id:"pattern-modifiers",children:[]},{value:"Metacharacters",id:"metacharacters",children:[]}],o={rightToc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"anchors"},"Anchors"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"^")," - start of line",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\A")," - start of string",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"$")," - end of line",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\Z")," - end of string",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\b")," - Word boundary",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\B")," - Not a word boundary",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\<")," - star of word",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\>")," - end of word  "),Object(b.b)("h2",{id:"character-classes"},"Character Classes"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"\\c")," - control character",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\s")," - white space",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\d")," - digit",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\D")," - not digit",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\w")," - word",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\W")," - not word",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\xhh")," - hexadecimal character hh",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\Oxxx")," - octal character xxx  "),Object(b.b)("h2",{id:"posix-character-classes"},"POSIX Character Classes"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"[:upper:]")," - upper case letters",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:lower:]")," - lower case letters",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:alpha:]")," - all letters",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:alnum:]")," - digits and letters",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:digit:]")," - digits",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:xdigit:]")," - hexadecimal digits",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:punct:]"),"- punctuation",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:blank:]")," - space and tab",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:space:]")," - blank characters",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:cntrl:]")," - control characters",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:graph:]")," - printed characters",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:print:]")," - printed characters and spaces",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[:word:]")," - digits, letters, and underscore  "),Object(b.b)("h2",{id:"assertions"},"Assertions"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"?=")," - lookahead assertion",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"?!")," - negative lookahead",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"?<=")," - lookbehind assertion",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"?!= or ?<!")," - negative lookbehind",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"?>")," - once only subexpression",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"?()")," - condition (if then)",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"?()|")," - condition (if then else)",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"?#")," - comment  "),Object(b.b)("h2",{id:"sample-patterns"},"Sample Patterns"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"([A-Za-z0-9-]+)")," - letters, numbers, and hyphens\n",Object(b.b)("inlineCode",{parentName:"p"},"(\\d{1,2}\\/\\d{1,2}\\/\\d{4})")," - date (21/3/2006)",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"([^\\s]+(?=\\.(jpg|gif|png))\\.\\2)")," - jpg, gif, or png image",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"(^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$)")," - any number from 1 to 50 inclusive",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"(#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)")," - valid hexadecimal color code",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})")," - 8 to 15 character string with at least one upper case letter, one lower case letter, and one digit (useful for passwords)",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"(\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6})")," - email addresses",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"(\\<(/?[^\\>]+)\\>)")," - HTML tags  "),Object(b.b)("h2",{id:"quantifiers"},"Quantifiers"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"*")," - 0 or more",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"*?")," - 0 or more, ungreedy",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"+")," - 1 or more",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"+?")," - 1 or more, ungreedy",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"?")," - 0 or 1",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"??")," - 0 or 1, ungreedy",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"{3}")," - exactly 3",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"{3,}")," - 3 or more",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"{3,5}")," - 3, 4, or 5",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"{3,5}?")," - 3, 4, or 5, ungreedy  "),Object(b.b)("h2",{id:"special-characters"},"Special Characters"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"\\")," - escape character",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\n")," - new line",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\r")," - carriage",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\t")," - tab",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\v")," - vertical tab",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\f")," - form feed",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\a")," - alarm",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[\\b]")," - backspace",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\e")," - escape",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\N{name}")," - named character  "),Object(b.b)("h2",{id:"string-replacement-backreferences"},"String Replacement (Backreferences)"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"$n")," - nth non-passive group",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"$2"),' - "xyz" in /^(abc(xyz))$/',Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"$1"),' - "xyz" in /^(?:abc)(xyz)$/',Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"$")," - (dollar sign+tick) before matched string",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"$'")," - after matched string",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"$+")," - last matched string",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"$&")," - entire matched string",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"$_")," - entire input string",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"$$"),' - literal "$"  '),Object(b.b)("h2",{id:"ranges"},"Ranges"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},".")," - any character except new line (\\n)",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"(a|b)")," - a or b",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"(...)")," - group",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"(?:...)")," - passive group",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[abc]")," - range (a or b or c)",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[^abc]")," - not a or b or c",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[a-q]")," - letter between a and q",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[A-Q]")," - upper case letter between A and Q",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"[0-7]")," - digit between 0 and 7",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\n")," - nth group/subpattern  "),Object(b.b)("p",null,"Note: Ranges are inclusive  "),Object(b.b)("h2",{id:"pattern-modifiers"},"Pattern Modifiers"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"g")," - global match",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"i")," - case-insensitive",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"m")," - multiple lines",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"s")," - treat string as single line",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"x")," - allow comments and white space in pattern",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"e")," - evaluate replacement",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"U")," - ungreedy pattern  "),Object(b.b)("h2",{id:"metacharacters"},"Metacharacters"),Object(b.b)("p",null,"Metacharacters must be escaped.  "),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"^"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"$"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"("),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},")"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"<"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},">"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"["),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"{"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"\\"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"|"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"."),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"*"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"+"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("inlineCode",{parentName:"p"},"?"),"  "))}l.isMDXComponent=!0},174:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return j}));var a=t(0),r=t.n(a);function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){b(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)t=b[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)t=b[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),l=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,b=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,j=m["".concat(p,".").concat(d)]||m[d]||O[d]||b;return t?r.a.createElement(j,i(i({ref:n},o),{},{components:t})):r.a.createElement(j,i({ref:n},o))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var b=t.length,p=new Array(b);p[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var o=2;o<b;o++)p[o]=t[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);