(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{131:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return c}));var o=n(2),r=n(6),i=(n(0),n(174)),a={id:"linux-cheatsheet",title:"Linux Cheatsheet"},s={unversionedId:"os/linux/linux-cheatsheet",id:"os/linux/linux-cheatsheet",isDocsHomePage:!1,title:"Linux Cheatsheet",description:"cd - change directory",source:"@site/docs/os/linux/linux-cheatsheet.md",slug:"/os/linux/linux-cheatsheet",permalink:"/docs/os/linux/linux-cheatsheet",version:"current",sidebar:"linux",previous:{title:"Linux Commands",permalink:"/docs/os/linux/linux-commands"},next:{title:"Bash Scripting",permalink:"/docs/os/linux/bash-scripting"}},l=[],p={rightToc:l};function c(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"cd - change directory\nls - list\nclear - clear\nroot - administrator account\nsudo rm -r / - remove entire OS"),Object(i.b)("p",null,"ll (ls -l) - list\npwd - present working directory"),Object(i.b)("p",null,'less "filename" to view what\'s in file '),Object(i.b)("p",null,"control + c - cancel"),Object(i.b)("p",null,'./"filename" - used to start scripts'),Object(i.b)("p",null,'man "command" - how to use command'),Object(i.b)("p",null,"tail -f syslog - follows the log of the server"),Object(i.b)("p",null,"-f -follow"),Object(i.b)("p",null,"grep - search within a file"),Object(i.b)("p",null,'example: less syslog | grep "Network"'),Object(i.b)("p",null,"tail -f /usr/adlex/log/rtm.log"),Object(i.b)("p",null,"Command \t\t\t\tDescription\ncat ","[filename]"," \t\t\t\tDisplay file\xeds contents to the standard output device (usually your monitor).\ncd /directorypath \t\t\tChange to directory.\nchmod ","[options]"," mode filename \t\tChange a file\xeds permissions.\nchown ","[options]"," filename \t\tChange who owns a file.\nclear \t\t\t\t\tClear a command line screen/window for a fresh start.\ncp ","[options]"," source destination \tCopy files and directories.\ndate ","[options]"," \t\t\t\tDisplay or set the system date and time.\ndf ","[options]"," \t\t\t\tDisplay used and available disk space.\ndu ","[options]"," \t\t\t\tShow how much space each file takes up.\nfile ","[options]"," filename \t\tDetermine what type of data is within a file.\nfind ","[pathname][expression]"," \t\tSearch for files matching a provided pattern.\ngrep ","[options]"," pattern ","[filesname]"," \tSearch files or output for a particular pattern.\nkill ","[options]"," pid \t\t\tStop a process. If the process refuses to stop, use kill -9 pid.\nless ","[options][filename]"," \t\tView the contents of a file one page at a time.\nln ","[options]"," source ","[destination]"," \tCreate a shortcut.\nlocate filename \t\t\tSearch a copy of your filesystem for the specified filename.\nlpr ","[options]"," \t\t\t\tSend a print job.\nls ","[options]"," \t\t\t\tList directory contents.\nman ","[command]"," \t\t\t\tDisplay the help information for the specified command.\nmkdir ","[options]"," directory \t\tCreate a new directory.\nmv ","[options]"," source destination \tRename or move file(s) or directories.\npasswd [name ","[password]","] \t\tChange the password or allow (for the system administrator) to change any password.\nps ","[options]"," \t\t\t\tDisplay a snapshot of the currently running processes.\npwd \t\t\t\t\tDisplay the pathname for the current directory.\nrm ","[options]"," directory \t\t\tRemove (delete) file(s) and/or directories.\nrmdir ","[options]"," directory \t\tDelete empty directories.\nssh ","[options]"," user@machine \t\tRemotely log in to another Linux machine, over the network. Leave an ssh session by typing exit.\nsu ","[options]","user ","[arguments]","] \tSwitch to another user account.\ntail ","[options][filename]"," \t\tDisplay the last n lines of a file (the default is 10).\ntar ","[options]"," filename \t\t\tStore and extract files from a tarfile (.tar) or tarball (.tar.gz or .tgz).\ntop \t\t\t\t\tDisplays the resources being used on your system. Press q to exit.\ntouch filename \t\t\t\tCreate an empty file with the specified name.\nwho ","[options]"," \t\t\t\tDisplay who is logged on."),Object(i.b)("p",null,"man -k ","[keyword]"," \t\t\tSearch a database for commands that involve the keyword. Can also be used as apropos ","[keyword]",".\ninfo ","[command]"," \t\t\t\tDisplay a file\xeds help information in an alternate format.\nman ","[command]"," \t\t\t\tDisplay a file\xeds help information.\nwhatis ","[command]"," \t\t\tDisplay a short blurb about the command."),Object(i.b)("p",null,"OVO / ETC COMMANDS ABOVE\nsnmpget ",Object(i.b)("inlineCode",{parentName:"p"},"<system>")," system.sysUpTime.0\tget system uptime\nsnmpwalk ",Object(i.b)("inlineCode",{parentName:"p"},"<system>")," ipAddrTable\tget ipAddrTable details.  Useful if you cannot ovome/add box to OVO manually.  Continuous scrolling of this command indicates in my experience 1 ip bound to 2 interfaces\t"),Object(i.b)("p",null,"HPUX\nlanscan\tshow list of network interfaces\nifconfig ",Object(i.b)("inlineCode",{parentName:"p"},"<ifname>"),"\tshow config of a specific network interface\nswlist -l product | grep PRODUCTNAME\tshow list of installed products and grep for a specific PRODUCTNAME\nswlist -s ",Object(i.b)("inlineCode",{parentName:"p"},"<full path to .depot>"),"\tlist contents of a depot file\nswlist -s ",Object(i.b)("inlineCode",{parentName:"p"},"<full path to .depot>")," BUNDLE\tlist details of the bundle\nswlist -s ",Object(i.b)("inlineCode",{parentName:"p"},"<full path to .depot>")," BUNDLE.subbundle\tlist details of the sub-bundle\n/sbin/init.d/Rpcd\t11.00 dce/rpc software, /etc/rc.confid.d/Rpcd\n/sbin/init.d/ncs\t10.20 dce/rpc software\t"),Object(i.b)("p",null,"AIX\nalog -o -t boot | more\tTo view the boot log in AIX:\nalog -o -t console | more\tTo view the console log in AIX:\nmore /var/adm/syslog\tTo view the system log in AIX:\nnmon\tTo view disks, top processes, etc:\nlslpp -l | grep dce\tcheck DCE version\noslevel -r\tCheck OS Level.\nexportfs -v \tlist NFS exported filesystems\t"),Object(i.b)("p",null,"Misc\n/opt/epage/get_persons\tlist epage ID information\nfor /F %i in (path to your line separated file) do ",Object(i.b)("inlineCode",{parentName:"p"},"<command>")," %i\tWindows 'for i in' loop\nfor /F %i in (h:\\ovis.txt) do systeminfo /S %i /U m",Object(i.b)("inlineCode",{parentName:"p"},"s\\<username>")," /P ",Object(i.b)("inlineCode",{parentName:"p"},"<MYPASSWORD>")," H:\\projects\\ovis\\%i_systeminfo.txt\nnslookup $i | grep Address | grep -v 10.7.136.103 | awk '{print $2}'\tprint out IP address from DNS only one line\nvisudo\nopcuitadm\tprocess that runs when someone logs in as TA (template admin)\n/home/oracle/admin/scripts/local/bin/extract_ov.sh\tTerry's extract script for PDR\nssh -o stricthostkeychecking=no\tno key checking for SSH\nssh -o stricthostkeychecking=no -o numberofpasswordprompts=0\tno key, no password prompt for SSH\ngrep ZIG agent_status_process_problem_report.csv | grep AIX | grep coda | awk  -F\",\" '{print $1}'\tcheck agent status report for all AIZX\nMgtp8013:/usr/local/bin/addbox.sh \u2013h ",Object(i.b)("inlineCode",{parentName:"p"},"<hostname>")," -e ",Object(i.b)("inlineCode",{parentName:"p"},"<employeeid>"),"\tUNIX way to add box to the box database.\nMgtp8013:/usr/local/bin/request-ov.sh \u2013h ",Object(i.b)("inlineCode",{parentName:"p"},"<hostname>")," -e ",Object(i.b)("inlineCode",{parentName:"p"},"<employeeid>"),"\topen HPSD ticket with Infrastructure Monitoring.\ncat  /var/opt/OV/share/dbdumps/a* | grep -v ^P | awk '{print $4}' | sort | uniq > ",Object(i.b)("inlineCode",{parentName:"p"},"<file>"),"\tlook through user logins and sort unique IDs\n",Object(i.b)("inlineCode",{parentName:"p"},'<meta HTTP-EQUIV="REFRESH" content="0; url=yoururl">'),"\tredirect to yoururl from no content\t"),Object(i.b)("p",null,"Solaris\nkstat bge:0 | grep duplex\tcheck duplex setting of interface using kernel statistics program\nndd /dev/bge0 link_speed\tlist link_speed of interface, 0=10, 1=100, 1000=1000 (Gig)\nndd -set \\?\tnetwork device confir\nsysdef -i\tlist system info, look for IPC @ bottom for Semaphore config\nipcs -s\tlist active semaphores\n/etc/system\tconfiguration that'll be used for system next reboot, see also sysdef -i\t"),Object(i.b)("p",null,"set: list\tshow hidden chars\nset: nolist\tturn off hidden chars\t"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"    12\n    \n    \n    \n")),Object(i.b)("p",null,"nohup scopeux -s -r -t > /var/opt/perf/datafiles/scope.log 2>&1 &\trun scopeux w/ diag flags and log it in background\nnohup ./myprogram > /tmp/foo.out 2>&1 &\t\t"),Object(i.b)("blockquote",null,Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"stdout to file  \n")),Object(i.b)("p",{parentName:"blockquote"},"2>\tstderr to file\n1>&2\tstdout to stderr\n2>&1\tstderr to stdout\n&>\tstderr to file\t")),Object(i.b)("p",null,"eventcreate\tcreate a windows eventlog event\t"),Object(i.b)("p",null,"ova distriball ",Object(i.b)("inlineCode",{parentName:"p"},"<platform>"),"\tdistrib to all of platform (or all).  Output in /tmp/distribution.txt on each manager\ntdeploy\tdownload today's config from dv to Zig\tRUN THIS FIRST\ntdist\tdistrib today's date YYYY-MM-DD from zig and upload to all managers\nsudo ovdeploy -cmd \"cmd /c dir c:\\temp\" -host apse8279\trun command on remote node\novoinstall cmds ",Object(i.b)("inlineCode",{parentName:"p"},"<platform>")," ",Object(i.b)("inlineCode",{parentName:"p"},"<script path>"),' \tinstall script to cmds\n"for i in ',Object(i.b)("inlineCode",{parentName:"p"},"cat /tmp/nes-06.list.po"),'\ndo\necho $i >> /tmp/nes-06.list.po.out\nssh -o stricthostkeychecking=no -o numberofpasswordprompts=0 $i "/var/opt/OV/bin\n/instrumentation/lpardsi setup 2>&1" >> /tmp/nes-06.list.po.out\ndone\n"\tSSH to box, run command, echo server name and ssh output to .out file\n/netops/jolso22/oracle_proc_mapper.pl |grep ',Object(i.b)("inlineCode",{parentName:"p"},"<PID>"),"\tfind ps -ef output of oracle PID and the client connected to that PID\t"),Object(i.b)("p",null,"grep zdata server.1.log | grep \"processed on\" | awk '{print $3,$4,$5,$11,$12}'\tgreps out key information from VAS log about zdata processing\t"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-terminal"}),'"for i in apsw1746 apsw1767 apsw8664 apsw8665\ndo\nfor x in 14445 24445 34445 44445 54445\ndo\necho "Testing port $x on host $i"\ntelnet $i $x <<EOF\n^V^]\nquit\nEOF\ndone\ndone"   port test via telnet script \n')),Object(i.b)("p",null,'sp_MSforeachtable @command1 = "DROP TABLE ?"\tDrop all tables from MSSQL\t'))}c.isMDXComponent=!0},174:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return f}));var o=n(0),r=n.n(o);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=r.a.createContext({}),c=function(t){var e=r.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},d=function(t){var e=c(t.components);return r.a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return n?r.a.createElement(f,s(s({ref:e},p),{},{components:n})):r.a.createElement(f,s({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);