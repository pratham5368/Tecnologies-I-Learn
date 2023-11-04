//Variables and Data Types
//C++ provides various fundamental data types such as int, float, double, char, and bool to declare and manipulate variables in a program.



int age = 25;
float height = 1.7f;
double salary = 50000.0;
char grade = 'A';
bool isEmployed = true;




//Control Structures
//Control structures enable you to control the flow of execution of a program. Key control structures in C++ include:
/*
Conditional statement: if, else, and else if
Loop constructs: for, while, and do-while
Switch-case construct
*/

// If-else statement
if (age > 18) {
    cout << "You are eligible to vote.";
} else {
    cout << "You are not eligible to vote.";
}

// For loop
for (int i = 0; i < 5; i++) {
    cout << "Hello World!";
}




//Functions
//Functions in C++ allow you to break down a large program into small, manageable, and reusable pieces of code.

int add(int a, int b) {
    return a + b;
}

int main() {
    int sum = add(10, 20);
    cout << "The sum is: " << sum;
    return 0;
}




//Arrays and Vectors used data structures to store and manipulate a collection of elements of the same datatype.
// Array
int marks[] = {90, 80, 95, 85};

// Vector
vector<int> scores = {10, 20, 30, 40};





//Pointers are variables that store memory addresses of other variables.
//They enable more efficient handling of memory, and are useful for working with dynamic data structures.
int num = 10;
int* p = &num; // p stores the address of num



//Structures and Classes are user-defined data types that allow grouping of variables and functions under a single name.

// Structure
struct Student {
    string name;
    int age;
};

// Class
class Employee {
public:
    string name;
    int age;
    void displayInfo() {
        cout << "Name: " << name << "\nAge: " << age;
    }
};




//Inheritance is a mechanism that allows a class to inherit properties and methods from a base class. 
//Polymorphism enables you to use a base class type to represent derived class objects.

class Base {
public:
    void display() {
        cout << "This is the base class.";
    }
};

class Derived : public Base {
public:
    void display() {
        cout << "This is the derived class.";
    }
};





//Exception Handling
//C++ provides a mechanism to handle exceptions(runtime errors) gracefully using try, catch, and throw constructs.

try {
    // Code that might throw an exception
    int result = a / b;
} catch (const exception &e) {
    cout << "Caught an exception: " << e.what();
}