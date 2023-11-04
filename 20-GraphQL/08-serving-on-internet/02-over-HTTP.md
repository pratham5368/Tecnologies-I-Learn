## GraphQL over HTTP
GraphQL over HTTP refers to the ability to send GraphQL queries and mutations over the HTTP protocol. This allows clients to interact with a GraphQL server using the same standard HTTP methods and headers that are used for other types of web requests.

The most common way to send GraphQL queries and mutations over HTTP is by using the POST method, where the query or mutation is sent in the request body as a JSON payload. The server will then execute the query or mutation and return the result in the response body.

### Caching
Caching is a technique that is used to improve the performance of a GraphQL server by reducing the number of requests that need to be made to the data source. It works by storing a copy of the data that has been requested by a client in a cache, and then returning that data from the cache instead of the data source when the same data is requested again.

There are several types of caching that can be used in GraphQL:

- Client-side caching
- Server-side caching
- CDN caching

### Batching
Batching in GraphQL refers to the process of sending multiple queries or mutations in a single request. This allows the client to reduce the number of round trips to the server, and can improve the performance of the application.

There are several ways to implement batching in GraphQL:

- Using a batching library: This approach involves using a library such as apollo-link-batch-http, which provides a way to batch multiple queries or mutations into a single request.
- Using a middleware: This approach involves using a middleware such as graphql-batch, which allows you to batch multiple queries or mutations into a single request.
- Using a serverless function: This approach involves using a serverless function such as AWS Lambda, which allows you to batch multiple queries or mutations into a single request.

### Authorization
Authorization in GraphQL refers to the process of controlling access to specific fields, types, or operations in a GraphQL schema based on user roles or permissions. It allows you to restrict access to certain data or functionality in your application based on the user’s role or permissions.

There are several ways to implement authorization in GraphQL:

- Using middleware
- Using schema directives
- Using a data source layer

