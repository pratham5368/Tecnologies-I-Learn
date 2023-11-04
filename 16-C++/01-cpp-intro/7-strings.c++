//A string variable contains a collection of characters surrounded by double quotes:-Create a variable of type string and assign it a value:

string greeting = "Hello";
//To use strings, you must include an additional header file in the source code, the <string> library:
// Include the string library
#include <string>

// Create a string variable
string greeting = "Hello";

//String Concatenation
//The + operator can be used between strings to add them together to make a new string.

string firstName = "John ";
string lastName = "Doe";
string fullName = firstName + lastName;
cout << fullName;


string firstName = "John";
string lastName = "Doe";
string fullName = firstName + " " + lastName;
cout << fullName;


//Append
//A string in C++ is actually an object, which contain functions that can perform certain operations on strings. 
//For example, you can also concatenate strings with the append() function:

string firstName = "John ";
string lastName = "Doe";
string fullName = firstName.append(lastName);
cout << fullName;


//String Length
//To get the length of a string, use the length() function:

string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
cout << "The length of the txt string is: " << txt.length();


//Access Strings
//You can access the characters in a string by referring to its index number inside square brackets [].
string myString = "Hello";
cout << myString[0];
// Outputs H



//Change String Characters:-To change the value of a specific character in a string, refer to the index number, and use single quotes:

string myString = "Hello";
myString[0] = 'J';
cout << myString;
// Outputs Jello instead of Hello