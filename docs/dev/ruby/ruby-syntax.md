---
id: ruby-syntax
title: Ruby Syntax
---

For comments, use a hashtag (#)  

Assign local variables, x = 1  

## Math

1 + 2 # => 3  
2 * 7 # => 14  
5 / 2 # => 2 (both arguments are whole numbers)  
5 / 2.0 # => 2.5 (one argument has a decimal)  
1 + (2 * 3) # => 7 (order of operations)  

## Strings

'single quoted' # => 'single quoted'  
"double quoted" # => "double quoted"  
'It\'s alive!' # => It's alive! (\ is an escape character)  
'1 + 2 = 5' # => 1 + 2 = 5  

x = 'Bob'  
"Hi, #{x}" # => "Hi, Bob"
'Hello, #{x}' # => "Hello, \#{x}" (single quotes don't work for variables)  

## Interpolation

When strings have quotes withing quotes, use double quotes " " in the outer quotes, and then single quotes ' ' for the inner quotes.

## Truths

true # => true  
false # => false  
nil # => nil  
0 # => true (only false and nil are false in Ruby. If it exists in Ruby, even as a 0, it's true)  
1 == 1 # => true (== checks for equality)  
1 == true # => false (== checks for equality)  

## Untruths

!true # => false  
!false # => true  
!nil # => true  
1! = 2 # => true (1 is not equal to 2)  
1! = 1 => false (1 is not, not equal to itself)  

## Convert Truths

!!true # => true  
!!false # => false  
!!nil # => false  
!!0 # => true (zero is not false)  

## Arrays

x = ['a','b','c'] # => ["a","b","c"]  
x[0] # => "a" (zero is first index)  
x.first # => "a"  
x.last # => "c"  
x + ['d'] # => ["a","b","c","d"]  
x # => ["a","b","c"]  
x = x + ['d'] # => ["a","b","c","d"]  
x = # => ["a","b","c","d"]  
