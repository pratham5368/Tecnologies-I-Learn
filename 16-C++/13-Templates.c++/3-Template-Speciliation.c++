/*Template specialization is a way to customize or modify the behavior of a template for a specific type or a set of types. 
This can be useful when you want to optimize the behavior or provide specific implementation for a certain type, without 
affecting the overall behavior of the template for other types.*/

/*There are two main ways you can specialize a template:

1.Full specialization: This occurs when you provide a specific implementation for a specific type or set of types.
2.Partial specialization: This occurs when you provide a more general implementation for a subset of types that match a certain 
pattern or condition.*/


//Full Template Specialization
/*Full specialization is used when you want to create a separate implementation of a template for a specific type. To do this,
you need to use keyword template<> followed by the function template with the desired specialized type.*/



#include <iostream>

template <typename T>
void printData(const T& data) {
    std::cout << "General template: " << data << std::endl;
}

template <>
void printData(const char*& data) {
    std::cout << "Specialized template for const char*: " << data << std::endl;
}

int main() {
    int a = 5;
    const char* str = "Hello, world!";
    printData(a); // General template: 5
    printData(str); // Specialized template for const char*: Hello, world!
}


//example
// Generic template
template <typename T>
class MyContainer {
public:
    void print() {
        std::cout << "Generic container." << std::endl;
    }
};

// Full template specialization for int
template <>
class MyContainer<int> {
public:
    void print() {
        std::cout << "Container for integers." << std::endl;
    }
};

int main() {
    MyContainer<double> d;
    MyContainer<int> i;

    d.print(); // Output: Generic container.
    i.print(); // Output: Container for integers.

    return 0;
}



//Partial Template Specialization
/*Partial specialization is used when you want to create a separate implementation of a template for a subset of types that
match a certain pattern or condition.

Here is an example of how you can partially specialize a template class:*/

#include <iostream>

template <typename K, typename V>
class MyPair {
public:
    MyPair(K k, V v) : key(k), value(v) {}

    void print() const {
        std::cout << "General template: key = " << key << ", value = " << value << std::endl;
    }

private:
    K key;
    V value;
};

template <typename T>
class MyPair<T, int> {
public:
    MyPair(T k, int v) : key(k), value(v) {}

    void print() const {
        std::cout << "Partial specialization for int values: key = " << key
                  << ", value = " << value << std::endl;
    }

private:
    T key;
    int value;
};

int main() {
    MyPair<double, std::string> p1(3.2, "example");
    MyPair<char, int> p2('A', 65);
    p1.print(); // General template: key = 3.2, value = example
    p2.print(); // Partial specialization for int values: key = A, value = 65
}


//other ex

// Primary template
template <typename T>
struct MyTemplate {
    static const char* name() {
        return "General case";
    }
};

// Partial specialization for pointers
template <typename T>
struct MyTemplate<T*> {
    static const char* name() {
        return "Partial specialization for pointers";
    }
};

// Full specialization for int
template <>
struct MyTemplate<int> {
    static const char* name() {
        return "Full specialization for int";
    }
};

int main() {
    MyTemplate<double> t1; // General case
    MyTemplate<double*> t2; // Partial specialization for pointers
    MyTemplate<int> t3; // Full specialization for int

    std::cout << t1.name() << std::endl;
    std::cout << t2.name() << std::endl;
    std::cout << t3.name() << std::endl;

    return 0;
}