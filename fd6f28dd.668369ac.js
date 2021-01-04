(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(181)),i={id:"linux-commands",title:"Linux Commands"},s={unversionedId:"os/linux/linux-commands",id:"os/linux/linux-commands",isDocsHomePage:!1,title:"Linux Commands",description:"System",source:"@site/docs/os/linux/linux-commands.md",slug:"/os/linux/linux-commands",permalink:"/docs/os/linux/linux-commands",version:"current",sidebar:"linux",previous:{title:"Linux Syntax",permalink:"/docs/os/linux/linux-syntax"},next:{title:"Linux Cheatsheet",permalink:"/docs/os/linux/linux-cheatsheet"}},p=[{value:"System",id:"system",children:[]},{value:"Hardware",id:"hardware",children:[]},{value:"Users",id:"users",children:[]},{value:"File",id:"file",children:[]},{value:"Process",id:"process",children:[]},{value:"File Permission",id:"file-permission",children:[]},{value:"Network",id:"network",children:[]},{value:"Compression",id:"compression",children:[]},{value:"Install Package",id:"install-package",children:[]},{value:"Install From Source",id:"install-from-source",children:[]},{value:"Search",id:"search",children:[]},{value:"Login",id:"login",children:[]},{value:"File Transfer",id:"file-transfer",children:[]},{value:"Disk Usage",id:"disk-usage",children:[]},{value:"Directory Traverse",id:"directory-traverse",children:[]}],c={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"system"},"System"),Object(o.b)("p",null,"uname -a - display Linux system information",Object(o.b)("br",{parentName:"p"}),"\n","uname -r - display kernel release information",Object(o.b)("br",{parentName:"p"}),"\n","uptime - show how long the system has been running + load",Object(o.b)("br",{parentName:"p"}),"\n","hostname - show system host name",Object(o.b)("br",{parentName:"p"}),"\n","hostname -i - display the IP address of the host",Object(o.b)("br",{parentName:"p"}),"\n","last reboot - show system reboot history",Object(o.b)("br",{parentName:"p"}),"\n","date - show the current date and time",Object(o.b)("br",{parentName:"p"}),"\n","cal - show this month calendar",Object(o.b)("br",{parentName:"p"}),"\n","w - display who is online",Object(o.b)("br",{parentName:"p"}),"\n","whoami - who you are logged in as",Object(o.b)("br",{parentName:"p"}),"\n","finder user - display information about user  "),Object(o.b)("h2",{id:"hardware"},"Hardware"),Object(o.b)("p",null,"dmesg - detected hardware and boot messages",Object(o.b)("br",{parentName:"p"}),"\n","cat /proc/cpuinfo - CPU model",Object(o.b)("br",{parentName:"p"}),"\n","cat /proc/meminfo - hardware memory",Object(o.b)("br",{parentName:"p"}),"\n","cat /proc/interrupts - lists the number of interrupts per CPU per I/O device",Object(o.b)("br",{parentName:"p"}),"\n","lshw - displays information on hardware configuration of the system",Object(o.b)("br",{parentName:"p"}),"\n","lsblk - displays block device related information in Linux",Object(o.b)("br",{parentName:"p"}),"\n","free -m - used and free memory (m for MB)",Object(o.b)("br",{parentName:"p"}),"\n","lspci -tv - shows PCI devices",Object(o.b)("br",{parentName:"p"}),"\n","lsusb -tv - shows USB devices",Object(o.b)("br",{parentName:"p"}),"\n","dmidecode - show hardware info from the BIOS",Object(o.b)("br",{parentName:"p"}),"\n","hdparm -i /dev/sda - show info about disk sda",Object(o.b)("br",{parentName:"p"}),"\n","hdparm -tT /dev/sda - do a read soeed test on disk sda",Object(o.b)("br",{parentName:"p"}),"\n","badblocks -s /dev/sda - test for unreadable blocks on disk sda  "),Object(o.b)("h2",{id:"users"},"Users"),Object(o.b)("p",null,"id - show the active user id with login and group",Object(o.b)("br",{parentName:"p"}),"\n","last - show the logins on the system",Object(o.b)("br",{parentName:"p"}),"\n","who - show who is logged on the system",Object(o.b)("br",{parentName:"p"}),"\n",'groupadd admin - add group "admin"',Object(o.b)("br",{parentName:"p"}),"\n",'useradd -c "Firstname Lastname" - adds new user',Object(o.b)("br",{parentName:"p"}),"\n",'userdel user - deletes "user" user',Object(o.b)("br",{parentName:"p"}),"\n",'adduser user - adds "user" user',Object(o.b)("br",{parentName:"p"}),"\n","usermod - modify user information  "),Object(o.b)("h2",{id:"file"},"File"),Object(o.b)("p",null,"ls -al - display all information about files/directories",Object(o.b)("br",{parentName:"p"}),"\n","pwd - show the path of current directory",Object(o.b)("br",{parentName:"p"}),"\n","mkdir directory-name - create a directory",Object(o.b)("br",{parentName:"p"}),"\n","rm file-name - delete file",Object(o.b)("br",{parentName:"p"}),"\n","rm -r directory-name - delete directory recursively",Object(o.b)("br",{parentName:"p"}),"\n","rm -f file-name - forcefully remove a file",Object(o.b)("br",{parentName:"p"}),"\n","rm -rf directory-name - forcefully remove directory recursively",Object(o.b)("br",{parentName:"p"}),"\n","cp file1 file2 - copy file1 to file 2",Object(o.b)("br",{parentName:"p"}),"\n","cp -r dir1 dir2 - copy directory1 to directory2 if directory 2 doesn't exist",Object(o.b)("br",{parentName:"p"}),"\n","mv file1 file2 - rename source to destination / move source to directory",Object(o.b)("br",{parentName:"p"}),"\n","ln -s /path/to/file-name link-name - creates symbolic link to file-name",Object(o.b)("br",{parentName:"p"}),"\n","touch file - create or update file",Object(o.b)("br",{parentName:"p"}),"\n","cat > file - place standard input into a file",Object(o.b)("br",{parentName:"p"}),"\n","more file - output contents of a file",Object(o.b)("br",{parentName:"p"}),"\n","head file - output first 10 lines of a file",Object(o.b)("br",{parentName:"p"}),"\n","tail file - output last 10 lines of a file",Object(o.b)("br",{parentName:"p"}),"\n","tail -f file - output contents of file as it grows starting with last 10 lines",Object(o.b)("br",{parentName:"p"}),"\n","gpg -c file - encrypt file",Object(o.b)("br",{parentName:"p"}),"\n","gpg file.gpg - decrypt file",Object(o.b)("br",{parentName:"p"}),"\n","wc - print the number of bytes, words, and lines in files",Object(o.b)("br",{parentName:"p"}),"\n","xargs - execute command lines from standard input  "),Object(o.b)("h2",{id:"process"},"Process"),Object(o.b)("p",null,"ps - display your currently active processes",Object(o.b)("br",{parentName:"p"}),"\n","ps aux | grep 'telnet' - find all process ids related to telnet process",Object(o.b)("br",{parentName:"p"}),"\n","pmap - memory map of process",Object(o.b)("br",{parentName:"p"}),"\n","top - display all running processes",Object(o.b)("br",{parentName:"p"}),"\n","killpid - kill process with mentioned pid id",Object(o.b)("br",{parentName:"p"}),"\n","killall proc - kill all processes named proc",Object(o.b)("br",{parentName:"p"}),"\n","pkill process-name - send signal to a process with its name",Object(o.b)("br",{parentName:"p"}),"\n","bg - lists stopped or background jobs",Object(o.b)("br",{parentName:"p"}),"\n","fg - brings the most recent job to foreground",Object(o.b)("br",{parentName:"p"}),"\n","fg n - bring job n to the foreground  "),Object(o.b)("h2",{id:"file-permission"},"File Permission"),Object(o.b)("p",null,"chmod octal file-name - change the permissions of file to octal",Object(o.b)("br",{parentName:"p"}),"\n","chmod 777 - set rwx permissions for owner, group, everyone",Object(o.b)("br",{parentName:"p"}),"\n","chown owner-user file - change owner of the file",Object(o.b)("br",{parentName:"p"}),"\n","chown owner-user:owner-group file-name - change owner and group owner of the file",Object(o.b)("br",{parentName:"p"}),"\n","chown owner-user:owner-group directory - change owner and group owner of the directory  "),Object(o.b)("h2",{id:"network"},"Network"),Object(o.b)("p",null,"ifconfig -a - display all network ports and ip address",Object(o.b)("br",{parentName:"p"}),"\n","ifconfig eth0 - displays specific ethernet port",Object(o.b)("br",{parentName:"p"}),"\n","ethtool eth0 - linux tool to show to show ethernet status",Object(o.b)("br",{parentName:"p"}),"\n","mii-tool eth0 - linux tool to show ethernet status",Object(o.b)("br",{parentName:"p"}),"\n","ping host - send echo request to test connect",Object(o.b)("br",{parentName:"p"}),"\n","whois domain - get who is information for domain",Object(o.b)("br",{parentName:"p"}),"\n","dig domain - get DNS information for domain",Object(o.b)("br",{parentName:"p"}),"\n","dig -x host - reverse lookup host",Object(o.b)("br",{parentName:"p"}),"\n","host google.com - lookup DNS ip address for the name",Object(o.b)("br",{parentName:"p"}),"\n","hostname -i - lookup local ip address",Object(o.b)("br",{parentName:"p"}),"\n","wget file - download file",Object(o.b)("br",{parentName:"p"}),"\n","netstat -tupl - list active connections to / from system"),Object(o.b)("h2",{id:"compression"},"Compression"),Object(o.b)("p",null,"tar cf home.tar home - create tar named home.tar containing home/",Object(o.b)("br",{parentName:"p"}),"\n","tar xf file.tar - extract the files from file.tar",Object(o.b)("br",{parentName:"p"}),"\n","tar czf file.tar.gz files - create a tar with gzip compression",Object(o.b)("br",{parentName:"p"}),"\n","gzip file - compress file and renames it to file.gz  "),Object(o.b)("h2",{id:"install-package"},"Install Package"),Object(o.b)("p",null,"rpm -i pkgname.rpm - install rpm based package",Object(o.b)("br",{parentName:"p"}),"\n","rpm -e pkgname - remove package  "),Object(o.b)("h2",{id:"install-from-source"},"Install From Source"),Object(o.b)("p",null,"./configure\nmake\nmake install"),Object(o.b)("h2",{id:"search"},"Search"),Object(o.b)("p",null,"grep pattern files - search for pattern in files",Object(o.b)("br",{parentName:"p"}),"\n","grep -r pattern dir - search recursively for pattern in dir",Object(o.b)("br",{parentName:"p"}),"\n","locate file - find all instances of file",Object(o.b)("br",{parentName:"p"}),"\n","find /home/tom -name 'index' - find file names that start with \"index\"",Object(o.b)("br",{parentName:"p"}),"\n","find /home -size +10000k - find files larger than 10000k in /home  "),Object(o.b)("h2",{id:"login"},"Login"),Object(o.b)("p",null,"ssh user@host - connect to host as user",Object(o.b)("br",{parentName:"p"}),"\n","ssh -p port user@host - connect to host using specific port",Object(o.b)("br",{parentName:"p"}),"\n","telnet host - connect to the system using telnet port  "),Object(o.b)("h2",{id:"file-transfer"},"File Transfer"),Object(o.b)("p",null,"scp file server:/tmp - secure copy file.txt to a remote host /tmp folder",Object(o.b)("br",{parentName:"p"}),"\n","rsync -a /home/apps /backup/ - synchronize source to destination  "),Object(o.b)("h2",{id:"disk-usage"},"Disk Usage"),Object(o.b)("p",null,"df -h - show free space on mounted filesystems",Object(o.b)("br",{parentName:"p"}),"\n","df -i - show free inodes on mounted filesystems",Object(o.b)("br",{parentName:"p"}),"\n","fdisk -l - show disk partition sizes and types",Object(o.b)("br",{parentName:"p"}),"\n","du -ah - display disk usage in human readable form",Object(o.b)("br",{parentName:"p"}),"\n","du -sh - display total disk usage on the current directory  "),Object(o.b)("h2",{id:"directory-traverse"},"Directory Traverse"),Object(o.b)("p",null,"cd .. - go up one level of the directory tree",Object(o.b)("br",{parentName:"p"}),"\n","cd - go to $HOME directory",Object(o.b)("br",{parentName:"p"}),"\n","cd /test - change to /test directory  "))}b.isMDXComponent=!0},181:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=b(r),d=n,u=l["".concat(i,".").concat(d)]||l[d]||m[d]||o;return r?a.a.createElement(u,s(s({ref:t},c),{},{components:r})):a.a.createElement(u,s({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);