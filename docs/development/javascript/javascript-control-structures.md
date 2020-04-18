---
id: javascript-control-structures
title: Javascript Control Structures
---

## Javascript Statements

Example:

```javascript
var x, y, z;  //Statement 1
x =5;         //Statement 2
y =6;         //Statement 3
z =x+y;     //Statement 4
```

A Javascript program is a list of statements to be executed by a computer

Javascript statements are composed of values, operators, expressions, keywords, and comments. The statements are executed, one by one, in the order as they are written.

* Javascript programs (and Javascript statements) are often called Javascipt code

## Javascript Programs

A computer program is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called statements. A Javascript program is a list of programming statements.

* In HTML, Javascript programs are executed by the web browser.

## Javascript Functions and Events

A Javascript function is a block of Javascript code that can be executed when "called" for. For example, a function can be called when an event occurs. You can use any number of scripts in an HTML document. Scripts can be placed in the `<head>`, `<body>`, or in both sections of an HTML page between `<script>` tags.

* Placing scripts at the bottom of the `<body>` element improves the display speed because script compilation slows down the display.

## External Javascript

* Scripts can be placed in external files
* External scripts are practical when the same code is used in many different web pages
* Javascript files have the file extension .js
* To use an external script, put the name of the script file in the src (source) attribute of a `<script>` tag
  * Example: `<script src ="myScript.js"></script>`
* Placing scripts in external files has some advantages
  * It separates HTML and code
  * It makes HTML and Javascript easier to read and maintain
  * Cached Javascript files can speed up page loads

## External References

External scripts can be referenced with a full URL or with a path relative to the current web page.

## Javascript Output

Javascript can display data in different ways

* writing into an HTML Element using innerHTML
* writing into the HTML output using document.write()
* Writing into an alert box, using window.alert()
* Writing into the console, using console.log()

Using innerHTML

* To access an HTML Element, Javascript can use the document.getElementById(id) method. The id attribute defines the HTML element. The innerHTML property defines the HTML content.

Using document.write()

* For testing purposes, it is convenient to use document.write() : Using document.write() after an HTML doc is loaded will delete all existing HTML.

Using window.alert()

* You can se an alert to display information.

Using console.log()

* For debugging purposes, you can use the console.log() method to display data.

## Javascript Codeblocks

Javascript statements can be grouped together in code blocks, inside curly braces {...}. The purpose of code blocks is to define statements to be executed together. One place you will find statements grouped together in blocks, is in JavaScript
