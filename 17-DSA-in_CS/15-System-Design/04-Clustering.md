At a high level, a computer cluster is a group of two or more computers, or nodes, that run in parallel to achieve a common goal. This allows workloads consisting of a high number of individual, parallelizable tasks to be distributed among the nodes in the cluster. As a result, these tasks can leverage the combined memory and processing power of each computer to increase overall performance.
## Types
Computer clusters can generally be categorized into three types:

- Highly available or fail-over
- Load balancing
- High-performance computing
## Configurations
The two most commonly used high availability (HA) clustering configurations are active-active and active-passive.

## Active-Active
![](https://res.cloudinary.com/practicaldev/image/fetch/s--GIO8-e4A--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://raw.githubusercontent.com/karanpratapsingh/portfolio/master/public/static/courses/system-design/chapter-I/clustering/active-active.png)

An active-active cluster is typically made up of at least two nodes, both actively running the same kind of service simultaneously. The main purpose of an active-active cluster is to achieve load balancing. A load balancer distributes workloads across all nodes to prevent any single node from getting overloaded. Because there are more nodes available to serve, there will also be an improvement in throughput and response times.

## Active-Passive
![active](https://res.cloudinary.com/practicaldev/image/fetch/s--0VCfz9IO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://raw.githubusercontent.com/karanpratapsingh/portfolio/master/public/static/courses/system-design/chapter-I/clustering/active-passive.png)

Like the active-active cluster configuration, an active-passive cluster also consists of at least two nodes. However, as the name active-passive implies, not all nodes are going to be active. For example, in the case of two nodes, if the first node is already active, then the second node must be passive or on standby.

### Advantages
Four key advantages of cluster computing are as follows:

- High availability
- Scalability
- Performance
- Cost-effective
## Load balancing vs Clustering
Load balancing shares some common traits with clustering, but they are different processes. Clustering provides redundancy and boosts capacity and availability. Servers in a cluster are aware of each other and work together toward a common purpose. But with load balancing, servers are not aware of each other. Instead, they react to the requests they receive from the load balancer.

We can employ load balancing in conjunction with clustering but it also is applicable in cases involving independent servers that share a common purpose such as to run a website, business application, web service, or some other IT resource.

### Challenges
The most obvious challenge clustering presents is the increased complexity of installation and maintenance. An operating system, the application, and its dependencies must each be installed and updated on every node.

This becomes even more complicated if the nodes in the cluster are not homogeneous. Resource utilization for each node must also be closely monitored, and logs should be aggregated to ensure that the software is behaving correctly.

Additionally, storage becomes more difficult to manage, a shared storage device must prevent nodes from overwriting one another and distributed data stores have to be kept in sync.

### Examples
Clustering is commonly used in the industry, and often many technologies offer some sort of clustering mode. For example:

- Containers (eg. Kubernetes, Amazon ECS)
- Databases (eg. Cassandra, MongoDB)
- Cache (eg. Redis)



[more here](https://github.com/karanpratapsingh/system-design)