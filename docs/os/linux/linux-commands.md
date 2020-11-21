---
id: linux-commands
title: Linux Commands
---

## System

uname -a - display Linux system information  
uname -r - display kernel release information  
uptime - show how long the system has been running + load  
hostname - show system host name  
hostname -i - display the IP address of the host  
last reboot - show system reboot history  
date - show the current date and time  
cal - show this month calendar  
w - display who is online  
whoami - who you are logged in as  
finder user - display information about user  

## Hardware

dmesg -  
cat /proc/cpuinfo -  
cat /proc/meminfo -  
cat /proc/interrupts -  
lshw -  
lsblk -  
free -m -  
lspci -tv -  
lsusb -tv -  
dmidecode -  
hdparm -i /dev/sda -  
hdparm -tT /dev/sda -  
badblocks -s /dev/sda -  

## Users

id  
last
who
groupadd admin
useradd -c "Firstname Lastname"  
userdel user
adduser user  
usermod

## File

ls -al
pwd
mkdir directory-name  
rm file-name
rm -r directory-name
rm -r file-name
rm -rf directory-name - forcefully remove directory recursively  
cp file1 file2  
cp -r dir1 dir2  
mv file1 file2 - 
ln -s /path/to/file-name link-name
touch file
cat > file
more file
head file
tail file
tail -f file
gpg -c file
gpg file.gpg
wc
xargs

## Process

ps
ps aux | grep 'telnet'
pmap
top
killpid
killall proc
pkill proc
pkill process-name
bg
fg
fg n

## File Permission

chmod 

## Network

## Compression

## Install Package

## Install From Source

## Search

## Login

## Disk Usage

## Directory Traverse
