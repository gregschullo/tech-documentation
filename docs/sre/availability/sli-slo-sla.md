---
id: sli-slo-sla
title: SLI, SLO, SLA
---

SLIs drive SLOs which inform SLAs.  

## Service Level Indicator (SLI)

An SLI is a clear, numerical indicator that defines availability. Typically, they are metrics over time (telemetry) such as request latency, batch throughput, or percentage of failures per number of requests. SLIs should be able to be boiled down to is this single number good or bad.  

Example of an SLI: 95th percentile latency of homepage requests over the past 5 minutes is less than 300ms.  

## Service Level Objective (SLO)

An SLO is a binding target for a collection of SLIs. SLOs define upper and lower bounds.  

Example of SLO: 95th percentile homepage SLI will succeed 99.9% over trailing year.  

## Service Level Agreement (SLA)

An SLA is an agreement of what will happen if an agreed upon level of reliability is not met.  

Example of SLA: Service credits if 95th percentile homepage SLI succeeds less than 99.5% over trailing year.  
