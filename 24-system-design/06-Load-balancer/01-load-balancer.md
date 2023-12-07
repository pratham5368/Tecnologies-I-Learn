## Load Balancers
Load balancers distribute incoming client requests to computing resources such as application servers and databases. In each case, the load balancer returns the response from the computing resource to the appropriate client. Load balancers are effective at:

Preventing requests from going to unhealthy servers
Preventing overloading resources
Helping to eliminate a single point of failure
Load balancers can be implemented with hardware (expensive) or with software such as HAProxy. Additional benefits include:

- SSL termination - Decrypt incoming requests and encrypt server responses so backend servers do not have to perform these potentially expensive operations
- Removes the need to install X.509 certificates on each server
- Session persistence - Issue cookies and route a specific client’s requests to same instance if the web apps do not keep track of sessions
## Disadvantages of load balancer
- The load balancer can become a performance bottleneck if it does not have enough resources or if it is not configured properly.
- Introducing a load balancer to help eliminate a single point of failure results in increased complexity.
- A single load balancer is a single point of failure, configuring multiple load balancers further increases complexity.


- [scalbilty](https://cs.fyi/guide/scalability-for-dummies)


## Load Balancer vs Reverse Proxy
- Deploying a load balancer is useful when you have multiple servers. Often, load balancers route traffic to a set of servers serving the same function.
- Reverse proxies can be useful even with just one web server or application server, opening up the benefits described in the previous section.
- Solutions such as NGINX and HAProxy can support both layer 7 reverse proxying and load balancing.
## Disadvantages of Reverse Proxy:
- Introducing a reverse proxy results in increased complexity.
- A single reverse proxy is a single point of failure, configuring multiple reverse proxies (ie a failover) further increases complexity.

