Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png)

## What is CORS?
Let's say you are running a website on localhost:8000, and when your JavaScript code is loaded, it makes a request to the server running on localhost:9000. You may be surprised to find out that your request has failed. This is because browsers follow the same-origin policy and restrict how a document or script, loaded by one origin, can interact with a resource from another origin:

- Requests to a server in the same origin are allowed by the browser.
- Requests to a different origin (known as cross-origin requests) are, by default, blocked by the browser and a CORS error occurs.

So, what is CORS? CORS stands for Cross-Origin Request Sharing, and it's an HTTP-header based mechanism where servers can tell browsers if other origins are allowed to interact with its resources.




### How does it work?
When a browser makes a cross-origin request, it adds an Origin header to the message. The server responds by adding an Access-Control-Allow-Origin to the response message. The value in the response header should match the value of the Origin header from the request. If it does match, everything is fine, but if it doesn't, browsers prevent the response data from being shared with the client, and the CORS error occurs.

![](https://rbika.com/images/blog/understanding-cors-1.svg)

![](https://rbika.com/images/blog/understanding-cors-2.svg)



Requests that use methods other than GET, POST, HEAD, or requests with non-standard headers, need to be pre-flighted. When making these requests, browsers will send a pre-flight request using the OPTIONS HTTP method, and servers will respond with the Access-Control-Allow-Origin and the Access-Control-Allow-Methods headers. If both headers match the request origin and method, the actual request can be made. Such cross-origin requests are pre-flighted because they may have implications for server data.

![](https://rbika.com/images/blog/understanding-cors-3.svg)

![](https://rbika.com/images/blog/understanding-cors-4.svg)

You may be asking why the POST method does not make a pre-flight request since it may also change server data. This is because browsers already allowed cross-origin POST requests with standard headers before CORS existed, and servers knew about them. So CORS didn't want to change anything about how previous requests worked, but to enforce servers were protected from these new types of requests they were not expecting to receive.

### How to fix CORS errors?
Let's go back to the example from the beginning of this article: a client app running on localhost:8000 making a request to a server running on localhost:9000. If CORS is not configured properly, the request will fail, and you will see an error in the Browser's console saying:
```
Access to fetch at http://localhost:9000/api/endpoint' from origin
'http://localhost:8000' has been blocked by CORS policy.
```
To see what's wrong with the request, open the network tab of your browser's dev tools and:

- Check if the Access-Control-Allow-Origin response header is present and matches the Origin header from the request.
- If it's a preflight request, also check if the response has the Access-Control-Allow-Methods header and if the value contains the HTTP method being used by the actual request.

After verifying what response headers are missing or have the wrong value all you have to do is update the server to respond with the proper headers. In ExpressJS for example this can be easily configured by using the cors middleware:
```
var express = require('express')
var cors = require('cors')
var app = express()
 
cors({ origin: 'http://localhost:8000' })
 
app.get('/api', function (req, res, next) {
  res.json({ msg: 'success' })
})
 
app.listen(9000, function () {
  console.log('CORS-enabled for localhost:8000')
})
```
A good thing to understand when debugging CORS errors is that they don't happen when using tools like Postman or curl. So even if you are getting CORS errors in the browser, the same request will work just fine when sent by these tools.

- These tools don't make cross-origin requests. They send a top-level network call (like if you are opening the URL on a new browser tab).
- Although CORS are configured on the server side, it is the client's decision to honor these configurations or not. Most browsers do enforce it for security reasons, but developer tools don't care about it.