---
id: kubernetes-introduction
title: Kubernetes Introduction
---

## What is Kubernetes?

* Open source platform
* Automation of application containers
  * Deployment
  * Scaling
  * Operating

* Started by Google in 2014
* Cloud Native Computing Foundation

* Abbreviated as K8S
* Kubernetes is of Greek origin and stands for Pilot or Governor

* Deploy applications using containers
  * Virtualize operating system, not hardware
    * More efficient use of resources
    * Small and fast (lightweight)
    * One app per container

Benefits of K8S

* Portable (private cloud, public cloud, hybrid, or multi-cloud)
* Extensible (modular and plugable)
* Self-healing (fault tolerant) auto placement, auto restart auto replication and auto Scaling

* Quickly and efficiently respond to demand
  * Deploy applications quickly
  * Roll out new features easily
  * Scale easily
  * Use only required resources

The goal of K8S is to make running applications in the cloud simpler

Container centric infrastructure. Move away from host centric infrastructure.

This results in taking full advantage of benefits fundamental to containers. Deployments are simpler, more portable, more predictable, and easier to manage.

k8S runs on top of linux but is platform agnostic. That means it can be run on top of bare metal, on servers, on desktops or laptops, on VMs, on cloud providers, or on OpenStack.

### Why Use Kubernetes?

Running apps in the cloud is simpler

Container-centric infrastructure

* Away from host-centric infrastructure

These items result in:

* Taking full advantage of benefits fundamental to containers
* Deployments
  * Simpler
  * Portable
  * Predictable
* Easier Management

## Introduction to Docker

Software container platform

* Virtualization at the operating system level

Run and manage apps

* Isolated containers
* Deployed as single packages

Software Delivery

* Roll out
  * New Features
  * Updates
* Built in security capabilities
* Consistency
* Linux and Windows based apps

### Docker for Developers

Portability

* Focus on writing code. Doesn't matter what system it will run on.
* Collaboration
  * Sharing apps
* Debugging
  * Consistent, known operating environment

### Docker for System Admins

Software Delivers
Deploy

* Bug fixes
* Updates
* New features

Scale Apps
Automatically

* Build
* Ship
* Test
* Deploy

### Docker for Enterprise

Application Platform

* Cloud
* Multi Cloud
* Hybrid Cloud
  * On-premises

Architectures

* Traditional
  * Digital Transformation
    * Cost reduction, security improved, portability
* Microservices

## Docker Swarms

Native Clustering

Docker Engines in a Swarm are said to run in Swarm Mode

A swarm consists of manager nodes and worker nodes

* Worker nodes to the work and execute tasks (containers)
* Master node is the node that controls the worker nodes

## Kubernetes on a Local Machine

[Learning Environment](https://kubernetes.io/docs/setup/#learning-environment)  

Minikube: Greatly simplifies process of getting kubernetes up and running on a local machine.

## Kubectl Command Line Interface

kubectl [command] [TYPE] [NAME] [flags]  
