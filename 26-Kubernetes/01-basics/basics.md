## Kubernetes Introduction
Kubernetes, also known as k8s, is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides a way to abstract the underlying infrastructure and manage applications at scale, while also offering flexibility, portability, and a rich feature set. Kubernetes has become the de facto standard for container orchestration due to its widespread adoption, active community, and ability to handle complex, multi-tiered applications.

[docs](https://kubernetes.io/)

[learn](https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes)

## Key Concepts Terminologies
Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Here are some important concepts and terminologies in Kubernetes:

- Cluster Architecture: The architectural concepts behind Kubernetes.
- Containers: Technology for packaging an application along with its runtime dependencies.
- Workloads: Understand Pods, the smallest deployable compute object in Kubernetes, and the higher-level abstractions that help you to run them.
- Services, Load Balancing, and Networking: Concepts and resources behind networking in Kubernetes.
- Storage: Ways to provide both long-term and temporary storage to Pods in your cluster.
- Configuration: Resources that Kubernetes provides for configuring Pods.
- Cluster Administration: Lower-level detail relevant to creating or administering a Kubernetes cluster.

- Namespaces: In Kubernetes, the namespaces is effectively your working area. It's like a project in GCP or a similar thing in AWS.

- Pods: A pod is effectively a unit of work. It is a way to describe a series of containers, the volumes they might share, and interconnections that those containers within the pod may need. You can have a pod that has a single container in it (or more than one container). Pods are flexible, too: Update one and it becomes version two, and version one is taken out, giving you a rolling update. As Jason spells out, "It gives us a way to say, 'I always want to have three and still be able to migrate an application live from one version to another version without having downtime.'

- Service: Kubernetes "has a concept of a service," Jason says. "It can be thought of as like a load balancer for pods. It knows which pods are alive, healthy, and ready to respond so that when we try to access whatever pod we want to get to instead of to connect to the deployment and getting the one we get, and then always asking that pod for work."

- Ingress: This works with the service to make sure everything ends up in the right place. Ingress can also provide load balancing.

- ConfigMaps: This is an API object for storing information in key-value pairs. "A ConfigMap is very useful for doing things like pre-stashing environment variables or files that can actually be mounted directly into pods without actually having to have an actual file system somewhere," Jason says, adding that they're not meant for confidential data.

- Secrets: Secrets are an object and a place to store confidential information as the name implies.

## Kubernetes Alternatives
Kubernetes is a popular open-source container orchestration tool that is widely used for managing and deploying containerized applications. While there are other container orchestration tools available, such as Docker Swarm, Mesos, and Nomad, there are some key differences between Kubernetes and these other tools and some of them are mentioned below:

- Architecture: Kubernetes is designed as a modular system with many components that work together to provide container orchestration, such as the Kubernetes API server, kubelet, kube-proxy, and etcd.
- Scalability: Kubernetes is designed to handle large-scale deployments and can scale applications up or down based on demand.
- Flexibility: Kubernetes is highly configurable and can be customized to meet specific requirements, whereas other container orchestration tools may have more limited configuration options.
- Portability: Kubernetes is designed to be cloud-agnostic and can run on any public or private cloud platform, as well as on-premises.
- Community: Kubernetes has a large and active community of developers and users who contribute to its development and provide support.

[docker vs kubernetes](https://www.freecodecamp.org/news/kubernetes-vs-docker-swarm-what-is-the-difference/)

[docker](https://www.docker.com/101-tutorial/)

