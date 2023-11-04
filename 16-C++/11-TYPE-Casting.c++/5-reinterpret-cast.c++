/*reinterpret_cast is a type of casting in C++ that allows you to change the type of a pointer or an integer without altering the 
representation of the data. It is generally used when the conversion required is too low-level or not supported by other casting 
methods, such as static_cast.

Using reinterpret_cast should be handled with care, as it can lead to undefined behavior and severe problems if used incorrectly.*/


#include <iostream>

int main() {
    int num = 42;
    int *num_ptr = &num;

    // Disguise the integer pointer as a char pointer
    char *char_ptr = reinterpret_cast<char *>(num_ptr);

    for (size_t i = 0; i < sizeof(int); ++i) {
        // Print the individual bytes of the integer as characters
        std::cout << "Byte " << i << ": " << char_ptr[i] << std::endl;
    }

    return 0;
}

//using reinterpret_cast to change the type of a pointer from int * to char *, effectively treating the integer as an array of 
//characters and printing each byte.