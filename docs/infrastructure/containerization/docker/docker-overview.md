---
id: docker-overview
title: Docker Overview
---

[Docker Vendor Documentation](https://www.docker.com/)  
[Docker for the Virtualization Admin](https://github.com/gregschullo/documentation/blob/master/docs/container-platforms/docker-for-the-virtualization-admin.pdf)  

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same way you manage your applications. By taking advantage of Docker's methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.  

Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host. Containers are lightweight because they don't need the extra load of a hypervisor, but run directly within the host machine's kernel.  

## Docker Concepts

Docker is a platform to develop, deploy, share, and run applications with containers. The use of containers to deploy applications is called containerization.  

Containerization is increasingly popular because containers are:  

- Flexible - even the most complex applications can be containerized  
- Lightweight - containers leverage and share the host kernel  
- Interchangeable - deploy updates and upgrades on the fly  
- Portable - build locally, deploy to the cloud, and run anywhere  
- Scalable - increase and automatically distribute container replicas  
- Stackable - stack services vertically and on the fly  

## Images and Containers

A container is launched by a running image. An image is an executable package that includes everything needed to run an application. The code, a runtime, libraries, environment variables, and configuration files.  

A container is a runtime instance of an image - what the image becomes in memory when executed (that is, an image with state or a user process). You can see a list of running containers with the command, `docker ps`, just as you would in Linux.  

## Containers and Virtual Machines

A container runs natively on Linux and shares the kernel of the host machine with other containers. It runs a discrete process, taking no more memory than any other executable, making it lightweight.  
By contrast, a virtual machine (VM) runs a full blown "guest" operating system with virtual access to host resources through a hypervisor. In general, VMs provide an environment with more resources than most applications need.

## Docker Compose

Docker Compose is a tool provided by Docker to build and run multi container applications.  

### Services

Services are the components of your architecture or application. A service is something that would usually have an independent Dockerfile created for.  