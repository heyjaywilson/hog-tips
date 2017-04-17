# When to Use FixtureNet
Use FixtureNet to connect media servers, ArtNet nodes, E1.31(SACN), video switchers, and Visualizers.
## How to setup a FixtureNet network
#### IP addresses and net masks
All IP addresses in a single FixtureNet network have to be in the same range and cannot be conflicting.  All net masks on the network have to be them same.

**Example of IP addresses in the same range**:

| Device | IP address  | net mask |
| --- | --- | ---
| Hog 4 | 10.0.0.1    |255.0.0.0|
| ArtNet node | 10.0.0.101  |255.0.0.0|
| Media server |10.101.0.101 |255.0.0.0|
Why the table above does work:
- IP addresses are all beginning with 10
- The netmasks are the same for all devices

**Example of IP addresses not in the same range**:

| Device | IP address | net mask |
| --- | --- | --- |
|  Hog 4 | 10.0.0.1 | 255.0.0.0 |
| ArtNet node | 2.0.0.1 | 255.255.0.0 |
| Media server | 2.10.10.1 | 255.255.0.0 |
| ArtNet node 2 |10.101.10.1 | 255.255.255.0 |
Why the table above does NOT work:
- IP addresses are not beginning with the same number
    - 10.0, 10.101, 2.0, and 2.10 are all different
- The netmasks are different on all devices
