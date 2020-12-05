---
id: linux-cheatsheet
title: Linux Cheatsheet
---

cd - change directory
ls - list
clear - clear
root - administrator account
sudo rm -r / - remove entire OS

ll (ls -l) - list
pwd - present working directory

less "filename" to view what's in file 

control + c - cancel

./"filename" - used to start scripts

man "command" - how to use command

tail -f syslog - follows the log of the server

-f -follow

grep - search within a file

example: less syslog | grep "Network"

tail -f /usr/adlex/log/rtm.log


Command 				Description
cat [filename] 				Display fileís contents to the standard output device (usually your monitor).
cd /directorypath 			Change to directory.
chmod [options] mode filename 		Change a fileís permissions.
chown [options] filename 		Change who owns a file.
clear 					Clear a command line screen/window for a fresh start.
cp [options] source destination 	Copy files and directories.
date [options] 				Display or set the system date and time.
df [options] 				Display used and available disk space.
du [options] 				Show how much space each file takes up.
file [options] filename 		Determine what type of data is within a file.
find [pathname] [expression] 		Search for files matching a provided pattern.
grep [options] pattern [filesname] 	Search files or output for a particular pattern.
kill [options] pid 			Stop a process. If the process refuses to stop, use kill -9 pid.
less [options] [filename] 		View the contents of a file one page at a time.
ln [options] source [destination] 	Create a shortcut.
locate filename 			Search a copy of your filesystem for the specified filename.
lpr [options] 				Send a print job.
ls [options] 				List directory contents.
man [command] 				Display the help information for the specified command.
mkdir [options] directory 		Create a new directory.
mv [options] source destination 	Rename or move file(s) or directories.
passwd [name [password]] 		Change the password or allow (for the system administrator) to change any password.
ps [options] 				Display a snapshot of the currently running processes.
pwd 					Display the pathname for the current directory.
rm [options] directory 			Remove (delete) file(s) and/or directories.
rmdir [options] directory 		Delete empty directories.
ssh [options] user@machine 		Remotely log in to another Linux machine, over the network. Leave an ssh session by typing exit.
su [options] [user [arguments]] 	Switch to another user account.
tail [options] [filename] 		Display the last n lines of a file (the default is 10).
tar [options] filename 			Store and extract files from a tarfile (.tar) or tarball (.tar.gz or .tgz).
top 					Displays the resources being used on your system. Press q to exit.
touch filename 				Create an empty file with the specified name.
who [options] 				Display who is logged on.

man -k [keyword] 			Search a database for commands that involve the keyword. Can also be used as apropos [keyword].
info [command] 				Display a fileís help information in an alternate format.
man [command] 				Display a fileís help information.
whatis [command] 			Display a short blurb about the command.


OVO / ETC COMMANDS ABOVE		
snmpget `<system>` system.sysUpTime.0	get system uptime	
snmpwalk `<system>` ipAddrTable	get ipAddrTable details.  Useful if you cannot ovome/add box to OVO manually.  Continuous scrolling of this command indicates in my experience 1 ip bound to 2 interfaces	
		
HPUX		
lanscan	show list of network interfaces	
ifconfig `<ifname>`	show config of a specific network interface	
swlist -l product | grep PRODUCTNAME	show list of installed products and grep for a specific PRODUCTNAME	
swlist -s `<full path to .depot>`	list contents of a depot file	
swlist -s `<full path to .depot>` BUNDLE	list details of the bundle	
swlist -s `<full path to .depot>` BUNDLE.subbundle	list details of the sub-bundle	
/sbin/init.d/Rpcd	11.00 dce/rpc software, /etc/rc.confid.d/Rpcd	
/sbin/init.d/ncs	10.20 dce/rpc software	
		
AIX		
alog -o -t boot | more	To view the boot log in AIX:	
alog -o -t console | more	To view the console log in AIX:	
more /var/adm/syslog	To view the system log in AIX:	
nmon	To view disks, top processes, etc:	
lslpp -l | grep dce	check DCE version	
oslevel -r	Check OS Level.  	
exportfs -v 	list NFS exported filesystems	
		
