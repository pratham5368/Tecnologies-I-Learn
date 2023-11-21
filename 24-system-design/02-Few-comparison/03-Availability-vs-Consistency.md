## Availability vs Consistency
Availability refers to the ability of a system to provide its services to clients even in the presence of failures. This is often measured in terms of the percentage of time that the system is up and running, also known as its uptime.

Consistency, on the other hand, refers to the property that all clients see the same data at the same time. This is important for maintaining the integrity of the data stored in the system.

In distributed systems, it is often a trade-off between availability and consistency. Systems that prioritize high availability may sacrifice consistency, while systems that prioritize consistency may sacrifice availability. Different distributed systems use different approaches to balance the trade-off between availability and consistency, such as using replication or consensus algorithms.

###  What does the CAP Theorem actually say?
The CAP Theorem (henceforth 'CAP') says that it is impossible to build an implementation of read-write storage in an asynchronous network that satisfies all of the following three properties:

- Availability - will a request made to the data store always eventually complete?
- Consistency - will all executions of reads and writes seen by all nodes be atomic or linearizably consistent?
- Partition tolerance - the network is allowed to drop any messages.
The next few items define any unfamiliar terms.

More informally, the CAP theorem tells us that we can't build a database that both responds to every request and returns the results that you would expect every time. It's an impossibility result - it tells us that something we might want to do is actually provably out of reach. It's important now because it is directly applicable to the many, many distributed systems which have been and are being built in the last few years, but it is not a death knell: it does not mean that we cannot build useful systems while working within these constraints.

The devil is in the details however. Before you start crying 'yes, but what about...', make sure you understand the following about exactly what the CAP theorem does and does not allow.

### What is 'read-write storage'?
CAP specifically concerns itself with a theoretical construct called a register. A register is a data structure with two operations:

- set(X) sets the value of the register to X
- get() returns the last value set in the register
A key-value store can be modelled as a collection of registers. Even though registers appear very simple, they capture the essence of what many distributed systems want to do - write data and read it back.

### What is a partition?
A partition is when the network fails to deliver some messages to one or more nodes by losing them (not by delaying them - eventual delivery is not a partition).

The term is sometimes used to refer to a period during which no messages are delivered between two sets of nodes. This is a more restrictive failure model. We'll call these kinds of partitions total partitions.

The proof of CAP relied on a total partition. In practice, these are arguably the most likely since all messages may flow through one component; if that fails then message loss is usually total between two nodes.

## CP - consistency and partition tolerance
Waiting for a response from the partitioned node might result in a timeout error. CP is a good choice if your business needs require atomic reads and writes.

## AP - availability and partition tolerance
Responses return the most readily available version of the data available on any node, which might not be the latest. Writes might take some time to propagate when the partition is resolved.

AP is a good choice if the business needs to allow for eventual consistency or when the system needs to continue working despite external errors.
