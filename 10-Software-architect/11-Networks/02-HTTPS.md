HTTP is the TCP/IP based application layer communication protocol which standardizes how the client and server communicate with each other. It defines how the content is requested and transmitted across the internet.

HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website.

HTTPS = HTTP + SSL/TLS

![](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/37fc4bc9-65cb-4290-a1ed-6ad39762f18a/protocol-stack-preview.png)

TCP has been a cornerstone of the web for decades, but it started to show its age in the late 2000s. Its intended replacement, a new transport protocol named QUIC, differs enough from TCP in a few key ways that running HTTP/2 directly on top of it would be very difficult. As such, HTTP/3 itself is a relatively small adaptation of HTTP/2 to make it compatible with the new QUIC protocol, which includes most of the new features people are excited about.

QUIC is needed because TCP, which has been around since the early days of the Internet, was not really built with maximum efficiency in mind. For example, TCP requires a “handshake” to set up a new connection. This is done to ensure that both client and server exist and that they’re willing and able to exchange data. It also, however, takes a full network round trip to complete before anything else can be done on a connection. If the client and server are geographically distant, each round-trip time (RTT) can take over 100 milliseconds, incurring noticeable delays.

As a second example, TCP sees all of the data it transports as a single “file” or byte stream, even if we’re actually using it to transfer several files at the same time (for example, when downloading a web page consisting of many resources). In practice, this means that if TCP packets containing data of a single file are lost, then all other files will also get delayed until those packets are recovered.

This is called head-of-line (HoL) blocking. While these inefficiencies are quite manageable in practice (otherwise, we wouldn’t have been using TCP for over 30 years), they do affect higher-level protocols such as HTTP in a noticeable way.

### What Is QUIC? #
You might be wondering why this matters? Who cares if these features are in HTTP/3 or QUIC? I feel this is important, because QUIC is a generic transport protocol which, much like TCP, can and will be used for many use cases in addition to HTTP and web page loading. For example, DNS, SSH, SMB, RTP, and so on can all run over QUIC. As such, let’s look at QUIC a bit more in depth, because it’s here where most of the misconceptions about HTTP/3 that I’ve read come from.

One thing you might have heard is that QUIC runs on top of yet another protocol, called the User Datagram Protocol (UDP). This is true, but not for the (performance) reasons many people claim. Ideally, QUIC would have been a fully independent new transport protocol, running directly on top of IP in the protocol stack shown in the image I shared above.