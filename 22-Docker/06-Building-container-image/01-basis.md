## Building Container Images
Container images are executable packages that include everything required to run an application: code, runtime, system tools, libraries, and settings. By building custom images, you can deploy applications seamlessly with all their dependencies on any Docker-supported platform.

### Dockerfile
The key component in building a container image is the Dockerfile. It is essentially a script containing instructions on how to assemble a Docker image. Each instruction in the Dockerfile creates a new layer in the image, making it easier to track changes and minimize the image size. Here’s a simple example of a Dockerfile:
```
# Use an official Python runtime as a parent image
FROM python:3.7-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```
### Building an Image
Once you have created the Dockerfile, you can build the image using the docker build command. Execute the following command in the terminal from the directory containing the Dockerfile:
```
docker build -t your-image-name .
```
This command tells Docker to build an image using the Dockerfile in the current directory (.), and assign it a name (-t your-image-name).

### Inspecting Images and Layers
After a successful build, you can inspect the created image using docker image command:
```
docker image ls
```
To take a closer look at the individual layers of an image, use the docker history command:
```
docker history your-image-name
```
To view the layers of an image, you can also use the docker inspect command:
```
docker inspect your-image-name
```
To remove an image, use the docker image rm command:
```
docker image rm your-image-name
```
### Pushing Images to a Registry
Once your image is built, you can push it to a container registry (e.g., Docker Hub, Google Container Registry, etc.) to easily distribute and deploy your application. First, log in to the registry using your credentials:
```
docker login
```
Then, tag your image with the registry URL:
```
docker tag your-image-name username/repository:tag
```
Finally, push the tagged image to the registry:
```
docker push username/repository:tag
```
Building container images is a crucial aspect of using Docker, as it enables you to package and deploy your applications with ease. By creating a Dockerfile with precise instructions, you can effortlessly build and distribute images across various platforms.

## Dockerfile
A Dockerfile is a text document that contains a list of instructions used by the Docker engine to build an image. Each instruction in the Dockerfile adds a new layer to the image. Docker will build the image based on these instructions, and then you can run containers from the image. Dockerfiles are one of the main elements of infrastructure as code.

### Structure of a Dockerfile
A Dockerfile is organized in a series of instructions, one per line. Each instruction has a specific format.
```
INSTRUCTION arguments
```
The following is an example of a simple Dockerfile:
```
# Use an official Python runtime as a parent image
FROM python:3.7-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```
### Common Dockerfile Instructions
Here’s a list of some common Dockerfile instructions and their purpose:

- FROM: Sets the base image to begin with. It is mandatory to have FROM as the first instruction in the Dockerfile.
- WORKDIR: Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY or ADD instructions. If the directory does not exist, it will be created automatically.
- COPY: Copies files or directories from the host into the container’s file system.
- ADD: Similar to COPY, but can also handle remote URLs and automatically unpack archives.
- RUN: Executes a command within the image as a new layer.
- CMD: Defines the default command to execute when running a container from the image.
- ENTRYPOINT: Similar to CMD, but it’s designed to allow a container as an executable with its own parameters.
- EXPOSE: Informs Docker that the container will listen on the specified network ports at runtime.
- ENV: Sets environment variables for the container.
### Building an Image from a Dockerfile
To build an image from the Dockerfile, use the docker build command, specifying the build context (usually the current directory), and an optional tag for the image.
```
docker build -t my-image:tag .
```
After running this command, Docker will execute each instruction in the Dockerfile, in order, creating a new layer for each.

