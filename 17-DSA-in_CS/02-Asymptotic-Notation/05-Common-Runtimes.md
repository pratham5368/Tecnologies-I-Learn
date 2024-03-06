## Common Runtimes
Given below is the list of common algorithmic runtimes. The runtimes are listed in ascending order of their complexity.

### O(1) - Constant
Constant time algorithms are the simplest and most efficient algorithms. They are algorithms that always take the same amount of time to run, regardless of the size of the input. This is the best case scenario for an algorithm, and is the goal of all algorithms.

### O(log n) - Logarithmic
Logarithmic complexity algorithms are the second fastest algorithms. They are faster than linear algorithms, but slower than constant algorithms.

### O(n) - Linear
Linear algorithms are algorithms that have a runtime that is directly proportional to the size of the input. This means that the runtime of the algorithm will increase linearly with the size of the input. For example, if the input size is 10, the runtime will be 10 times the runtime of the algorithm when the input size is 1. If the input size is 100, the runtime will be 100 times the runtime of the algorithm when the input size is 1.

### O(n log n) - Linearithmic


O(n^2) - Quadratic

O(n^3) - Cubic

### O(2^n) - Exponential
Exponential algorithms are those that grow at a rate of 2^n. This means that for each additional input, the algorithm will take twice as long to run. The following function is an example of an exponential algorithm:
```
def exponential(n):
    if n == 0:
        return 1
    return 2 * exponential(n - 1)
```

### O(n!) - Factorial
Factorial complexity algorithms have a runtime of O(n!). This is the worst case scenario for an algorithm. Factorial complexity algorithms are very inefficient and should be avoided.
```
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
```

### O(n^k) - Polynomial
Polynomial algorithms are algorithms that have a runtime that is a polynomial function of the input size. This means that the runtime is a function of the form n^k where k is a constant. For example, the runtime of the following algorithm is n^2:
```
def polynomial_algorithm(n):
    for i in range(n):
        for j in range(n):
            print(i, j)
```
