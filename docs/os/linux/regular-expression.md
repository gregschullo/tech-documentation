---
id: regular-expression
title: Regular Expression
---

## Anchors

`^` - start of line  
`\A` - start of string  
`$` - end of line  
`\Z` - end of string  
`\b` - Word boundary  
`\B` - Not a word boundary  
`\<` - star of word  
`\>` - end of word  

## Character Classes

`\c` - control character  
`\s` - white space  
`\d` - digit  
`\D` - not digit  
`\w` - word  
`\W` - not word  
`\xhh` - hexadecimal character hh  
`\Oxxx` - octal character xxx  

## POSIX Character Classes

`[:upper:]` - upper case letters  
`[:lower:]` - lower case letters  
`[:alpha:]` - all letters  
`[:alnum:]` - digits and letters  
`[:digit:]` - digits  
`[:xdigit:]` - hexadecimal digits  
`[:punct:]`- punctuation  
`[:blank:]` - space and tab  
`[:space:]` - blank characters  
`[:cntrl:]` - control characters  
`[:graph:]` - printed characters  
`[:print:]` - printed characters and spaces  
`[:word:]` - digits, letters, and underscore  

## Assertions

`?=` - lookahead assertion  
`?!` - negative lookahead  
`?<=` - lookbehind assertion  
`?!= or ?<!` - negative lookbehind  
`?>` - once only subexpression  
`?()` - condition (if then)  
`?()|` - condition (if then else)  
`?#` - comment  

## Sample Patterns

`([A-Za-z0-9-]+)` - letters, numbers, and hyphens
`(\d{1,2}\/\d{1,2}\/\d{4})` - date (21/3/2006)  
`([^\s]+(?=\.(jpg|gif|png))\.\2)` - jpg, gif, or png image  
`(^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$)` - any number from 1 to 50 inclusive  
`(#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)` - valid hexadecimal color code  
`((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})` - 8 to 15 character string with at least one upper case letter, one lower case letter, and one digit (useful for passwords)  
`(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})` - email addresses  
`(\<(/?[^\>]+)\>)` - HTML tags  

## Quantifiers

`*` - 0 or more  
`*?` - 0 or more, ungreedy  
`+` - 1 or more  
`+?` - 1 or more, ungreedy  
`?` - 0 or 1  
`??` - 0 or 1, ungreedy  
`{3}` - exactly 3  
`{3,}` - 3 or more  
`{3,5}` - 3, 4, or 5  
`{3,5}?` - 3, 4, or 5, ungreedy  

## Special Characters

`\` - escape character  
`\n` - new line  
`\r` - carriage  
`\t` - tab  
`\v` - vertical tab  
`\f` - form feed  
`\a` - alarm  
`[\b]` - backspace  
`\e` - escape  
`\N{name}` - named character  

## String Replacement (Backreferences)

`$n` - nth non-passive group  
`$2` - "xyz" in /^(abc(xyz))$/  
`$1` - "xyz" in /^(?:abc)(xyz)$/  
`$` - (dollar sign+tick) before matched string  
`$'` - after matched string  
`$+` - last matched string  
`$&` - entire matched string  
`$_` - entire input string  
`$$` - literal "$"  

## Ranges

`.` - any character except new line (\n)  
`(a|b)` - a or b  
`(...)` - group  
`(?:...)` - passive group  
`[abc]` - range (a or b or c)  
`[^abc]` - not a or b or c  
`[a-q]` - letter between a and q  
`[A-Q]` - upper case letter between A and Q  
`[0-7]` - digit between 0 and 7  
`\n` - nth group/subpattern  

Note: Ranges are inclusive  

## Pattern Modifiers

`g` - global match  
`i` - case-insensitive  
`m` - multiple lines  
`s` - treat string as single line  
`x` - allow comments and white space in pattern  
`e` - evaluate replacement  
`U` - ungreedy pattern  

## Metacharacters

Metacharacters must be escaped.  

`^`  
`$`  
`(`  
`)`  
`<`  
`>`  
`[`  
`{`  
`\`  
`|`  
`.`  
`*`  
`+`  
`?`  
