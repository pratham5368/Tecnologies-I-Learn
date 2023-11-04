## Underlying Technologies
Understanding the core technologies that power Docker will provide you with a deeper insight into how Docker works and will help you use the platform more effectively.

### Linux Containers (LXC)
Linux Containers (LXC) serve as the foundation for Docker. LXC is a lightweight virtualization solution that allows multiple isolated Linux systems to run on a single host without the need for a full-fledged hypervisor. LXC effectively isolates applications and their dependencies in a secure and optimized manner.

### Control Groups (cgroups)
Control Groups (cgroups) is a Linux kernel feature that allows the allocation and management of resources like CPU, memory, and I/O to a set of processes. Docker leverages cgroups to limit the resources used by containers and ensure that one container does not monopolize the resources of the host system.

### Union File Systems (UnionFS)
UnionFS is a file system service that allows the overlaying of multiple file systems in a single, unified view. Docker uses UnionFS to create a layered approach for images and containers, which enables better sharing of common files and faster container creation.

### Namespaces
Namespaces are another Linux kernel feature that provides process isolation. They allow Docker to create isolated workspaces called containers. Namespaces ensure that processes within a container cannot interfere with processes outside the container or on the host system. There are several types of namespaces, like PID, NET, MNT, and USER, each responsible for isolating a different aspect of a process.


In the Linux kernel, namespaces are a feature that allows the isolation of various system resources, making it possible for a process and its children to have a view of a subset of the system that is separate from other processes. Namespaces help to create an abstraction layer to keep containerized processes separate from one another and from the host system.

####  There are several types of namespaces in Linux, including:

- PID (Process IDs): Isolates the process ID number space, which means that processes within a container only see their own processes, not those on the host or in other containers.
- Network (NET): Provides each container with a separate view of the network stack, including its own network interfaces, routing tables, and firewall rules.
- Mount (MNT): Isolates the file system mount points in such a way that each container has its own root file system, and mounted resources appear only within that container.
- UTS (UNIX Time Sharing System): Allows each container to have its own hostname and domain name, separate from other containers and the host system.
- User (USER): Maps user and group identifiers between the container and the host, so different permissions can be set for resources within the container.
- IPC (Inter-Process Communication): Allows or restricts the communication between processes in different containers.
#### How Docker uses Namespaces
Docker uses namespaces to create isolated environments for containers. When a container is started, Docker creates a new set of namespaces for that container. These namespaces only apply within the container, so any processes running inside the container have access to a subset of system resources that are isolated from other containers as well as the host system.
