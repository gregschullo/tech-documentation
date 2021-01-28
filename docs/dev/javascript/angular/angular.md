---
id: angular
title: Angular
---

## Fundamentals of TypeScript and Object-Oriented Programming

TypeScript - superset of JavaScript  

- strong typing
- object-oriented features
- compile-time errors
- great tooling

All JavaScript code is valid TypeScript, but not all TypeScript is valid JavaScript.  

### Type Annotations

any  
number  
boolean  
string  
array  
any array  
enum  

**type assertion** - tell typescript what type a variable is.  

### Arrow Functions

Clean way to define functions in TypeScript.  
`=>`  
In C# arrow functions are called lambda expressions.  

### Interfaces

**inline annotation** -  declaring type inline  

Interfaces define the shape of an object.  
Interfaces are only for declaration. No logic or algorithms (implementation) may be executed in an interface.  

**cohesion** - things that are related should be grouped together.  

### Classes

A class groups variables (properties) and functions (methods) that are highly related.  

**method** - a function that is part of a class.  

An object is an instance of a class.  

When declaring a new object of a custom type, memory must be allocated for the newly created object.  
Example: `let obj = new Object();`  

### Constructors

A constructor is a method that is called when an object is created.  

`constructor()`  

The constructor can have parameters so new objects have some characteristics at the time of creation.  
Parameters can have question marks (?) after them if they are optional parameters.  

### Access Modifiers

A keyword that can be applied to a member of a class to control its access from the outside.  

There are three kinds of access modifiers in TypeScript.  

- public
- private
- protected

By default, public is used if not specified.  

Access modifiers can be used in constructor parameters to shorten code.  

### Properties

Read more on properties

### Modules

**module** - each file can be thought of as a module. The `export` keyword is used to make a file available to other files. Outside files must then import the file to be used.  

`import { Module } from './path/to/module';`

## Angular Fundamentals

### Components

The heart of every angular application. A component encapsulates the data, the HTML markup, and the logic for a view.  

Components may be broken into smaller components to make code more robust and easier to work with.  

App or the root component is the main component of every angular app.  

There are three elements in using a component.  

- create a component
- register the component in a module
- add an element in an HTML markup

To create a component, you must import the Component decorator from angular/core  

```angular
import { Component } from '@angular/core';

@Component({
    selector: 'componentName',
    template: '' 
})
export class ComponentNameComponent {

}
```

To register the component, add the component to the declarations array in the app.module.ts file.  

A shortcut to more reliably create components, use the angular cli.  
`ng g c <componentName>`  

### Templates

**string interpolation** - Look up definition  

### Directives

Directives are used to manipulate the DOM.  
Example:  

```angular
<li *ngFor="let item of items">
    {{ items }}
</li>
```  

**DOM** - document object model.  

#### Structural Directives

Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.  

### Services

Decouples logic of a task from a component.  

A service is a plain TypeScript class.  
The service must be exported to be used.  
Example: `export class serviceService {}`  

**dependency injection** - registering dependencies in the providers array in the app.module.ts file. Dependencies are automatically applied at instantiation of an object when created with a constructor.  

**singleton pattern** - a single instance of an object exists in memory.  

angluar cli can be used to generate services in Angular.  
`ng g s <serviceName>`  

The @Injectable() decorator function is needed if the service has dependencies in its constructor.  
The Injectable decorator tells Angular the class should be able to inject dependencies into its constructor.  

## Displaying Data and Handling Events

## Template-driven Forms

## Reactive Forms

## Consuming HTTP Services

## Routing and Navigation



## Authentication and Authorization

## Deployment

## Building Real-Time, Serverless Applications with Firebase

## Animations

## Angular Material

## Redux

## Unit Testing

## Integration Testing

## Angular Resources

[Angular Tutorial for Beginners: Learn Angular & TypeScript - YouTube](https://www.youtube.com/watch?v=k5E2AVpwsko)  
