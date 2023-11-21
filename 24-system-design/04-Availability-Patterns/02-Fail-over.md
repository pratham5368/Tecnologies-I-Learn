## Fail-Over
Failover is an availability pattern that is used to ensure that a system can continue to function in the event of a failure. It involves having a backup component or system that can take over in the event of a failure.

In a failover system, there is a primary component that is responsible for handling requests, and a secondary (or backup) component that is on standby. The primary component is monitored for failures, and if it fails, the secondary component is activated to take over its duties. This allows the system to continue functioning with minimal disruption.

Failover can be implemented in various ways, such as active-passive, active-active, and hot-standby.

## Server Redundancy
The key to coming up with a solid design for a highly available system lies in identifying and addressing single points of failure. A single point of failure simply refers to any part whose failure will result into a complete system shutdown. Production servers are complex systems whose availability is dependent on multiple factors, including hardware, software and communication links; each of these factors is a potential point of failure. Introducing redundancy is the surest way to address single points of failure. It is accomplished by replicating a single part of a system that is crucial to its function. Replication guarantees that there will always be a secondary component available to take over in the event a critical component fails. Redundancy relies on the assumption that they system cannot simultaneously experience multiple faults.
The most widely known example of redundancy is RAID-Redundant Arrays of Inexpensive Disks, which utilizes the combined use of multiple drives. Server redundancy can be achieved through a stand-by form also referred to as active-passive redundancy or through active-active redundancy where all replicas are concurrently active.


### Active-passive
With active-passive fail-over, heartbeats are sent between the active and the passive server on standby. If the heartbeat is interrupted, the passive server takes over the active’s IP address and resumes service.

The length of downtime is determined by whether the passive server is already running in ‘hot’ standby or whether it needs to start up from ‘cold’ standby. Only the active server handles traffic.

Active-passive failover can also be referred to as master-slave failover.
![](https://cdnblog.filecloud.com/blog/wp-content/uploads/2015/12/active_passive_high_availability_cluster1.png)
### Active-active
In active-active, both servers are managing traffic, spreading the load between them.

If the servers are public-facing, the DNS would need to know about the public IPs of both servers. If the servers are internal-facing, application logic would need to know about both servers.
![](https://cdnblog.filecloud.com/blog/wp-content/uploads/2015/12/active_active_high_availability_cluster_load_balancer1.png)
Active-active failover can also be referred to as master-master failover.

- Disadvantages of Failover
1. Fail-over adds more hardware and additional complexity.
2. There is a potential for loss of data if the active system fails before any newly written data can be replicated to the passive.