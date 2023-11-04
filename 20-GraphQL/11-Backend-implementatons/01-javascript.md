## Backend Implementations
There are several ways to implement a GraphQL backend, depending on the use case, the technology stack, and the complexity of the application. The most common ways to implement a GraphQL backend are:

- Building a custom GraphQL server
- Using a GraphQL backend-as-a-service
- Wrapping a REST API with a GraphQL layer
- Using a microservices architecture

[docs](https://www.howtographql.com/typescript-apollo/0-introduction/)

### GraphQL HTTP
[GraphQL HTTP](https://graphql.org/learn/serving-over-http/) is a specification for serving GraphQL over HTTP. It defines a standard way of sending GraphQL queries and mutations over the HTTP protocol, and it is widely supported by GraphQL servers and clients.

The GraphQL HTTP specification defines two main HTTP methods:

- POST: Used to send queries and mutations to the server. The query or mutation is sent in the request body as a JSON payload, and the server returns the result in the response body.
- GET: Used to send queries to the server, but it’s not recommended to use GET for queries because it’s not as efficient as POST method.
### GraphQL Yoga
[GraphQL Yoga](https://the-guild.dev/blog/improved-security-with-graphql-armor-support-for-yoga-server-2) is a popular open-source GraphQL server library for Node.js. It is built on top of the popular Express.js web framework and provides a simple and flexible way to build GraphQL servers with minimal boilerplate code.

One of the key features of GraphQL Yoga is that it provides a set of built-in functionality that makes it easy to handle common tasks such as authentication, authorization, and data validation. It also provides support for subscriptions, which allow clients to receive real-time updates from the server.

### Apollo Server
[Apollo Server](https://www.howtographql.com/react-apollo/0-introduction/) is a popular open-source library for building GraphQL servers in JavaScript. It provides a simple and flexible way to build GraphQL servers by providing a set of tools and features for handling common tasks such as parsing and validating queries, executing resolvers, and formatting responses.

One of the key features of Apollo Server is that it provides a set of built-in functionality that makes it easy to handle common tasks such as authentication, authorization, and data validation. It also provides support for subscriptions, which allow clients to receive real-time updates from the server.

### Mercurius
Mercurius is an open-source library for building real-time GraphQL servers in Node.js. It provides a simple and flexible way to build GraphQL servers by providing a set of tools and features for handling real-time subscriptions.

One of the key features of Mercurius is that it is built on top of the popular WebSockets protocol and it allows the client to subscribe to real-time updates from the server. It also supports batching and caching of queries and mutations, which allows for efficient and fast data transfer between the client and server.

