## Efficiently implement power function
1. Optimized Divide and Conquer Solution
```
# Optimized recursive solution to calculate `pow(x, n)`
# using divide-and-conquer
def power(x, n):
 
    # base condition
    if n == 0:
        return 1
 
    # calculate subproblem recursively
    pow = power(x, n // 2)
 
    if n & 1:    # if `y` is odd
        return x * pow * pow
 
    # otherwise, `y` is even
    return pow * pow
 
 
if __name__ == '__main__':
 
    x = -2
    n = 10
 
    print(f'pow({x}, {n}) =', power(x, n))
 

Output:pow(-2, 10) = 1024
The time complexity of the above solution is O(log(n)).
```
2. Using Low-Level Programming (Binary Operators)

We can also use binary operators to compute pow(x, n) in O(log(n)) time.

```
# Iterative function to calculate `pow(x, n)` using binary operators
def power(x, n):
 
    pow = 1
 
    # loop till `n` become 0
    while n:
 
        # if `n` is odd, multiply the result by `x`
        if n & 1:
            pow *= x
 
        # divide `n` by 2
        n = n >> 1
 
        # multiply `x` by itself
        x = x * x
 
    # return result
    return pow
 
 
if __name__ == '__main__':
 
    x = -2
    n = 10
 
    print(f'pow({x}, {n}) =', power(x, n))
 

#Output:pow(-2, 10) = 1024
```