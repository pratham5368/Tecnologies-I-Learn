## Resolvers
In GraphQL, a resolver is a function that is responsible for fetching the data for a field in a query or mutation. Resolvers are defined in the schema and are executed by the GraphQL server when a query or mutation is received.

Each field in a GraphQL schema has a corresponding resolver function that is responsible for returning the data for that field. The resolver function can retrieve the data from a database, a third-party API, or any other source, and return it to the client.

[docs](https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen)
- Synchronous
In GraphQL, a resolver is a function that is responsible for fetching the data for a field in a query or mutation. Resolvers are defined in the schema and are executed by the GraphQL server when a query or mutation is received.

A synchronous resolver is a type of resolver that runs and completes its execution before returning any value. It directly returns the result of the computation, without waiting for any external event such as a database query or a third-party API call.

- Asynchronous
In GraphQL, a resolver is a function that is responsible for fetching the data for a field in a query or mutation. Resolvers are defined in the schema and are executed by the GraphQL server when a query or mutation is received.

An asynchronous resolver is a type of resolver that runs, but instead of returning the final value, it returns a promise that will be resolved with the final value. This allows the resolver to wait for an external event such as a database query or a third-party API call to complete before returning the result.

- [Scalar Coercion](https://graphql.org/learn/execution/#scalar-coercion)
In GraphQL, scalar coercion is the process of converting a value from one type to another, as it flows through the resolvers. This is needed when the input value for a field does not match the expected type, but can still be successfully converted to the correct type.

Scalar coercion can be implemented in the resolvers by using the GraphQLScalarType constructor to define a custom scalar type and providing a coerce function that can convert the input value to the correct type.

- [Lists](https://graphql.org/learn/schema/#lists-and-non-null)
In GraphQL, a list is a type that represents an ordered collection of items. Lists can be used as the return type for a field in a query or mutation, and can contain any type of items, including scalars and objects.



### Producing The Result
In GraphQL, producing the result refers to the process of generating the final response to a query or mutation. This includes executing the resolvers for the selected fields, gathering the data, and formatting the response according to the requirements of the query or mutation.

When a client sends a query or mutation to a GraphQL server, the server performs several steps to produce the result:

- Parsing: The query or mutation is parsed and converted into an abstract syntax tree (AST)
- Validation: The query or mutation is validated against the schema to ensure that it is well-formed and adheres to the schema definition.
- Execution: The resolvers for the selected fields are executed, and the data is retrieved from the data source.
- Formatting: The data is formatted and organized into the final response, according to the requirements of the query or mutation.

