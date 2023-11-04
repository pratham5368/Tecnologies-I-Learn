/*namespace is a named scope or container that is used to organize and enclose a collection of code elements, such as variables,
functions, classes, and other namespaces. They are mainly used to divide and manage the code base, giving developers control over 
name collisions and the specialization of code.*/

namespace identifier {
    // code elements
}
//To access elements within a namespace, you can use the scope resolution operator ::
//Declaring and accessing a namespace
#include <iostream>

namespace animals {
    std::string dog = "Bobby";
    std::string cat = "Lilly";
}

int main() {
    std::cout << "Dog's name: " << animals::dog << std::endl;
    std::cout << "Cat's name: " << animals::cat << std::endl;

    return 0;
}


//Nesting namespaces


#include <iostream>

namespace outer {
    int x = 10;

    namespace inner {
        int y = 20;
    }
}

int main() {
    std::cout << "Outer x: " << outer::x << std::endl;
    std::cout << "Inner y: " << outer::inner::y << std::endl;

    return 0;
}




//`using `  keyword:-to import namespaced elements into the current scope

//Using a single element from a namespace
#include <iostream>

namespace animals {
    std::string dog = "Bobby";
    std::string cat = "Lilly";
}

int main() {
    using animals::dog;
    
    std::cout << "Dog's name: " << dog << std::endl;

    return 0;
}
//Using the entire namespace
#include <iostream>

namespace animals {
    std::string dog = "Bobby";
    std::string cat = "Lilly";
}

int main() {
    using namespace animals;
    
    std::cout << "Dog's name: " << dog << std::endl;
    std::cout << "Cat's name: " << cat << std::endl;

    return 0;
}
