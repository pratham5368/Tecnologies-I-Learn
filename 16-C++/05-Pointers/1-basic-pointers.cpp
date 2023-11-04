//A pointer is a variable that stores the memory address of another variable (or function).a general format to declare a pointer:
dataType *pointerName;

//Initializing a pointer:
int num = 10;
int *ptr = &num;  // Pointer 'ptr' now points to the memory address of 'num'

//Accessing value using a pointer:
int value = *ptr; // Value now contains the value of the variable that 'ptr' points to (i.e., 10)



string food = "Pizza";
string* ptr = &food;

// Output the value of food (Pizza)
cout << food << "\n";

// Output the memory address of food (0x6dfed4)
cout << &food << "\n";

// Access the memory address of food and output its value (Pizza)
cout << *ptr << "\n";

// Change the value of the pointer
*ptr = "Hamburger";

// Output the new value of the pointer (Hamburger)
cout << *ptr << "\n";

// Output the new value of the food variable (Hamburger)
cout << food << "\n";




//1.Smart Pointers
/*a.Unique Pointer (`unique_ptr`)
std::unique_ptr is a smart pointer provided by the C++ Standard Library. It is a template class that is used for managing 
single objects or arrays.
unique_ptr works on the concept of exclusive ownership - meaning only one unique_ptr is allowed to own an object at a time. 
This ownership can be transferred or moved, but it cannot be shared or copied.
This concept helps to prevent issues like dangling pointers, reduce memory leaks, and eliminates the need for manual memory management.
 When the unique_ptr goes out of scope, it automatically deletes the object it owns.
*/
//Creating a unique_ptr
#include <iostream>
#include <memory>

int main() {
    std::unique_ptr<int> p1(new int(5)); // Initialize with pointer to a new integer
    std::unique_ptr<int> p2 = std::make_unique<int>(10); // Preferred method (C++14 onwards)

    std::cout << *p1 << ", " << *p2 << std::endl;
    return 0;
}

//Transferring Ownership
#include <iostream>
#include <memory>

int main() {
    std::unique_ptr<int> p1(new int(5));

    std::unique_ptr<int> p2 = std::move(p1); // Ownership is transferred from p1 to p2

    if (p1) {
        std::cout << "p1 owns the object" << std::endl;
    } else if (p2) {
        std::cout << "p2 owns the object" << std::endl;
    }

    return 0;
}

//Using unique_ptr with Custom Deleters

#include <iostream>
#include <memory>

struct MyDeleter {
    void operator()(int* ptr) {
        std::cout << "Custom Deleter: Deleting pointer" << std::endl;
        delete ptr;
    }
};

int main() {
    std::unique_ptr<int, MyDeleter> p1(new int(5), MyDeleter());
    return 0; // Custom Deleter will be called when p1 goes out of scope
}

/*Remember that since unique_ptr has exclusive ownership, you cannot use it when you need shared access to an object.
 For such cases, you can use std::shared_ptr*/





/*b.(shared_ptr) is a type of smart pointer in C++ that allows multiple pointers to share ownership of a dynamically allocated object. 
The object will be automatically deallocated only when the last shared_ptr that points to it is destroyed.

When using a shared_ptr, the reference counter is automatically incremented every time a new pointer is created, and decremented
 when each pointer goes out of scope. Once the reference counter reaches zero, the system will clean up the memory.*/

#include <iostream>
#include <memory>

class MyClass {
public:
    MyClass() { std::cout << "Constructor is called." << std::endl; }
    ~MyClass() { std::cout << "Destructor is called." << std::endl; }
};

int main() {
    // create a shared pointer to manage the MyClass object
    std::shared_ptr<MyClass> ptr1(new MyClass());
    
    {
        // create another shared pointer and initialize it with the previously created pointer
        std::shared_ptr<MyClass> ptr2 = ptr1;

        std::cout << "Inside the inner scope." << std::endl;
        // both pointers share the same object, and the reference counter has been increased to 2
    }

    std::cout << "Outside the inner scope." << std::endl;
    // leaving the inner scope will destroy ptr2, and the reference counter is decremented to 1
    
    // the main function returns, ptr1 goes out of scope, and the reference counter becomes 0
    // this causes the MyClass object to be deleted and the destructor is called
}



