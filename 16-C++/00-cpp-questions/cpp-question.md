## 1. What is operator overloading?
Operator Overloading is a very essential element to perform the operations on user-defined data types. By operator overloading we can modify the default meaning to the operators like +, -, *, /, <=, etc. 

For example -

The following code is for adding two complex number using operator overloading-
```js
class complex{
private:
 float r, i;
public:
 complex(float r, float i){
  this->r=r;
  this->i=i;
 }
 complex(){}
 void displaydata(){
  cout<<”real part = “<<r<<endl;
  cout<<”imaginary part = “<<i<<endl;
 }
 complex operator+(complex c){
  return complex(r+c.r, i+c.i);
 }
};
int main(){
complex a(2,3);
complex b(3,4);
complex c=a+b;
c.displaydata();
return 0;
}
```
## 2. What is polymorphism in C++?
Polymorphism in simple means having many forms. Its behavior is different in different situations. And this occurs when we have multiple classes that are related to each other by inheritance.

For example, think of a base class called a car that has a method called car brand(). Derived classes of cars could be Mercedes, BMW, Audi - And they also have their own implementation of a cars

The two types of polymorphism in c++ are:

- Compile Time Polymorphism
- Runtime Polymorphism
## 3. What do you mean by call by value and call by reference?
In call by value method, we pass a copy of the parameter is passed to the functions. For these copied values a new memory is assigned and changes made to these values do not reflect the variable in the main function.

In call by reference method, we pass the address of the variable and the address is used to access the actual argument used in the function call. So changes made in the parameter alter the passing argument
## 4. What are destructors in C++?
A constructor is automatically called when an object is first created. Similarly when an object is destroyed a function called destructor automatically gets called. A destructor has the same name as the constructor (which is the same as the class name) but is preceded by a tilde.
## 5. Explain inheritance
Inheritance is the process of creating new classes, called derived classes, from existing classes. These existing classes are called base classes. The derived classes inherit all the capabilities of the base class but can add new features and refinements of their own.

## 6. What is this pointer in C++?
The member functions of every object have a pointer named this, which points to the object itself. The value of this is set to the address of the object for which it is called. It can be used to access the data in the object it points to.

Example
```c++
class A{
 private:
  int value;
 public:
  void setvalue(int x){
   this->value=x; 
  }
};

int main(){
 A a;
 a.setvalue(5);
 return 0;
}
```
## 7. How do you allocate and deallocate memory in C++?
The new operator is used for memory allocation and deletes operator is used for memory deallocation in C++.

For example-
```c++
int value=new int;  		//allocates memory for storing 1 integer
delete value;          		// deallocates memory taken by value

int *arr=new int[10];    	//allocates memory for storing 10 int
delete []arr;              	// deallocates memory occupied by arr
```