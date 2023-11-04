//C-style casting: syntax inherited from C, and it is done by simply putting the target data type in parentheses before the value to cast. 

int a = 10;
float b = (float)a;  // C-style cast from int to float


//static_cast:commonly used method for type casting in C++. It is performed at compile time, and you should use it when you have an
// explicit conversion between data types. Example:

int a = 10;
float b = static_cast<float>(a);  // static_cast from int to float


//dynamic_cast:used for safely converting pointers and references between base and derived classes in a class hierarchy. 

class Base {};
class Derived : public Base {};

Base* base_ptr = new Derived();
Derived* derived_ptr = dynamic_cast<Derived*>(base_ptr);  // dynamic_cast from Base* to Derived*


//reinterpret_cast: This cast changes the type of a pointer, reference, or an integer value. It is also called a bitwise cast
// because it changes how the compiler interprets the underlying bits. Use reinterpret_cast only when you have a deep understanding 
//of what you’re doing, as it does not guarantee that the resulting value will be meaningful. Example:

int* a = new int(42);
long b = reinterpret_cast<long>(a);  // reinterpret_cast from int* to long



//const_cast: This casting method is used to remove the const qualifier from a variable. It is generally not recommended, but can
// be useful in certain situations where you have no control over the constness of a variable. Example:

const int a = 10;
int* ptr = const_cast<int*>(&a);  // const_cast from const int* to int*
*ptr = 20;  // Not recommended, use with caution
