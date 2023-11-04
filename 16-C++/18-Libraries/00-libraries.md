1. Static Libraries

Static libraries are incorporated into your program during compile time. They are linked with your code, creating a larger executable file, but it does not require any external files during runtime.

To create a static library, you’ll need to compile your source files into object files, then bundle them into an archive. You can use the following commands:
```
g++ -c sourcefile.cpp -o objectfile.o
ar rcs libmystaticlibrary.a objectfile.o
```
To use a static library, you need to include the header files in your source code and then link the library during the compilation process:
```
g++ main.cpp -o myprogram -L/path/to/your/library/ -lmystaticlibrary
```
Replace /path/to/your/library/ with the path where your libmystaticlibrary.a file is located.

2. Dynamic Libraries

Dynamic libraries are loaded during runtime, which means that your executable file only contains references to these libraries. The libraries need to be available on the system where your program is running.

To create a dynamic library, you’ll need to compile your source files into object files, then create a shared library:
```
g++ -c -fPIC sourcefile.cpp -o objectfile.o
g++ -shared -o libmydynamiclibrary.so objectfile.o
```
To use a dynamic library, include the library’s header files in your source code and then link the library during the compilation process:
```
g++ main.cpp -o myprogram -L/path/to/your/library/ -lmydynamiclibrary
```
Replace /path/to/your/library/ with the path where your libmydynamiclibrary.so file is located.

NOTE: When using dynamic libraries, make sure the library is in the system’s search path for shared libraries. You may need to update the LD_LIBRARY_PATH environment variable on Unix/Linux systems or the PATH variable on Windows.

## Header Inclusion
Header inclusion involves including header files using the preprocessor directive #include. Header files are typically used to provide function prototypes, class declarations, and constant definitions that can be shared across multiple source files. There are two ways to include header files in your program:

Angle brackets <>: Used for including standard library headers, like iostream, vector, or algorithm.
Example:
```
#include <iostream>
#include <vector>
```
- Double quotes "": Used for including user-defined headers or headers provided by third-party libraries.
Example:
```
#include "myHeader.h"
#include "thirdPartyLibrary.h"
```
### Source Inclusion
Source inclusion refers to including the content of a source file directly in another source file. This approach is generally not recommended as it can lead to multiple definitions and increased compile times but it can occasionally be useful for certain tasks (e.g., templates or simple small programs). To include a source file, you can use the #include directive with double quotes, just like with header files:

Example:
```
#include "mySourceFile.cpp"
```