In short, a database transaction is a sequence of multiple operations performed on a database, and all served as a single logical unit of work — taking place wholly or not at all. In other words, there’s never a case where only half of the operations are performed and the results saved.


During its lifecycle, a database transaction goes through multiple states. These states are called transaction states and are typically one of the following:
1. Active states: It is the first state during the execution of a transaction. A transaction is active as long as its instructions (read or write operations) are performed.
2. Partially committed: A change has been executed in this state, but the database has not yet committed the change on disk. In this state, data is stored in the memory buffer, and the buffer is not yet written to disk.
3. Committed: In this state, all the transaction updates are permanently stored in the database. Therefore, it is not possible to rollback the transaction after this point.
4. Failed: If a transaction fails or has been aborted in the active state or partially committed state, it enters into a failed state.
5. Terminated state: This is the last and final transaction state after a committed or aborted state. This marks the end of the database transaction life cycle.
![](https://images.contentful.com/po4qc9xpmpuh/3CQA2Vahq9s71Iifwz8SHG/15acd162da3b04a09d5c048aa121ce8d/database-transaction-2.png)
