## Idempotent Operations
Idempotent operations are operations that can be applied multiple times without changing the result beyond the initial application. In other words, if an operation is idempotent, it will have the same effect whether it is executed once or multiple times.

It is also important to understand the benefits of idempotent operations, especially when using message or task queues that do not guarantee exactly once processing. Many queueing systems guarantee at least once message delivery or processing. These systems are not completely synchronized, for instance, across geographic regions, which simplifies some aspects of their implemntation or design. Designing the operations that a task queue executes to be idempotent allows one to use a queueing system that has accepted this design trade-off.

[docs](https://www.baeldung.com/cs/idempotent-operations)
