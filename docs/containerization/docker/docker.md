# Docker

## Docker Concepts

Docker is a platform to build, run, and share applications within containers. The use of containers to deploy applications is known as containerization.  
Containerization is increasingly popular because containers are:  

- Flexible: Even the most complex applications can be containerized.
- Lightweight: Containers leverage and share the host kernel, making them much more efficient in terms of system resources than virtual machines.
- Portable: You can build locally, deploy to the cloud, and run anywhere.
- Loosely coupled: Containers are highly self sufficient and encapsulated, allowing you to replace or upgrade one without disrupting others.
- Scalable: You can increase and automatically distribute container replicas across a datacenter.
- Secure: Containers apply aggressive constraints and isolation to processes without any configuration required by the user.

### Dockerfile

Common Dockerfile Commands:  

FROM - a pre-existing base image.  
WORKDIR - specifies all subsequent actions should be taken from the directory specified. This should be a directory in your image filesystem.  
COPY - copy a file from your host to another location. ( . refers to the present location).  
RUN - runs a command inside your image file filesystem.  

Common Dockerfile Run Flags:  

Build Command:  
`docker build --tag <imagename> .`  
Example: `docker build --tag bulletinboard:1.0 .`  

`docker run --publish <port>:<port> --detach --name <appname> <image>`  
Example: `docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0`  

- --publish asks Docker to forward traffic incoming on the host’s port 8000, to the container’s port 8080. Containers have their own private set of ports, so if you want to reach one from the network, you have to forward traffic to it in this way. Otherwise, firewall rules will prevent all network traffic from reaching your container, as a default security posture.
- --detach asks Docker to run this container in the background.
- --name specifies a name with which you can refer to your container in subsequent commands

## Docker Compose

Docker Compose is a tool provided by Docker to build and run multi container applications.  

### Services

Services are the components of your architecture or application. A service is something that would usually have an independent Dockerfile created for.  
