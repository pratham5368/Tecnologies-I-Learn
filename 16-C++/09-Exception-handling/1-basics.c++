/*C++ provides a set of keywords and constructs for implementing exception handling:

1.try: Defines a block of code that should be monitored for exceptions.
2.catch: Specifies the type of exception to be caught and the block of code that shall be executed when that exception occurs.
3.throw: Throws an exception that will be caught and handled by the appropriate catch block.
4.noexcept: Specifies a function that doesn’t throw exceptions or terminates the program if an exception is thrown within its scope.*/


#include <iostream>

int divide(int a, int b) {
    if (b == 0) {
        throw "Division by zero!";
    }
    return a / b;
}

int main() {
    int num1, num2;

    std::cout << "Enter two numbers for division: ";
    std::cin >> num1 >> num2;

    try {
        int result = divide(num1, num2);
        std::cout << "The result is: " << result << std::endl;
    } catch (const char* msg) {
        std::cerr << "Error: " << msg << std::endl;
    }

    return 0;
}



//In this example, we define a function divide that throws an exception if b is zero. In the main function, we use a try block to call
//divide and output the result. If an exception is thrown, it is caught inside the catch block, which outputs an error message. This way,
//we can handle the error gracefully rather than letting the program crash when attempting to divide by zero.



//Standard Exceptions
/*C++ provides a standard set of exception classes under the <stdexcept> library which can be used as the exception type for more specific 
error handling. Some of these classes include:

1.std::exception: Base class for all standard exceptions.
2.std::logic_error: Represents errors which can be detected statically by the program.
3.std::runtime_error: Represents errors occurring during the execution of a program.*/


#include <iostream>
#include <stdexcept>

int divide(int a, int b) {
    if (b == 0) {
        throw std::runtime_error("Division by zero!");
    }
    return a / b;
}

int main() {
    int num1, num2;

    std::cout << "Enter two numbers for division: ";
    std::cin >> num1 >> num2;

    try {
        int result = divide(num1, num2);
        std::cout << "The result is: " << result << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }

    return 0;
}


//In this example, we modified the divide function to throw a std::runtime_error instead of a simple string. The catch block now catches 
//exceptions derived from std::exception and uses the member function what() to display the error message.