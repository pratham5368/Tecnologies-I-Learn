/*Virtual methods are a key aspect of dynamic polymorphism in C++. They allow subclass methods to override the methods of their base class
 so the appropriate method is called depending on the actual type of an object at runtime.

To declare a method as virtual, simply use the virtual keyword in the method’s declaration in the base class. This tells the compiler 
that the method should be treated as a virtual method, allowing it to be overridden by derived classes.*/



#include <iostream>

// Base class
class Shape {
public:
    virtual double area() const {
        return 0;
    }
};

// Derived class
class Circle : public Shape {
public:
    Circle(double r) : radius(r) {}

    // Override the base class method
    double area() const override {
        return 3.14 * radius * radius;
    }

private:
    double radius;
};

// Derived class
class Rectangle : public Shape {
public:
    Rectangle(double w, double h) : width(w), height(h) {}

    // Override the base class method
    double area() const override {
        return width * height;
    }

private:
    double width;
    double height;
};

int main() {
    Circle c(5);
    Rectangle r(4, 6);

    Shape* shape = &c;
    std::cout << "Circle's area: " << shape->area() << std::endl;

    shape = &r;
    std::cout << "Rectangle's area: " << shape->area() << std::endl;

    return 0;
}