//All C++ variables must be identified with unique names.These unique names are called identifiers.
//Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

//Note: It is recommended to use descriptive names in order to create understandable and maintainable code:


// Good
int minutesPerHour = 60;

// OK, but not so easy to understand what m actually is
int m = 60;

//The general rules for naming variables are:

/*1.Names can contain letters, digits and underscores
2.Names must begin with a letter or an underscore (_)
3.Names are case sensitive (myVar and myvar are different variables)
4.Names cannot contain whitespaces or special characters like !, #, %, etc.
5.Reserved words (like C++ keywords, such as int) cannot be used as name*/

//Constants
//You should always declare the variable as constant when you have values that are unlikely to change:


const int minutesPerHour = 60;
const float PI = 3.14;