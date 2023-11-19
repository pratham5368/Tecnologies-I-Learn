## What is serverless?
Serverless is a cloud computing application development and execution model that enables developers to build and run application code without provisioning or managing servers or backend infrastructure.

Serverless lets developers put all their focus into writing the best front-end application code and business logic they can. All developers need to do is write their application code and deploy it to containers managed by a cloud service provider. The cloud provider handles the rest, provisioning the cloud infrastructure required to run the code and scaling the infrastructure up and down on demand as needed. The cloud provider is also responsible for all routine infrastructure management and maintenance such as operating system updates and patches, security management, capacity planning, system monitoring and more.
## Serverless is more than just FaaS
Function-as-a-service, or FaaS, is a cloud computing service that enables developers to run code or containers in response to specific events or requests, without specifying or managing the infrastructure required to run to code.

FaaS is the compute model central to serverless, and the two terms are often used interchangeably. But serverless is much more than FaaS. Serverless is an entire stack of services that can respond to specific events or requests, and scale to zero when no longer in use—and for which provisioning, management and billing are handled by the cloud provider and invisible to developers. In addition to FaaS, these services include:

- Serverless databases and storage: Databases (SQL and NoSQL) and storage (particularly object storage) are the foundation of the data layer. A serverless approach to these technologies involves transitioning away from provisioning “instances” with defined capacity, connection and query limits, and moving toward models that scale linearly with demand in both infrastructure and pricing.

- Event streaming and messaging: Serverless architectures are well-suited for event-driven and stream-processing workloads most notably the open source Apache Kafka event streaming platform.

- API gateways: API gateways act as proxies to web actions and provide HTTP method routing, client ID and secrets, rate limits, CORS, viewing API usage, viewing response logs, and API sharing policies.

## Serverless, Kubernetes and Knative
- Kubernetes is an open-source container orchestration platform that automates the deployment, management and scaling of containers. Kubernetes' automation dramatically simplifies the development of container-based applications.

- Serverless applications are often deployed in containers. But on its own, Kubernetes can't run serverless apps without specialized software that integrates Kubernetes with a specific cloud provider's serverless platform.

- Knative provides a serverless framework for Kubernetes. It’s an open-source extension to Kubernetes that enables any container to run as a serverless workload on any cloud platform that runs Kubernetes, whether the container is built around a serverless function or some other application code (e.g., microservices). Knative works by abstracting away the code and handling the network routing, event triggers and autoscaling for serverless execution.



examples:

1. [cloudfare](https://developers.cloudflare.com/)

2. [Lambda](https://docs.aws.amazon.com/lambda/latest/operatorguide/intro.html)

3. netlify

4. vercel

5. Azure

