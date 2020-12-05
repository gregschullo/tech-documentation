---
id: failure
title: Failure
---

Failure

1. lack of success.
1. the omission of expected or required action.

## Fail Fast

An approach should be used to recognize an error condition and recover as fast as possible, to minimize impact on an application.  
We aim to fail fast to mitigate failures

## Fail Silent

While techniques such as failing fast are used to mitigate cascading failures and supporting application resiliency, perception from users also factors into reporting of application down time. The following patterns address proper techniques for the handling of errors and the unavailable dependencies. Simple actions such as gracefully handling errors or attempting a retry of an operation that makes sense to retry silently on behalf of the client.

## Types of Failure

### Cascading Failure

A cascading failure is an error in an application which causes an error in a downstream dependency.  

For example, if dependency A has failed and is experiencing an increase in time before returning an error condition, the thread becomes blocked and cannot be utilized for other inbound requests or outbound application calls. As the user waits, they may refresh and generate a new call and utilizes a different thread while the initial still is blocked. This combination can easily lead to a cascading failure of the entire application from the single unavailable resource.


