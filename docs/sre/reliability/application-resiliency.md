---
id: application-resiliency
title: Application Resiliency
---

## Resilience

1. the capacity to recover quickly from difficulties; toughness.  
1. the ability of a substance or object to spring back into shape; elasticity.

Application resiliency is the ability of an application to react to issues with components or dependencies and remain available to provide the best possible service to users.  

Application failures and outages can occur at multiple levels of the technical architecture topology. Common issues experienced include, but are not limited to, data management, over consumption of resources (such as CPU or memory), and application deployments (code changes) which introduce new issues.  

In order to improve application quality and reduce operational costs and penalties, the number of occurrences and duration of outages need to be reduced.  

[Patterns/Strategies for Resiliency](/sre/reliability/resiliency-strategies.md)  

It is important to keep in mind that you will never be 100% failure-free. The goal of the strategies/patterns linked above are to more accurately identify failures, reduce the number of failures, and recover from failures faster.  
