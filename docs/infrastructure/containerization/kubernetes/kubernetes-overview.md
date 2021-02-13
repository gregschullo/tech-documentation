---
id: kubernetes-overview
title: Kubernetes Overview
---

[Kubernetes Vendor Documentation](https://kubernetes.io/)  

Kubernetes (k8s) - Open-source system for automating deployment, scaling, and management of containerized applications.

- makes it easy to manage and automate containerized application infrastructure

Container - wraps software in independent, portable packages, making it easy to quickly run software in a variety of environments.  

**kubeadm** - tool that automates a lot of setting up a kubernetes cluster.  
**kubelet** - essential component of kubernetes. Essentially an agent on each node that acts as a middleman to the Kubernetes API and the docker container runtime.  
**kubectl** - command line tool used to interact with the k8s cluster once the cluster is up and running.  

- kubectl version
- kubectl get nodes
- kubectl get pods
- kubectl get deployments
- kubectl get events
- kubectl get services
- kubectl config view

[Kubernetes Pods](https://kubernetes.io/docs/concepts/workloads/pods/)  

Create a Kubernetes cluster

Deploy an application

Explore your app

Expose your app publicly

Scale up your app

Update your app



Kubernetes Documentation

[Install kubectl Documentation](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-binary-using-curl)  

Install the latest kubectl binary release using curl:  
`curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl`  

Default configuration settings are located at:  
`~/.kube/config`

Check the kubectl cluster state:  
`kubectl cluster-info`  
