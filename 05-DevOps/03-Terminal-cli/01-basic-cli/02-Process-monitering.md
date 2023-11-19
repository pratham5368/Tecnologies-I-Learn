### Process Monitoring
A process is an instance of a computer program that is being executed. Each process is identified by a unique number called a process ID (PID). A process is a running program. The operating system tracks processes through the use of process identifiers. A process identifier (PID) is a unique number that identifies a specific process. A PID is automatically assigned to each process when it is created on the system.

There are several linux commands that can be used to monitor processes. The most common ones are:

- ps - report a snapshot of the current processes.
- top - display Linux processes.
- htop - interactive process viewer.
- atop - advanced interactive monitor to view the load on a Linux system.
- lsof - list open files.

[docs](https://man7.org/linux/man-pages/man1/ps.1.html)
The ps utility displays a header line, followed by lines containing information about all of your processes that have controlling terminals.

Show all processes
```
ps aux
```
Show all processes including commandline arguments
```
ps -AFl
```
Show all processes with threads in tree mode
```
ps -AlFH
```
Show processes in a hierarchy
```
ps -e -o pid,args --forest
```
Show list of processes owned by a specific user
```
ps -U user -u user u
```
Show information for a particular process
```
ps -p pid
ps uax | grep process_name
```
Show all threads for a particular process by id
```
ps -p pid -L -o pid,tid,pcpu,state,comm
```
Get top 5 processes by CPU usage
```
ps -e -o pcpu,cpu,nice,state,cputime,args --sort pcpu | sed '/^ 0.0 /d'| tac |head -5
ps auxf | sort -nr -k 3 | head -5
```
Get top 5 processes by memory usage
```
ps -e -orss=,args= | sort -b -k1,1n | pr -TW$COLUMNS| tac | head -5
ps auxf | sort -nr -k 4 | head -5
```
Get security info
```
ps -eo euser,ruser,suser,fuser,f,comm,label
```