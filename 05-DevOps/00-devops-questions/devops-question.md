## 1. tools
- Version Control System tools. Eg.: git.
- Continuous Integration tools. Eg.: Jenkins
- Continuous Testing tools. Eg.: Selenium
- Configuration Management and Deployment tools. Eg.:Puppet, Chef, Ansible
- Continuous Monitoring tool. Eg.: Nagios
- Containerization tools. Eg.: Docker
## 2.  What is configuration management?
Configuration management (CM) is basically a practice of systematic handling of the changes in such a way that system does not lose its integrity over a period of time. This involves certain policies, techniques, procedures, and tools for evaluating change proposals, managing them, and tracking their progress along with maintaining appropriate documentation for the same.

CM helps in providing administrative and technical directions to the design and development of the appreciation.
![](https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/082/original/DevOps_Configuration_Management.jpg?1614931170)
## 3. Can you tell me something about Memcached?
Memcached is an open-source and free in-memory object caching system that has high performance and is distributed and generic in nature. It is mainly used for speeding the dynamic web applications by reducing the database load.

### Memcached can be used in the following cases:

- Profile caching in social networking domains like Facebook.
- Web page caching in the content aggregation domain.
- Profile tracking in Ad targeting domain.
- Session caching in e-commerce, gaming, and entertainment domain.
- Database query optimization and scaling in the Location-based services domain.
### Benefits of Memcached:

- Using Memcached speeds up the application processes by reducing the hits to a database and reducing the I/O access.
- It helps in determining what steps are more frequently followed and helps in deciding what to cache.
### Some of the drawbacks of using Memcached are:

- In case of failure, the data is lost as it is neither a persistent data store nor a database.
- It is not an application-specific cache.
- Large objects cannot be cached
## 3. What are the various branching strategies used in the version control system?
Branching is a very important concept in version control systems like git which facilitates team collaboration. Some of the most commonly used branching types are:

### Feature branching

- This branching type ensures that a particular feature of a project is maintained in a branch.
- Once the feature is fully validated, the branch is then merged into the main branch.
### Task branching

- Here, each task is maintained in its own branch with the task key being the branch name.
- Naming the branch name as a task name makes it easy to identify what task is getting covered in what branch.
### Release branching

- This type of branching is done once a set of features meant for a release are completed, they can be cloned into a branch called the release branch. Any further features will not be added to this branch.
- Only bug fixes, documentation, and release-related activities are done in a release branch.
- Once the things are ready, the releases get merged into the main branch and are tagged with the release version number.
- These changes also need to be pushed into the develop branch which would have progressed with new feature development

## 4. Can you explain the architecture of Jenkins?
Jenkins follows the master-slave architecture. The master pulls the latest code from the GitHub repository whenever there is a commitment made to the code. The master requests slaves to perform operations like build, test and run and produce test case reports. This workload is distributed to all the slaves in a uniform manner.

Jenkins also uses multiple slaves because there might be chances that require different test case suites to be run for different environments once the code commits are done.

![](https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/088/original/Architecture_of_Jenkins.jpg?1614937110)

## 5. What can you tell about Docker Compose?
It is a YAML file consisting of all the details regarding various services, networks, and volumes that are needed for setting up the Docker-based application. So, docker-compose is used for creating multiple containers, host them and establish communication between them. For the purpose of communication amongst the containers, ports are exposed by each and every container.
## 6. How many Docker components are there?
There are three docker components, they are - Docker Client, Docker Host, and Docker Registry.

- Docker Client: This component performs “build” and “run” operations for the purpose of opening communication with the docker host.
- Docker Host: This component has the main docker daemon and hosts containers and their associated images. The daemon establishes a connection with the docker registry.
- Docker Registry: This component stores the docker images. There can be a public registry or a private one. The most famous public registries are Docker Hub and Docker Cloud.

## 7. What is a Collection in MongoDB?
A collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database, then a collection can be thought of as the analog to a table.
Documents within a single collection can have any number of different “shapes.”, i.e. collections have dynamic schemas. 
For example, both of the following documents could be stored in a single collection:
```
{"greeting" : "Hello world!", "views": 3}
{"signoff": "Good bye"}
```
## 8. What are some features of MongoDB?
- Indexing: It supports generic secondary indexes and provides unique, compound, geospatial, and full-text indexing capabilities as well.
- Aggregation: It provides an aggregation framework based on the concept of data processing pipelines.
- Special collection and index types: It supports time-to-live (TTL) collections for data that should expire at a certain time
- File storage: It supports an easy-to-use protocol for storing large files and file metadata.
- Sharding: Sharding is the process of splitting data up across machines.
## 9. What is Jenkins?
Jenkins is a self-contained, open-source automation server that can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software. Jenkins can be installed through native system packages, Docker, or even run standalone by any machine with a Java Runtime Environment (JRE) installed.
## 10. 