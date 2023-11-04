//Single Line Comment in c++ code

/*/Multiple Line Comment 
in c++ code*/

//What is c++?
/*C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.
It was first introduced in 1985 and provides object-oriented features like classes and inheritance. C++ is widely used in
various applications like game development, system programming, embedded systems, and high-performance computing.
C++ is a statically-typed language, meaning that the type of a variable is determined during compilation, and has an extensive
library called the C++ Standard Library, which provides a rich set of functions, algorithms, and data structures for various tasks.
C++ builds upon the features of C, and thus, most C programs can be compiled and run with a C++ compiler.
-C++ is designed to provide high performance and efficiency.
-C++ allows you to write both low-level code, like memory manipulation, as well as high-level abstractions, like creating classes 
and using the Standard Template Library (STL).
*/

// read this  https://github.com/fffaraz/awesome-cpp#readme

//C VS C++
//1.Syntax and Semantics

/*C is a procedural programming language.
Focuses on functions and structured programming.
Does not support objects or classes.
Memory management is manual, using functions like malloc and free.*/
#include <stdio.h>//include libraries or header flies 

void printHello() {
    printf("Hello, World!\n");
}

int main() {
    printHello();
    return 0;
}

/*C++ is both procedural and object-oriented.
Supports both functions and classes.
Incorporates different programming paradigms.
Memory management can be manual (like C) or rely on constructors/destructors and smart pointers.*/
#include <iostream>

class HelloWorld {
public:
    void printHello() {
        std::cout << "Hello, World!" << std::endl;
    }
};

int main() {
    HelloWorld obj;
    obj.printHello();
    return 0;
}
//Code Reusability and Modularity
/*C
Code reusability is achieved through functions and modular programming.
High cohesion and low coupling are achieved via structured design.
Function libraries can be created and included through headers.
C++
Offers better code reusability with classes, inheritance, and polymorphism.
Code modularity is enhanced through namespaces and well-designed object-oriented hierarchy.
*/
//Error Handling

/*C
Error handling in C is done primarily through return codes.
Lacks support for exceptions or any built-in error handling mechanism.
C++
Offers exception handling, which can be used to handle errors that may occur during program execution.
Enables catching and handling exceptions with try, catch, and throw keywords, providing more control over error handling.*/
 
//simple hello world
#include <iostream>
int main()
{
 std::cout << "Hello World!" << std::endl;
}

/*Input/Output
To perform input and output operations in C++, we can use the built-in objects std::cin for input and std::cout 
for output, available in the iostream library. Here’s an example of reading an integer and printing its value:

*/
#include <iostream>

int main() {
    int number;
    std::cout << "Enter an integer: ";
    std::cin >> number;
    std::cout << "You entered: " << number << std::endl;
    return 0;
}