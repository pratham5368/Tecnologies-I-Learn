REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

## REST Fundamentals
REST is an architecture style to develop web services, which uses the HTTP protocol as a communication interface in order to transfer data through HTTP methods. In other words, it allows performing basic data manipulation within an application with efficiency, such as creating, retrieving, updating and deleting information.

![REST API](https://res.cloudinary.com/practicaldev/image/fetch/s--96g0vPg4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sz480n8p0ydcq1vsahk3.jpg)

REST was born and created in 2000 by Roy Fielding in his PhD dissertation and, according to him:

“The name “Representational State Transfer” is intended to evoke an image of how a well-designed Web application behaves: a network of web pages (a virtual state-machine), where the user progresses through the application by selecting links (state transitions), resulting in the next page (representing the next state of the application) being transferred to the user and rendered for their use.”

So, as Roy Fielding defines, in order to build a well-designed web application, we can use REST principles that help us to develop services that are more scalable, reliable and flexible. To achieve this goal, the REST architecture has six constraints and an API that is driven by that can be called RESTful.

1. Client-Server
The main principle of the Client-Server web architecture is the Separation of Concerns, which means that the Client that sends the request it’s completely independent from the Server that returns the response.



2. Stateless
All the information (state) that is required in a request must be sended by the Client. Therefore, the Server must not store any data during a Client-Server communication, which means that every request is a standalone request.

3. Cache
Cache is a computational storage structure focused on keeping stored data that is frequently accessed, improving performance and network efficiency. Therefore, through caching, it’s possible to reduce or even eliminate the need for the Client to send requests to the Server (who must inform if the request can be cacheable or not).

4. Interface Uniform
Means how Client and Server will share information by defining an interface that must be followed in every request. In other words, it’s a contract between the Client and the Server that determines the standards for their communication.

### Here, we have four additional constraints that is part of Uniform Interface:

1. Identification of Resources
REST is based on resources, and a resource is an information that can be named. It’s used in a request to identify what the Client wants to access in the Server.

For example, to retrieve a list of products, the resource must be setted in the URL: http://api.example.com/products

2. Manipulation of Resources Through Representation
The Client must be sure that the request to the Server has enough information to manipulate (create, retrieve, update, delete) the informed resource, which can be represented by multiple formats, such as JSON, XML, HTML etc. In other words, the Client can specify the desired representation of a resource in every request to a Server.

For example: a Client can specify in a request to retrieve a resource in JSON format.

3. Self-descriptive Messages
A self-descriptive message ensures a uniform interface in the communication by containing all the information that a Client or a Server needs to understand the request and the response just by checking the semantics of the message.

4. HATEOAS (Hypertext As The Engine Of Application State)
HATEOAS means that a response sent from the Server should contain information about what the Client can do in further requests. In other words, the Server indicates what actions the Client can do next. In REST standards, Servers must send only hypermedia (links) to Clients.


5. Layered system
Layered system relates to the fact that there can be more components and subsystems between a Client and a Server. In other words, the client can’t assume that it is communicating directly to the Server, and don’t know about the complexity to process the request and return the response.

For example: a Client sends a request to a Server, but first it passes by a proxy layer for security check.



6. Code On Demand
Code On Demand is the only optional constraint, and means that a Server can send an executable code as a response to the Client. In other words, it’s what happens when a browser, for example, receives a response from the Server with a HTML tag ```<script>``` so, when the HTML document is loaded, the script can be executed.

##  3 Request Anatomy
Basically, a Client request has 4 main elements that compose all the information that is needed to interact with the Server.

1. URL
URL means Uniform Resource Locator, which is the address to not just identify a resource, but also to specify how to access it. In an API, the URL can be named as Base URL, which means that is the base address that will be used in every request.

For example: http://api.example.com

2. URI
URI means Uniform Resource Identifier, which is used in the URL to specify which resource the Client would like to access in a request.

For example: http://api.example.com/products

URL: http://api.example.com/
URI: /products

Therefore, every URL is an URI, but not all URIs are URLs.

3. Parameters
Parameters are information that can be sended in a request by the Client in order to influence the response by the Server. REST has 4 types of parameters, and its use will depend on the type of action that the request demands.

4. Body Params
The Body, like the name says, it’s the body of the request which contains all the data that the Server needs to successfully process the request. Therefore, it’s only used in requests that must send information, such as create or update.

Example of a request body in JSON format:
```
{
    “name”: “Laptop”,
    “price”: 1000
    “available”: true
}
```
5. Route Params
Route params are parameters inserted in the URL with the information to identify a specific resource in order to take an action, such as: retrieve, edit, update or delete.

For example: http://api.example.com/products/1

In this given example, the route param with value 1 identifies the resource that will be manipulated in the request.

6. Query Params
Query params are also parameters inserted in the URL, but with the main difference that it’s use cases are related to filter and search information about a resource, or even paginate and ordinate the results.

For example:

http://api.example.com/products?name=laptop&available=true

In this given example, the Client communicates to the Server that the request is to retrieve products with name equals laptop, and available equals true.

7. Headers
Headers allows sending extra information in a request, such as authentication tokens and content types.

For example:
Authorization: Bearer token
Accept: application/json
In this given example, the Client is sending extra data informing not just it's credentials to access a resource, but also a desired response format.

##  HTTP PROTOCOL
Alright, now that we have a basic understanding of REST fundamentals and it’s constraints, let’s talk about the communication standard that rules the Internet world by defining the interaction patterns between Clients and Servers: the HTTP Protocol (HyperText Transfer Protocol).

The HTTP Protocol determines not just the methods that are allowed in a REST API, which means the action types that the Client can demand in a request, but also the status codes that the Server returns as a response in order to have a good communication flow.

1. HTTP Methods
There are 5 main methods that a Client can use in a request in order to manipulate an API resource, which are related with the 5 basic data manipulation types in a database, such: Create, Retrieve, Update and Delete.

- GET
This method is used to retrieve data from a Server by indicating the resource in the URL. For example, to request a list of products of an API, the Client might send:

GET http://api.example.com/products

- POST
This method is used to create a new resource in the Server by indicating it in the URL and sending the resource data in the request body.

For example:

POST http://api.example.com/products

Request body in JSON format:
{
    “name”: “Laptop II”,
    “price”: 1000
    “available”: true
}
In this given example, a new product will be created in the database with this provided information.

- PUT
This method is used to update a resource data in the Server by identifying it in the URL, and sending the information that will be updated in the request body.

PUT http://api.example.com/products/1

Request body in JSON format:
{
    “name”: “Laptop”,
    “price”: 5000,
    “available”: false
}
In this given example, the product with ID 1 will be updated.

- PATCH
This method is also used to update a resource data in the Server by identifying it in the URL, but with the main difference of updating just a specific information.

PATCH http://api.example.com/products/1

Request body in JSON format:
{
    “available”: true
}
In this given example, just the available property of the product with ID 1 will be updated.

- DELETE
This method is used to delete a resource in the Server by identifying it in the URL.

For example:

DELETE http://api.example.com/products/1

In this given example, the product with ID 1 will be deleted.

2. HTTP Status Code
The HTTP Status Codes are codes returned by the Server in order to indicate the type of response in a Client’s request, facilitating the understanding just by its group and number.

The most commonly used groups and numbers of status code are:

4.2.1 Group 2
Status group that indicates a successful request.

Code	200 (Ok)	201 (Created)	204 (No Content)
Description	Request succeeded	Request succeeded and created resource	Request succeeded and no additional content in response body
4.2.2 Group 3
Status group that indicates redirect responses, which are used to inform the Client that the Server needed to perform a redirect to a new URL.

Code	301 (Moved Permanently)	304 (Not Modified)	307 (Temporary redirect)
Description	Requested resource has changed permanently and a new URL is provided in the response	Requested resource wasn’t modified and the same cached version can be used	Requested resource has been temporarily redirected to another URL
4.2.3 Group 4
Status group that indicates an error in the Client side, which means that the request was incorrectly builded.

Code	400 (Bad Request)	401 (Unauthorized)	403 (Forbidden)	404 (Not Found)
Description	Request couldn’t be understanded by the Server	Client is not authenticated to access the resource	Client is not authorized to access the resource	Requested resource couldn’t be found by the Server
4.2.4 Group 5
Status group that indicates an error in the Server side, which means that the request was sent correctly by the Client, but an error occurred while processing it.

Code	500 (Internal Server Error)	503 (Service Unavailable)
Description	Indicates that the Server faced an unexpected error, and couldn't return the request response	Indicates that the Server isn’t able to process the request because it’s unavailable, overloaded or under maintenance

## Response Codes
Responses from the server contain status codes to alert the client to information about the success of the operation. As a developer, you do not need to know every status code (there are many of them), but you should know the most common ones and how they are used:

Status code	Meaning

- 200 (OK)	This is the standard response for successful HTTP requests.

- 201 (CREATED)	This is the standard response for an HTTP request that resulted in an item being successfully created.

- 204 (NO CONTENT)	This is the standard response for successful HTTP requests, where nothing is being returned in the response body.

- 400 (BAD REQUEST)	The request cannot be processed because of bad request syntax, excessive size, or another client error.

- 403 (FORBIDDEN)	The client does not have permission to access this resource.

- 404 (NOT FOUND)	The resource could not be found at this time. It is possible it was deleted, or does not exist yet.

- 500 (INTERNAL SERVER ERROR)	The generic answer for an unexpected failure if there is no more specific information available.

For each HTTP verb, there are expected status codes a server should return upon success:

- GET — return 200 (OK)

- POST — return 201 (CREATED)

- PUT — return 200 (OK)

- DELETE — return 204 (NO CONTENT) 

If the operation fails, return the most specific status code possible corresponding to the problem that was encountered.