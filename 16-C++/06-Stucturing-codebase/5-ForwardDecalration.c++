/*a way of declaring a symbol (class, function, or variable) before defining it in the code. It helps the compiler understand the type,
 size, and existence of the symbol*/

//Class Forward Declaration
class ClassA; // forward declaration

//then use pointers or references to the class in your code before defining the class itself:
void do_something (ClassA& obj);

class ClassB {
public:
    void another_function(ClassA& obj);
};



//Function Forward Declaration
int add(int a, int b); // forward declaration

int main() {
    int result = add(2, 3);
    return 0;
}

int add(int a, int b) {
    return a + b;
}

//Enum and Typedef Forward Declaration
//For enum and typedef, it is not possible to forward declare because they don’t have separate declaration and definition stages.