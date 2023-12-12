[message](https://learn.microsoft.com/en-us/azure/architecture/patterns/category/messaging)

### Asynchronous Request-Reply

Decouple backend processing from a frontend host, where backend processing needs to be asynchronous, but the frontend still needs a clear response.
### Claim Check
Split a large message into a claim check and a payload. Send the claim check to the messaging platform and store the payload to an external service. This pattern allows large messages to be processed, while protecting the message bus and the client from being overwhelmed or slowed down. This pattern also helps to reduce costs, as storage is usually cheaper than resource units used by the messaging platform.
### Choreography
Have each component of the system participate in the decision-making process about the workflow of a business transaction, instead of relying on a central point of control.
### Competing Consumers
Enable multiple concurrent consumers to process messages received on the same messaging channel. With multiple concurrent consumers, a system can process multiple messages concurrently to optimize throughput, to improve scalability and availability, and to balance the workload.
### Pipes and Filters
Decompose a task that performs complex processing into a series of separate elements that can be reused. This can improve performance, scalability, and reusability by allowing task elements that perform the processing to be deployed and scaled independently.
### Queue Based Load Leveling
Use a queue that acts as a buffer between a task and a service it invokes in order to smooth intermittent heavy loads that can cause the service to fail or the task to time out. This can help to minimize the impact of peaks in demand on availability and responsiveness for both the task and the service.
### Scheduling Agent Supervisor
Coordinate a set of distributed actions as a single operation. If any of the actions fail, try to handle the failures transparently, or else undo the work that was performed, so the entire operation succeeds or fails as a whole. This can add resiliency to a distributed system, by enabling it to recover and retry actions that fail due to transient exceptions, long-lasting faults, and process failures.
### Sequential Convoy
Sequential Convoy is a pattern that allows for the execution of a series of tasks, or convoy, in a specific order. This pattern can be used to ensure that a set of dependent tasks are executed in the correct order and to handle errors or failures during the execution of the tasks. It can be used in scenarios like workflow and transaction. It can be implemented using a variety of technologies such as state machines, workflows, and transactions.

