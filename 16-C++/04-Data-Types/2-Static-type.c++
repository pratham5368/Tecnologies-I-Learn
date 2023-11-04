/*C++ is a statically typed language, which means that it uses static typing to determine data types and perform type 
checking during compile time. This helps with ensuring type safety and can prevent certain types of errors from occurring 
during the execution of the program.*/

#include <iostream>

int main() {
    int num = 42;        // 'num' is statically typed as an integer
    double pi = 3.14159; // 'pi' is statically typed as a double

    num = pi; // This assignment would cause a compile-time error as the types don't match

    std::cout << "The value of num is: " << num << std::endl;
    std::cout << "The value of pi is: " << pi << std::endl;

    return 0;
}