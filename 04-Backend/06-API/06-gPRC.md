## gRPC
gRPC is a high-performance, open source universal RPC framework
 
[docs](https://grpc.io/docs/)

RPC stands for Remote Procedure Call, there’s an ongoing debate on what the g stands for. RPC is a protocol that allows a program to execute a procedure of another program located on another computer. The great advantage is that the developer doesn’t need to code the details of the remote interaction. The remote procedure is called like any other function. But the client and the server can be coded in different languages.

In the following gRPC architecture diagram, we have the gRPC client and server sides. In gRPC, every client service includes a stub (auto-generated files), similar to an interface containing the current remote procedures. The gRPC client makes the local procedure call to the stub with parameters to be sent to the server. The client stub then serializes the parameters with the marshaling process using Protobuf and forwards the request to the local client-time library in the local machine.

![](https://assets-global.website-files.com/5ff66329429d880392f6cba2/6149d279ba7cdebc475a9621_gRPC%20Architecture.png)

