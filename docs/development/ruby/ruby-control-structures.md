---
id: ruby-control-structures
title: Ruby Control Structures
---

## Ruby Arrays

Empty Array

```ruby
myArray = [ ]
```

Array with contents

```ruby
myArray = [1, 2, 3]
```

Defining locations in array with values

```ruby
myArray = [ ]
myArray [0] = 1
myArray [1] = 2
myArray [2] = 3
```

## Ruby Hashes and Symbols

Hashes are similar to arrays. Basically, the difference is how you get data. Hashes are defined using Hash.new or myHash={ }.

Example:

```ruby
myHash={
  "Key" => "value",
  "Key1" => "value1",
}
```

puts myHash["Key"]

Commas in this example separate input

Another way to create a Hash is:
 
```ruby
myHash = Hash.new()
myHash["Key"] = "value"
myHash["Key1"] = "value1"
puts myHash["Key"]
```

Instead of using a string as the key, you can use symbols.

```ruby
myHash=Hash.new()
myHash[:Key]="value"
myHash[:Key2]="value2"
puts myHash[:Key]
```

When using myHash={} with symbols, symbols are used differently, like this

```ruby
myHash={
  Key: "value",
  Key2: "value2",
}

puts myHash[:Key]
```

## Ruby Conditional Statements

```ruby
if condition
  do something
end

if condition
  do something

else
  do something else
end

if condition
  do something

elsif different condition
  do something

else
  another different thing to be done
end
```

## Ruby Unless, Until, and While

The unless statement syntax is almost identical to the if statement.

```ruby
unless condition
  thing to be done if the condition is false
end
```

While statements will keep doing what's in the loop until the condition is false.

```ruby
while condition
  something to do
end
```

Until statements are the opposite of while statements. They will keep doing what is in the loop until the condition is true

```ruby
until condition
  something to do
end
```

## Ruby Methods

Methods are reusable sections of code that perform specific tasks in our program. It makes our code much easier to fix if there are bugs and it helps separate our concerns.

```ruby
def methodName
  #method code here
end
```

The def keyword is the header of the method. This will include the name of the method along with any parameter the method will take (if we want it to have any). The body of the method will contain the code that we want the method to carry out. The method ends with the end keyword.

To call a method in Ruby, we just type the method name.

Methods with Parameters
