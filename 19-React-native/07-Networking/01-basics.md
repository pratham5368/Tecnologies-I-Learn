## Networking
React Native provides the ability to make network requests and manage data fetched from remote sources. Networking can be accomplished through the following techniques:

## Fetch
The fetch function is a top-level API to make HTTP requests. It is a promise-based API for handling network requests. It allows you to fetch resources (typically JSON data) from a provided URL.

### USAGE
```
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));
```
In this example, we are using fetch() to make a GET request to a sample API. The function fetch() returns a Promise that resolves to the Response object representing the response to the request. Using then(), we manage the response and extract the JSON data from it. If an error occurs, we catch it with catch().
### POST Request
To make a POST request using fetch, you need to provide an additional object with the method, headers, and body properties:
```
fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Task',
    completed: false
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
In this example, we are making a POST request to add a new task to the sample API. The method property is set to ‘POST’, and headers define the content type as ‘application/json’. The body property contains the new task in JSON format, which needs to be converted to a string using JSON.stringify(). Just like the GET request, we handle the response and catch any errors that occur.


## Axios
Axios is a popular and widely-used library for making HTTP requests in javascript applications. It’s promise-based and provides a simple-to-use API.

## Websockets
WebSockets are a protocol that allows full-duplex communication between a client and a server over a single, long-lived connection. They are useful when real-time communication is needed, such as in chat applications, online gaming, or financial trading platforms.

### Setting up a WebSocket connection
In React Native, you can use the WebSocket API to establish a WebSocket connection with the server. Here’s an example of how to open a WebSocket connection:
```
const webSocket = new WebSocket('ws://my-websocket-server.com');
```
### Receiving and sending messages
You can handle the different events associated with a WebSocket connection by attaching event listeners to the WebSocket instance.

#### Handling connection

To handle connection establishment, you can use the onopen event listener:
```
webSocket.onopen = (event) => {
  console.log('WebSocket connection opened:', event);
};
```
#### Handling incoming messages
To receive messages from the server, you can use the onmessage event listener:
```
webSocket.onmessage = (event) => {
  console.log('Received from server:', event.data);
};
```
#### Sending messages to the server
To send messages to the server, you can use the send method:
```
webSocket.send('Hello server');
```
#### Handling connection error and closure
You can catch connection errors and closure events using the onerror and onclose event listeners:
```
webSocket.onerror = (event) => {
  console.log('WebSocket error:', event);
};

webSocket.onclose = (event) => {
  console.log('WebSocket connection closed:', event);
};
```
#### Closing the WebSocket connection
To close the WebSocket connection, you can use the close method:
```
webSocket.close();
```
That’s a brief summary of using WebSockets in React Native! Don’t forget to handle various edge cases such as connection loss, reconnection, and graceful shutdowns in a real-world application.