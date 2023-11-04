/*A function is a group of statements that perform a specific task, organized as a separate unit in a program. 
Functions help in breaking the code into smaller, manageable, and reusable blocks.
*/
ReturnType functionName(ParameterType1 parameter1, ParameterType2 parameter2) {
    // Function body
    // ...
    return returnValue;
}
/*
There are mainly two types of functions in C++:
1.Standard library functions: Pre-defined functions available in the C++ standard library, such as printf(), scanf(), sqrt(),
 and many more. These functions are part of the standard library, so you need to include the appropriate header file to use them.

2.User-defined functions: Functions created by the programmer to perform a specific task. To create a user-defined function,
 you need to define the function and call it in your code.*/

//Defining a Function


return_type function_name(parameter list) {
    // function body
}
void myFunction() { // declaration
  // the body of the function (definition)
}


// Create a function
void myFunction() {
  cout << "I just got executed!";
}

int main() {
  myFunction(); // call the function
  return 0;
}

// Outputs "I just got executed!"


/*1.return_type: Data type of the output produced by the function. It can be void, indicating that the function doesn’t return any value.
2.function_name: Name given to the function, following C++ naming conventions.
3.parameter list: List of input parameters/arguments that are needed to perform the task. It is optional, and when no parameters
are needed, you can leave it blank or use the keyword void.*/

//Example
#include <iostream>
using namespace std;

// Function to add two numbers
int addNumbers(int a, int b) {
    int sum = a + b;
    return sum;
}

int main() {
    int num1 = 5, num2 = 10;
    int result = addNumbers(num1, num2); // Calling the function
    cout << "The sum is: " << result << endl;
    return 0;
}

//the function addNumbers takes two integer parameters, a and b, and returns the sum of the numbers.


//Function Prototypes
/*A function prototype is a declaration of the function without its body, and it informs the compiler about 
the function’s name, return type, and parameters.*/

#include <iostream>
using namespace std;

// Function prototype
int multiplyNumbers(int x, int y);

int main() {
    int num1 = 3, num2 = 7;
    int result = multiplyNumbers(num1, num2); // Calling the function
    cout << "The product is: " << result << endl;
    return 0;
}

// Function definition
int multiplyNumbers(int x, int y) {
    int product = x * y;
    return product;
}

//Nested functions are not supported



//Parameters and Arguments :-Information can be passed to functions as a parameter. Parameters act as variables inside the function.
/*Parameters are specified after the function name, inside the parentheses. You can add as many parameters as you want,
just separate them with a comma:*/

//Syntax
void functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
/*The following example has a function that takes a string called fname as parameter. When the function is called, 
we pass along a first name, which is used inside the function to print the full name:*/


void myFunction(string fname) {
  cout << fname << " Refsnes\n";
}

int main() {
  myFunction("Liam");
  myFunction("Jenny");
  myFunction("Anja");
  return 0;
}

// Liam Refsnes
// Jenny Refsnes
// Anja Refsnes


//You can also use a default parameter value, by using the equals sign (=).
void myFunction(string country = "Norway") {
  cout << country << "\n";
}

int main() {
  myFunction("Sweden");
  myFunction("India");
  myFunction();
  myFunction("USA");
  return 0;
}

// Sweden
// India
// Norway
// USA



//Inside the function, you can add as many parameters as you want:
void myFunction(string fname, int age) {
  cout << fname << " Refsnes. " << age << " years old. \n";
}

int main() {
  myFunction("Liam", 3);
  myFunction("Jenny", 14);
  myFunction("Anja", 30);
  return 0;
}

// Liam Refsnes. 3 years old.
// Jenny Refsnes. 14 years old.
// Anja Refsnes. 30 years old.