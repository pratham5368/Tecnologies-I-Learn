## Schema
In GraphQL, a schema is a blueprint that defines the types, fields, and operations (queries and mutations) that are available to clients. The schema is the contract between the client and the server, specifying what data can be requested and how it can be modified.

A GraphQL schema is defined using the GraphQL Schema Definition Language (SDL), which is a human-readable syntax for defining the structure of a GraphQL API. The SDL includes keywords such as type, query, mutation, field, and argument to define the different components of a schema.

## Type System
GraphQL is a strongly typed language. Type System defines various data types that can be used in a GraphQL application. The type system helps to define the schema, which is a contract between client and server. The commonly used GraphQL data types are as follows:

- Scalar
- Object
- Query
- Mutation
- Enum

### Scalars
Scalars are “leaf” values in GraphQL. There are several built-in scalars, and you can define custom scalars, too. (Enums are also leaf values.) The built-in scalars are:

- String, like a JSON or Ruby string
- Int, like a JSON or Ruby integer
- Float, like a JSON or Ruby floating point decimal
- Boolean, like a JSON or Ruby boolean (true or false)
- ID, which a specialized String for representing unique object identifiers
- ISO8601DateTime, an ISO 8601-encoded datetime
- ISO8601Date, an ISO 8601-encoded date
- JSON, This returns arbitrary JSON (Ruby hashes, arrays, strings, integers, floats, booleans and nils). Take care: by using this type, you completely lose all GraphQL type safety. Consider building object types for your data instead.
- BigInt, a numeric value which may exceed the size of a 32-bit integer

### Fields
In GraphQL, a field is a unit of data that can be queried or manipulated in a request. Each field has a name, a type, and an optional description. Fields are defined within an object type in a GraphQL schema.

Each field in a GraphQL schema can return a scalar value (such as a string or an integer) or another object, allowing for the creation of complex, nested data structures. The fields can also take arguments, which allows to filter or modify the data being returned.

[docs](https://graphql.org/learn/queries/#fields)

### Enums
[Enums](https://graphql.org/learn/schema/#enumeration-types) also called as enumeration types are a special kind of scalar that is restricted to a particular set of allowed values. This allows you to:

- Validate that any arguments of this type are one of the allowed values
- Communicate through the type system that a field will always be one of a finite set of values
### Objects
In GraphQL, an object is a type that represents a group of fields. Objects can be used to define the structure of a query or a mutation. Each field of an object can return a scalar value (such as a string or an integer) or another object, allowing for the creation of complex, nested data structures. In a GraphQL schema, objects are defined using the type keyword, followed by the object’s name and a set of fields in curly braces.
### Lists
In GraphQL, a list is a type that represents an ordered collection of items. Lists are defined using square brackets, with the type of the items inside.

[Lists](https://graphql.org/learn/schema/#lists-and-non-null) are used to represent an array of items in a GraphQL schema, and can be used as the return type for a field in an object type. Lists can contain any type of items, including scalars and other objects, and can also be nested within other lists.

### Interfaces
In GraphQL, an interface is a type that defines a set of fields that a type must implement. Interfaces are defined using the interface keyword, and can be used to define common fields for multiple types.

In GraphQL, lists can also be used within interfaces to define the return type for fields.

### Unions
Unions are useful in cases where a field can return multiple types and you want to handle those types differently in your client. They also allow for more flexibility in how you structure your schema, as you can group types together that share common fields.

Unions don’t allow to specify a common set of fields to be queried across multiple types, but it allows to handle multiple types differently in your client.

### Arguments
In GraphQL, an argument is a value that is passed to a field in a query or mutation. Arguments allow you to filter or modify the data being returned by a field. Arguments are defined within a field in a GraphQL schema, and have a name, a type, and an optional default value.

[docs](https://graphql.org/learn/schema/#arguments)

