//Code splitting refers to the process of breaking down a large code base into smaller, more manageable files or modules. 
//This helps improve the organization, maintainability, and readability of the code.

//1.Header Files (.h or .hpp)
/* responsible for declaring classes, functions, and variables that are needed by multiple source files. 
They act as an interface between different parts of the code, making it easier to manage dependencies and reduce the chances of duplicated code.*/
// example.h
#ifndef EXAMPLE_H
#define EXAMPLE_H

class Example {
public:
    void printMessage();
};

#endif


//2.Source Files (.cpp)
/* each source file can be compiled independently into an object file. These object files can then be linked
together to form the final executable.*/
# Compile each source file into an object file
g++ -c main.cpp -o main.o
g++ -c example.cpp -o example.o

# Link object files together to create the executable
g++ main.o example.o -o my_program


