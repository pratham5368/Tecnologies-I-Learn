## Design and Implementation
Good design encompasses factors such as consistency and coherence in component design and deployment, maintainability to simplify administration and development, and reusability to allow components and subsystems to be used in other applications and in other scenarios. Decisions made during the design and implementation phase have a huge impact on the quality and the total cost of ownership of cloud hosted applications and services.
### Ambassador
Create helper services that send network requests on behalf of a consumer service or application. An ambassador service can be thought of as an out-of-process proxy that is co-located with the client.

This pattern can be useful for offloading common client connectivity tasks such as monitoring, logging, routing, security (such as TLS), and resiliency patterns in a language agnostic way. It is often used with legacy applications, or other applications that are difficult to modify, in order to extend their networking capabilities. It can also enable a specialized team to implement those features.
### Anti-corruption Layer
Implement a facade or adapter layer between different subsystems that don’t share the same semantics. This layer translates requests that one subsystem makes to the other subsystem. Use this pattern to ensure that an application’s design is not limited by dependencies on outside subsystems. This pattern was first described by Eric Evans in Domain-Driven Design.
### Gateway Aggregation
Use a gateway to aggregate multiple individual requests into a single request. This pattern is useful when a client must make multiple calls to different backend systems to perform an operation.
### Gateway Offloading
Offload shared or specialized service functionality to a gateway proxy. This pattern can simplify application development by moving shared service functionality, such as the use of SSL certificates, from other parts of the application into the gateway.
### Gateway Routing
Route requests to multiple services or multiple service instances using a single endpoint. The pattern is useful when you want to:

- Expose multiple services on a single endpoint and route to the appropriate service based on the request
- Expose multiple instances of the same service on a single endpoint for load balancing or availability purposes
- Expose differing versions of the same service on a single endpoint and route traffic across the different versions