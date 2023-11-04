## Subscriptions
In GraphQL, subscriptions are a way to push real-time updates to the client. They allow a client to subscribe to specific events or data changes on the server, and receive updates in real-time as soon as the event occurs or the data changes. Subscriptions are defined on the server and are structured similarly to queries and mutations.

A subscription includes a “subscription” field at the top level, followed by the fields that define the event or data change to be subscribed to. The client can initiate the subscription by sending the subscription query to the server, and the server will keep the connection open, listening for new events or data changes. Once the event occurs, or the data changes, the server will send the updated data to the client through the open connection.

Subscriptions are defined on the server and are structured similar to queries and mutations. They have a “subscription” field at the top level, followed by the fields that define the event or data change to be subscribed to.

## Event Based Subscriptions
Event-based subscriptions in GraphQL are a way to push real-time updates to the client based on specific events that occur on the server. These events can be triggered by external sources such as user actions, sensor data, or other systems, or by internal actions such as database updates.

With event-based subscriptions, the client can subscribe to a specific event or set of events and receive updates in real-time as soon as the event occurs. This allows the client to receive notifications about important changes in the system without the need to constantly poll the server for updates.

### Live Queries
In GraphQL, live queries, also known as “real-time queries” or “subscriptions to queries”, is a way to push real-time updates to the client, when the data that is being queried changes on the server. It allows the client to subscribe to a specific query and receive updates in real-time as soon as the data changes.

With live queries, the client can subscribe to a specific query and receive updates when the data that is being queried changes on the server. The client can also specify the fields and arguments of the query, and the server will only send updates for the fields that the client has requested.

### Defer Stream Directives
In GraphQL, the “defer” and “stream” directives are used to control the handling of fields and their associated data. These directives allow developers to control how data is fetched and sent over the network, and can be used to optimize the performance of a GraphQL API.

The “defer” directive is used to delay the fetching of a field’s data until the data is actually needed by the client. This can be useful for improving the performance of an API by reducing the amount of data that needs to be fetched upfront.

[docs](https://the-guild.dev/graphql/yoga-server/docs/features/defer-stream)