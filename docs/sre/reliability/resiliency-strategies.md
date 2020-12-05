---
id: resiliency-strategies
title: Resiliency Strategies
---

Resiliency strategies are actions taken to handle issues experienced by an application or system.  

## Basic Resiliency Patterns

Resiliency strategies are actions taken to handle issues experienced by the application or system.  

### Exception Handling

Exception handling is the process of responding to occurrences of exceptions thrown during a program's execution.  

Error handling and design for all dependencies that could be unavailable or return an error is critical. Each type of technology is going to have protocol or implement specific errors and exceptions. Proper design dictates understanding the taxonomy of both transient and technology specific error conditions and coding to properly handle those conditions. Such exceptions could be related to connectivity, network communication, service availability, or service error. In addition, from a service functionality perspective, each can return errors such as invalid inputs, information not found, etc.

### Retry

There are types of errors where it is advisable to retry an operation. For example, network type errors can be transient in nature and may shortly resolve themselves. However, when trying to design or mitigate a [cascading failure](/sre/reliability/failure.md#cascading-failure) scenario, endless retrying a failing operation is unwarranted.

The concept of retry relies on an endpoint or transaction specific policy that defines parameters that control the behavior. A list of error type or exceptions should be explicitly defined to separate out non-recoverable from recoverable errors. For example, a service that is returning an internal null pointer exception in all likelihood will act the same when repeatably called. However, a bandwidth or rate limiting type exception is definitely recoverable. In addition to the condition for retry, the number of consecutive retries and the delay between attempts should be bounded. A single retry attempt with a delay of 50ms would be a nominal scenario.

### Timeout

A timeout is the time to wait before interrupting a dependency call and throwing an exception.  

To determine timeout, use historical or testing statistics of dependencies.  
For example, if both the average and maximum transaction times are determined for a service, then a client doesn’t need to wait past these values. If through testing or metrics it is determined that the greatest response time Service A will take is 700ms then our client can take action after 700ms rather than waiting for the default timeout of the service at 5000ms. The goal being to free-up resources involved in the dependency calls as soon as possible. Also, the usage of timeout values can decrease user wait times and ultimately improve their experience.  

### Failover

Failover is providing the means to switch to a redundant or standby service or hardware upon a failure or failures to your application.  

Infrastructure should be deployed to have multiple instances of technology for a given service so a failure of one component doesn’t bring down an entire service. Examples of these infrastructures include, but are not limited to, load balancers, gateways, and firewalls. As such, the client needs the ability to detect an error condition and failover to different isolated technology instances.  

### Fallback

A fallback is a plan of action or defined behavior that may be used if a defined error or failure occurs in your application.  

If a dependency is unavailable or is returning an error after a retry, then a strategy should be implemented for this situation. Fallback solutions are often very specific to the system they are designed for.  

An example of a fallback may be a situation where your application is capped at receiving 200 messages. At this point any additional messages will automatically send new messages over the threshold to a different service to handle them and process them as the original system would.  
Another example of a fallback may be where a CSS file is written to handle media queries, but the code is written with the ability to fall back and use a different CSS file if the browser a user is utilizing does not support media queries.  

### Governors / Bulkhead

A governor constrains actions to a fixed-size resource pool to prevent a large amount of calls from over utilizing a resource.  

An example of where a governor could be utilized is when an application is capable of handling a large load, but will fail if the rate of use climbs too quickly. A governor can be put in place to control the amount of requests being sent to the application and can allow for a more graceful increase in requests to avoid bringing down the application.  

### Circuit Breakers

A circuit breaker is deployed to prevent making calls to dependencies that are failing.  

If a dependency is performing normally, the circuit breaker remains in a closed state and calls proceed through the circuit breaker unimpeded. If a certain number of errors occur in a defined period of time, the circuit breakers goes into an open state. While a circuit breaker is in an open state, all calls to the dependency are short circuited and a failure exception is returned. After a given timeout period, the circuit breaker will move into a half-open state and attempt to make a new call to the underlying dependency. If successful, the state will be reset to closed and if it fails will be returned to an open state and have to wait another timeout period.
