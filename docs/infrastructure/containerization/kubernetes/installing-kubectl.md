---
id: installing-kubectl
title: Installing Kubectl
---

[Kubernetes kubectl Installation Documentation](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-macos)  

## Prerequisites

Ensure virtualization is supported on your macOS, open terminal and run:  
`sysctl -a | grep -E --color 'machdep.cpu.features|VMX'`

If you see VMX in the output (should be colored), the VT-x feature is enabled in your machine.

## Installing Kubectl

1. Install the latest version of kubectl
`curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl"`
1. Make the kubectl binary executable
`chmod +x ./kubectl`
1. Move the binary in to your PATH
`sudo mv ./kubectl /usr/local/bin/kubectl`
1. Test to ensure the version you installed is up to date.
`kubectl version --client`

Alternatively, install kubectl with Homebrew
`brew install kubectl`
