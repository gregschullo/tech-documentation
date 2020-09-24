---
id: networking-basics
title: Networking Basics
---

Networks use protocols to talk to one another (think of protocol as a language).  
Computer systems need to speak the same language to send and receive data.  
IP Protocol  

- A networking protocol used on the internet
- Works with other protocols such as TCP (Transmission Control Protocol)  
- Works with UDP (User Datagram Protocol)

## Internet, Networks, Routers

You can configure a Linux System to fulfill a variety of roles.  

- Domain Controller
- Database Server
- DHCP Server
- Web Server
- Email Server
- File and Print Server
- Packet-filtering, stateful, or even application level firewalls
- Proxy Server
- Content Filtration Server
- Router

The entire picture of the IP protocol and the transmission control protocol: TCP/IP  
TCP ensures data exchanged between two network hosts is exchanged reliably. Typical upper-layer applications that use TCP are: Web Servers, Email Servers, and FTP Servers.  
UCP - User Datagram Protocol  

- UDP is a connectionless protocol  
- UDP packets are sent unacknowledged  
- Applications that can tolerate less reliability can use UDP  
- Typical upper-layer applications that use UDP are: streaming audio and VoIP (Voice over IP)  

ICMP - Internet Control Message Protocol  
ICMP is for testing and verifying network communications between hosts.  

Ports  
TCP and UDP both provide ports for upper layer protocols.  
Port numbers range from 0 up to 65,536 for each individual IP address.  
Well known Ports range from 0 - 1023.  
Registered Ports: An organization can program their own network service and then apply for a registered port number to be assigned to it. Range 1024 - 49,151.  
Dynamic Ports: Dynamic ports are available for use by any network service range 49,152 - 65,536.  

NAT - Network Address Translation  
We use a NAT router that creates a "private" IP address space on our LAN with multiple devices and computers but the outside, "the router," has only 1 "public" IP address in which internal network gets "translated" through.  

Private IP Ranges:  
10.0.0.0 - 10.255.255.255 (Class A)  
172.16.0.0 - 172.31.255.255 (Class B)  
192.168.0.0 - 192.168.255.255 (Class C)  

Subnet Mask
Network vs Node with our IP Address  
Anything with a 255 in the octet in a subnet mask is used to identify the network portion of an IP address.  

Class A subnet mask

- First octet must be between 1 and 126
- First octet is the network address
- Last three octets of the address is the node address
- Default subnet mask class A 255.0.0.0
- Class A allows 126 total possible networks
- Class A can offer 16.7 million possible nodes addresses.

Class B subnet mask  

- First octet must be between 128 and 192
- Frist two octets are the network address
- Last two octets of the address is the node address
- Default subnet mask class B 255.255.0.0  
- Class B allows 16,384 total possible networks  
- Class B can offer 65,534 possible node addresses  

Class C subnet mask  

- First octet must be between 192 and 223  
- First three octets are the network address  
- Last octet is the node address  
- Default subnet mask class C 255.255.255.0  
- Class C allows 2,097,152 total possible networks  
- Class C can offer 254 possible node addresses (limited host)  

Subnet mask can be typed in shorthand:  
192.168.1.1/24 - indicates that 24 bits are used for the subnet mask.  
192.168.1.1 255.255.255.0  

Partial Subnet

- You do not have to use the default subnet mask  
  - Example: A class A address could use only part of an octet for the address such as 255.255.252.0  
- For PC3 to speak to PC2 and PC1, we need another router because it is a different subnet. Without this route, PC3 (using subnet mask of 255.255.252.0) can not communicate with the other host using 255.255.255.0

## Domain Name Service and the Default Gateway (Network Router)  

When looking up a URL or domain names, we have to translate that domain name in to the IP address of a web server.  

- www.linuxacademy.com to 54.165.61.14 and 54.164.230.15  
- DNS server translates domain names into IP addresses.  

## Network Configuration

ping - testing of connectivity of a remote network device  
dig - allows us to look up IP addresses for DNS names  
netstat - list network connections, routing info, NIC info  
route - current route / net settings  
traceroute - traces the route a packet takes  
ifconfig - current network settings  
ipaddr - current IP address and network settings  
/etc/resolv.conf 

- this is where our DNS server information is stored on Linux. It is recommended that this file is not edited manually.  