Misc		
/opt/epage/get_persons	list epage ID information	
for /F %i in (path to your line separated file) do `<command>` %i	Windows 'for i in' loop	
for /F %i in (h:\ovis.txt) do systeminfo /S %i /U m`s\<username>` /P `<MYPASSWORD>` H:\projects\ovis\%i_systeminfo.txt		
nslookup $i | grep Address | grep -v 10.7.136.103 | awk '{print $2}'	print out IP address from DNS only one line	
visudo		
opcuitadm	process that runs when someone logs in as TA (template admin)	
/home/oracle/admin/scripts/local/bin/extract_ov.sh	Terry's extract script for PDR	
ssh -o stricthostkeychecking=no	no key checking for SSH	
ssh -o stricthostkeychecking=no -o numberofpasswordprompts=0	no key, no password prompt for SSH	
grep ZIG agent_status_process_problem_report.csv | grep AIX | grep coda | awk  -F"," '{print $1}'	check agent status report for all AIZX	
Mgtp8013:/usr/local/bin/addbox.sh –h `<hostname>` -e `<employeeid>`	UNIX way to add box to the box database.	
Mgtp8013:/usr/local/bin/request-ov.sh –h `<hostname>` -e `<employeeid>`	open HPSD ticket with Infrastructure Monitoring.	
cat  /var/opt/OV/share/dbdumps/a* | grep -v ^P | awk '{print $4}' | sort | uniq > `<file>`	look through user logins and sort unique IDs	
`<meta HTTP-EQUIV="REFRESH" content="0; url=yoururl">`	redirect to yoururl from no content	
 		
Solaris		
kstat bge:0 | grep duplex	check duplex setting of interface using kernel statistics program	
ndd /dev/bge0 link_speed	list link_speed of interface, 0=10, 1=100, 1000=1000 (Gig)	
ndd -set \?	network device confir	
sysdef -i	list system info, look for IPC @ bottom for Semaphore config	
ipcs -s	list active semaphores	
/etc/system	configuration that'll be used for system next reboot, see also sysdef -i	
		
		
		
		
set: list	show hidden chars	
set: nolist	turn off hidden chars	
		
		12
		
		
		
nohup scopeux -s -r -t > /var/opt/perf/datafiles/scope.log 2>&1 &	run scopeux w/ diag flags and log it in background	
nohup ./myprogram > /tmp/foo.out 2>&1 &		
>	stdout to file	
2>	stderr to file	
1>&2	stdout to stderr	
2>&1	stderr to stdout	
&>	stderr to file	
		
eventcreate	create a windows eventlog event	
		
ova distriball `<platform>`	distrib to all of platform (or all).  Output in /tmp/distribution.txt on each manager	
tdeploy	download today's config from dv to Zig	RUN THIS FIRST
tdist	distrib today's date YYYY-MM-DD from zig and upload to all managers	
sudo ovdeploy -cmd "cmd /c dir c:\temp" -host apse8279	run command on remote node	
ovoinstall cmds `<platform>` `<script path>` 	install script to cmds	
"for i in `cat /tmp/nes-06.list.po`
do
echo $i >> /tmp/nes-06.list.po.out
ssh -o stricthostkeychecking=no -o numberofpasswordprompts=0 $i "/var/opt/OV/bin
/instrumentation/lpardsi setup 2>&1" >> /tmp/nes-06.list.po.out
done
"	SSH to box, run command, echo server name and ssh output to .out file	
/netops/jolso22/oracle_proc_mapper.pl |grep `<PID>`	find ps -ef output of oracle PID and the client connected to that PID	
		
		
grep zdata server.1.log | grep "processed on" | awk '{print $3,$4,$5,$11,$12}'	greps out key information from VAS log about zdata processing	

```terminal
"for i in apsw1746 apsw1767 apsw8664 apsw8665
do
for x in 14445 24445 34445 44445 54445
do
echo "Testing port $x on host $i"
telnet $i $x <<EOF
^V^]
quit
EOF
done
done"	port test via telnet script	
```

sp_MSforeachtable @command1 = "DROP TABLE ?"	Drop all tables from MSSQL	
