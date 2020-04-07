---
id: terraform-overview
title: Terraform Overview
---

Overview

Terraform is a tool for building, changing, and versioning infrastructure safely and efficiently. Terraform can manage existing and popular service providers as well as custom in-house solutions.

 

The key features of Terraform are:

 

Infrastructure as Code

Infrastructure is described using a high-level configuration syntax. This allows a blueprint of your datacenter to be versioned and treated as you would any other code. Additionally, infrastructure can be shared and re-used.

 

Execution Plans

Terraform has a "planning" step where it generates an execution plan. The execution plan shows what Terraform will do when you call apply. This lets you avoid any surprises when Terraform manipulates infrastructure.

 

Resource Graph

Terraform builds a graph of all your resources, and parallelizes the creation and modification of any non-dependent resources. Because of this, Terraform builds infrastructure as efficiently as possible, and operators get insight into dependencies in their infrastructure.

 

Change Automation

Complex change sets can be applied to your infrastructure with minimal human interaction. With the previously mentioned execution plan and resource graph, you know exactly what Terraform will change and in what order, avoiding many possible human errors.

 

 

If it can be captured with code, it can be automated

 

 

Usage Pattern and where it's valuable. - Dig into this

Reproducible Infrastructure

Terraform is capable of providing the same 

Terraform allows us to enforce parody with other environments.

                • By using the same set of Terraform configurations, we can provision identical, on demand staging, QA, and production environments. (This means having the ability to use the same code for stage and production).

Modules

Terraform modules allow us to encapsulate a set of Terraform configurations and expose only the components we want to users.