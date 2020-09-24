---
id: bash-scripting
title: Bash Scripting
---

Shell - command line interpreter that allows us to type commands  
sh, bash, csh, tsch, zsh, ksh  

echo $SHELL -> /bin/bash  

Shows what shell you are using.  

Linux is capable of running multiple shell sessions at once.  

## Bash

Born Again Shell

## Environment / System Variables

Variable - Placeholder for another value. These can be used in scripts.  

## Bash Scripting Backslash Characters

\a - alert (bell)  
\b - backspace  
\e - escape character  
\f - form feed  
\n - new line  
\r - carriage return  
\t - horizontal tab  
\v - vertical tab  
\\ - backslash  
\' - single quote  
\nnn - the eight-bit character whose value is the octal value nnn (one to three digits)  
\xHH - the eight-bit character whose value is the hexidecimal value HH (one or two hex digits)  
\cx - a control-x character  

## Basic Shell Scripting

Scripts need an interpreter  

/bin/sh - (rarely used these days. Original bash shell)  
/bin/bash - (Bourne Again Shell)  

### Variables

$ANYNAME  

### Arguments

$1 - first argument  
$2 - second argument  

- call these arguments in a script - $argument

$? - Exit Code/Status (variable that stores 0 or non 0 numbers depending on if the previous statement was successful or not)  
\#! - shebang  
/bin/bash - bourne again shell  
variables - we can pass variables or create Arguments to pass to scripts  
arguments - options we can pass to our scripts that can also be variables  
echo - prints/echos what we tell echo to print to the screen  
for - loops through and iterates through data for us  
if - used for conditional coding. Based on exit status code, for example  
exit - exit or stop a script function  
&& - and  
|| - or  

if/then  
if condition then  
  command  
else  
  command  
fi  

Options for if/then/else
-d - Checks to see if the specified directory exists  
-e - Checks to see if the specified file exists  
-f - Checks to see if the specified file exists and it's a regular file  
-G - Checks to see if the specified file exists and is owned by a certain group  
-h or -L - Checks to see if the specified file exists and if it is a symbolic link  
-O - Checks to see if the specified file exists and if it is owned by a specified UID  
-r - Checks to see if the specified file exists and if the read permission is granted  
-w - Checks to see if the specified file exists and if the write permission is granted  
-x - Checks to see if the specified file exists and if the execute permission is granted  
-z - Checks if the specified file, string, argument, etc. is null (True if null)

## Looping Structures

While Loop  
Until Loop  
For Loop  

while loop - execute over and over until a specified condition is no longer true.  
structure:  
  while condition  
  do  
    command  
  done  

until loop - run over and over as long as the condition is false and will stop as soon as the condition is true.  
structure:  
  until condition  
  do  
    command  
  done  

for loop - will loop a specified number of times.  
three options for creating a number sequence with seq:  

1. if specify a single value, the sequence starts at one, increments by one, and ends at the specified value.  
1. if specify two values, the sequence starts at the first value, increments by one, and ends at the second value.  
1. if specify three values, the sequence starts at the first value, increments by the second value, and ends at the third value.  

## Common Environment Variables

--------------------|-------------
Environment Variable Default Value
BASH AND SHELL | /bin/bash
CPU | spec to your system
DISPLAY | the local video card monitor
ENV | /etc/bash.bashrc
EUID | the UID number of current user
HISTFILE | ~/.bash_history
HISTSIZE | 1000
HOME | current users home directory
HOST and HOSTNAME | system assigned hostname
LOGNAME | username of current user
MAIL | /var/spool/mail/username OR /var/mail/username
MANPTH | distribution dependant
OLDPWD | prior working directory
OSTYPE | Linux
PATH | distribution dependent
PSI | distribution dependent
PWD | depends on current directory within
USER and USERNAME | username of current user

