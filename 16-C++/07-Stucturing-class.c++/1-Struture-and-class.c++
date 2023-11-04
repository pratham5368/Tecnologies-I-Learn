//The main difference between a structure and a class is their default access specifier: members of a structure are public by default, 
//while members of a class are private.

/*A structure is defined using the struct keyword, followed by the structure’s name and a set of curly braces {} enclosing the
members (variables and/or functions) of the structure. The members can be of different data types. To create an object of the 
structure’s type, use the structure name followed by the object name.*/

struct Employee {
    int id;
    std::string name;
    float salary;
};

Employee e1; // create an object of the 'Employee' structure

//You can access the members of a structure using the dot operator .:

e1.id = 1;
e1.name = "John Doe";
e1.salary = 40000;

// Create a structure variable called myStructure
struct {
  int myNum;
  string myString;
} myStructure;

// Assign values to members of myStructure
myStructure.myNum = 1;
myStructure.myString = "Hello World!";

// Print members of myStructure
cout << myStructure.myNum << "\n";
cout << myStructure.myString << "\n";


//a comma (,) to use one structure in many variables:
struct {
  int myNum;
  string myString;
} myStruct1, myStruct2, myStruct3; // Multiple structure variables separated with commas


//This example shows how to use a structure in two different variables
struct {
  string brand;
  string model;
  int year;
} myCar1, myCar2; // We can add variables by separating them with a comma here

// Put data into the first structure
myCar1.brand = "BMW";
myCar1.model = "X5";
myCar1.year = 1999;

// Put data into the second structure
myCar2.brand = "Ford";
myCar2.model = "Mustang";
myCar2.year = 1969;

// Print the structure members
cout << myCar1.brand << " " << myCar1.model << " " << myCar1.year << "\n";
cout << myCar2.brand << " " << myCar2.model << " " << myCar2.year << "\n";


/*A class is defined using the class keyword, followed by the class’s name and a set of curly braces {} enclosing the members
(variables and/or functions) of the class. Like structures, class members can be of different data types.*/

class Student {
    int roll_no;
    std::string name;
    float marks;

public:
    void set_data(int r, std::string n, float m) {
        roll_no = r;
        name = n;
        marks = m;
    }

    void display() {
        std::cout << "Roll no: " << roll_no
                  << "\nName: " << name
                  << "\nMarks: " << marks << std::endl;
    }
};

Student s1; // create an object of the 'Student' class
