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

dmesg - detected hardware and boot messages  
cat /proc/cpuinfo - CPU model  
cat /proc/meminfo - hardware memory  
cat /proc/interrupts - lists the number of interrupts per CPU per I/O device  
lshw - displays information on hardware configuration of the system  
lsblk - displays block device related information in Linux  
free -m - used and free memory (m for MB)  
lspci -tv - shows PCI devices  
lsusb -tv - shows USB devices  
dmidecode - show hardware info from the BIOS  
hdparm -i /dev/sda - show info about disk sda  
hdparm -tT /dev/sda - do a read soeed test on disk sda  
badblocks -s /dev/sda - test for unreadable blocks on disk sda  

## Users

id - show the active user id with login and group  
last - show the logins on the system  
who - show who is logged on the system  
groupadd admin - add group "admin"  
useradd -c "Firstname Lastname" - adds new user  
userdel user - deletes "user" user  
adduser user - adds "user" user  
usermod - modify user information  

## File

ls -al - display all information about files/directories  
pwd - show the path of current directory  
mkdir directory-name - create a directory  
rm file-name - delete file  
rm -r directory-name - delete directory recursively  
rm -f file-name - forcefully remove a file  
rm -rf directory-name - forcefully remove directory recursively  
cp file1 file2 - copy file1 to file 2  
cp -r dir1 dir2 - copy directory1 to directory2 if directory 2 doesn't exist  
mv file1 file2 - rename source to destination / move source to directory  
ln -s /path/to/file-name link-name - creates symbolic link to file-name  
touch file - create or update file  
cat > file - place standard input into a file  
more file - output contents of a file  
head file - output first 10 lines of a file  
tail file - output last 10 lines of a file  
tail -f file - output contents of file as it grows starting with last 10 lines  
gpg -c file - encrypt file  
gpg file.gpg - decrypt file  
wc - print the number of bytes, words, and lines in files  
xargs - execute command lines from standard input  

## Process

ps - display your currently active processes  
ps aux | grep 'telnet' - find all process ids related to telnet process  
pmap - memory map of process  
top - display all running processes  
killpid - kill process with mentioned pid id  
killall proc - kill all processes named proc  
pkill process-name - send signal to a process with its name  
bg - lists stopped or background jobs  
fg - brings the most recent job to foreground  
fg n - bring job n to the foreground  

## File Permission

chmod octal file-name - change the permissions of file to octal  
chmod 777 - set rwx permissions for owner, group, everyone  
chown owner-user file - change owner of the file  
chown owner-user:owner-group file-name - change owner and group owner of the file  
chown owner-user:owner-group directory - change owner and group owner of the directory  

## Network

ifconfig -a - display all network ports and ip address  
ifconfig eth0 - displays specific ethernet port  
ethtool eth0 - linux tool to show to show ethernet status  
mii-tool eth0 - linux tool to show ethernet status  
ping host - send echo request to test connect  
whois domain - get who is information for domain  
dig domain - get DNS information for domain  
dig -x host - reverse lookup host  
host google.com - lookup DNS ip address for the name  
hostname -i - lookup local ip address  
wget file - download file  
netstat -tupl - list active connections to / from system

## Compression

tar cf home.tar home - create tar named home.tar containing home/  
tar xf file.tar - extract the files from file.tar  
tar czf file.tar.gz files - create a tar with gzip compression  
gzip file - compress file and renames it to file.gz  

## Install Package

rpm -i pkgname.rpm - install rpm based package  
rpm -e pkgname - remove package  

## Install From Source

./configure
make
make install

## Search

grep pattern files - search for pattern in files  
grep -r pattern dir - search recursively for pattern in dir  
locate file - find all instances of file  
find /home/tom -name 'index' - find file names that start with "index"  
find /home -size +10000k - find files larger than 10000k in /home  

## Login

ssh user@host - connect to host as user  
ssh -p port user@host - connect to host using specific port  
telnet host - connect to the system using telnet port  

## File Transfer

scp file server:/tmp - secure copy file.txt to a remote host /tmp folder  
rsync -a /home/apps /backup/ - synchronize source to destination  

## Disk Usage

df -h - show free space on mounted filesystems  
df -i - show free inodes on mounted filesystems  
fdisk -l - show disk partition sizes and types  
du -ah - display disk usage in human readable form  
du -sh - display total disk usage on the current directory  

## Directory Traverse

cd .. - go up one level of the directory tree  
cd - go to $HOME directory  
cd /test - change to /test directory  
