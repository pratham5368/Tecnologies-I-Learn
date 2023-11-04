/*Multiple inheritance is a feature in C++ where a class can inherit characteristics (data members and member functions) from more 
than one parent class. The concept is similar to single inheritance (where a class inherits from a single base class), but in multiple
inheritance, a class can have multiple base classes.When a class inherits multiple base classes, it becomes a mixture of their properties and behaviors, and can override or extend
them as needed.

Syntax*/


class DerivedClass : access-specifier BaseClass1, access-specifier BaseClass2, ...
{
    // class body
};
The DerivedClass will inherit members from both BaseClass1 and BaseClass2. The access-specifier (like public, protected, or private) determines the accessibility of the inherited members.

Example
Here is an example of multiple inheritance in action:

#include <iostream>

// Base class 1
class Animal
{
public:
    void eat()
    {
        std::cout << "I can eat!" << std::endl;
    }
};

// Base class 2
class Mammal
{
public:
    void breath()
    {
        std::cout << "I can breathe!" << std::endl;
    }
};

// Derived class inheriting from both Animal and Mammal
class Dog : public Animal, public Mammal
{
public:
    void bark()
    {
        std::cout << "I can bark! Woof woof!" << std::endl;
    }
};

int main()
{
    Dog myDog;

    // Calling members from both base classes
    myDog.eat();
    myDog.breath();
    
    // Calling a member from the derived class
    myDog.bark();

    return 0;
}