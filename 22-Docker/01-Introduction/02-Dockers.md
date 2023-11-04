## What is Docker?
Docker is an open-source platform that automates the deployment, scaling, and management of applications by isolating them into lightweight, portable containers. Containers are standalone executable units that encapsulate all necessary dependencies, libraries, and configuration files required for an application to run consistently across various environments.

### Docker and OCI
The Open Container Initiative (OCI) is a Linux Foundation project which aims at creating industry standards for container formats and runtimes. Its primary goal is to ensure the compatibility and interoperability of container environments through defined technical specifications.

#### Docker’s role in OCI
Docker is one of the founding members of the OCI, and it has played a pivotal role in shaping the standards for container formats and runtimes. Docker initially developed the container runtime (Docker Engine) and image format (Docker Image) that serve as the basis for OCI specifications.

#### OCI Specifications
OCI has two main specifications:

- Runtime Specification (runtime-spec): It defines the specification for executing a container via an isolation technology, like a container engine. The container runtime built by Docker, called ‘containerd’, has guided the development of the OCI runtime-spec.

- Image Specification (image-spec): It defines the container image format, which describes the contents of a container and can be run by a compliant runtime. Docker’s initial image format has led to the creation of the OCI image-spec.

#### Compatibility between Docker and OCI
Docker remains committed to supporting the OCI specifications and, since its involvement in OCI, has continuously updated its software to be compliant with OCI standards. Docker’s containerd runtime and image format are fully compatible with OCI specifications, enabling Docker containers to be run by other OCI-compliant container runtimes and vice versa.

Docker is a platform that simplifies the process of building, packaging, and deploying applications in lightweight, portable containers. In this section, we’ll cover the basics of Docker, its components, and key commands you’ll need to get started.

### What is a Container?
A container is a lightweight, standalone, and executable software package that includes all the dependencies (libraries, binaries, and configuration files) required to run an application. Containers isolate applications from their environment, ensuring they work consistently across different systems.

### Docker Components
There are three key components in the Docker ecosystem:

- Dockerfile: A text file containing instructions (commands) to build a Docker image.
- Docker Image: A snapshot of a container, created from a Dockerfile. Images are stored in a registry, like Docker Hub, and can be pulled or pushed to the registry.
- Docker Container: A running instance of a Docker image.
### Docker Commands
Below are some essential Docker commands you’ll use frequently:

```docker pull <image>: Download an image from a registry, like Docker Hub.

docker build -t <image_name> <path>: Build an image from a Dockerfile, where <path> is the directory containing the Dockerfile.

docker image ls: List all images available on your local machine.

docker run -d -p <host_port>:<container_port> --name <container_name> <image>: Run a container from an image, mapping host ports to container ports.

docker container ls: List all running containers.

docker container stop <container>: Stop a running container.

docker container rm <container>: Remove a stopped container.

docker image rm <image>: Remove an image from your local machine.```

