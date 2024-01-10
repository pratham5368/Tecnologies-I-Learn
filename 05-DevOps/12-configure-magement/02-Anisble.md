## Ansible
Ansible is an open-source configuration management, application deployment and provisioning tool that uses its own declarative language in YAML. Ansible is agentless, meaning you only need remote connections via SSH or Windows Remote Management via Powershell in order to function

[docs](https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.4)
## 1. How does Ansible work?
Ansible is a combination of multiple pieces working together to become an automation tool. Mainly these are modules, playbooks, and plugins.

- Modules are small codes that will get executed. There are multiple inbuilt modules that serve as a starting point for building tasks.
- Playbooks contain plays which further is a group of tasks. This is the place to define the workflow or the steps needed to complete a process
- Plugins are special kinds of modules that run on the main control machine for logging purposes. There are other types of plugins also.
![](https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/319/original/working_of_ansible.jpg?1618840647)
## 2. What are the features of Ansible?
It has the following features:

- Agentless – Unlike puppet or chef there is no software or agent managing the nodes.
- Python – Built on top of python which is very easy to learn and write scripts and one of the robust programming languages.
- SSH – Passwordless network authentication which makes it more secure and easy to set up.
- Push architecture – The core concept is to push multiple small codes to the configure and run the action on client nodes.
- Setup – This is very easy to set up with a very low learning curve and any open source so that anyone can get hands-on.
- Manage Inventory – Machines’ addresses are stored in a simple text format and we can add different sources of truth to pull the list using plugins such as Openstack, Rackspace, etc
## 3.  What is a YAML file and how do we use it in Ansible?
YAML or files are like any formatted text file with few sets of rules just like JSON or XML. Ansible uses this syntax for playbooks as it is more readable than other formats.
An example of JSON vs YAML is:
```
{
 "object": {
"key": "value",
"array": [
  {
    "null_value": null
  },
  {
    "boolean": true
  },
  {
    "integer": 1
  },
  {
    "alias": "aliases are like variables"
  }
]
 }
}
---
object:
 key: value
 array:
 - null_value:
 - boolean: true
 - integer: 1
 - alias: aliases are like variables
 ```
