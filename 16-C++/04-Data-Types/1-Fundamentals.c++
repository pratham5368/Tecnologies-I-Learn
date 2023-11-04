//The data type specifies the size and type of information the variable will store:

/*Data     Type	Size	     Description
boolean 	1 byte	      Stores true or false values
char	    1 byte	      Stores a single character/letter/number, or ASCII values
int	   2 or 4 bytes	      Stores whole numbers, without decimals
float	    4 bytes	      Stores fractional numbers, containing one or more decimals. Sufficient for storing 6-7 decimal digits
double	  8 bytes	      Stores fractional numbers, containing one or more decimals. Sufficient for storing 15 decimal digits*/

//typeid().name()
#include <iostream>
#include <typeinfo>
using namespace std;
 
int main() {
    double x = 12;
    cout << "Type of x : " << typeid(x).name() << endl;
}
//Output

Type of x : d
Program ended with exit code: 0

//1.Integer (int):--Integers are whole numbers that can store both positive and negative values. The size of int 
//depends on the system architecture (usually 4 bytes).



int num = 42;
cout<<num;
/*There are variants of int that can hold different ranges of numbers:

a.short (short int): Smaller range than int.
b.long (long int): Larger range than int.
c.long long (long long int): Even larger range than long int.*/

/*2.Floating-Point (float, double)
Floating-point types represent real numbers, i.e., numbers with a decimal point. There are two main floating-point types:
float: Provides single-precision floating-point numbers. It typically occupies 4 bytes of memory.*/


float pi = 3.14f;
/*2.double: Provides double-precision floating-point numbers. It consumes more memory (usually 8 bytes) but has a higher 
precision than float. */


double pi_high_precision = 3.1415926535;

//float vs. double
/*The precision of a floating point value indicates how many digits the value can have after the decimal point. The precision of 
float is only six or seven decimal digits, while double variables have a precision of about 15 digits. Therefore it is safer to 
use double for most calculations.*/



/*3.Character (char):--Characters represent a single character, such as a letter, digit, or symbol. They are stored using the 
ASCII value of the symbol and typically occupy 1 byte of memory.*/

char letter = 'A';

/*4.Boolean (bool):-Booleans represent logical values: true or false. They usually occupy 1 byte of memory.*/

bool is_cpp_great = true;
bool isFishTasty = false;

/*5.strings:--he string type is used to store a sequence of characters (text). This is not a built-in type, but it behaves 
like one in its most basic usage. String values must be surrounded by double quotes*/
// Include the string library
#include <string>

// Create a string variable
string greeting = "Hello";

// Output string value
cout << greeting;






//Derived Data Types types that are derived from fundamental data types.

//1.Arrays are used to store multiple values of the same data type in consecutive memory locations.
int numbers[5] = {1, 2, 3, 4, 5};
//Access the Elements of an Array by referring to the index number inside square brackets [].
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
cout << cars[0];
// Outputs Volvo
//Note: Array indexes start with 0: [0] is the first element. [1] is the second element, etc.
//Change an Array Element of a specific element, refer to the index number:
cars[0] = "Opel";



//2.Pointers are used to store the memory address of a variable.

int num = 42;
int* pNum = &num;


//3.References are an alternative way to share memory locations between variables, allowing you to create an alias for another variable.

int num = 42;
int& numRef = num;

//4.User-defined data types are types that are defined by the programmer, such as structures, classes, and unions.

//a.Structures (struct) used to group variables of different data types together under a single name.

struct Person {
    string name;
    int age;
    float height;
};

Person p1 = {"John Doe", 30, 5.9};

//b.Classes (class) are similar to structures, but they can also have member functions and access specifiers.


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

//c.Unions (union)used to store different data types in the same memory location.



union Data {
    int num;
    char letter;
    float decimal;
};

Data myData;
myData.num = 42;