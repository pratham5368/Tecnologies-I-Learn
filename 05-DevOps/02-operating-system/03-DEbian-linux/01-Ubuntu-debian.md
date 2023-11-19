## Ubuntu / Debian
- Debian is a free and open-source Linux distribution developed by the Debian Project, an all volunteer software community organization. Debian is the upstream distribution of Ubuntu.

- Ubuntu is a free and open-source Linux distribution based on Debian. Ubuntu is available in three versions Desktop, Server and Core.

## basic commands 

### System Based Commands
uname	    Displays system information: kernel version, machine type, and more.
uname -r	Displays the running Linux kernel's release version.
uptime	    Shows current time, system uptime, users, and load averages.
hostname	Shows the system hostname.
hostname -i	Displays the IP address of the current host.
last reboot	Shows last reboot times and durations in logs.
date	    Displays the current date and time information.
timedatectl	Displays detailed system clock and time zone information.
cal	        Displays a simple calendar of the current month.
w	        Shows who is logged on and their activity.
whoami	    Displays the username of the current user.
finger username	Displays information about a user named 'username'.
### Hardware Based Commands
dmesg	            Displays messages from the kernel's ring buffer.
cat /proc/cpuinfo	Displays detailed information about the CPU.
cat /proc/meminfo	Displays detailed system memory usage information.
lscpu	            Lists information about the CPU.
lshw	            Lists detailed hardware configuration of the system.
lsblk	            Lists information about all available block devices.
free -m         	Shows system memory usage in megabytes.
lspci -tv	        Displays PCI devices in tree format, verbosely.
lsusb -tv	         Shows USB devices as a tree, verbosely.
dmidecode	        Displays hardware information from system BIOS
hdparm -i /dev/sda	Displays information of disk /dev/sda.
badblocks -s /dev/sda	Checks /dev/sda for bad blocks, showing progress.
### User Management Commands
id	         Displays the user's UID, GID, and groups.
last       	Shows list of last logged-in users.
who	         Displays who is currently logged in.
groupadd admin	Creates a new user group named admin.
adduser Sam	     Creates a new user account named Sam.
userdel Sam 	Deletes the user account named Sam.
usermod	Modifies   properties of an existing user account.
### File Commands
ls -al	      Lists all files, detailed information, in long format.
pwd	           Displays the present working directory's path.
mkdir dir1	   Creates a new directory named dir1.
rm file1	    Deletes the file named file1.
rm -f file2 	Forcefully deletes the file named file2.
rm -r dir1	   Recursively removes directory dir1 and its contents.
rm -rf dir1	    Forcefully deletes directory dir1 and its contents.
cp file1 file2	Copies file1, creating or overwriting file2.
cp -r dir1 dir2	Copies dir1 to dir2, including subdirectories.
mv file1 file2	Renames or moves file1 to file2.
ln -s /path/to/file_name link_name	Creates symbolic link named link_name to file_name.
touch file1	Creates an empty file named file1.
cat > file1	Creates/overwrites file1, awaiting standard input.
more file1	Displays file1 content, paginating through output.
head file1	Displays the first ten lines of file1.
tail file1	Displays the last ten lines of file1.
gpg -c file1	Encrypts file1 with symmetric cipher using passphrase.
gpg file2.gpg	Decrypts file2.gpg, prompting for the passphrase.
wc	             Counts words, lines, and characters in files.
xargs	Executes commands with piped or file-provided arguments.
### Process Related Commands
ps	              Displays a snapshot of current processes.
ps aux | grep telnet	Displays running telnet processes with details.
pmap	Shows memory map of a process.
top	Displays dynamic real-time view of running tasks.
kill 1234	Terminates the process with PID 1234.
killall proc	Kills all processes named 'proc'.
pkill process-name	Terminates processes with the name.
bg	Resumes suspended jobs in the background
fg	Brings a suspended job to foreground
fg n	Brings job number 'n' to foreground.
lsof	Lists all open files and processes.
renice 19 PID	Changes priority of process with given PID.
pgrep firefox	Displays Process ID(s) for firefox processes.
pstree	Displays a tree of running processes.
### File Permission Commands
chmod 644 /data/test.c      	Sets the permissions of the file /data/test.c to be read/write for the owner, and read-only for the group and others.
chmod 755 /dir1      	Assigns read, write, and execute permissions to the owner, and read and execute permissions to the group and others for the directory /dir1.
chown bob:devops filename      	Changes file 'filename' ownership to 'bob' and 'devops'.
chown ownername:groupname directory  	Change owner and group of the directory.
Network Commands
ip addr show                   	Displays all network interfaces and their information.
ip address add 192.168.0.1/24 dev eth0   	Assigns IP address 192.168.0.1 to interface eth0.
ifconfig                            	Shows network interfaces and their configuration.
ping host                       	Sends ICMP packets, measures round-trip time to "host".
whois domain                 	Retrieves and displays domain's registration information.
dig domain                      	Queries DNS, provides domain's DNS information.
dig -x host                   	Resolves IP address to hostname, shows DNS information.
host google.com          	Performs an IP lookup for the domain name
wget file_path            	Downloads file from specified path.
netstat  	Displays various network-related information and statistics.
ss	Display information about network sockets.
### Compression/Archives Commands
tar -cf backup.tar /home/ubuntu	Creates a tar archive of /home/ubuntu directory.
tar -xf backup.tar             	Extracts files from "backup.tar" archive.
tar -zcvf backup.tar.gz /home/ubuntu  	Creates compressed "backup.tar.gz" archive of "/home/ubuntu"
gzip file1 	Compresses "file1" into "file1.gz", original is removed.
Install Packages Commands
rpm -i pkg_name.rpm           	Installs the package "pkg_name.rpm" using RPM Package Manager.
rpm -e pkg_name                     	Uninstalls the specified RPM package.
dnf install pkg_name	Installs the specified package using DNF.
pacman -S pkg_name	Installs the specified package using Pacman.
Install Source (Compilation)
./configure	Checks system compatibility and generates makefile for software installation.
make	Compiles code by following instructions in the Makefile.
make install	Installs compiled code into specified system locations.
### Search Commands
grep pattern file                           	Search for a given pattern within the file.
grep -r pattern dir1                             	Recursively searches for the specified "pattern" within the "dir1" directory and its subdirectories
locate file	Finds files named "file" using prebuilt database.
find /home -name index             	Searches "/home" directory for files named "index" recursively.
find /home -size +10000k	Finds files over 10000k size in /home directory.
Login Commands
ssh user@hostname 	Initiates SSH connection to specified hostname.
ssh -p port_number user@hostname   	Initiates SSH connection using specific port.
Connect to the host via telnet default port 23	Securely connect to the system via SSH default port 22
telnet host 	Connect to the host via telnet default port 23.
File Transfer Commands
scp file.txt remoteuser@remote_host:/remote/directory	Copies file.txt to remote host's specified directory.
rsync -a /home/ubuntu /backup/ 	Synchronizes content from source directory to destination directory,preserving attributes.
rsync -a /var/www/web/ user@remote_host:/backup/web_backup/	Synchronizes local directory to remote, preserving attributes.
### Disk Usage Commands
df  -h                           	Displays human-readable disk space usage for all mounted filesystems.
df  -i                          	Displays inode usage information for all mounted filesystems.
fdisk  -l                    	Lists all partitions and their information on all drives.
du -sh /dir1                       	Displays summary of total disk usage size of /dir1, human-readable.
findmnt                      	Displays a list of all mounted filesystems and their properties.
mount device-path mount-point	Mounts the device at the specified filesystem mount point.
Directory Traverse Commands
cd ..             	Navigate to the parent directory.
cd                	Changes the current directory to the user's home.
cd /mnt 	Changes the current directory to "/mnt".