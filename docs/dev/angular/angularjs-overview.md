---
id: angularjs-overview
title: AngularJS Overview
---

## High Level

A **module** contains the different components of an AngularJS app
A **controller** manages the app’s data
An **expression** displays values on the page
A **filter** formats the value of an expression

module (defines application) -> directive (extend HTML) -> model ->

AngularJS is a JavaScript framework. It can be added to an HTML page with a `<script>` tag.  
AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.  

AngularJS is a JavaScript framework written in JavaScript.
AngularJS is distributed as a JavaScript file, and can be added to a web page with a script tag.  

## NG Directives

AngularJS extends HTML with ng-directives.

The ng-app directive defines an AngularJS application.  
The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.  
The ng-bind directive binds application data to the HTML view.  

AngularJS starts automatically when the web page has loaded.
The ng-app directive tells AngularJS that the `<div>` element is the "owner" of an AngularJS application.
The ng-model directive binds the value of the input field to the application variable name.
The ng-bind directive binds the content of the `<p>` element to the application variable name.  

## AngularJS Directives

AngularJS directives are HTML attributes with a prefix of ng.  
The ng-init directive initializes AngularJS application variables.  

## AngularJS Expressions

AngularJS expressions are written inside double braces: {{ expression }}.
AngularJS will "output" data exactly where the expression is written:

AngularJS expressions bind AngularJS data to HTML the same way as the ng-bind directive.  
AngularJS expressions can also be written inside a directive: ng-bind="expression".

AngularJS will resolve the expression, and return the result exactly where the expression is written.
AngularJS expressions are much like JavaScript expressions: They can contain literals, operators, and variables.

Example {{ 5 + 5 }} or {{ firstName + " " + lastName }}

## AngularJS Applications

AngularJS modules define AngularJS applications.  
AngularJS controllers control AngularJS applications.  
The ng-app directive defines the application, the ng-controller directive defines the controller.  

## Scope

If we consider an AngularJS application to consist of:

View, which is the HTML.
Model, which is the data available for the current view.
Controller, which is the JavaScript function that makes/changes/removes/controls the data.
Then the scope is the Model.

The scope is a JavaScript object with properties and methods, which are available for both the view and the controller.
