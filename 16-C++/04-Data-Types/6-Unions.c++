//User-Defined Data Types
//User-defined data types are types that are defined by the programmer, such as structures, classes, and unions.

/*Structures (struct)
Structures are used to store different data types under a single variable and
accessibility of member variables and methods are public.

Example:*/

struct Person {
    string name;
    int age;
    float height;
};

Person p1 = {"John Doe", 30, 5.9};

//Classes (class)
//Classes are similar to structures, but the accessibility of the member data and function are governed by access specifiers. By default access to members of a class is private.

class Person {
public:
    string name;
    int age;

    void printInfo() {
        cout << "Name: " << name << ", Age: " << age << endl;
    };
};

Person p1;
p1.name = "John Doe";
p1.age = 30;


//Unions are used to store different data types in the same memory location.

//Example:

union Data {
    int num;
    char letter;
    float decimal;
};

Data myData;
myData.num = 42;