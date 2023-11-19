#Node.js Introduction
Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser.

It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome’s V8 JavaScript engine.

[documentation](https://nodejs.org/docs/latest-v20.x/api/documentation.html)


1. Language sharing across the stack

JavaScript and TypeScript are widely used in  front-end technologies. Node.js allows you to  use JavaScript for back-end development, and as a result, it becomes easy to match back-end functions to front-end functions. 

You can share code between client and server applications while using Node.js, and you will  be using JavaScript for both sides of the development process, enabling better communication between back-end and front-end teams. This also makes full-stack development easier and more accessible, so you don’t need to find an engineer competent in multiple programming languages. 

JavaScript is dynamically typed, and while many Node.js developers prefer to work with JavaScript, those who prefer static typing can make use of TypeScript. Node.js enables you to use either option you prefer, letting you customize your working environment to meet your particular needs.

Finally, another benefit of using Node.js is built in  JSON support. JSON is the backbone for most HTTP communication, and while most other backend languages need special libraries to parse JSON, Node.js does it out of the box.

2. Rapid Development

Node.js makes the process of starting development quick,. Node.js servers can be started with very little effort, and a basic, “Hello World” API can be up and running in under a minute. Thanks to how easy it is to create an API in Node, Node.js is also an excellent choice for developers creating microservice environments, as they link many APIs together. Node.js is an excellent choice for prototyping solutions and architectures as it makes experimentation fast and straightforward. 

Once you are deeper into the development cycle, you can switch back and forth between dynamically typing and static typing as needed, giving you control over how individual components of your system are designed. 

Node.js allows you to use as many libraries as you need, which you can create yourself or download and use through the Node.js Package Manager.

3. The Node Package Manager-NPM 

One of the best reasons to choose Node.js is NPM, the Node.js Package Manager. NPM lets you download packages of code created by other developers and use them in your own projects. This means you don’t need to write as much code from scratch. . Node.js is home to the largest software library registry in the world.

NPM makes managing application dependencies easy, installing not just the library’s code, but also all the dependencies for that library. 

Another benefit of using NPM is that you can script infrastructure-related tasks with JSON files. Package.json scripts allow you to automate aspects of DevOPS/IAC tasks. You can set up code to compile, publish your code, and build local environments using these scripts.

4. Single-threaded event loop architecture is ideal for microservices
 

Most web development frameworks make use of a multi-threaded request-response architecture to handle concurrency. Node.js uses a single-threaded event loop architecture. This style of event handling favors microservice architectures.

A multi-threaded request-response system only has a certain number of threads to work with, and when more requests come in than available threads the requests will have to wait until threads are freed up.

A single-threaded event loop architecture uses single threads and queues. Single-threaded event loops take items from a queue and run them through an event loop, determining if the requests are I/O operations. If they are blocking IO requests then they are picked up by a thread. Otherwise, the requests can be handled while other IO requests are being carried out. This event loop structure enables requests to be handled efficiently.

Node.js's single-threaded event loop architecture eliminates the need for thread management or the management of connections/pools. It’s also resource-efficient, using a fraction of the memory of typical event processing systems and is whyNode.js is used by some of the most high traffic sites on the web, including Twitter, Zillow, the BBC, and Discord.

5. Native support in AWS

All web applications need a host, and Amazon Web Services (AWS) is the most popular hosting platform around, comprising 32% of the cloud market. Node.js is natively supported by AWS and tightly integrated with the platform. 

Amazon has an in-browser Integrated Development Environment (IDE) called Cloud9 that allows the user to write and edit code directly from their browser. This is one of the lowest barriers of entry for a scalable microservice and it is compatible with Node.js.

Not only is JavaScript available for use with AWS tools like its dedicated Cloud9 IDE, but Node.js can make use of both Amazon’s Internet of Things (IoT) SDK and the AWS Cloud Development Kit for JavaScript. The SDK also supports TypeScript.

6. Extensibility
Among other advantages of Node.js, there is the opportunity to integrate it with a variety of useful tools. Node.js can be easily customized and extended.

It can be extended with built-in APIs for the development of HTTP or DNS servers. To facilitate front-end development with old versions of Node or browser, Node.js can be integrated with a JS compiler Babel.

For unit-testing, it works perfectly with, for example, Jasmine. For deployment monitoring and troubleshooting purposes, it works well with Log.io.

Such tools as Migrat, PM2, and Webpack can be used for data migration, process management, and module bundling respectively. In addition, Node.js is expanded with such frameworks as Express, Hapi, Meteor, Koa, Fastify, Nest, Restify and plenty of others.

## What Can Node.js Do?
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database
##  What is a Node.js File?
Node.js files contain tasks that will be executed on certain events
A typical event is someone trying to access a port on the server
Node.js files must be initiated on the server before having any effect

Node.js files have extension ".js"


### Create a Node.js file named "myfirst.js", and add the following code:

myfirst.js
```
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```
Save the file on your computer: C:\Users\Your Name\myfirst.js

The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.

For now, you do not have to understand the code. It will be explained later.

## Command Line Interface
Node.js files must be initiated in the "Command Line Interface" program of your computer.

How to open the command line interface on your computer depends on the operating system. For Windows users, press the start button and look for "Command Prompt", or simply write "cmd" in the search field.

Navigate to the folder that contains the file "myfirst.js", the command line interface window should look something like this:

C:\Users\Your Name>_
## Initiate the Node.js File
The file you have just created must be initiated by Node.js before any action can take place.

Start your command line interface, write node myfirst.js and hit enter:

Initiate "myfirst.js":

C:\Users\Your Name>node myfirst.js
Now, your computer works as a server!

If anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return!

Start your internet browser, and type in the address: http://localhost:8080

