---
id: python-datatypes
title: Python Datatypes
---

## Integers

integers are used in Python to represent positive or negative whole numbers with no decimal point.

## Floats

floats are used in Python to represent numbers that aren't integers. They can be created directly by entering a number with a decimal point or by using operations such as division on integers. Extra zeros at the number's end are ignored.

floats can be used to indicate scientific notation  
float = 1.5e2 == 150

## Strings

Text is considered a string in Python. 

A string is created by entering text between two single or double quotes. Anything inside quotes is considered a string.

A string must be opened and closed by the same type of quote

Multiple strings can be combined using a + sign (concatenation) 

Multi line strings use triple quotes to span strings down lines

Example:

```python
multi_line = (""" this 

                          is

                          a

                          test """)
```

Some characters can't be directly included in a string. For example, double quotes can't be in a string as it would cause the string to end prematurely . Characters like this must be escaped by placing a backslash ( \ ) before them.  

Concatenation - the process of adding two strings together. Even if your strings contain numbers, they are still added as strings rather than integers. Adding a string to a number produces an error.  

String Operations - Strings can also be multiplied by integers. This produces a repeated version of the original string. The order of the string and the integer doesn't matter, but the string typically comes first. Strings can't be multiplied by other strings or floats (even if the float is a whole number).  

Popular string methods

```python
len() - gets length of a string
lower() - make entire string lowercase
upper() - make entire string uppercase
srt() - turn a non string into a string
```

docstring - 

## Booleans

Variables that are set as either True or False

They can be created by comparing values, for instance by using the equal operator ==

Not equals ( != ) is another method of comparison 

Greater Than ( > ) and Less Than ( < ) are other methods of comparison

Greater Than or Equal To ( >= ) and Less Than or Equal To ( <= ) are other methods of comparison

True corresponds to integer value 1

False corresponds to integer value 0