/*c.weak_ptr is a type of smart pointer in C++ that adds a level of indirection and safety to a raw pointer.
It is mainly used to break reference cycles in cases where two objects have shared pointers to each other, or when you 
need a non-owning reference to an object that is managed by a shared_ptr.
A weak_ptr doesn’t increase the reference count of the object it points to, which is a crucial distinction between weak_ptr and shared_ptr.
This ensures that the object will be deleted once the last shared_ptr that owns it goes out of scope, even if there are weak_ptrs still referencing it.
To use a weak_ptr, you must convert it to a shared_ptr using the lock() function, which tries to create a new shared_ptr that shares 
ownership of the object. If successful, the object’s reference count is increased and you can use the returned shared_ptr to safely access the object.

*/


#include <iostream>
#include <memory>

class MyClass {
public:
    void DoSomething() {
        std::cout << "Doing something...\n";
    }
};

int main() {
    std::weak_ptr<MyClass> weak;

    {
        std::shared_ptr<MyClass> shared = std::make_shared<MyClass>();
        weak = shared;

        if(auto sharedFromWeak = weak.lock()) {
            sharedFromWeak->DoSomething(); // Safely use the object
            std::cout << "Shared uses count: " << sharedFromWeak.use_count() << '\n'; // 2
        }
    }

    // shared goes out of scope and the MyClass object is destroyed

    if(auto sharedFromWeak = weak.lock()) {
        // This block will not be executed because the object is destroyed
    }
    else {
        std::cout << "Object has been destroyed\n";
    }

    return 0;
}





//2.Raw Pointers
/*a. new and delete operators*/
/*The new operator is used to allocate memory on the heap. The memory allocated using new remains available until you 
explicitly deallocate it using the corresponding delete operator.*/
int* ptr = new int; // Dynamically allocates an int on the heap
*ptr = 42; // Assigns the value 42 to the allocated int

/*The delete operator is used to deallocate memory that has been allocated using new. After memory is deallocated, it’s
available to be reallocated for other purposes. Failing to properly deallocate memory can lead to memory leaks.*/
int* ptr = new int; // Dynamically allocates an int on the heap
*ptr = 42; // Assigns the value 42 to the allocated int

delete ptr; // Deallocates the memory assigned to ptr

/*The new[] and delete[] operators are used for allocating and deallocating memory for an array of objects. 
The syntax for new[] and delete[] is very similar to that of new and delete*/

int n = 10;
int* arr = new int[n]; // Dynamically allocates an array of 10 integers on the heap

// Set some values in the array
for (int i = 0; i < n; i++) {
  arr[i] = i;
}

delete[] arr; // Deallocates the memory assigned to the array






//b.Memory Leakage
/*Memory leakage occurs when a program allocates memory in the heap but does not release the memory back to the operating system 
when it is no longer needed. Over time, this leads to exhaustion of available memory, resulting in low system performance or crashes*/
void create_memory_leak() {
    int* ptr = new int[100]; // Allocating memory in the heap for an array of integers
    // Some code...
    // Code to deallocate the memory is missing: delete[] ptr;
} // ptr goes out of scope, memory block allocated is not deallocated, causing a memory leak.

/*To avoid memory leaks, you should always ensure that memory is deallocated before a pointer goes out of scope or is reassigned.
Some ways to achieve this include using the C++ smart pointers (std::unique_ptr, std::shared_ptr), RAII (Resource Acquisition Is
Initialization) techniques, and containers from the C++ standard library that manage memory allocation internally (e.g., std::vector, std::string).*/
#include <memory>

void no_memory_leak() {
    std::shared_ptr<int[]> ptr = std::make_shared<int[]>(100); // Allocating memory in the heap for an array of integers using shared_ptr
    // Some code...
} // shared_ptr goes out of scope and it will automatically deallocate the memory block assigned to it.
