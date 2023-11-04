//Types of Debugger Messages
/*1.Error Messages: Notify you about issues in the code that prevent the program from running or compiling correctly. These messages 
typically include information about the file and the line number where the error is detected, followed by a description of the issue.*/



test.cpp: In function 'int main()':
test.cpp:6:5: error: 'cout' was not declared in this scope
     cout << "Hello World!";
     ^~~~


/*2.Warning Messages: Inform you about potential issues or risky programming practices that may not necessarily cause errors but 
could lead to problems later on. Like error messages, warning messages usually include information about the file and line number
where the issue is found, along with a description of the problem.*/



test.cpp: In function 'int main()':
test.cpp:6:17: warning: comparison between signed and unsigned integer expressions [-Wsign-compare]
     if (a < size)
              ^


/*3.Informational Messages: Provide general information about the execution of the program, such as breakpoints, watchpoints, and
variable values. These messages can also reveal the current state of the program, including the call stack and the list of active threads.*/

//Example (assuming you are using GDB as debugger):

(gdb) break main
Breakpoint 1 at 0x40055f: file test.cpp, line 5.
(gdb) run
Starting program: /path/to/test
Breakpoint 1, main () at test.cpp:5
5       int a = 5;

//Code Examples
/*To make use of debugger messages, you need to employ a debugger, such as GDB or Visual Studio Debugger, and include specific flags
during the compilation process.

Example using GDB:*/

// test.cpp

#include <iostream>
using namespace std;

int main() {
    int num1 = 10;
    int num2 = 0;
    int result = num1 / num2;

    cout << "Result: " << result << endl;

    return 0;
}
$ g++ -g -o test test.cpp  // Compile with -g flag to include debugging information
$ gdb ./test               // Run the GDB debugger
(gdb) run                  // Execute the program inside GDB

//At this point, the debugger will show an error message triggered by the division by zero:

Program received signal SIGFPE, Arithmetic exception.
0x00005555555546fb in main () at test.cpp:7
7       int result = num1 / num2;


//Debugger Symbols
/*Debugger symbols are additional information embedded within the compiled program’s binary code, that help debuggers in understanding the structure, source code, and variable representations at a particular point in the execution process.

There are generally two types of debugging symbols:

- Internal Debugging Symbols: These symbols reside within the compiled binary code itself. When using internal debugging symbols, it is essential to note that the size of the binary increases, which may not be desirable for production environments.

- External Debugging Symbols: The debugging symbols are kept in separate files apart from the binary code, usually with file extensions such as .pdb (Program Database) in Windows or .dSYM (DWARF Symbol Information) in macOS.

Generating Debugger Symbols
To generate debugger symbols in C++, you need to specify specific options during the compilation process. We will use g++ compiler as an example.
*/


//Internal Debugging Symbols (g++)

/*To create a debug build with internal debugging symbols, use the -g flag:

g++ -g -o my_program my_program.cpp
This command compiles my_program.cpp into an executable named my_program with internal debugging symbols.

External Debugging Symbols (g++)

In case you want to generate a separate file containing debugging symbols, you can use the -gsplit-dwarf flag:
*/
g++ -g -gsplit-dwarf -o my_program my_program.cpp
//This command compiles my_program.cpp into an executable named my_program and generates a separate file named 
//my_program.dwo containing the debugging symbols.

//When sharing your compiled binary to end-users, you can remove the debugging symbols using the strip command:

strip --strip-debug my_program


/*This command removes internal debug symbols, resulting in a smaller binary size while keeping the .dwo file for
debugging purposes when needed.

Remember that the availability and syntax of these options may vary between different compilers and platforms. 
Be sure to consult your compiler’s documentation to ensure proper usage of the debugging options.*/