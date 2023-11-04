## GraphQL Over SSE
[GraphQL over SSE (Server-Sent Events)](https://the-guild.dev/blog/graphql-over-sse) is a way to use the Server-Sent Events (SSE) protocol to send real-time updates from the server to the client over a single HTTP connection.

SSE is a simple and efficient protocol for sending real-time updates from the server to the client over a single HTTP connection. It’s supported by most modern web browsers and it’s easy to implement on the server side.

To implement GraphQL over SSE, you can use a library such as graphql-sse which provides a way to send GraphQL updates over SSE. This library allows you to handle SSE connections and events, and to send and receive GraphQL updates over the SSE connection.

### Authorization
Authorization in GraphQL refers to the process of controlling access to specific fields, types, or operations in a GraphQL schema based on user roles or permissions. It allows you to restrict access to certain data or functionality in your application based on the user’s role or permissions.

There are several ways to implement authorization in GraphQL:

- Using middleware
- Using schema directives
- Using a data source layer

