---
id: kubernetes-overview
title: Kubernetes Overview
---

Kubernetes notes

Kubernetes (k8s) - containerization orchestration tool

- makes it easy to manage and automate containerized application infrastructure

 

Container - wraps software in independent, portable packages, making it easy to quickly run software in a variety of environments

 

kubeadm - tool that automates a lot of setting up a kubernetes cluster

 

kubelet - essential component of kubernetes. Essentially an agent on each node that acts as a middleman to the Kubernetes API and the docker container runtime.

 

kubectl - command line tool used to interact with the k8s cluster once the cluster is up and running.

- kubectl version

- kubectl get nodes

- kubectl get pods

- kubectl get deployments

- kubectl get events

- kubectl get services

- kubectl config view

 

Create a Kubernetes cluster

 

Deploy an application

 

Explore your app

 

Expose your app publicly

 

Scale up your app

 

Update your app

 

 

Minikube

- minikube start

- minikube dashboard

- minikube stop

- minikube delete

Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a VM on your laptop for users looking to try out Kubernetes or develop with it day-to-day.

 

 

Kubernetes Documentation

https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-binary-using-curl

 

Install the latest kubectl binary release using curl:

curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl

 

Default configuration settings are located at: 

~/.kube/config

 

Check the kubectl cluster state:

kubectl cluster-info