## Service Mesh
A Service Mesh is a dedicated infrastructure layer for handling service-to-service communication. It’s responsible for the reliable delivery of requests through the complex topology of services that comprise a modern, cloud native application. In layman’s terms, it’s a tool which helps you to control how different services communicate with each other.

### What is Service Mesh
While Service Mesh technology has been around prior to Kubernetes, the proliferation of microservices that are built on Kubernetes has contributed to the growing interest in Service Mesh solutions.

The thing that is most crucial to understand about microservices is that they are heavily reliant on the network.

Service Mesh manages the network traffic between services. It does that in a much more graceful and scalable way compared to what would otherwise require a lot of manual, error-prone work and operational burden that is not sustainable in the long-run.

In general, service mesh layers on top of your Kubernetes infrastructure and is making communications between services over the network safe and reliable.

Think about service mesh like a routing and tracking service for a package shipped in the mail: it keeps track of the routing rules and dynamically directs the traffic and package route to accelerate delivery and ensure receipt.

Service mesh allows you to separate the business logic of the application from observability, and network and security policies. It allows you to connect, secure, and monitor your microservices.

1. Connect: Service Mesh enables services to discover and talk to each other. It enables intelligent routing to control the flow of traffic and API calls between services/endpoints. These also enable advanced deployment strategies such as blue/green, canaries or rolling upgrades, and more.
2. Secure: Service Mesh allows you secure communication between services. It can enforce policies to allow or deny communication. E.g. you can configure a policy to deny access to production services from a client service running in the development environment.
3. Monitor: Service Mesh enables observability of your distributed microservices system. Service Mesh often integrates out-of-the-box with monitoring and tracing tools (such as Prometheus and Jaeger in the case of Kubernetes) to allow you to discover and visualize dependencies between services, traffic flow, API latencies, and tracing.
