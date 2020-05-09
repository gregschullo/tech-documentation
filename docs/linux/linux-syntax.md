---
id: linux-syntax
title: Linux Syntax
---

Linux is a case sensitive operating system.  

## Basic Commands

echo - Linux equivalent of print command  
ls - list  

- list flags
  - \-a - lists all files, including hidden files  
  - \-l - long list of files
  - \-p - 
  - \-R -recursive listing. Lists contents of folders and contents withing folders and so on.  

halt  
reboot  
shutdown  
clear  
top  
which  
whoami  
route  
env  
uname - shows operating system being used.  
su - super user. Changes user to different account.  
cd - change directory  
pwd - present working directory  

## init Commands

init0 - shuts down Linux OS.  
init6 - same as reboot. Must be root to run this.  

## Network Commands

netstat  
ifconfig  
ipaddr  

.bash_history shows history of commands entered.  
`export HISTFILESIZE = <variable number>`  

command completion = tab key

## Shell Configuration Files

Environment/System Variables

- variable - placeholder for another value. These can be used in scripts. Variables live in the areas of your systems RAM that is reserved to store whatever values you want to put in it. Its like a container in memory.
- an environment is a set of variables that are used in configuring the system computing environments.  
- There are user defined and system defined variables.  

etc - contains global profiles  

User Defined Variables

- Created variables should use all caps  
- Created variables cannot start with a number, but can contain letters, numbers, and hyphens.  

## Globbing

Globbing is the process of expanding a non specific file name containing a wildcard character into a set of specific filenames that exist on the storage of a computer, server, or network.  
Examples:  

```terminal
ls *.txt (asterik are wildcard characters. Matches any character or set of characters)
ls ?.txt (question mark are for placeholders of any single character)
ls [F] (brackets indicate 'starts with')
ls [f]*.txt (text files that begin with lowercase f)
ls f[igh][lfz]e*.txt (text files that begin with f and end with e with the 2nd character either i,g,h and the 3rd character being l,f, or z)
```

## Quoting

- Double Quote
  - Substitutes the value of variables and commands
  - Example:  `echo "Username is $USER"` will print: `Username is <username>`
- Single Quote
  - Preserves the literal meaning of each character of a given string
  - This will turn off the (special) meaning of all characters
  - Example: `echo 'Username is $USER'` will print: `Username is $USER`
- Backslash
  - This takes away or removes the special meaning from a single character and can be used as an escape character.
  - If we did not have the \ character before $5.00 in the following string, it would be interpreted as a variable.
  - Example: `echo "The cheeseburger is going to cost you $5.00"` will print: `The cheeseburger is going to cost you .00`
  - If we use the backslash, we negate the special character meaning.
  - Example: `echo "The cheeseburger is going to cost you \$5.00"` will print: `The cheeseburger is going to cost you $5.00`

## Formatting Commands

Operation for a Linux command can be thought of in three ways:  

- First, the computer waits for the user input
- Second, the user selects a command and enters it via the keyboard or mouse
- Finally, the computer then executes the command

## Working with Options

Linux command parameters can be divided into two types:

- Parameters with a dash ("-") are called options
- Parameters with no leading dash are called arguments

Conceptually, formatting commands look like this:

- Command - "What to do?"
- Options - "How to do it?"
- Arguments - "What to do with it?"

## Man

Linux manual for commands, configuration files, and more.  
Linux man pages are not meant to be tutorials.  
Man pages are a reference format.  

Man pages come in 9 sections. The most frequently used section is section 1.  

1. Executable programs and shell commands
1. System calls provided by the kernal
1. Library calls provided by the program libraries
1. Device File (usually stored in /dev)
1. File Formats
1. Games
1. Miscellaneous (macro packages, conventions, and so on)
1. System administration commands (programs run mostly or exclusively by root)
1. Kernel routines

Example man command:  `man cp` (manual for copy command)  
To view a specific section: `man 5 cp` (shows file format for cp)  

Man pages are also organized like so:  

- Name
- Synopsis
- Description
- Options
- Files
- See Also
- Bugs
- History
- Author

