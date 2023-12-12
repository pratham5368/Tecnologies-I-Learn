## High availability
Azure infrastructure is composed of geographies, regions, and Availability Zones, which limit the blast radius of a failure and therefore limit potential impact to customer applications and data. The Azure Availability Zones construct was developed to provide a software and networking solution to protect against datacenter failures and to provide increased high availability (HA) to our customers. With HA architecture there is a balance between high resilience, low latency, and cost.
### Bulkhead
The Bulkhead pattern is a type of application design that is tolerant of failure. In a bulkhead architecture, elements of an application are isolated into pools so that if one fails, the others will continue to function. It’s named after the sectioned partitions (bulkheads) of a ship’s hull. If the hull of a ship is compromised, only the damaged section fills with water, which prevents the ship from sinking.

### Circuit Breaker
Handle faults that might take a variable amount of time to recover from, when connecting to a remote service or resource. This can improve the stability and resiliency of an application.

[site](https://medium.com/geekculture/design-patterns-for-microservices-circuit-breaker-pattern-276249ffab33)