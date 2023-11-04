
Int ("%d"): 32 Bit integer
Long ("%ld"): 64 bit integer
Char ("%c"): Character type
Float ("%f"): 32 bit real value
Double ("%lf"): 64 bit real value
//1. Addition Operator (+)

int sum = a + b;

//2. Subtraction Operator (-):-It subtracts one number from another.

int difference = a - b;

//3. Multiplication Operator (*):-It multiplies two numbers together.

int product = a * b;

//4. Division Operator (/):-It divides one number by another. 
//Note that if both operands are integers, it will perform integer division and the result will be an integer.

int quotient = a / b; // integer division
float quotient = float(a) / float(b); // floating-point division

//5. Modulus Operator (%):-It calculates the remainder of an integer division.

int remainder = a % b;
//6. Increment Operator (++):-It increments the value of a variable by 1. 
//There are two ways to use this operator: prefix (++x) and postfix (x++). 
//Prefix increments the value before returning it, whereas postfix returns the value first and then increments it.

int x = 5;
int y = ++x; // x = 6, y = 6
int z = x++; // x = 7, z = 6
//7. Decrement Operator (--):-It decrements the value of a variable by 1. It can also be used in prefix (--x) and postfix (x--) forms.

int x = 5;
int y = --x; // x = 4, y = 4
int z = x--; // x = 3, z = 4
