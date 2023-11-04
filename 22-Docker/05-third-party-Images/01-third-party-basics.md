## Using Third Party Images
Third-party images are pre-built Docker container images that are available on Docker Hub or other container registries. These images are created and maintained by individuals or organizations and can be used as a starting point for your containerized applications.

### Finding Third-Party Images
Docker Hub is the largest and most popular container image registry containing both official and community-maintained images. You can search for images based on the name or the technology you want to use.

For example: If you’re looking for a Node.js image, you can search for “node” on Docker Hub and you’ll find the official Node.js image along with many other community-maintained images.

### Using an Image in Your Dockerfile
To use a third-party image in your Dockerfile, simply set the image name as the base image using the FROM directive. Here’s an example using the official Node.js image:
```
FROM node:14

# The rest of your Dockerfile...
```
### Be Aware of Security Concerns
Keep in mind that third-party images can potentially have security vulnerabilities or misconfigurations. Always verify the source of the image and check its reputation before using it in production. Prefer using official images or well-maintained community images.

### Maintaining Your Images
When using third-party images, it’s essential to keep them updated to incorporate the latest security updates and dependency changes. Regularly check for updates in your base images and rebuild your application containers accordingly.


Running your database in a Docker container can help streamline your development process and ease deployment. Docker Hub provides numerous pre-made images for popular databases such as MySQL, PostgreSQL, and MongoDB.

#### Example: Using MySQL Image
To use a MySQL database, search for the official image on Docker Hub:
```
docker search mysql
```
#### Find the official image, and pull it:
```
docker pull mysql
```
Now, you can run a MySQL container. Specify the required environment variables, such as MYSQL_ROOT_PASSWORD, and optionally map the container’s port to your host machine:
```
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d mysql
```
This command creates a new container named some-mysql, sets the root password to my-secret-pw, and maps port 3306 on the host to port 3306 on the container.

#### Example: Using PostgreSQL Image
For PostgreSQL, follow similar steps to those outlined above. First, search for the official image:
```
docker search postgres
```
Pull the image:
```
docker pull postgres
```
Run a PostgreSQL container, specifying environment variables such as POSTGRES_PASSWORD:
```
docker run --name some-postgres -e POSTGRES_PASSWORD=my-secret-pw -p 5432:5432 -d postgres
```
#### Example: Using MongoDB Image
Running a MongoDB container with Docker follows a similar pattern as previous examples. Search for the official image:
```
docker search mongo
```
Pull the image:
```
docker pull mongo
```
Run a MongoDB container:
```
docker run --name some-mongo -p 27017:27017 -d mongo
```

## Interactive Test Environments with Docker
Docker allows you to create isolated, disposable environments that can be deleted once you’re done with testing. This makes it much easier to work with third party software, test different dependencies or versions, and quickly experiment without the risk of damaging your local setup.

### Creating an Interactive Test Environment with Docker
To demonstrate how to setup an interactive test environment, let’s use the Python programming language as an example. We will use a public Python image available on Docker Hub.

- To start an interactive test environment using the Python image, simply run the following command:
```
docker run -it --rm python
```
Here, -it flag ensures that you’re running the container in interactive mode with a tty, and --rm flag will remove the container once it is stopped.

- You should now be inside an interactive Python shell within the container. 
You can execute any Python command or install additional packages using pip as you normally would.
```
print("Hello, Docker!")
```
- Once you are done with your interactive session, you can simply type exit() or press CTRL+D to exit the container. The container will be automatically removed as specified by the --rm flag.
### More Examples of Interactive Test Environments
You can use several third-party images available on Docker Hub and create various interactive environments such as:

- Node.js: To start an interactive Node.js shell, you can use the following command:
```
docker run -it --rm node
```
- Ruby: To start an interactive Ruby shell, you can use the following command:
```
docker run -it --rm ruby
```
- MySQL: To start a temporary MySQL instance, you can use the following command:
```
docker run -it --rm --name temp-mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -p 3306:3306 mysql
```
This will start a temporary MySQL server that can be accessed via host port 3306. It will be removed once the container is stopped.