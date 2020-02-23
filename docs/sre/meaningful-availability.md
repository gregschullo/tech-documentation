---
id: meaningful-availability
title: Meaningful Availability
---

[Meaningful Availability Article](https://www.usenix.org/system/files/nsdi20spring_hauer_prepub.pdf)  

## Abstract

High availability is critical for applications because without it, users cannot rely on it for important work.

## Related Work

Three desirable properties of an availability metric: meaningful, proportional, and actionable.

## Motivation

Availability is the ability of a service to perform its required function at an agreed instant or over an agreed period of time. At a high level, all availability metrics have the following form:

availability = good service / total demanded service

Availability metrics are valuable for users because they tell them whether or not a service is suitable for their use case.  
Availability metrics are valuable for developers because they help prioritize their work to improve the system.  

Proportional metrics enable developers to quantify the benefit of an incremental improvement.  
Actionable metrics enable developers to zero in on episodes of worst availability and find problems that need addressing.  

### Time based availability metrics

availability = MTTF / (MTTF + MTTR)  
Where MTTF = mean-time-to-failure and MTTR = mean-time-to-recovery

This measure is based on the duration of the system being up or down.

uptime = good service  
downtime = bad service  

availability = uptime / (uptime + downtime)

Commonly used time-based availability metrics:

1. Are not proportional to the severity of the system's unavailability (a downtime with 100% failure rate weighs the same as one with 10% failure rate)
1. Are not proportional to the number of affected users (a downtime at night has the same weight as downtime during a peak period)
1. Are not actionable because they do not, in themselves, provide developers guidance into the sources of failures
1. Are not meaningful in they rely on arbitrary thresholds or manual judgments

### Count-based availability metrics

Success ratio is the ratio of successful requests to total requests. Since success-ratio does not use a threshold, it is more proportional than commonly used time-based metrics.  

Success ratio is as an availability measure is popular because it is easy to implement and is a reasonable measure.  

Count-based (success-ratio) availability metrics:

1. Are not meaningful in they are not based on time
1. Are biased by highly active users
1. Are biased because of different client behavior during outages

### Probes

Synthetic probes may mitigate some of the shortcomings of success-ratio.

A metric which uses synthetic probes may not be representative of real-user experience

Availability metrics based on synthetic probes:

1. Are not representative of user activity
1. Are not proportional to what users experience

### Actionable metrics

Availability metrics mentioned above represent different points in the tradeoffs between proportional and meaningful. They all have a similar weakness though: actionable. A single number with a reporting period does not allow enough insight into the source or shape of unavailability.

## Proportional and Meaningful Availability: User-Uptime

As discussed, prior metrics mentioned for availability are not meaningful or proportional. This equation satisfies both proportionality and meaningfulness:

user-uptime = [summation](https://en.wikipedia.org/wiki/Summation) uptime per user / [summation](https://en.wikipedia.org/wiki/Summation) (uptime per user + downtime per user)  

The calculation of this metric is not straightforward as it requires the definition of uptime and downtime per user.  

### Events and Durations

Use user requests as probes. A user's perception of a system being up or down depends on the response they receive when interacting with it. Successful == up, unsuccessful == down  

If there is *any* chance that a user may perceive a failure, consider it as a failure.  

### Challenges with User Uptime

How would you label duration as up or down?  
How do you address if users are active or not?  

#### Labeling Durations

If back to back events differ, there are 3 choices for labels:

1. After a successful (failed) operation, assume the system is up (down) until the user sees evidence to indicate otherwise
1. Before a successful (failed) operation, assume the system is up (down) until the previous event
1. Split the duration between events. Half the time us uptime and half the time is downtime

#### Active and Inactive Periods

Cutoff Duration - if a user has been inactive for more than the specified (cutoff) duration, consider the user as inactive and stop recording uptime and downtime for that user.  

Definition (uptime, downtime): A segment between two consecutive events originating from the same user is:

- inactive if the two events are further apart than the cutoff duration
- uptime if the first of the two events was successful
- downtime if the first of the two events was unsuccessful (failed)

For each user and a measurement period of interest, uptime is the sum of lengths of uptime segments and downtime is the sum of lengths of downtime segments.

## Actionable Availability: Windowed User Uptime

Monthly or quarterly availability reporting does not distinguish between a system that routinely fails a small percentage of requests from a system where failures are rare, but experience longer outages.  
To distinguish long outages from shorter, more frequent outages, the timescale of outages must be looked at.  
Windowed User Uptime addresses that by combining information from all timescales simultaneously.  

### Calculating Windowed User Uptime

Windowed User Uptime iterates over all time windows fully included in the period of interest and it computes availability score for each window size. The score for a window size w is the availability of the *worst* window size w in the period of interest. Availability for a particular window from t1 to t2 is calculated as follows:  

A(t1,t2) = good service between t1 and t2 / total service between t1 and t2

To obtain the score for a window size w, enumerate all windows of duration w and compute the availability for each of them and take the lowest value. The result is a score for each window size. This score is the Minimal Cumulative Ratio (MCR).  

MCR = Minimal Cumulative Ratio

MCR picks the worst availability for each window size because that is the window that had the most impact on overall availability.  

### [Monotonicity](https://en.wikipedia.org/wiki/Monotonic_function) with Integer Multiple-Sized Windows

Expect larger windows to have better availability.  

### [Monotonicity](https://en.wikipedia.org/wiki/Monotonic_function) in the General Case

The worst availability of a day is always better than the worst availability of an hour or of a minute.  

## Evaluation

### Availability Due to Hyperactive Users

Bias due to hyper active users can negatively affect success-ratio.  
When this bias occurs, success-ratio can mislead us towards thinking that an incident is much more or much less severe than it actually is.  

### Availability and Hyper Active Retries

Retries can drive success ratio down even though only a small number of users are impacted.  
Users (and the clients they use) may behave differently during incidents than during normal operations.  
 
 - Clients may make many more requests during incidents or they may just decide to give up on the system and try few hours later. In both cases, success-ratio over or under estimates the magnitude of an outage while user-uptime matches user perception.

### Quantifying Impact of Outages

When using success ratio, quantifying the impact of an outage is difficult because it is not based on time.  
Seconds of downtime, which we compute as part of user uptime, provides more insight. From there we see the minutes of downtime that our users experience.  

### Combining User Uptime and Success Ratio

Sometimes, combining user-uptime with success-ratio yields valuable insights.  

### Windowed Uptime Causes Burstiness of Unavailability

When looking at availability metrics aggregated over longer periods of time, it is difficult to see short periods of poor availability.  
Teams can use windowed user uptime to identify root-cause and then fix the sources of these shorter episodes, improving overall availability.  

## Applicability of Windowed User Uptime

To calculate windowed user-uptime, fine-grained logs of individual user operations are required. These logs must include a key that enables chaining together operations for each user, the timestamp of the operation, and the status of each operation (success or failure).

In the simplest case, retaining the cumulative count of up and down minutes for each minute is needed to calculate windowed user-uptime over any time duration.  

## Conclusion

User Uptime combines the advantages of per-user aggregation with those of using a time-based availability measure. 

User Uptime avoids multiple kinds of bias: hyper-active users contribute similarly to the metric as regular users, and even behavioral changes during an outage result in a proportional and meaningful measurement that in many cases is even more precise than success-ratio.  

windowed availability allows for the study of multiple time-scales from single minutes to a full quarter in an easy to understand graph.  

