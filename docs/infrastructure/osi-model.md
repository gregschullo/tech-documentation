---
id: osi-model
title: OSI Model
---

Application Layer - Responsibility of the host. Services layer.

Presentation Layer - Responsibility of the host. Services layer.

Session Layer - Responsibility of the host. Middleware layer.

Transport Layer - Responsibility of the host. Responsibility of the network. Middleware layer.

Network Layer - Responsibility of the network. The operating systems layer.

Data Link Layer - Responsibility of the network. The operating systems layer.

Physical Layer - Responsibility of the network. The hardware layer.


Physical Layer - Transmits electrical signals to the hosts. The hardware (Network Interface Card or NIC, switch port, etc) is responsible for this.  
Data Link Layer - Defines the rules and procedures for accessing the physical layer. Defines how hosts are identified on the network and how the network mediums are accessed. It also specifies how to verify data received from the physical layer.  
Network Layer - This enables the routing of the data. It specifies how to recognize the address of neighboring nodes and routers, for example. It basically specifies how to determine the next network point a packet should be forwarded toward its destination. The internet protocol operates at this layer.  
Transport Layer - On the sending host, the transport layer receives information from the upper layers on the OSI model. It then divides that data into small, transmittable chunks called packets. On the receiving host, the transport layer resembles those packets from the lower layers of the OSI model. The transport layer also provides error checking mechanisms that ensure the data arrives at the destination host in tact. The transmission control protocol or TCP, and the User Datagram Protocol or UDP, all operate at layer 4.  
Session Layer - Responsible for establishing and maintaining connections between source and destination network hosts. These connections are referred to as sessions.  
Presentation Layer - Responsible for insuring the information passing through all of the OSI layers is formatted correctly for the application on the destination system.  
Application Layer - Responsible for providing applications with a way that actually accesses the network.  
