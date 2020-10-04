---
id: installing-minikube
title: Installing Minikube
---

## Prerequisites

kubectl  
A Hypervisor such as Hyperkit, VirtualBox, or VMware fusion.  

## Install Minikube on MacOS

Install the latest version of minikube  

```terminal
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64 \
  && chmod +x minikube
```

Add the minikube executable to your path  
`sudo mv minikube /usr/local/bin`  

Alternatively, install minikube with Homebrew  
`brew install minikube`  

Confirm successful installation of the Hypervisor and minikube.
`minikube start --driver=virtualbox`  

Reference the Kubernetes documentation for a [full list of VM drivers](https://kubernetes.io/docs/setup/learning-environment/minikube/#specifying-the-vm-driver) if not using VirtualBox.  

### Successful Output

``` terminal
minikube start --driver=virtualbox
😄  minikube v1.9.0 on Darwin 10.15.3
✨  Using the virtualbox driver based on user configuration
💿  Downloading VM boot image ...
    > minikube-v1.9.0.iso.sha256: 65 B / 65 B [--------------] 100.00% ? p/s 0s
    > minikube-v1.9.0.iso: 174.93 MiB / 174.93 MiB [-] 100.00% 9.84 MiB p/s 18s
💾  Downloading Kubernetes v1.18.0 preload ...
    > preloaded-images-k8s-v2-v1.18.0-docker-overlay2-amd64.tar.lz4: 542.91 MiB
🔥  Creating virtualbox VM (CPUs=2, Memory=4000MB, Disk=20000MB) ...
🐳  Preparing Kubernetes v1.18.0 on Docker 19.03.8 ...
🌟  Enabling addons: default-storageclass, storage-provisioner
🏄  Done! kubectl is now configured to use "minikube"
```

To check the status of the cluster, run:  
`minikube status`  

Output should be similar to the following:  
m01  
host: Running  
kubelet: Running  
apiserver: Running  
kubeconfig: Configured  

minikube delete  

minikube start --cpus 4 --memory 6144