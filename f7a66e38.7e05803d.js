(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),l=n(6),s=(n(0),n(167)),r={id:"python-control-structures",title:"Python Control Structures"},o={unversionedId:"dev/python/python-control-structures",id:"dev/python/python-control-structures",isDocsHomePage:!1,title:"Python Control Structures",description:"if Statements",source:"@site/docs/dev/python/python-control-structures.md",slug:"/dev/python/python-control-structures",permalink:"/docs/dev/python/python-control-structures",version:"current",sidebar:"python",previous:{title:"Python Datatypes",permalink:"/docs/dev/python/python-datatypes"},next:{title:"Useful Python Methods",permalink:"/docs/dev/python/python-useful-methods"}},i=[{value:"if Statements",id:"if-statements",children:[]},{value:"else Statements",id:"else-statements",children:[]},{value:"elif Statements",id:"elif-statements",children:[]},{value:"Boolean Logic",id:"boolean-logic",children:[]},{value:"Operator Precedence",id:"operator-precedence",children:[]},{value:"Lists",id:"lists",children:[{value:"List Operations",id:"list-operations",children:[]},{value:"List Functions",id:"list-functions",children:[]},{value:"Range",id:"range",children:[]}]},{value:"For Loops",id:"for-loops",children:[]},{value:"While Loops",id:"while-loops",children:[]}],c={rightToc:i};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"if-statements"},"if Statements"),Object(s.b)("p",null,"In Python, if statements are used to run code if a certain condition holds. If an expression evaluates to True, some statements are carried out. If an expression evaluates to False, they aren't carried out."),Object(s.b)("p",null,"An if statement looks like:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"if <expression>:\n    statements\n")),Object(s.b)("p",null,"Python uses indentation (white space at the beginning of a line) to delimit blocks of code. Other languages, such as C, use curly braces to accomplish this, but in Python indentation is mandatory; programs won't work without it."),Object(s.b)("p",null,"To perform more complex checks, if statements can be nested, one inside of the other. This means that the inner if statement is part of the outer one. This is one way to see whether multiple conditions are satisfied."),Object(s.b)("h2",{id:"else-statements"},"else Statements"),Object(s.b)("p",null,"In Python, an else statement follows an if statement and contains code that is called when the if statement evaluates to False. As with if statements, the code inside the block should be indented."),Object(s.b)("p",null,"An example of an else statement would be:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"if <expression>:\n    statement(s)\n\nelse:\n    statement(s)\n")),Object(s.b)("p",null,"You can chain if and else statements to determine which option in a series of possibilities is True."),Object(s.b)("h2",{id:"elif-statements"},"elif Statements"),Object(s.b)("p",null,"elif (short for else if) statement is a shortcut to use when chaining if and else statements. A series of if elif statements can have a final else block, which is called if none of the if or elif expressions is True."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'num = 7\n\nif num == 5:\n   print("Number is 5")\n\nelif num == 11:\n   print("Number is 11")\n\nelif num == 7:\n   print("Number is 7")\n\nelse:\n   print("Number isn\'t 5, 11 or 7")\n')),Object(s.b)("h2",{id:"boolean-logic"},"Boolean Logic"),Object(s.b)("p",null,"Boolean logic is used to make more complicated conditions for if statements that rely on more than one condition. Python's boolean operators are and, or, and not.  "),Object(s.b)("p",null,"The and operator takes two arguments and evaluates as True only of both arguments are True. Otherwise it evaluates to False."),Object(s.b)("p",null,"The or operator also takes two arguments and evaluates as True if either (or both) of its arguments are True. Otherwise it evaluates to False."),Object(s.b)("p",null,"The not operator only takes one argument and inverts it. The result of not True is False and the result of not False is true."),Object(s.b)("h2",{id:"operator-precedence"},"Operator Precedence"),Object(s.b)("p",null,"Operator precedence is an important concept in programming. It is an extension of the mathematical idea of order of operations (multiplication being performed before addition, etc.) to include other operators, such as those in Boolean logic."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"False == False or True\nTrue\nFalse == (False or True)\nFalse\n(False == False) or True\nTrue\n")),Object(s.b)("h2",{id:"lists"},"Lists"),Object(s.b)("p",null,"Lists are another type of object in Python. They are used to store an indexed list of items."),Object(s.b)("p",null,"A list is created using square brackets with commas separating items."),Object(s.b)("p",null,"The certain item in the list can be accessed by using its index in square brackets."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'words = ["Hello", "world", "!"]\nprint(words[0])\nprint(words[1])\nprint(words[2])\n')),Object(s.b)("p",null,"The first list item's index is 0, rather than 1, as might be expected. Zeros matter in programming too!"),Object(s.b)("p",null,"An empty list is created with an empty pair of square brackets."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"empty_list = []\nprint(empty_list)\n")),Object(s.b)("p",null,"Most of the time, a comma won't follow the last item in a list. However, it is perfectly valid to place one there, and it is encouraged in some cases."),Object(s.b)("p",null,"Typically, a list will contain items of a single item type, but it is also possible to include several different types."),Object(s.b)("p",null,"Lists can also be nested within other lists."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'number = 3\nthings = ["string", 0, [1, 2, number], 4.56]\nprint(things[1])\nprint(things[2])\nprint(things[2][2])\n')),Object(s.b)("p",null,"Lists of lists are often used to represent 2D grids, as Python lacks the multidimensional arrays that would be used for this in other languages."),Object(s.b)("p",null,"Indexing out of the bounds of possible list values causes an IndexError."),Object(s.b)("p",null,"Some types, such as strings, can be indexed like lists. Indexing strings behaves as though you are indexing a list containing each character in the string."),Object(s.b)("p",null,"For other types, such as integers, indexing them isn't possible, and it causes a TypeError."),Object(s.b)("h3",{id:"list-operations"},"List Operations"),Object(s.b)("p",null,"The item at a certain index in a list can be reassigned."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"nums = [7, 7, 7, 7, 7]\nnums[2] = 5\nprint(nums)\n")),Object(s.b)("p",null,"Lists can be added and multiplied in the same way as strings."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"nums = [1, 2, 3]\nprint(nums + [4, 5, 6])\nprint(nums * 3)\n")),Object(s.b)("p",null,"Result:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"[1, 2, 3, 4, 5, 6]\n[1, 2, 3, 1, 2, 3, 1, 2, 3]\n")),Object(s.b)("p",null,"Lists and strings are similar in many ways - strings can be thought of as lists of characters that can't be changed."),Object(s.b)("p",null,"To check if an item is in a list, the in operator can be used. It returns True if the item occurs one or more times in the list, and False if it doesn't."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'words = ["spam", "egg", "spam", "sausage"]\nprint("spam" in words)\nprint("egg" in words)\nprint("tomato" in words)\n')),Object(s.b)("p",null,"Result:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"True\nTrue\nFalse\n")),Object(s.b)("p",null,"The in operator is also used to determine whether or not a string is a substring of another string."),Object(s.b)("p",null,"To check if an item is not in a list, you can use the not operator in one of the following ways:"),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"nums = [1, 2, 3]\nprint(not 4 in nums)\nprint(4 not in nums)\nprint(not 3 in nums)\nprint(3 not in nums)\n")),Object(s.b)("p",null,"Result:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"True\nTrue\nFalse\nFalse\n")),Object(s.b)("h3",{id:"list-functions"},"List Functions"),Object(s.b)("p",null,"Another way of altering lists is using the append method. This adds an item to the end of an existing list."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"nums = [1, 2, 3]\nnums.append(4)\nprint(nums)\n")),Object(s.b)("p",null,"Result:"),Object(s.b)("p",null,"[1, 2, 3, 4]"),Object(s.b)("p",null,"The dot before append is there because it is a method of the list class."),Object(s.b)("p",null,"To get the number of items in a list (or the length of a list), you can use the len function."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"nums = [1, 3, 5, 2, 4]\nprint(len(nums))\n")),Object(s.b)("p",null,"Result:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"5\n")),Object(s.b)("p",null,"Unlike append, len is a normal function, rather than a method. This means it is written before the list it is being called on, without a dot."),Object(s.b)("p",null,"The insert method is similar to append, except that it allows you to insert a new item at any position in the list, as opposed to just at the end."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'words = ["Python", "fun"]\nindex = 1\nwords.insert(index, "is")\nprint(words)\n')),Object(s.b)("p",null,"Result:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"['Python', 'is', 'fun']\n")),Object(s.b)("p",null,"The index method finds the first occurrence of a list item and returns its index."),Object(s.b)("p",null,"If the item isn't in the list, it raises a ValueError."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"letters = ['p', 'q', 'r', 's', 'p', 'u']\nprint(letters.index('r'))\nprint(letters.index('p'))\nprint(letters.index('z'))\n")),Object(s.b)("p",null,"Result:"),Object(s.b)("p",null,"2\n0"),Object(s.b)("p",null,"ValueError: 'z' is not in list"),Object(s.b)("p",null,"There are a few more useful functions and methods for lists.",Object(s.b)("br",{parentName:"p"}),"\n","max(list): Returns the list item with the maximum value",Object(s.b)("br",{parentName:"p"}),"\n","min(list): Returns the list item with minimum value",Object(s.b)("br",{parentName:"p"}),"\n","list.count(obj): Returns a count of how many times an item occurs in a list",Object(s.b)("br",{parentName:"p"}),"\n","list.remove(obj): Removes an object from a list",Object(s.b)("br",{parentName:"p"}),"\n","list.reverse(): Reverses objects in a list  "),Object(s.b)("h3",{id:"range"},"Range"),Object(s.b)("p",null,"The range function creates a sequential list of numbers.",Object(s.b)("br",{parentName:"p"}),"\n","The code below generates a list containing all of the integers, up to 10.  "),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"numbers = list(range(10))\nprint(numbers)\n")),Object(s.b)("p",null,"Result:  "),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n")),Object(s.b)("p",null,"The call to list is necessary because range by itself creates a range object, and this must be converted to a list if you want to use it as one.  "),Object(s.b)("p",null,"If range is called with one argument, it produces an object with values from 0 to that argument (not including the argument).",Object(s.b)("br",{parentName:"p"}),"\n","If it is called with two arguments, it produces values from the first to the second.  "),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"numbers = list(range(3, 8))\nprint(numbers)\nprint(range(20) == range(0, 20))\n")),Object(s.b)("p",null,"Result:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"[3, 4, 5, 6, 7]\nTrue\n")),Object(s.b)("p",null,"range can have a third argument, which determines the interval of the sequence produced. This third argument must be an integer.  "),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"numbers = list(range(5, 20, 2))\nprint(numbers)\n")),Object(s.b)("p",null,"Result:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"[5, 7, 9, 11, 13, 15, 17, 19]\n")),Object(s.b)("h2",{id:"for-loops"},"For Loops"),Object(s.b)("p",null,"Sometimes, you need to perform code on each item in a list. This is called iteration, and it can be accomplished with a while loop and a counter variable."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'words = ["hello", "world", "spam", "eggs"]\ncounter = 0\nmax_index = len(words) - 1\n\nwhile counter <= max_index:\n\n   word = words[counter]\n   print(word + "!")\n   counter = counter + 1\n')),Object(s.b)("p",null,"Result:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"hello!\nworld!\nspam!\neggs!\n")),Object(s.b)("p",null,"The example above iterates through all items in the list, accesses them using their indices, and prints them with exclamation marks.  "),Object(s.b)("p",null,"Iterating through a list using a while loop requires quite a lot of code, so Python provides the for loop as a shortcut that accomplishes the same thing. A for loop."),Object(s.b)("p",null,"The same code from the previous example can be written with a for loop:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'words = ["hello", "world", "spam", "eggs"]\n\nfor word in words:\n\n  print(word + "!")\n')),Object(s.b)("p",null,"Result:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"hello!\nworld!\nspam!\neggs!\n")),Object(s.b)("p",null,"The for loop in Python is like the foreach loop in other languages.  "),Object(s.b)("p",null,"The for loop is commonly used to repeat some code a certain number of times. This is done by combining for loops with range objects."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'for i in range(5):\n\n  print("hello")\n')),Object(s.b)("p",null,"Result:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"hello\nhello\nhello\nhello\nhello\n")),Object(s.b)("p",null,"You don't need to call list on the range object when it is used in a for loop, because it isn't being indexed, so a list isn't required."),Object(s.b)("h2",{id:"while-loops"},"While Loops"),Object(s.b)("p",null,"A while statement is similar to an if statement, except it can be run more than once. The statements inside it are repeatedly executed as long as the condition holds. Once it evaluates to False, the next section of code is executed."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'i = 1\n\nwhile i <=5:\n\n   print(i)\n\n   i = i + 1\n\nprint("Finished")\n')),Object(s.b)("p",null,"The code in the body of a while loop is executed repeatedly. This is called iteration."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"infinite loop")," - a special kind of while loop that never stops running. Its condition always remains True."),Object(s.b)("p",null,"Example of an infinite loop:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'while 1==1:\n\n  print("In the loop")\n')),Object(s.b)("p",null,"You can stop the program's execution by using the Ctrl-C shortcut or by closing the program."),Object(s.b)("p",null,"break"),Object(s.b)("p",null,"To end a while loop prematurely the break statement can be used."),Object(s.b)("p",null,"When encountered inside a loop, the break statement causes the loop to finish immediately."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'i = 0\nwhile 1==1:\n  print(i)\n  i = i + 1\n\n  if i >= 5:\n    print("Breaking")\n\n    break\n\nprint("Finished")\n')),Object(s.b)("p",null,"Using the break statement outside of a loop causes an error."),Object(s.b)("p",null,"continue"),Object(s.b)("p",null,"Another statement that can be used within loops is continue."),Object(s.b)("p",null,"Unlike break, continue jumps back to the top of the loop, rather than stopping it."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'i = 0\nwhile True:\n   i = i +1\n   if i == 2:\n      print("Skipping 2")\n      continue\n\n   if i == 5:\n      print("Breaking")\n      break\n\n   print(i)\n\nprint("Finished")\n')),Object(s.b)("p",null,"the continue statement stops the current iteration and continues with the next one."),Object(s.b)("p",null,"Using the continue statement outside of a loop causes an error."))}p.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),p=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,h=b["".concat(r,".").concat(m)]||b[m]||u[m]||s;return n?l.a.createElement(h,o(o({ref:t},c),{},{components:n})):l.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);