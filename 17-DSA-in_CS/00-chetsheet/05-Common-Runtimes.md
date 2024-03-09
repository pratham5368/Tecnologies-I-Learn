## Common Runtimes
Common runtimes are used to quantify the performance of an algorithm as the size of the input data increases. They are usually expressed in Big O notation such as:

- O(1): Constant time complexity, the algorithm will always execute in the same time regardless of the size of the input data set.
- O(N): Linear time complexity, the running time increases linearly with the size of the input data.
- O(log N): Logarithmic time complexity, the running time increases logarithmically with the size of the input data set.
- O(N log N): Quasilinear time complexity, slightly worse than linear but better than polynomial.
- O(N^2): Quadratic time complexity, the running time increases quadratically with the size of the input data.
- O(N^3): Cubic time complexity, the running time increases cubically with the size of the input.
- O(2^N), O(N!): Exponential and factorial time complexities respectively, the running time grows very quickly with the size of the input.

### Constant
Constant time complexity is denoted as O(1). This means the running time of the algorithm remains constant, regardless of the size of the input data set. Whether you’re working with an array of 10 elements or 1 million, if an operation takes the same amount of time regardless of the size of the array, it is said to have a constant time complexity. For example, accessing any element in an array by index is an O(1) operation, as the access operation takes the same amount of time regardless of the position of the element in the array.

### Logarithmic
Logarithmic time complexity (O(log n)) often indicates that the algorithm halves the size of the input at each step. It’s more efficient compared to linear time complexity. Binary search is a classic example of logarithmic time complexity where at every step, the algorithm breaks the list into half until it finds the desired element. As the size of the input increases, the growth of the time taken by an algorithm with logarithmic complexity grows slowly because it divides the problem into smaller parts in each step.

### Linear
Linear time complexity, denoted as O(n), is one of the best possible algorithmic performance situations. An algorithm is said to have a linear time complexity when the running time increases at most linearly with the size of the input data. This means that if you double the size of the input, the running time will at most double as well. In an ideal situation, every single element in the data set should be viewed exactly once. Sorting algorithms such as counting sort and bucket sort have linear time complexity under certain conditions.

### Polynomial
Polynomial time complexity, denoted as O(n^k), is a class of time complexity that represents the amount of time an algorithm takes to run as being proportional to the size of the input data raised to a constant power ‘k’. Polynomial time complexity includes runtimes like O(n), O(n^2), O(n^3), etc. The value ‘n’ is a representation of the size of the input, while ‘k’ represents a constant. Algorithms running in polynomial time are considered to be reasonably efficient for small and medium-sized inputs, but can become impractical for large input sizes due to the rapid growth rate of function.

### Exponential
Exponential time complexity is denoted as O(2^n), where a growth in n leads to an exponential growth in the number of steps required to complete a task. It means that the time complexity will double with every additional element in the input set. This is seen in many recursive algorithms, where a problem is divided into two sub-problems of the same type. Examples of such algorithms include the naive recursive approach for the Fibonacci sequence or the Towers of Hanoi problem. Although exponential time complexity solutions are often simpler to implement, they are inefficient for larger input sizes.

### Factorial
Factorial, often denoted as n!, is a mathematical operation. In the context of computer science and algorithm complexity, it represents an extremely high growth rate. This occurs because of the way a factorial is calculated: The product of all positive integers less than or equal to a non-negative integer n. Thus, if an algorithm has a complexity of O(n!), it means the running time increases factorially based on the size of the input data set. That is, for an input of size n, the algorithm does n * (n-1) * (n-2) * … * 1 operations. O(n!) is essentially the worst case scenario of complexity for an algorithm and is seen in brute-force search algorithms, such as the traveling salesman problem via brute-force.
