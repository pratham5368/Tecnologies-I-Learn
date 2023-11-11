## What is an API?
An API, or application programming interface, is a set of defined rules that enable different applications to communicate with each other. It acts as an intermediary layer that processes data transfers between systems, letting companies open their application data and functionality to external third-party developers, business partners, and internal departments within their companies.

The definitions and protocols within an API help businesses connect the many different applications they use in day-to-day operations, which saves employees time and breaks down silos that hinder collaboration and innovation. For developers, API documentation provides the interface for communication between applications, simplifying application integration.


## How an API works
A simple way to understand how APIs work is to look at a common example—third-party payment processing. When a user purchases a product on an ecommerce site, they may be prompted to “Pay with Paypal” or another type of third-party system. This function relies on APIs to make the connection.

When the buyer clicks the payment button, an API calls to retrieve information—also known as a request. This request is processed from an application to the web server via the API’s Uniform Resource Identifier (URI) and includes a request verb, headers, and sometimes, a request body.
 

After receiving a valid request from the product webpage, the API makes a call to the external program or web server, in this case, the third-party payment system.
 

The server sends a response to the API with the requested information.
 

The API transfers the data to the initial requesting application, here the product website.

While the data transfer will differ depending on the web service being used, the requests and responses all happen through an API. There is no visibility on the user interface, meaning APIs exchange data within the computer or application, and appear to the user as a seamless connection.

## API benefits
APIs simplify design and development of new applications and services, and integration and management of existing ones. But they offer other significant benefits to developers and organizations at large.

- Improved collaboration. The average enterprise uses almost 1,200 cloud applications (link resides outside ibm.com), many of which are disconnected. APIs enable integration so that these platforms and apps can seamlessly communicate with one another. Through this integration, companies can automate workflows and improve workplace collaboration. Without APIs, many enterprises would lack connectivity, causing information silos that compromise productivity and performance.

- Accelerated innovation. APIs offer flexibility, allowing companies to make connections with new business partners, offer new services to their existing market, and, ultimately, access new markets that can generate massive returns and drive digital transformation. For example, the company Stripe began as an API with just seven lines of code. The company has since partnered with many of the biggest enterprises in the world, diversified to offer loans and corporate cards, and was recently valued at USD 36 billion (link resides outside ibm.com).

- Data monetization. Many companies choose to offer APIs for free, at least initially, so that they can build an audience of developers around their brand and forge relationships with potential business partners. If the API grants access to valuable digital assets, the business monetize it by selling access. This is referred to as the API economy. When AccuWeather (link resides outside ibm.com) launched its self-service developer portal to sell a wide range of API packages, it took just 10 months to attract 24,000 developers, selling 11,000 API keys and building a thriving community in the process.

- System security. APIs separate the requesting application from the infrastructure of the responding service, and offer layers of security between the two as they communicate. For example, API calls typically require authentication credentials; HTTP headers, cookies or query strings can provide additional security during data exchange and an API gateway can control access to further minimize security threats.

- End-user security and privacy. Just as APIs provide added protection within a network, they can also provide another layer of protection for personal users. When a website requests a user’s location, which is provided via a location API, the user can then decide whether to allow or deny this request. Many web browsers and mobile operating systems, like iOS, have permission structures built-in when APIs request access to applications and their data. When the app must access files through an API, file systems such as windows, Mac and Linux use permissions for that access.

## APIs in action: common examples
Because APIs allow companies to open access to their resources while maintaining security and control, they have become a valuable aspect of modern business and personal applications. Here are some popular examples of API uses that users encounter almost every day:

- Universal logins: A popular API example is the function that enables people to log in to websites by using their Facebook, Twitter, or Google profile login details. This convenient feature allows any website to leverage an API from one of the more popular services for quick authentication, saving them the time and hassle of setting up a new profile for every web application or new membership.
 

- Internet of Things (IoT): These “smart devices” offer added functionality, such as internet-enabled touchscreens and data collection, through APIs. For example, a smart fridge can connect to recipe applications or take and send notes to mobile phones via text message. Internal cameras connect to various applications so that users can see the contents of the refrigerator from anywhere.
 

- Travel booking comparisons: Travel booking sites aggregate thousands of flights, showcasing the cheapest options for every date and destination. This service is made possible through APIs that provide application users with access to the latest information about availability from hotels and airlines, either via a web browser or the travel booking company’s own application. With an autonomous exchange of data and requests, APIs dramatically reduce the time and effort involved in checking for available flights or accommodation.
 

- Mapping apps: In addition to the core APIs that display static or interactive maps, these apps use other APIs and features to provide users with directions, speed limits, points of interest, traffic warnings and more.users communicate with an API when plotting travel routes or tracking items on the move, such as a delivery vehicle.
 

- Twitter: Each Tweet contains descriptive core attributes, including an author, a unique ID, a message, a timestamp when it was posted, and geolocation metadata. Twitter makes the core attributes of public Tweets and replies available to developers and allows them to post Tweets on other webpages via the company's API.
 

- SaaS applications: APIs are an integral part of the growth in software-as-a-service (SaaS) products. Platforms like CRMs (customer relationship management tools) often include a number of built-in APIs that let companies integrate with applications they already use, such as messaging, social media, and email apps. This drastically reduces time spent switching between applications for sales and marketing tasks. It also helps reduce or prevent data silos that may exists between departments using different applications.

## Types of APIs
Today most APIs are web APIs that expose an application's data and functionality over the internet. Here are the four main types of web API:

Open APIs are open-source application programming interfaces you can access with the HTTP protocol. Also known as public APIs, they have defined API endpoints and request and response formats.
 

- Partner APIs connect strategic business partners. Typically, developers access these APIs in self-service mode through a public API developer portal. Still, they need to complete an onboarding process and get login credentials to access partner APIs.
 

- Internal APIs remain hidden from external users. These private APIs aren't available for users outside of the company and are instead intended to improve productivity and communication across different internal development teams.
 

- Composite APIs combine multiple data or service APIs. They allow programmers to access several endpoints in a single call. Composite APIs are useful in microservices architecture where performing a single task may require information from several sources.

## API protocols
As the use of web APIs has increased, certain protocols have been developed to provide users with a set of defined rules, or API specifications, that create accepted data types, commands and syntax. In effect, these API protocols facilitate standardized information exchange.

- SOAP (Simple Object Access Protocol): Built with XML, SOAP enables endpoints to send and receive data through SMTP and HTTP. SOAP APIs make it easier to share information between apps or software components that are running in different environments or written in different languages.
 

- XML-RPC (XML-Remote Procedure Call): The XML-RPC protocol relies on a specific XML format to transfer data. XML-RPC is older than SOAP, but much simpler, and relatively lightweight in that it uses minimum bandwidth.
 

- JSON-RPC: Like XML-RPC, JSON-RPC is a remote procedure call, but JSON (JavaScript Object Notation) is used instead of XML to transfer the data.

- REST (Representational State Transfer): REST is a set of web API architecture principles. REST APIs—also known as a RESTful API)—are APIs that adhere to certain REST architectural constraints. It’s possible to build RESTful APIs with SOAP protocols, but the two standards are usually viewed as competing specifications.

Traditionally, API referred to an interface connected to an application created with any of the low-level programming languages, such as Javascript. Modern APIs, however, adhere to REST principles and the JSON format. They are typically built for HTTP, resulting in developer-friendly interfaces that are easily accessible and widely understood by applications written in Java, Ruby, Python, and many other languages.