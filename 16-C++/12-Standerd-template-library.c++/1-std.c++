/*The C++ Standard Template Library (STL) is a collection of header files that provide several data structures, algorithms, and
functions to simplify your C++ coding experience. The primary purpose of the STL is to save time and increase efficiency by providing
a ready-to-use set of useful tools. The most commonly used features of the STL can be divided into three main categories: containers,
algorithms, and iterators.*/


/*Containers are the data structures used for data storage and manipulation in C++.*/
//1.Sequence Containers: These are linear data structures that store elements in a sequential manner. 

std::vector: A dynamic array that grows and shrinks at runtime.
std::vector<int> my_vector;
std::list: A doubly linked list.
std::list<int> my_list;
std::deque: A double-ended queue allowing insertion and deletion at both ends.
std::deque<int> my_deque;


//2.Associative Containers: These containers store data in a sorted manner with unique keys. 

std::set: A collection of unique elements sorted by keys.
std::set<int> my_set;
std::map: A collection of key-value pairs sorted by keys.
std::map<std::string, int> my_map;


//3.Unordered Associative Containers: These containers store data in an unordered manner using hash tables. 

std::unordered_set: A collection of unique elements in no specific order.
std::unordered_set<int> my_unordered_set;
std::unordered_map: A collection of key-value pairs in no specific order.
std::unordered_map<std::string, int> my_unordered_map;


//4.Container Adaptors: These are containers based on other existing containers. 

std::stack: A LIFO data structure based on deque or list.
std::stack<int> my_stack;
std::queue: A FIFO data structure based on deque or list.
std::queue<int> my_queue;
std::priority_queue: A sorted queue based on vector or deque.
std::priority_queue<int> my_priority_queue;


//Algorithms
/*The STL provides several generic algorithms that can be used to perform various operations on the data stored in containers. 
They are divided into five categories: non-modifying sequence algorithms, modifying sequence algorithms, sorting algorithms, sorted
range algorithms, and numeric algorithms.
Some examples include std::find, std::replace, std::sort, and std::binary_search.

For example, to sort a vector, you can use the following code:*/

std::vector<int> my_vec = {4, 2, 5, 1, 3};
std::sort(my_vec.begin(), my_vec.end());



//Iterators are a fundamental concept in the STL, as they provide a unified way to access elements in containers. 
//Iterators can be thought of as an advanced form of pointers.

/*Each container has its own iterator type, which can be used to traverse elements and modify values. The most 
common iterator operations are begin() and end() for getting iterators pointing to the first and one past the last element of a
container, respectively.*/


std::vector<int> my_vec = {1, 2, 3, 4, 5};
for(auto it = my_vec.begin(); it != my_vec.end(); ++it) {
    std::cout << *it << " ";
}

