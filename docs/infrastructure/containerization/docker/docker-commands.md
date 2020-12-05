---
id: docker-commands
title: Docker Commands
---

`docker ps` - lists containers (default shows only running containers)  
`docker exec -it` - container name /bin/bash  

## Dockerfile Keywords

FROM - a pre-existing base image.  
WORKDIR - specifies all subsequent actions should be taken from the directory specified. This should be a directory in your image filesystem.  
COPY - copy a file from your host to another location. ( . refers to the present location).  
RUN - runs a command inside your image file filesystem.  

## Common Dockerfile Run Flags  

Build Command:  
`docker build --tag <imagename> .`  
Example: `docker build --tag bulletinboard:1.0 .`  

`docker run --publish <port>:<port> --detach --name <appname> <image>`  
Example: `docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0`  

- --publish asks Docker to forward traffic incoming on the host’s port 8000, to the container’s port 8080. Containers have their own private set of ports, so if you want to reach one from the network, you have to forward traffic to it in this way. Otherwise, firewall rules will prevent all network traffic from reaching your container, as a default security posture.
- --detach asks Docker to run this container in the background.
- --name specifies a name with which you can refer to your container in subsequent commands
