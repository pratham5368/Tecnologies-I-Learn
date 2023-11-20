## FTP
File Transfer Protocol(FTP) is TCP/IP based application layer communication protocol that helps transferring files between local and remote file systems over the network. To transfer a file, 2 TCP connections(control connection and data connection) are used in parallel.
![](https://media.geeksforgeeks.org/wp-content/uploads/FTP.jpg)

1. Control Connection: For sending control information like user identification, password, commands to change the remote directory, commands to retrieve and store files, etc., FTP makes use of a control connection. The control connection is initiated on port number 21. 

2. Data connection: For sending the actual file, FTP makes use of a data connection. A data connection is initiated on port number 20. 
FTP sends the control information out-of-band as it uses a separate control connection. Some protocols send their request and response header lines and the data in the same TCP connection. For this reason, they are said to send their control information in-band. HTTP and SMTP are such examples. 

### FTP Data Structures
FTP allows three types of data structures : 

- File Structure: In file structure, there is no internal structure and the file is considered to be a continuous sequence of data bytes.
- Record Structure: In record structure, the file is made up of sequential records.
- Page Structure: In page structure, the file is made up of independent indexed pages.
### FTP Commands
Some of the FTP commands are: 

- USER – This command sends the user identification to the server.
- PASS – This command sends the user password to the server. 
- CWD – This command allows the user to work with a different directory or dataset for file storage or retrieval without altering his login or accounting information. 
- RMD – This command causes the directory specified in the path name to be removed as a directory. 
- MKD – This command causes the directory specified in the pathname to be created as a directory. 
- PWD – This command causes the name of the current working directory to be returned in the reply. 
- RETR – This command causes the remote host to initiate a data connection and send the requested file over the data connection. 
- STOR – This command causes the storage of a file in the current directory of the remote host. 
- LIST – Sends a request to display the list of all the files present in the directory. 
- ABOR – This command tells the server to abort the previous FTP service command and any associated transfer of data. 
- QUIT – This command terminates a USER and if file transfer is not in progress, the server closes the control connection.
### FTP Replies
Some of the FTP replies are : 

- 200 – Command okay.
- 530 – Not logged in.
- 331 –  User name okay, need a password.
- 225 – Data connection open; no transfer in progress.
- 221 – Service closing control connection.
- 551 – Requested action aborted: page type unknown.
- 502 – Command not implemented.
- 503 – Bad sequence of commands.
- 504 – Command not implemented for that parameter. 


## HTTP
HTTP is the TCP/IP based application layer communication protocol which standardizes how the client and server communicate with each other. It defines how the content is requested and transmitted across the internet.

HTTP/2 - 2015
By now, you must be convinced that why we needed another revision of the HTTP protocol. HTTP/2 was designed for low latency transport of content. The key features or differences from the old version of HTTP/1.1 include

Binary instead of Textual
Multiplexing - Multiple asynchronous HTTP requests over a single connection
Header compression using HPACK
Server Push - Multiple responses for single request
Request Prioritization
Security


1. Binary Protocol
HTTP/2 tends to address the issue of increased latency that existed in HTTP/1.x by making it a binary protocol. Being a binary protocol, it easier to parse but unlike HTTP/1.x it is no longer readable by the human eye. The major building blocks of HTTP/2 are Frames and Streams

### Frames and Streams
HTTP messages are now composed of one or more frames. There is a HEADERS frame for the meta data and DATA frame for the payload and there exist several other types of frames (HEADERS, DATA, RST_STREAM, SETTINGS, PRIORITY etc) that you can check through the HTTP/2 specs.

Every HTTP/2 request and response is given a unique stream ID and it is divided into frames. Frames are nothing but binary pieces of data. A collection of frames is called a Stream. Each frame has a stream id that identifies the stream to which it belongs and each frame has a common header. Also, apart from stream ID being unique, it is worth mentioning that, any request initiated by client uses odd numbers and the response from server has even numbers stream IDs.

Apart from the HEADERS and DATA, another frame type that I think worth mentioning here is RST_STREAM which is a special frame type that is used to abort some stream i.e. client may send this frame to let the server know that I don’t need this stream anymore. In HTTP/1.1 the only way to make the server stop sending the response to client was closing the connection which resulted in increased latency because a new connection had to be opened for any consecutive requests. While in HTTP/2, client can use RST_STREAM and stop receiving a specific stream while the connection will still be open and the other streams will still be in play.

2. Multiplexing
Since HTTP/2 is now a binary protocol and as I said above that it uses frames and streams for requests and responses, once a TCP connection is opened, all the streams are sent asynchronously through the same connection without opening any additional connections. And in turn, the server responds in the same asynchronous way i.e. the response has no order and the client uses the assigned stream id to identify the stream to which a specific packet belongs. This also solves the head-of-line blocking issue that existed in HTTP/1.x i.e. the client will not have to wait for the request that is taking time and other requests will still be getting processed.

3. Header Compression
It was part of a separate RFC which was specifically aimed at optimizing the sent headers. The essence of it is that when we are constantly accessing the server from a same client there is alot of redundant data that we are sending in the headers over and over, and sometimes there might be cookies increasing the headers size which results in bandwidth usage and increased latency. To overcome this, HTTP/2 introduced header compression.

Unlike request and response, headers are not compressed in gzip or compress etc formats but there is a different mechanism in place for header compression which is literal values are encoded using Huffman code and a headers table is maintained by the client and server and both the client and server omit any repetitive headers (e.g. user agent etc) in the subsequent requests and reference them using the headers table maintained by both.

While we are talking headers, let me add here that the headers are still the same as in HTTP/1.1, except for the addition of some pseudo headers i.e. :method, :scheme, :host and :path

4. Server Push
Server push is another tremendous feature of HTTP/2 where the server, knowing that the client is going to ask for a certain resource, can push it to the client without even client asking for it. For example, let’s say a browser loads a web page, it parses the whole page to find out the remote content that it has to load from the server and then sends consequent requests to the server to get that content.

Server push allows the server to decrease the roundtrips by pushing the data that it knows that client is going to demand. How it is done is, server sends a special frame called PUSH_PROMISE notifying the client that, “Hey, I am about to send this resource to you! Do not ask me for it.” The PUSH_PROMISE frame is associated with the stream that caused the push to happen and it contains the promised stream ID i.e. the stream on which the server will send the resource to be pushed.

5. Request Prioritization
A client can assign a priority to a stream by including the prioritization information in the HEADERS frame by which a stream is opened. At any other time, client can send a PRIORITY frame to change the priority of a stream.

Without any priority information, server processes the requests asynchronously i.e. without any order. If there is priority assigned to a stream, then based on this prioritization information, server decides how much of the resources need to be given to process which request.

6. Security
There was extensive discussion on whether security (through TLS) should be made mandatory for HTTP/2 or not. In the end, it was decided not to make it mandatory. However, most vendors stated that they will only support HTTP/2 when it is used over TLS. So, although HTTP/2 doesn’t require encryption by specs but it has kind of become mandatory by default anyway. With that out of the way, HTTP/2 when implemented over TLS does impose some requirementsi.e. TLS version 1.2 or higher must be used, there must be a certain level of minimum keysizes, ephemeral keys are required etc.

![](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/37fc4bc9-65cb-4290-a1ed-6ad39762f18a/protocol-stack-preview.png)

### What Is QUIC? #
You might be wondering why this matters? Who cares if these features are in HTTP/3 or QUIC? I feel this is important, because QUIC is a generic transport protocol which, much like TCP, can and will be used for many use cases in addition to HTTP and web page loading. For example, DNS, SSH, SMB, RTP, and so on can all run over QUIC. As such, let’s look at QUIC a bit more in depth, because it’s here where most of the misconceptions about HTTP/3 that I’ve read come from.

One thing you might have heard is that QUIC runs on top of yet another protocol, called the User Datagram Protocol (UDP). This is true, but not for the (performance) reasons many people claim. Ideally, QUIC would have been a fully independent new transport protocol, running directly on top of IP in the protocol stack shown in the image I shared above.
![](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_2000/https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f2240cb4-eb62-4054-ad19-0e72190e0a4f/connection-setup.png)

[more](https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/)

## HTTPS
HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website.

HTTPS = HTTP + SSL/TLS

## SSL/TLS
Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are cryptographic protocols used to provide security in internet communications. These protocols encrypt the data that is transmitted over the web, so anyone who tries to intercept packets will not be able to interpret the data. One difference that is important to know is that SSL is now deprecated due to security flaws, and most modern web browsers no longer support it. But TLS is still secure and widely supported, so preferably use TLS.

## SSH
The SSH (Secure Shell) is a network communication protocol that enables two computers to communicate over an insecure network. It is a secure alternative to the non-protected login protocols (such as telnet, rlogin) and insecure file transfer methods (such as FTP). It is mostly used for secure Remote Login and File Transfer.

SFTP = FTP + SSH




## DNS
DNS (Domain Name System) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.

