## Availability
Availability is measured as a percentage of uptime, and defines the proportion of time that a system is functional and working. Availability is affected by system errors, infrastructure problems, malicious attacks, and system load. Cloud applications typically provide users with a service level agreement (SLA), which means that applications must be designed and implemented to maximize availability.
### Deployment Stamps
The deployment stamp pattern involves provisioning, managing, and monitoring a heterogeneous group of resources to host and operate multiple workloads or tenants. Each individual copy is called a stamp, or sometimes a service unit, scale unit, or cell. In a multi-tenant environment, every stamp or scale unit can serve a predefined number of tenants. Multiple stamps can be deployed to scale the solution almost linearly and serve an increasing number of tenants. This approach can improve the scalability of your solution, allow you to deploy instances across multiple regions, and separate your customer data.

[learn](https://blog.devgenius.io/deployment-stamps-101-7c04a6f704a2)

### Geodes
The Geode pattern involves deploying a collection of backend services into a set of geographical nodes, each of which can service any request for any client in any region. This pattern allows serving requests in an active-active style, improving latency and increasing availability by distributing request processing around the globe.
### Health Endpoint Monitoring
Implement functional checks in an application that external tools can access through exposed endpoints at regular intervals. This can help to verify that applications and services are performing correctly.

[learn](https://www.oreilly.com/library/view/java-ee-8/9781788830621/5012c01e-90ca-4809-a210-d3736574f5b3.xhtml)

### Throttling
Control the consumption of resources used by an instance of an application, an individual tenant, or an entire service. This can allow the system to continue to function and meet service level agreements, even when an increase in demand places an extreme load on resources.
