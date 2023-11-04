## CAP Theorem
CAP is an acronym that stands for Consistency, Availability and Partition Tolerance. According to CAP theorem, any distributed system can only guarantee two of the three properties at any point of time. You can’t guarantee all three properties at once.

- Consistency. All reads receive the most recent write or an error.
- Availability. All reads contain data, but it might not be the most recent.
- Partition tolerance. The system continues to operate despite network failures (ie; dropped partitions, slow network connections, or unavailable network connections between nodes.)

[docs](https://mwhittaker.github.io/blog/an_illustrated_proof_of_the_cap_theorem/)