When viewing man pages, Linux uses less to view them. Helpful command to navigate man pages are:

- H or h (displays help)
- Page Down, Spacebar, Ctrl+V, Ctrl+F (moves down one screen)
- Page Up, Esx+V, Ctrl+B (moves up one screen)
- Down Arrow, Enter, Ctrl+N, Ctrl+E, Ctrl+J (moves down one line)
- Up Arrow, y, Ctrl+Y, +P, +K (moves up one line)
- /pattern (searches forward on pattern)
- ?pattern (searches backward on pattern)
- n or / (repeats previous search)
- Q or ZZ (quits)
- G (go to end of file)
- g (go to beginning of file)

## Info Pages

Similar to man, but the goal is to support functions in which man cannot. Most notable of which are hyperlinks.  
You can use info to read man pages if you wish.  

Navigating and using the info utility:  

- ? (Displays help info)
- N (Moves to the next node in a linked series or level)
- P (Moves back in a series or level)
- U (Moves up one level in the mode hierarchy)
- Arrow Keys (Moves the cursor around to select links)
- Page Up, Page Down (These keys scroll up and down within a single node)
- Enter (Moves to a new node once you have selected it)
- L (Displays the last info page you read)
- T (Displays the top page for a topic)
- Q (Exists from the info page system)

## The Linux Filesystem

Where the data is stored on a storage device within a certain manner

- Data is organized and easily located
- Data can be saved in a persistent manner
- Data integrity is preserved
- Data can be quickly retrieved for a user at a later point in time

The Linux filesystem and the filesystem hierarchy standard (FHS)  

- The Linux filesystem uses a hierarchy structure to organize data  
- The systems have a standard in which at the root directory has several of the same sub directories in a certain order or fashion
- The root directory is the highest point of hierarchy

Standard directories that almost always live under root, no matter what the distribution is:  
bin - contains executable files that are necessary to manage and run a Linux system. Includes shell, copy, remove, etc.  
boot - contains boot loader files to boot the Linux system.  
dev - contains special files that are used to represent the various hardware devices.  
etc - contains text based configuration files as well as services running on the system.  

- Common etc directories and their contents:  
  - /etc/aliases (contains a table used to redirect all to local users)
  - /etc/exports (configured filesystems to be exported to remove NFS clients)
  - /etc/fstab (lists te partitions and filesystems that will automatically be mounted when the Linux system boots)
  - /etc/ftpusers (controls user access to FTP service running on a Linux system)
  - /etc/group (contains local group definitions)
  - /etc/grub.conf (contains configuration parameters for the init process)
  - /etc/hosts (contains a list of hostnames to IP address mappings that can be used to resolve certain hostnames)
  - /etc/inittab (contains configuration parameters for the init process)
  - /etc/init.d (a sub directory that contains startup scripts and services)
  - /etc/rc.d/init.d (Red Hat of CentOS based systems startup scripts)
  - /etc/passwd (this is our Linux systems users accounts file)
  - /etc/shadow (contains encrypted passwords for user accounts)
  - /etc/resolv.conf (where we specify what DNS server and domain suffix that the system is going to use)
  - /etc/X11 (has the X windows configuration files)

- home - contains sub directories that server as home directories for users on the Linux server.
- lib - library. This directory (dir) contains code libraries used by programs that live within the bin or sbin folders.  
- media - directory used to mount external devices
- mnt - mount. Directory used to mount external drives
- opt - contains files for some programs that you may need to install manually
- proc - sudo filesystem that is dynamically created whenever it is accessed. It is used to access process and other system information for the Linux Kernel. Proc directory doesn't actually exist on the filesystem.  
- root - root user's home directory
- sbin - contains important system management and administration files. Similar to the /bin directory
- srv - contains subdirectories where services running on the server save their files
- sys - contains information about the hardware on the system
- tmp - directory that contains temporary files that are created by the filesystem
- usr - contains application files
- var - contains Linux variable data, including Linux log files

## Linux Disk File Systems

