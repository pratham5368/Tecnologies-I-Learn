## What is software architecture?

The software architecture of a system represents the design decisions related to overall system structure and behavior.

The simplest way I can put it is, software architecture refers to how you organize stuff in the process of creating software. And "stuff" here can refer to:

- Implementation details (that is, the folder structure of your repo)
- Implementation design decisions (Do you use server side or client side rendering? Relational or non-relational databases?)
- The technologies you choose (Do you use REST or GraphQl for your API?  - Python with Django or Node with Express for your back end?)
- System design decisions (like is your system a monolith or is it divided into microservices?)
- Infrastructure decisions (Do you host your software on premise or on a cloud provider?)
That's a lot of different choices and possibilities. And what complicates this a tiny bit more, is that within these 5 divisions, different patterns can be combined. Meaning, I can have a monolith API that uses REST or GraphQL, a microservices-based app hosted on-premise or on the cloud, and so on.

## Levels of Architecture
Architecture can be done on several “levels” of abstractions. The level influences the importance of necessary skills. As there are many categorizations possible my favorite segmentation includes these 3 levels:

- Application Level: The lowest level of architecture. Focus on one single application. Very detailed, low level design. Communication is usually within one development team.
- Solution Level: The mid-level of architecture. Focus on one or more applications which fulfill a business need (business solution). Some high, but mainly low-level design. Communication is between multiple development teams.
- Enterprise Level: The highest level of architecture. Focus on multiple solutions. High level, abstract design, which needs to be detailed out by solution or application architects. Communication is across the organization.


### Important Software Architecture Concepts to Know
## What's the Client-server Model?
Client-server is a model that structures the tasks or workloads of an application between a resource or service provider (server) and a service or resource requester (client).

Put simply, the client is the application that requests some kind of information or performs actions, and the server is the program that sends information or performs actions according to what the client does.

Clients are normally represented by front-end applications that run either on the web or mobile apps (although other platforms exist too and back-end applications can act as clients as well). Servers are usually back-end applications.

To illustrate this with an example, imagine you're entering your favorite social network. When you enter the URL on your browser and hit enter, your browser is acting as the client app and sending a request to the social network server, which responds by sending you the content of the website.

Most applications nowadays use a client-server model. The most important concept to remember about it is that clients request resources or services that the server performs.

Another important concept to know is that clients and servers are part of the same system, but each is an application/program on its own. Meaning they can be developed, hosted, and executed separately.

## What are APIs?
We just mentioned that clients and servers are entities that communicate with each other to request things and respond to things. The way in which these two parts usually communicate is through an API (application programming interface).

An API is nothing more than a set of defined rules that establishes how an application can communicate with another. It's like a contract between the two parts that says "If you send A, I'll always respond B. If you send C, I'll always respond D..." and so on.

Having this set of rules, the client knows exactly what it has to require in order to complete a certain task, and the server knows exactly what the client will require when a certain action has to be performed.

There're different ways in which an API can be implemented. The most commonly used are REST, SOAP and GraphQl.

Regarding how APIs communicate, most often the HTTP protocol is used and the content is exchanged in JSON or XML format. But other protocols and content formats are perfectly possible.

## What is Modularity?
When we talk about "modularity" in software architecture, we refer to the practice of dividing big things into smaller pieces. This practice of breaking things down is performed to simplify big applications or codebases.

Modularity has the following advantages:

It's good for dividing concerns and features, which helps with the visualization, understanding, and organization of a project.
The project tends to be easier to maintain and less prone to errors and bugs when it's clearly organized and subdivided.
If your project is subdivided into many different pieces, each can be worked on and modified separately and independently, which is often very useful.
I know this sounds a bit generic, but modularity or the practice of subdividing things is a very big part of what software architecture is all about. So just keep this concept in the back of your mind – it'll become more clear and apparent as we go through some examples. 


## What's Your Infrastructure Like?
Ok, let's get to the good stuff now. We'll start talking about the many different ways in which you can organize a software application, starting with how can you organize the infrastructure behind your project.

To make all this less abstract, we'll use an hypothetical app we'll call Notflix.🤔🤫🥸

