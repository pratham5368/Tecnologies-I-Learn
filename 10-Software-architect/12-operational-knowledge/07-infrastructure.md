## Infrastructure as Code
Sometimes referred to as IaC, this section refers to the techniques and tools used to define infrastructure, typically in a markup language like YAML or JSON. Infrastructure as code allows DevOps Engineers to use the same workflows used by software developers to version, roll back, and otherwise manage changes.

The term Infrastructure as Code encompasses everything from bootstrapping to configuration to orchestration, and it is considered a best practice in the industry to manage all infrastructure as code. This technique precipitated the explosion in system complexity seen in modern DevOps organizations.

### Declarative vs. imperative approaches to IaC
There are 2 ways to approach IaC: declarative or imperative. 

A declarative approach defines the desired state of the system, including what resources you need and any properties they should have, and an IaC tool will configure it for you. 

A declarative approach also keeps a list of the current state of your system objects, which makes taking down the infrastructure simpler to manage.

An imperative approach instead defines the specific commands needed to achieve the desired configuration, and those commands then need to be executed in the correct order. 

Many IaC tools use a declarative approach and will automatically provision the desired infrastructure. If you make changes to the desired state, a declarative IaC tool will apply those changes for you. An imperative tool will require you to figure out how those changes should be applied.

IaC tools are often able to operate in both approaches, but tend to prefer one approach over the other.