ext2 - oldest, most stable Linux disk  
ext3 - very similar to ext2. ext3 has journaling
reiser - alternative to ext3. Performs faster than ext2 or ext3
ext4 - 4th release of extended filesystem

## Hidden Files

Periods in front of filename or folder name.  
Example: touch .file.txt  

Hidden files exist so you don't accidentally edit them.  
To view hidden files, use the -a parameter.  

## Absolute and Relative Paths

Relative Paths - path that you are currently in.  
Absolute Path - complete path from root tree down.  

## Files and Directory

touch command

- touch filename.txt will create a file called filename.txt if the files does not exist.  
- touching a file will update the timestamp if the file does exist.  
- touch -d will change the date/timestamp if desired.  

Example:  touch -d "February 1 2020: file.txt  
This will change the timestamp of file.txt to Feb 1 00:00

cp command (copy)

- useful parameters (flags) for cp command: -i, -r, -p, -a, -u, and -d
- view with man cp

mv command (move)

- works as rename command when ran in the same dir  
- can pick up and move a file when moving to a new dir  

rm command (remove)  

Example: rm file1.txt  

mkdir command (make directory)

- can create a parent directory if run with -p flag (nested subdirectories)
- cannot use touch to create a directory

rmdir (remove directory)

Example: rmdir directoryname

## Case Sensitivity

Linux is a case sensitive operating system. Commands, directories, and file names are ALL case sensitive.  

## Simple Globbing and Quoting

Globbing - Expanding a nonspecific filename.  
Example: ls *.txt => shows any files in the current dir ending in .txt  

asterik (*) stands for 0 or more characters  
question mark (?) is a wildcard for any single character  
[a - z] *.txt prints any file starting with a through z and ending in .txt  

Quoting

double quote - The double quote ("quote") protects everything enclosed between two double quote marks except $, ', ", and \  
Use double quotes when you want when you want variables and command substitution.  

single quote - The single quote ('quote') protects everything enclosed between single quote marks. It is used to turn OFF special meaning of all characters.  
Prints literal value between quotes.  

backslash (\) - negates special meaning of characters  
encapsulating within backslashes turns on special meaning/variables  

## Archiving Files and Directories

tar

- a Linux utility that archives things. It does not compress or compact files. It just sticks all your files together into one file. This is known as archiving.  
- traditionally, tar was used to create tape backups.  We used it to archive data on to tape backup drives. Tar actually stands for 'tape archive."
- tar -cf (creates file) file.tar
- tar -xf (extracts file) file.tar

## Archives and Compression

There are three main ways to compress on Linux. gzip, bzip2, and zip.  

gzip  
`gzip` and `gunzip`  

bzip2 (most efficient)  
`bzip2` and `bunzip`  

zip  
`zip` (only command that archives and compresses) and `unzip`  

### zip Syntax

Create a new zip file:  
`zip filezip.zip file.txt` zips up file.txt and sends to filezip.zip  

Unzip a file:  
`unzip filezip.zip`  

Zip a folder:  
`zip -r folderzip.zip foldername`  

zip will archive and compress files  

### gzip Syntax

You can compress tar files with gzip or bzip2  
`gzip folder.tar` - this will make the file appear like: folder.tar.gz

Uncompress a gzip file.  
`gunzip folder.tar.gz` - this will get you your original tar file.  
untar with `tar -xvf` - x is extract, v is verbose, f is file.  

### bzip2 Syntax

`bzip2 folder.tar` - this will make the file appear like: folder.tar.bz2  

Uncompress a bzip2 file.  
`bunzip folder.tar.bz2` - this will get you the original tar file.  
untar with `tar -xvf`  

### tar

The tar utility does have flags to call gzip or bzip2. So it's possible to archive and compress with the following:  

gzip - `tar -zcf` - file will look like file.tar.gz or file.tgz
bzip2 - `tar -jcf` - file will look like file.tar.bz2 or file.tb2

z flag is an argument that tells tar to call gzip  
j flag is an argument that tells tar to call bzip2  

Example: `tar -jcf folder.tb2 folder` - archives and compresses  
Example: `tar -zxv folder.tb2` - decompresses and extracts  
