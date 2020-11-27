---
id: node.js-overview
title: Node.js Overview
---

Node.js is an opensource and cross-platform runtime environment for executing Javascript code outside of a browser.  
Node.js is ideal for building highly-scalable, data-intensive, and real-time apps.  
Node.js is easy to get started with and is great for prototyping and agile development.  
Node.js is great for building highly scalable services.  
Node.js uses Javascript.  
Node.js has a large ecosystem of open-source libraries.  

## Node.js Architecture

JS Code -> JS Engine -> Machine Code


Node.js is NOT a programming language.  
Node.js is NOT a framework.  

## How Node.js Works

Node.js is great for scalability because of its non-blocking, asynchronous behavior by default.  
Node.js is ideal for I/O intensive applications due to its asynchronous, threading architecture.  
Do not use Node.js for CPU intensive applications, such as video encoding or image manipulation service.  

## Node.js Module System

Global Objects

- An object that always exits in the global scope. In Javascript, there's always a global object defined.  
  - Examples:  
  console.log();  
  setTimeout();  
  setInterval();  
  clearInterval();

  window.setTimeout();

- Variables defined locally are not transferred to the global objects.  
- Local variables defined the same as globals take precedence over global definitions.  
  - As a rule of thumb, avoid assigning variables as global variables.  

Every file in Node.js is referred to as a module.  

- each Node.js application has at least one file (module) referred to as the "main" module.  

./ indicates the current folder  

Require function is used to call and use a module.  

Best practice is to store values retrieved from other modules in constant variables.  

Node.js does not execute code directly. It wraps it and executes each module inside of a function. This is called the Modular Wrapper Function.  

## Built in Node.js Modules

Modules are similar to Javascript libraries. A module is a set of functions you want to use.

### Path

Using Path -> const path = require('path');  
parse method -> path.parse  
Example:  var pathObj = path.parse(_filename);  
console.log(pathObj);  

Only use asynchronous methods.  

## Events

A signal that something has happened.  

### Classes

The first word of each string is capitalized to indicate a class.  

- Example: const EventEmitter  

A class is a container for many related methods.  

### Listener

A function that is called when an event is raised.  

## Event Arguments

Functions defined withing a class do not need the function keyword.  
When a function is in a class, it is then referred to as a "method" of that class.  

## HTTP Module

Build a simple web server with this module.  
