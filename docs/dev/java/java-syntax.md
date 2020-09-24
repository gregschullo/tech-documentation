---
id: java-syntax
title: Java Syntax
---

## Basic Syntax

### Print Line

In Java, System.out.pringln() can print to the console:

- System is a class from the core library provided by Java
- out is an object that controls output
- println() is a method associated with that object that receives a single argument

### main() Method

In Java, every application must contain a main() method, which is the entry point for the application. All other methods are invoked from the main() method.

The signature of the method is public static void main(String[] args) { }. It accepts a single argument: an array of elements of type String.

### Classes

In Java, a class represents a single concept.

A Java program must have one class whose name is the same as the program filename.

In the example, the Person class must be declared in a program file named Person.java.

### Statements

In Java, a statement is a line of code that executes a task and is terminated with a ;.

### Comments

In Java, comments are bits of text that are ignored by the compiler. They are used to increase the readability of a program.

Single line comments are made by using // and multi-line comments are made by starting with /* and ending with */.

### Whitespace

Whitespace, including spaces and newlines, between statements ignored.

### Compiling

In Java, when we compile a program, each individual class is converted into a .class file, which is known as byte code.

The JVM (Java Virtual Machine) is used to run the byte code.