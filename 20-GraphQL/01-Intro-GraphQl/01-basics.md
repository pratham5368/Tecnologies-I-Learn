## GraphQL Introduction
GraphQL is a query language and runtime for APIs. It is used to build and consume web service APIs.

GraphQL allows clients to make a single API call to request exactly the data they need, in a predictable format. This allows for more efficient and flexible data retrieval, compared to traditional REST APIs where the client has to make multiple API calls to different endpoints, and may receive more data than it needs.

With GraphQL, the client defines the structure of the data it needs, by sending a query to the server. The server then returns the requested data in the same structure, as defined by the query. The client can also make mutations to update or create data on the server.

[tutorial](https://www.howtographql.com/basics/0-introduction/)

[docs](https://graphql.org/)

### Problems GraphQL Solves
GraphQL solves several problems commonly faced when building APIs, including:

- Over-fetching: With REST APIs, the client often receives more data than it needs, resulting in wasted bandwidth and slow performance. GraphQL allows the client to specify exactly the data it needs, reducing over-fetching.

- Under-fetching: With REST, the client often has to make multiple requests to different endpoints to gather all the data it needs, resulting in additional latency and complexity. GraphQL allows the client to request all the necessary data in a single request.

- Inefficient versioning: With REST, creating a new endpoint for each version of an API can quickly become cumbersome and hard to maintain. GraphQL allows for seamless versioning by adding new fields and types, rather than creating new endpoints.

- Lack of flexibility: REST APIs are typically fixed, meaning that the client has to work with the data structure provided by the API. GraphQL allows the client to request exactly the data it needs and receive it in a predictable format, increasing flexibility.

### GraphQL on the Frontend
In GraphQL, the frontend refers to the client-side of the application, typically the web or mobile app that the end-user interacts with.

When using GraphQL on the frontend, developers can use a GraphQL client library, such as Apollo Client or Relay, to interact with the GraphQL server. These libraries provide a way to easily send GraphQL queries and mutations to the server and handle the response.

By using GraphQL on the frontend, developers can benefit from the flexibility and efficiency of GraphQL when querying data. Instead of having to make multiple REST API calls or hardcode data into the frontend, the client can specify exactly the data it needs in a single request, and the server will return it in a predictable format.

### GraphQL on the Backend
In GraphQL, the backend refers to the server-side of the application, where the data is stored and processed.

When using GraphQL on the backend, developers can create a GraphQL server that handles the incoming GraphQL queries and mutations from the frontend. This can be implemented using a GraphQL library or framework, such as Apollo Server, Express-GraphQL, or GraphQL-Java.

The GraphQL server is responsible for handling the incoming queries and mutations, validating them against a schema, and executing them by fetching data from the database or other data sources. The server then returns the requested data to the client in a predictable format, as defined by the schema.