Side comment: keep in mind this example might not be the most realistic one and that I'll be assuming/forcing situations in order to present certain concepts. The idea here is to help you understand core architecture concepts through an example, not to perform a real world analysis.

## Monolithic Architecture
So Notflix will be a typical video streaming application, in which the user will be able to watch movies, series, documentaries and so on. The user will be able to use the app in web browsers, in a mobile app, and on a TV app, too.

The main services included in our app will be authentication (so people can create accounts, login, and so on), payments (so people can subscribe and access the content... cause you didn't think this was all for free, right? 😑) and streaming of course (so people can actually watch what they're paying for).

![](https://www.freecodecamp.org/news/content/images/2022/07/Untitled-Diagram.drawio-3.png)

At the left we have our three different front-end apps that will act as clients in this system. They might be developed with React and React-native, for example.

We have a single server that will receive requests from all three client apps, communicate with the database when necessary, and respond to each front-end accordingly. The back-end could be developed with Node and Express, let's say.

This kind of architecture is called a monolith because there's a single server application that is responsible for all the features of the system. In our case, if a user wants to authenticate, pay us, or watch one of our movies, all the requests are going to be sent to the same server application.

The main benefit of a monolithic design is its simplicity. The functioning of it and the set up required is simple and easy to follow, and this is why most applications start out in this way.

## Microservices Architecture
So turns out Notflix is totally rocking it. We just released the latest season of "Stranger thugs", which is an awesome science fiction series about teenage rappers, and our movie "Agent 404" (about a secret agent that infiltrates in a company simulating being a senior programmer but actually doesn't know a thing about code) is breaking all records...

We're getting tens of thousands of new users every month from all over the world, which is great for our business but not so much for our monolithic app.

Lately we've been experiencing delays in server response times, and even though we've vertically scaled the server (put more RAM and GPU into it) the poor thing just doesn't seem to be able to bear the load it's taking.

Moreover, we've kept developing new features into our system (such as a recommendation tool that reads the user's preferences and recommends movies that suit the user profile) and our codebase is starting to look huge and very complex to work with.

Analyzing this problem in depth, we've found the feature that takes the most resources is streaming, while other services such as authentication and payments don't represent a very big load.
![](https://www.freecodecamp.org/news/content/images/2022/07/Untitled-Diagram.drawio--1-.png)

Following our example, before we only had a single server responsible for all features (a monolithic architecture). After implementing microservices we'll have a server responsible for authentication, another responsible for payments, another for streaming, and the last one for recommendations.

The client-side apps will communicate with the authentication server when a user wants to login, with the payments server when the user wants to pay, and with the streaming server when the user wants to watch something.

All this communication happens through APIs just like with a regular monolithic server (or through other communication systems like Kafka or RabbitMQ). The only difference is that now we have different servers responsible for different actions instead of a single one that does it all.

This sounds a bit more complex, and it is, but microservices offer us the following benefits:

- You can scale particular services as needed, instead of scaling the whole back end at once. Following our example, when we started to experience performance issues we vertically scaled our whole server – but actually the feature that requested the more resources was only the streaming. Now that we have the streaming feature separated into a single server, we can scale only that one and leave the rest alone as long as they keep working right.
- Features will be more loosely coupled, which means we'll be able to develop and deploy them independently.
- The codebase for each server will be much smaller and simpler. Which is nice for the dev folks that have been working with us from the start, and also easier and quicker for new developers to understand.

Microservices is an architecture that is more complex to set up and manage, which is why it makes sense only for very big projects. Most projects will start out as monoliths and migrate to microservices only when needed for performance reasons.
## What is back-end for front-end (BFF)?
One problem that comes up when implementing microservices is that the communication with front-end apps gets more complex. Now we have many servers responsible for different things, which means front-end apps would need to keep track of that info to know who to make requests to.

Normally this problem gets solved by implementing an intermediary layer between the front-end apps and the microservices. This layer will receive all the front-end requests, redirect them to the corresponding microservice, receive the microservice response, and then redirect the response to the corresponding front-end app.

The benefit of the BFF pattern is that we get the benefits of the microservices architecture, without over complicating the communication with front-end apps.

![](https://www.freecodecamp.org/news/content/images/2022/07/Untitled-Diagram.drawio--2-.png)

## How to use load balancers and horizontal scaling
So our streaming app keeps growing and growing at an exponential rate. We have millions of users around the world watching our movies 24/7, and sooner than we expected we start experiencing performance issues again.

Once again we've found that the streaming service is the one under most stress, and we've vertically scaled that server all we could. Further subdividing that service into more microservices doesn't make sense, so we've decided to horizontally scale that service.

Before we mentioned that vertically scaling means adding more resources (RAM, disk space, GPU, and so on) to a single server/computer. Horizontally scaling on the other hand, means setting up more servers to perform the same task.

Instead of having a single server responsible for streaming we'll now have three. Then the requests performed by the clients will be balanced between those three servers so that all handle an acceptable load.

This distribution of requests is normally performed by a thing called a load balancer. Load balancers act as reverse proxys to our servers, intercepting client requests before they get to the server and redirecting that request to the corresponding server.
![](https://www.freecodecamp.org/news/content/images/2022/07/1234.png)

Using a load balancer we can distribute client requests across multiple servers:
![](https://www.freecodecamp.org/news/content/images/2022/07/4312.drawio-1.png)

You should know that horizontal scaling is also possible with databases as it's possible with servers. One way of implementing this is with a source-replica model, in which one particular source DB will receive all write queries and replicate it's data along one or more replica DBs. Replica DBs will receive and respond to all read queries.

The advantages of DB replication are:

- Better performance: This model improves performance allows more queries to be processed in parallel.
- Reliability and availability: If one of your database servers is destroyed or inaccessible for any reason, data is still preserved in other DBs.

![](https://www.freecodecamp.org/news/content/images/2022/07/Untitled-Diagram.drawio--3--2.png)

## Where Your Infrastructure Lives
Now that we have a basic idea of how an application infrastructure might be organized, the next thing to think about is where we're going to put all this stuff.

As we're going to see, there're mainly three options when deciding where and how to host an application: on premise, on traditional server providers, or on the cloud.

### On-Premise Hosting
On premise means you own the hardware in which your app is running. In the past this used to be the most traditional way of hosting applications. Companies used to have dedicated rooms for servers to be in and teams dedicated to the set up and maintenance of the hardware.

The good thing about this option is that the company gets total control over the hardware. The bad thing is it requires space, time, and money.

Imagine if you wanted to horizontally scale a certain server, that would mean buying more equipment, setting it up, supervising it constantly, repairing whatever gets broken... And if you later on need to scale down that server, well, normally you're not able to return these things after buying them.🥲

For most companies, having on premise servers means dedicating lots of resources to a task not directly related to the company's goals.


How we imagined our server room at Notflix
image-222
How it ended up
One situation in which on premise servers still make sense is when dealing with very delicate or private information. Think about the software that runs a power plant, or private banking information, for example. Many of these organizations decide to have on premise servers as a way to have complete control over their software and hardware.

### Traditional Server Providers
A more comfortable option for most companies are traditional server providers. These are companies that have servers of their own and they just rent them. You decide what kind of hardware you'll need for your project and pay a monthly fee for it (or some amount based on other conditions).

What's great about this option is that you don't need to worry about anything hardware-related anymore. The provider takes care of it, and as a software company you only worry about your main goal, the software.

Another cool thing is that scaling up or down is easy and risk free. If you need more hardware, you pay for it. And if you don't need it anymore, you just stop paying.

An example of a well known server provider is hostinger.

### Hosting on the Cloud
If you've been around technology for a little while you've probably heard the word "cloud" more than once. At first it sounds as something abstract and kind of magical, but actually what's behind it is nothing more than huge data centers owned by companies like Amazon, Google, and Microsoft.

At some point these companies found out they had huuuuuuuuge computing power they weren't using all of the time. And as all this hardware still represents a cost whether you're using it or not, the clever thing to do is to commercialize that computing power to others.

And that's what cloud computing is. Using different services like AWS (Amazon web services), Google Cloud, or Microsoft Azure, we're able to host our applications in these companies' data centers and take advantage of all that computing power.


What a "cloud" might actually look like
When getting to know cloud services, it's important to notice that there are many different ways in which you can use them:

Traditional
The first way is to use them in a similar way you'd use a traditional server provider. You select the kind of hardware you want and pay exactly for that on a monthly basis.

Elastic
The second way is to take advantage of the "elastic" computing offered by most providers. "Elastic" means that the hardware capacity of your application will automatically grow or shrink depending on the usage your app has.

For example, you could start out with a server that has 8gb of RAM and 500gb of disk space. If your server starts getting more and more request and these capacities are no longer enough to provide good performance, the system can automatically perform vertical or horizontal scaling.

The awesome thing about this is you can configure all this beforehand and not have to worry about it again. As the servers scale up and down automatically, you pay only for the resources you consume.

### Serverless
Another way in which you can use cloud computing is with a serverless architecture.

Following this pattern, you wont have a server that receives all requests and responds to them. Instead you'll have individual functions mapped to an access point (similar to an API endpoint).

These functions will execute each time they receive a request and perform whatever action you programmed them for (connecting to a database, performing CRUD operations or whatever else a you could do in a regular server).

What's very nice about serverless architecture is that you forget all about server maintenance and scaling. You just have functions that get executed when you need them, and each function is scaled up and down automatically as needed.

As a costumer, you pay only for the amount of times the function gets executed and the amount of processing time each execution lasts.

If you'd like to learn more, here's an explanation of the serverless pattern.

### Lots of other services
You can probably see how elastic and serverless services offer a very simple and convenient alternative for setting up software infrastructure.

And besides server-related services, cloud providers offer tons of other solutions such as relational and non-relational databases, file storage services, caching services, authentication services, machine learning and data processing services, monitoring and performance analysis, and more. With everything hosted in the cloud.

Through tools like Terraform or AWS Cloud formation we can even set up our infrastructure as code. Meaning we can write a script that sets up a server, database, and whatever else we might need on the cloud just in a matter of minutes.

This is mind-blowing from an engineering point of view, and really convenient for us as developers. Cloud computing nowadays offers a very complete set of solutions that can easily adapt from tiny small projects to the biggest digital products on earth. This is why more and more software projects nowadays choose to host their infrastructure in the cloud.

As previously mentioned, the most used and well known cloud providers are AWS, Google Cloud and Azure. Though there are other options too like IBM, DigitalOcean, and Oracle.

Most of these providers offer the same kind of services, though they might have different names. For example, serverless functions are called "lambdas" on AWS and "cloud functions" on Google cloud.

## Different Folder Structures to Know
Ok, so far we've seen how architecture can refer to infrastructure organization and hosting. Now let's see some code and how architecture can refer to folder structures and code modularity.

### All in One Place Folder Structure
To illustrate why folder structures are important, let's build a dummy example API. We'll have a mock database of rabbits 🐰🐰 and the API will perform CRUD actions on it. We'll build this with Node and Express.

Here's our first approach, with no folder structure at all. Our repo will be composed of the node modules folder, and the app.js, package-lock.json and package.json files.


## Different Folder Structures to Know
Ok, so far we've seen how architecture can refer to infrastructure organization and hosting. Now let's see some code and how architecture can refer to folder structures and code modularity.

All in One Place Folder Structure
To illustrate why folder structures are important, let's build a dummy example API. We'll have a mock database of rabbits 🐰🐰 and the API will perform CRUD actions on it. We'll build this with Node and Express.

Here's our first approach, with no folder structure at all. Our repo will be composed of the node modules folder, and the app.js, package-lock.json and package.json files.
![](https://www.freecodecamp.org/news/content/images/2022/07/layers.png)

- The application layer will have the basic setup of our server and the connection to our routes (the next layer).
- The routes layer will have the definition of all of our routes and the connection to the controllers (the next layer).
- The controllers layer will have the actual logic we want to perform in each of our endpoints and the connection to the model layer (the next layer, you get the idea...)
- The model layer will hold the logic for interacting with our mock database.

