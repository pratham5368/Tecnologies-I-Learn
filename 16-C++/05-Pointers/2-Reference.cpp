//REFERENCES :-- A reference is an alias for an existing variable, meaning it’s a different name for the same memory location.
// Unlike pointers, references cannot be null, and they must be initialized when they are declared. Once a reference is initialized,
// it cannot be changed to refer to another variable.
dataType &referenceName = existingVariable;
//EXAMPLE
int num = 10;
int &ref = num; // Reference 'ref' is now an alias of 'num'
/*You can use the reference just like you’d use the original variable. When you change the value of the reference,
 the value of the original variable also changes, because they both share the same memory location*/
 var = 20;            // Sets the value of var to 20
cout << ref << endl; // Outputs 20

ref = 30;            // Sets the value of ref to 30
cout << var << endl; // Outputs 30

//Function Parameters:-to create an alias for an argument.
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
   int x = 5, y = 10;
   cout << "Before Swap: x = " << x << " y = " << y << endl; // Outputs 5 10
   
   swap(x, y);
   cout << "After Swap: x = " << x << " y = " << y << endl;  // Outputs 10 5
}