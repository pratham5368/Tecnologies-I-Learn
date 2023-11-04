## Docker Compose
Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to create, manage, and run your applications using a simple YAML file called docker-compose.yml. This file describes your application’s services, networks, and volumes, allowing you to easily run and manage your containers using just a single command.

Some of the benefits of using Docker Compose include:

Simplified Container Management: Docker Compose allows you to define and configure all your services, networks, and volumes in one place, making it easy to manage and maintain.

Reproducible Builds: Share your docker-compose.yml file with others to make sure they have the same environment and services running as you do.

Versioning Support: Docker Compose files can be versioned for easier compatibility across different versions of the Docker Compose tool itself.

### Creating a Docker Compose File:
To create a docker-compose.yml file, start by specifying the version of Docker Compose you want to use, followed by the services you want to define. Here’s an example of a basic docker-compose.yml file:
```
version: "3.9"
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
  db:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: mysecretpassword
```
In this example, we have specified two services: a web server (web) running the latest version of the nginx image, and a database server (db) running MySQL. The web server exposes its port 80 to the host machine, and the database server has an environment variable set for the root password.

### Running Docker Compose:
To run your Docker Compose application, simply navigate to the directory containing your docker-compose.yml file and run the following command:
```
docker-compose up
```
Docker Compose will read the file and start the defined services in the specified order.

### Other Useful Commands:
- docker-compose down: Stops and removes all running containers, networks, and volumes defined in the docker-compose.yml file.
- docker-compose ps: Lists the status of all containers defined in the docker-compose.yml file.
- docker-compose logs: Displays the logs of all containers defined in the docker-compose.yml file.
- docker-compose build: Builds all images defined in the docker-compose.yml file.

## Runtime Configuration Options
Runtime configuration options allow you to customize the behavior and resources of your Docker containers when you run them. These options can be helpful in managing container resources, security, and networking. Here’s a brief summary of some commonly used runtime configuration options:

### Resource Management
CPU: You can limit the CPU usage of a container with the --cpus and --cpu-shares options. --cpus limits the number of CPU cores a container can use, while --cpu-shares assigns relative share of CPU time for the container.
```
docker run --cpus=2 --cpu-shares=512 your-image
```
Memory: You can limit and reserve memory for a container using the --memory and --memory-reservation options. This can help prevent a container from consuming too many system resources.
```
docker run --memory=1G --memory-reservation=500M your-image
```
### Security
User: By default, containers run as the root user. To increase security, you can use the --user option to run a container as another user or UID.
```
docker run --user 1000 your-image
```
Read-only root file system: To prevent unwanted changes to the container file system, you can use the --read-only option to mount the root file system as read-only.
```
docker run --read-only your-image
```
### Networking
Publish Ports: You can use the --publish (or -p) option to publish a container’s ports to the host system. This allows external systems to access the containerized service.
```
docker run -p 80:80 your-image
```
Hostname and DNS: You can customize the hostname and DNS settings of a container using the --hostname and --dns options.
```
docker run --hostname=my-container --dns=8.8.8.8 your-image
```