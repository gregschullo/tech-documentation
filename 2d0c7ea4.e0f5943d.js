(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{174:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=p(n),b=r,d=h["".concat(i,".").concat(b)]||h[b]||f[b]||a;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(174)),i={id:"vi-cheatsheet",title:"VI Cheatsheet"},l={unversionedId:"os/linux/vi-cheatsheet",id:"os/linux/vi-cheatsheet",isDocsHomePage:!1,title:"VI Cheatsheet",description:"Starting vi:",source:"@site/docs/os/linux/vi-cheatsheet.md",slug:"/os/linux/vi-cheatsheet",permalink:"/docs/os/linux/vi-cheatsheet",version:"current",sidebar:"linux",previous:{title:"Bash Scripting",permalink:"/docs/os/linux/bash-scripting"},next:{title:"Regular Expression",permalink:"/docs/os/linux/regular-expression"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Starting vi:\nvi filename \tstart editing filename, create it if necessary\nSaving the file you're working on and/or leaving vi:\n:wq \twrite the file to disk and quit\n:q! \tquit without saving any changes\n:w! newfile \twrite all lines from the entire current file into the file 'newfile', overwriting any existing newfile\n:n,m w! newfile \twrite the lines from n to m, inclusive, into the file newfile, overwriting any existing newfile"),Object(a.b)("p",null,"Moving the Cursor\nMany commands take number prefixes; for example 5w moves to the right by 5 words.\nh \tone space to the left (also try left arrow)\nj \tone line down (also try down arrow)\nk \tone line up (also try up arrow)\nl \tone space to the right (also try right arrow)\n$ \tend of current line\n^ \tbeginning of current line\nEnter \tbeginning first word on the next line\nG \tend of file\n:n \tline n\nw \tbeginning of next word\ne \tend of next word\nb \tbeginning of previous word\nCtrl-b \tone page up\nCtrl-f \tone page down\n% \tthe matching (, ), ","[, ]",", {, or } "),Object(a.b)("p",null,"Searching for Text\n/string \tsearch down for string\n?string \tsearch up for string\nn \trepeat last search from present position "),Object(a.b)("p",null,"Inserting Text\na  \tappend starting right of cursor\nA  \tappend at the end of the current line\ni  \tinsert starting left of cursor\nI  \tinsert at beginning of the current line\no  \topen line below cursor, then enter insert mode\nO  \topen line above cursor, then enter insert mode\n:r newfile  \tadd the contents of the file newfile starting below the current line "),Object(a.b)("p",null,"Deleting Text\nx \tdelete single character; 5x deletes 5 characters\ndw \tdelete word; 5dw deletes 5 words\ndd \tdelete line; 5dd deletes ... well you get the idea!\ncw \tdelete word, leaves you in insert mode (i.e. change word)\ncc \tchange line -- delete line and start insert mode\ns \tchange character -- delete character and start insert mode\nD \tdelete from cursor to end of line\nC \tchange from cursor to end of line -- delete and start insert mode\nu \tundo last change\nU \tundo all changes to current line\nJ \tjoin current line with line that follows (press Enter in insert mode to split line)"),Object(a.b)("p",null,'Cutting and Pasting\nxp \ttranspose two characters (two commands, x followed by p)\nyy\tyank (i.e. copy) one line into a general buffer (5yy to yank 5 lines)\n"ayy\tyank into the buffer named a\nP\tput the general buffer back before the current line\n"aP\tput from buffer a before current line\np\tput the general buffer back after the current line\n"ap\tput from buffer a after the current line'),Object(a.b)("p",null,"VI COMMANDS Cheat Sheet\nModes"),Object(a.b)("p",null,"Vi has two modes insertion mode and command mode. The editor begins in command mode, where the cursor movement and text deletion and pasting occur. Insertion mode begins upon entering an insertion or change command. ","[ESC]",' returns the editor to command mode (where you can quit, for example by typing :q!). Most commands execute as soon as you type them except for "colon" commands which execute when you press the ruturn key. '),Object(a.b)("p",null,"Quitting"),Object(a.b)("p",null,":x\tExit, saving changes\n:q\tExit as long as there have been no changes\nZZ\tExit and save changes if any have been made\n:q!\tExit and ignore any changes"),Object(a.b)("p",null,"Inserting Text"),Object(a.b)("p",null,"i\tInsert before cursor"),Object(a.b)("p",null,"I\tInsert before line\na\tAppend after cursor\nA\tAppend after line\no\tOpen a new line after current line\nO\tOpen a new line before current line\nr\tReplace one character\nR\tReplace many characters"),Object(a.b)("p",null,"Motion"),Object(a.b)("p",null,"h\tMove left\nj\tMove down\nk\tMove up\nl\tMove right\nw\tMove to next word\nW\tMove to next blank delimited word\nb\tMove to the beginning of the word\nB\tMove to the beginning of blank delimted word\ne\tMove to the end of the word\nE\tMove to the end of Blank delimited word\n(\tMove a sentence back\n)\tMove a sentence forward\n{\tMove a paragraph back\n}\tMove a paragraph forward\n0\tMove to the begining of the line\n$\tMove to the end of the line\n1G\tMove to the first line of the file\nG\tMove to the last line of the file\nnG\tMove to nth line of the file\n:n\tMove to nth line of the file\nfc\tMove forward to c\nFc\tMove back to c\nH\tMove to top of screen\nM\tMove to middle of screen\nL\tMove to botton of screen\n%\tMove to associated ( ), { }, ","[ ]"),Object(a.b)("p",null,"Deleting Text"),Object(a.b)("p",null,"Almost all deletion commands are performed by typing d followed by a motion. For example, dw deletes a word. A few other deletes are:\nx\tDelete character to the right of cursor\nX\tDelete character to the left of cursor\nD\tDelete to the end of the line\ndd\tDelete current line\n:d\tDelete current line"),Object(a.b)("p",null,"Yanking Text"),Object(a.b)("p",null,"Like deletion, almost all yank commands are performed by typing y followed by a motion. For example, y$ yanks to the end of the line. Two other yank commands are:\nyy\tYank the current line\n:y\tYank the current line"),Object(a.b)("p",null,"Changing text"),Object(a.b)("p",null,"The change command is a deletion command that leaves the editor in insert mode. It is performed by typing c followed by a motion. For wxample cw changes a word. A few other change commands are:\nC\tChange to the end of the line\ncc\tChange the whole line"),Object(a.b)("p",null,"Putting text"),Object(a.b)("p",null,"p\tPut after the position or after the line\nP\tPut before the poition or before the line\nBuffers"),Object(a.b)("p",null,'Named buffers may be specified before any deletion, change, yank or put command. The general prefix has the form "c where c is any lowercase character. for example, "adw deletes a word into buffer a. It may thereafter be put back into text with an appropriate "ap.'),Object(a.b)("p",null,"Markers"),Object(a.b)("p",null,"Named markers may be set on any line in a file. Any lower case letter may be a marker name. Markers may also be used as limits for ranges.\nmc\tSet marker c on this line\n`c\tGo to beginning of marker c line.\n'c\tGo to first non-blank character of marker c line."),Object(a.b)("p",null,"Search for strings"),Object(a.b)("p",null,"/string\tSearch forward for string\n?string\tSearch back for string\nn\tSearch for next instance of string\nN\tSearch for previous instance of string"),Object(a.b)("p",null,"Replace"),Object(a.b)("p",null,"The search and replace function is accomplished with the :s command. It is commonly used in combination with ranges or the :g command (below).\n:s/pattern/string/flags\tReplace pattern with string according to flags.\ng\tFlag - Replace all occurences of pattern\nc\tFlag - Confirm replaces.\n&\tRepeat last :s command"),Object(a.b)("p",null,"Regular Expressions"),Object(a.b)("p",null,". (dot)\tAny single character except newline"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"zero or more occurances of any character\n","[...]","\tAny single character specified in the set\n",Object(a.b)("sup",Object(r.a)({parentName:"li"},{id:"fnref-..."}),Object(a.b)("a",Object(r.a)({parentName:"sup"},{href:"#fn-...",className:"footnote-ref"}),"...")),"\tAny single character not specified in the set\n^\tAnchor - beginning of the line\n$\tAnchor - end of line\n\\<\tAnchor - begining of word\n",">","\tAnchor - end of word\n","(","...",")","\tGrouping - usually used to group conditions\n\\n\tContents of nth grouping")),Object(a.b)("p",null,"[...]"," - Set Examples\n","[A-Z]","\tThe SET from Capital A to Capital Z\n","[a-z]","\tThe SET from lowercase a to lowercase z\n","[0-9]","\tThe SET from 0 to 9 (All numerals)\n","[./=+]","\tThe SET containing . (dot), / (slash), =, and +\n","[-A-F]","\tThe SET from Capital A to Capital F and the dash (dashes must be specified first)\n","[0-9 A-Z]","\tThe SET containing all capital letters and digits and a space\n","[A-Z][a-zA-Z]","\tIn the first position, the SET from Capital A to Capital Z\nIn the second character position, the SET containing all letters"),Object(a.b)("p",null,"Regular Expression Examples\n/Hello/\tMatches if the line contains the value Hello\n/^TEST$/\tMatches if the line contains TEST by itself\n/^","[a-zA-Z]","/\tMatches if the line starts with any letter\n/^","[a-z]",".",Object(a.b)("em",{parentName:"p"},"/\tMatches if the first character of the line is a-z and there is at least one more of any character following it\n/2134$/\tMatches if line ends with 2134\n/","(","21|35",")","/\tMatches is the line contains 21 or 35\nNote the use of ( ) with the pipe symbol to specify the 'or' condition\n/","[0-9]"),"/\tMatches if there are zero or more numbers in the line\n/^",Object(a.b)("sup",Object(r.a)({parentName:"p"},{id:"fnref-#"}),Object(a.b)("a",Object(r.a)({parentName:"sup"},{href:"#fn-#",className:"footnote-ref"}),"#")),"/\tMatches if the first character is not a # in the line\nNotes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Regular expressions are case sensitive"),Object(a.b)("li",{parentName:"ol"},"Regular expressions are to be used where pattern is specified")),Object(a.b)("p",null,"Counts"),Object(a.b)("p",null,"Nearly every command may be preceded by a number that specifies how many times it is to be performed. For example, 5dw will delete 5 words and 3fe will move the cursor forward to the 3rd occurence of the letter e. Even insertions may be repeated conveniently with thismethod, say to insert the same line 100 times."),Object(a.b)("p",null,"Ranges"),Object(a.b)("p",null,'Ranges may precede most "colon" commands and cause them to be executed on a line or lines. For example :3,7d would delete lines 3-7. Ranges are commonly combined with the :s command to perform a replacement on several lines, as with :.,$s/pattern/string/g to make a replacement from the current line to the end of the file.\n:n,m\tRange - Lines n-m\n:.\tRange - Current line\n:$\tRange - Last line\n:\'c\tRange - Marker c\n:%\tRange - All lines in file\n:g/pattern/\tRange - All lines that contain pattern'),Object(a.b)("p",null,"Files  "),Object(a.b)("p",null,":w - Write to file",Object(a.b)("br",{parentName:"p"}),"\n",":r - Read file in after line",Object(a.b)("br",{parentName:"p"}),"\n",":n - Go to next file",Object(a.b)("br",{parentName:"p"}),"\n",":p - Go to previous file",Object(a.b)("br",{parentName:"p"}),"\n",":e - Edit file",Object(a.b)("br",{parentName:"p"}),"\n","!!program - Replace line with output from program  "),Object(a.b)("p",null,"Other  "),Object(a.b)("p",null,"~ - Toggle upp and lower case",Object(a.b)("br",{parentName:"p"}),"\n","J - Join lines",Object(a.b)("br",{parentName:"p"}),"\n",". - Repeat last text-changing command",Object(a.b)("br",{parentName:"p"}),"\n","u - Undo last change",Object(a.b)("br",{parentName:"p"}),"\n","U - Undo all changes to line  "))}p.isMDXComponent=!0}}]);