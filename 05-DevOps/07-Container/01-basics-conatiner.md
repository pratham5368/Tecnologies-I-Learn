## Containers
Containers are a construct in which cgroups, namespaces, and chroot are used to fully encapsulate and isolate a process. This encapsulated process, called a container image, shares the kernel of the host with other containers, allowing containers to be significantly smaller and faster than virtual machines.

These images are designed for portability, allowing for full local testing of a static image, and easy deployment to a container management platform

### Containers vs. VMs
You might already be familiar with VMs: a guest operating system such as Linux or Windows runs on top of a host operating system with access to the underlying hardware. Containers are often compared to virtual machines (VMs). Like virtual machines, containers allow you to package your application together with libraries and other dependencies, providing isolated environments for running your software services. As you’ll see below, however, the similarities end here as containers offer a far more lightweight unit for developers and IT Ops teams to work with, carrying a myriad of benefits.

- Containers are much more lightweight than VMs
- Containers virtualize at the OS level while VMs virtualize at the hardware level
- Containers share the OS kernel and use a fraction of the memory VMs require

### GKE - Google Kubernetes Engine
GKE is a managed Kubernetes service that lets you deploy, manage, and scale containerized applications on Google Cloud.

### EKS - Amazon Elastic Kubernetes Service
Amazon Elastic Kubernetes Service (Amazon EKS) is a fully managed Kubernetes service from AWS.

### AKS - Azure Kubernetes Service
Azure Kubernetes Service (AKS) manages your hosted Kubernetes environment, making it quick and easy to deploy and manage containerized applications without container orchestration expertise.

### ECS / Fargate
ECS is a container orchestration service that allows you to run Docker containers on a cluster of EC2 instances. ECS is a good choice if you want to run Docker containers on EC2 instances and have full control over the underlying infrastructure.

Fargate is a serverless container orchestration service that allows you to run Docker containers without having to manage servers, clusters, or any other infrastructure. Fargate is a good choice if you want to run Docker containers without having to manage servers or clusters.

