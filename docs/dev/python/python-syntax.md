---
id: python-syntax
title: Python Syntax
---

## Basic Syntax

### Print Function - print()

The print function is used to output text, numbers, or other printable information to the console.

It takes one or more argument and will output each of the arguments to the console separated by a space. If no arguments are provided, the print function will output a blank line.

### Comments

A comment is a piece of text within a program that is *not* executed as part of the program. It can be used to provide additional information to aid in understanding the code.

The # character is used to start a comment and it continues until the end of the line.

### Variables

A variable is used to store data that will be used by the program. This data can be a number, a string, a Boolean, a list, or some other data type. Every variable has a name with can consist of letters, numbers, and the underscore character _ .

The equal sign = is used to assign a value to a variable. After the initial assignment is made, the value of a variable can be updated to new values as needed.

### Integers

Python variables can be assigned different types of data. One supported data type is the integer. An integer is a number which can be written without a fractional part (no decimal). An integer can be a positive number, a negative number, or the number zero so long as there is no decimal portion. The number zero represents an integer value, but the same number written as 0.0 would represent a floating point number.

### Floating Point Numbers

Python variables can be assigned different types of data. One supported data type is the floating point number. A floating point number is a value which contains a decimal portion. Floating point numbers are used to represent numbers which have fractional quantities. For example, a =3/5 cannot be represented as an integer so the variable a is assigned the floating point value 0.6

### Arithmetic Operations

Python supports different types of arithmetic operations. These operations can be performed on literal numbers, variables, or some combination. The primary arithmetic operations are:

- '+' for addition
- '-' for subtraction
- '/' for division
- '*' for multiplication

**Modulo Operator** - %  
Python supports an operator to perform the modulo calculation. A modulo calculation returns the remainder of a division between the first and second number. For example:  
The result of the expression 4 % 2 would result in the value 0, because 4 is evenly divisible by 2 leaving no remainder.  
The result of the expression 7 % 3 would return 1, because 7 is not evenly divisible by 3, leaving a remainder of 1.

### Exponentiation

In addition to the basic operations of addition, subtraction, multiplication, and division, Python supports an operator for exponentiation. That operator is written with two asterisks like so **. The format for exponentiation in Python is a number or variable followed by the operator ** followed by a number or variable which represents the power to raise the number. Both the number and the power can be integer or floating point values.

### Integer Division

Python 3 will automatically convert integer numbers to floating-point before performing division. This behavior is changed from Python 2 where integer numbers were not automatically converted.

### Plus-Equals Operator

The plus-equals operator += provides a convenient way to add a value to an existing variable and assign the new value back to the same variable. In the case where the variable and the value are strings, this operator performs string concatenation instead of addition. The operation is performed in-place, meaning  that any other variable which points to the variable being updated will also be updated.

### Strings

A string is a sequence of characters (letters, numbers, whitespace, or punctuation) enclosed by quotation marks. It can be enclosed using either the double quotation mark " or the single quotation mark ' .

If a string has to be broken into multiple lines, the backslash character \ can be used to indicate that the string continues on the next line.

### String Concatenation

Python supports the joining (concatenation) of strings together using the + operator. The + operator is also used for mathematical addition operations. If the parameters passed to the + operator are strings, then concatenation will be performed. If the parameter passed to + have different types, then Python will report an error condition. Multiple variables or literal strings can be joined together using the + operator. The concatenation process does not add any whitespace between the strings that are joined.

### Error Notification

The Python interpreter will report errors present in your code. For most error cases, the interpreter will display the line of code where the error was detected and place a caret character ^ under the portion of the code where the error was detected.

### SyntaxError

A SyntaxError is reported by the Python interpreter when some portion of the code is incorrect.  This can include misspelled keywords, missing or too many brackets or parenthesis, incorrect operators, missing or too many quotation marks, or other conditions.

### NameError

A NameError is reported by the Python interpreter when it detects a variable that is unknown. This can occur when a variable that is unknown. This can occur when a variable is used before it has been assigned a value  or if a variable name is spelled differently than the point at which it was defined. The Python interpreter will display the line of code where the NameError was detected and indicate which name it found that was not defined.

### ZeroDivisionError

A ZeroDivisionError is reported by the Python interpreter when it detects a division operation is being performed at the denominator (bottom number) is 0. In mathematics, dividing a number by zero has no defined value, so Python treats this as an error condition and will report a ZeroDivisionError and display the line of code where the division occurred. This can also happen if a variable is used as the denominator and its value has been set to or changed to zero.


Python Basic Syntax

Variables

Variables are used to deal with data that changes over time. A variable allows you to store a value by assigning it to a name, which can be used to refer to the value later in the program.

 

Variable names can contain only letters, numbers, and underscores. They can start with a letter or an underscore, but not with a number. For instance, you can call a variable message_1 but not 1_message. 

 

Spaces are not allowed in variable names, but underscores can be used to separate words in variable names. For example, greeting_message works, but greeting message will cause errors. 

 

Avoid using Python keywords and function names as variable names; that is, do not use words that Python has reserved for a particular programmatic purpose, such as the word print. 

 

Variable names should be short but descriptive. For example, name is better than n, student_name is better than s_n, and name_length is better than length_of_persons_name. 

 

Note: Be careful when using the lowercase letter l and the uppercase letter O because they could be confused with the numbers 1 and 0.

 

To assign a variable, use one equals sign ( = ). Attempting to reference a variable you haven't assigned anything to causes an error.

Example: 

x = 7

 

Variables can hold integers (whole numbers without decimals), numbers with decimals, boolean values, and strings.

 

Variables can be used to do arithmetic.

 

Variables can be reassigned as many times as you want to change their value. In Python, variables don't have specific types, so you can assign a string to a variable and later assign an integer (or other type) to the same variable.

 

You can use the del statement to remove a variable, which means the reference from the name to the value is deleted, and trying to use the variable causes an error.

 

Variable Names

                • Only characters that are allowed are letters, numbers, and underscores

                • Variables cannot start with numbers.

                • Variables cannot contain spaces.

 

valueError - Python automatically assigns a variable the appropriate datatype

 

 

Comments

Comments in python are expressed using the pound/hashtag symbol ( # )

 

 

Simple Operations

Python has the capability of carrying out calculations.

+ Addition

- Subtraction

* Multiplication

/ Division

// Floor Division (Quotient)

% Modulo (Remainder)

( ) Parentheses - Order of Operations

 

In place operators allow you to write code like 'x = x + 3' more concisely, as 'x += 3'. 

                • It's possible with other operators such as -, *, / and % as well.

                • In place operators are possible with strings as well.

 

 

New Line

\n

 

You can also use three sets of quotes and new lines created by enter to create new lines.

 

 

Input and Output

Usually, programs take input and process it to produce output. In Python, you can use the print function to produce output. This displays a textual representation of something to the screen.

 

To get input from the user in Python, you can use the intuitively named input function. The input function prompts the user for input and returns (outputs) what they enter as a string.

 

 

Type Conversion

In Python, it's impossible to complete certain operations due to the types involved. For instance, you can't add two strings containing the numbers 2 and 3 together to produce the integer 5, as the operation will be performed on strings, resulting in '23' 

The solution to this is type conversion.

Example:

'2' + '3'

'23'

 

int('2')+int('3')

5

 

You can also turn user input (which is a string) to numbers (integers or floats), to allow for the performance of calculations. 

Example:

float(input('Enter a number.'))+float(input('Enter another number.'))

 

 

In-Place Operators 

 

 

datetime

datetime.now()

now function contains .year, .month, .day, .hour, .minute, and .second

 