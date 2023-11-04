### Mutations
In GraphQL, a mutation is a type of query used to make changes to the data on the server, such as creating, updating, or deleting data. A mutation is structured similarly to a query, but with a “mutation” field at the top level instead of a “query” field.

The mutation includes fields that specify the data to be changed, the operation to be performed (create, update or delete) and also can include arguments to specify the specific data to be affected.

### Multiple Mutation Fields
In GraphQL, it is possible to perform multiple mutations in a single query by including multiple “mutation” fields in the query. This is called “batching” or “chaining” mutations.

### Operation Name
In GraphQL, an operation name is an optional identifier that can be used to uniquely identify a query or a mutation in a document containing multiple operations. It can be used to provide more meaningful names for operations, making it easier to understand the purpose of the operation and to identify it in the event of an error.
