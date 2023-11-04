/*iostream is a header in the C++ Standard Library that provides functionality for basic input and output (I/O) operations.
The I/O streams facilitate communication between your program and various sources, such as the console, files, or other programs.

iostream includes the following classes:

1.istream: for input operations from an input source.
2.ostream: for output operations to an output target.
3.iostream: a combination of istream and ostream for both input and output operations.
These classes inherit from base classes ios and ios_base.

Additionally, iostream defines several objects that are instances of these classes and represent the standard input and output streams:

1.cin: an istream object to read from the standard input, typically corresponding to the keyboard.
2.cout: an ostream object to write to the standard output, typically the console.
3.cerr: an ostream object to write to the standard error output, typically used for displaying error messages.
4.clog: an ostream object, similar to cerr, but its output can be buffered.
Here are some code examples on using iostream for input and output operations:*/

#include <iostream>

int main() {
    int a;
    std::cout << "Enter a number: ";
    std::cin >> a;
    std::cout << "You entered: " << a << std::endl;
    return 0;
}
#include <iostream>

int main() {
    std::cerr << "An error occurred." << std::endl;
    std::clog << "Logging information." << std::endl;
    return 0;
}


//Remember to include the iostream header when using these features:

#include <iostream>