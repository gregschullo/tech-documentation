---
id: elastic-apm-overview
title: Elastic APM Overview
---

Elastic APM agents capture spans, transactions, errors, and metrics (also known as Events) within their instrumented applications.

 

Spans - https://www.elastic.co/guide/en/apm/get-started/7.0/transaction-spans.html

Spans contain information about a specific code path that has been executed. They measure from start to end of an activity and they can have a parent/child relationship with other spans.

 

Agents automatically instrument a variety of libraries to capture these spans from within the application. In addition, you can use the Agent API for ad hoc instrumentation of specific code paths.

 

A span contains:

                • a transaction.id attribute that refers to their parent transaction.

                • a parent.id attribute that refers to their parent span, or their transaction.

                • start time and duration

                • name

                • type

                • stack trace (optional)

 

Spans are stored in span indices. These indices are separate from transaction indices by default.

 

 

Transactions - https://www.elastic.co/guide/en/apm/get-started/7.0/transactions.html

Transactions are a special kind of span that have additional attributes associated with them. They describe an event captured by an Elastic APM agent instrumenting a service. You can think of transactions as the highest level of work you're measuring within a service. As an example, a transaction may be a:

                • Request to your server

                • Batch job

                • Background job

                • Custom transaction type

 

Agents decide whether to sample transactions or not and provide settings to control sampling behavior. If sampled, the spans of a transaction are sent and stored as separate documents. Within one transaction there can be 0, 1, or many spans captured.

 

 A transaction contains:

                • the timestamp of the event

                • A unique id, type, and name

                • data about the environment in which the event is recorded:

                                ○ Service - environment, framework, language, etc

                                ○ Host - architecture, hostname, IP, etc

                                ○ Process - args, PID, PPID, etc

                                ○ URL - full, domain, port, query, etc

                                ○ User - (if supplied) email, ID, username, etc

                • other relevant information depending on the agent. An example would be, the JavaScript RUM agent captures transaction marks, which are points in time relative to the start of the transaction with some label.

 

Transactions are stored in transaction indices.

 

 

Errors - https://www.elastic.co/guide/en/apm/get-started/7.0/errors.html

An error event contains at least information about the original exception that occurred or about a log created when the exception occurred. For simplicity, errors are represented by a unique ID.

 

An error contains:

                • Both the captured exception and the captured log of an error can contain a stack trace, which is helpful for debugging

                • The culprit of an error indicates where it originated

                • An error may relate to the transaction during which it happened, via the transaction.id

                • Data aboht 

 

Metrics - 
