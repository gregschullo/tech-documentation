---
id: chaos-engineering
title: Chaos Engineering
---

## Chaos Principles

### Define Steady State

App depends on A, B, C  
UI show service errors  
App captures runtime errors  

### Plan an Experiment

What if a database is down?  
What if a pod dies?  
What if service A is down?  

### Contain the Blast Radius

How fast did we fail?  
How fast did we recover?  
Notify people involved/affected.  

### Scale or Squash

Add a fix/resiliency  
Rerun experiment  
Increase blast radius  

## Chaos Rules

If you know your experiment will fail, don't do it.  
Chaos experiments shouldn't come as a surprise.  
Understand your application topology.  
Limit the blast radius of your chaos experiment.  
Always be in control of the situation during the experiment.  
Communicate about the planned chaos experiments in advance and prepare for it.  

## Other Chaos Resources

[Principles of Chaos](https://principlesofchaos.org/)  
[Aweome Chaos Engineering](https://github.com/dastergon/awesome-chaos-engineering)  
