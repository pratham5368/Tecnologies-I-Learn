## Execution
In GraphQL, execution refers to the process of executing a query or mutation and returning the result to the client. The execution process includes several steps such as parsing, validation, and data retrieval, that are performed by the GraphQL engine to produce the final response to the client.

[docs](https://graphql.org/graphql-js/execution/)

### Root Fields
In GraphQL, the root fields are the top-level fields that are available to clients in a query or mutation. They are defined in the schema and are the entry point for client requests. The root fields represent the operations that can be performed on the data, such as querying for data or modifying data.

There are two types of root fields in GraphQL:

- Query: defines the fields that can be queried to retrieve data from the server.
- Mutation: defines the fields that can be used to create, update, or delete data on the server.
