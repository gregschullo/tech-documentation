---
id: python-control-structures
title: Python Control Structures
---

## Lists

Lists are another type of object in Python. They are used to store an indexed list of items.

A list is created using square brackets with commas separating items.

The certain item in the list can be accessed by using its index in square brackets.

Example:

```python
words = ["Hello", "world", "!"]
print(words[0])
print(words[1])
print(words[2])
```

The first list item's index is 0, rather than 1, as might be expected. Zeros matter in programming too!

An empty list is created with an empty pair of square brackets.

Example:

```python
empty_list = []
print(empty_list)
```

Most of the time, a comma won't follow the last item in a list. However, it is perfectly valid to place one there, and it is encouraged in some cases.

Typically, a list will contain items of a single item type, but it is also possible to include several different types.

Lists can also be nested within other lists.

Example:

```python
number = 3
things = ["string", 0, [1, 2, number], 4.56]
print(things[1])
print(things[2])
print(things[2][2])
```

Lists of lists are often used to represent 2D grids, as Python lacks the multidimensional arrays that would be used for this in other languages.

Indexing out of the bounds of possible list values causes an IndexError.

Some types, such as strings, can be indexed like lists. Indexing strings behaves as though you are indexing a list containing each character in the string.

For other types, such as integers, indexing them isn't possible, and it causes a TypeError.

### List Operations

The item at a certain index in a list can be reassigned.

Example:

```python
nums = [7, 7, 7, 7, 7]
nums[2] = 5
print(nums)
```

Lists can be added and multiplied in the same way as strings.

Example:

```python
nums = [1, 2, 3]
print(nums + [4, 5, 6])
print(nums * 3)
```

Result:

```python
[1, 2, 3, 4, 5, 6]
[1, 2, 3, 1, 2, 3, 1, 2, 3]
```

Lists and strings are similar in many ways - strings can be thought of as lists of characters that can't be changed.

To check if an item is in a list, the in operator can be used. It returns True if the item occurs one or more times in the list, and False if it doesn't.

Example:

```python
words = ["spam", "egg", "spam", "sausage"]
print("spam" in words)
print("egg" in words)
print("tomato" in words)
```

Result:

```python
True
True
False
```

The in operator is also used to determine whether or not a string is a substring of another string.

To check if an item is not in a list, you can use the not operator in one of the following ways:

Example:

```python
nums = [1, 2, 3]
print(not 4 in nums)
print(4 not in nums)
print(not 3 in nums)
print(3 not in nums)
```

Result:

```python
True
True
False
False
```

### List Functions

Another way of altering lists is using the append method. This adds an item to the end of an existing list.

Example:

```python
nums = [1, 2, 3]
nums.append(4)
print(nums)
```

Result:

[1, 2, 3, 4]

The dot before append is there because it is a method of the list class.

To get the number of items in a list (or the length of a list), you can use the len function.

Example:

```python
nums = [1, 3, 5, 2, 4]
print(len(nums))
```

Result:

```python
5
```

Unlike append, len is a normal function, rather than a method. This means it is written before the list it is being called on, without a dot.

The insert method is similar to append, except that it allows you to insert a new item at any position in the list, as opposed to just at the end.

Example:

```python
words = ["Python", "fun"]
index = 1
words.insert(index, "is")
print(words)
```

Result:

```python
['Python', 'is', 'fun']
```

The index method finds the first occurrence of a list item and returns its index.

If the item isn't in the list, it raises a ValueError.

Example:

```python
letters = ['p', 'q', 'r', 's', 'p', 'u']
print(letters.index('r'))
print(letters.index('p'))
print(letters.index('z'))
```

Result:

2
0

ValueError: 'z' is not in list

There are a few more useful functions and methods for lists.  
max(list): Returns the list item with the maximum value  
min(list): Returns the list item with minimum value  
list.count(obj): Returns a count of how many times an item occurs in a list  
list.remove(obj): Removes an object from a list  
list.reverse(): Reverses objects in a list  

### Range

The range function creates a sequential list of numbers.  
The code below generates a list containing all of the integers, up to 10.  

Example:

```python
numbers = list(range(10))
print(numbers)
```

Result:  

```python
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

The call to list is necessary because range by itself creates a range object, and this must be converted to a list if you want to use it as one.  
 
If range is called with one argument, it produces an object with values from 0 to that argument (not including the argument).  
If it is called with two arguments, it produces values from the first to the second.  

Example:

```python
numbers = list(range(3, 8))
print(numbers)
print(range(20) == range(0, 20))
```

Result:

```python
[3, 4, 5, 6, 7]
True
```

range can have a third argument, which determines the interval of the sequence produced. This third argument must be an integer.  

Example:

```python
numbers = list(range(5, 20, 2))
print(numbers)
```

Result:

```python
[5, 7, 9, 11, 13, 15, 17, 19]
```

## For Loops

Sometimes, you need to perform code on each item in a list. This is called iteration, and it can be accomplished with a while loop and a counter variable.

Example:

```python
words = ["hello", "world", "spam", "eggs"]
counter = 0
max_index = len(words) - 1

while counter <= max_index:

   word = words[counter]
   print(word + "!")
   counter = counter + 1
```

Result:

```python
hello!
world!
spam!
eggs!
```

The example above iterates through all items in the list, accesses them using their indices, and prints them with exclamation marks.  

Iterating through a list using a while loop requires quite a lot of code, so Python provides the for loop as a shortcut that accomplishes the same thing. A for loop.

The same code from the previous example can be written with a for loop:

```python
words = ["hello", "world", "spam", "eggs"]

for word in words:

  print(word + "!")
```

Result:

```python
hello!
world!
spam!
eggs!
```

The for loop in Python is like the foreach loop in other languages.  

The for loop is commonly used to repeat some code a certain number of times. This is done by combining for loops with range objects.

Example:

```python
for i in range(5):

  print("hello")
```

Result:

```python
hello
hello
hello
hello
hello
```

You don't need to call list on the range object when it is used in a for loop, because it isn't being indexed, so a list isn't required.
