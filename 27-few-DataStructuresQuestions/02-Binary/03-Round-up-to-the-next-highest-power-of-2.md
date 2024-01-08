## Round up to the next highest power of 2
Given a positive number n, find the next highest power of 2. If n itself is a power of 2, return n.
### Approach 1
The idea is to unset the rightmost bit of n until only one bit is left, which will be the last set bit of the given number. To handle the case when n is the power of 2, initially decrement n by 1. Note that this operation will not impact output as we are only concerned about the last set bit of n.
```py
# Compute power of two greater than or equal to `n`
def findNextPowerOf2(n):
 
    # decrement `n` (to handle cases when `n` itself
    # is a power of 2)
    n = n - 1
 
    # do till only one bit is left
    while n & n - 1:
        n = n & n - 1       # unset rightmost bit
 
    # `n` is now a power of two (less than `n`)
 
    # return next power of 2
    return n << 1
 
 
if __name__ == '__main__':
 
    n = 127
    print('The next power of 2 is', findNextPowerOf2(n))
 

#Output:The next power of 2 is 128
```
### Approach 2
The idea is to decrement n by 1 (to handle the case when n itself is the power of 2) and run a loop by initializing the result by 2. We double the result value at each iteration of the loop and divide n in half and continue the loop till n becomes 0.

```py
# Compute power of two greater than or equal to `n`
def findNextPowerOf2(n):
 
    k = 1
    while k < n:
        k = k << 1
 
    return k
 
 
if __name__ == '__main__':
 
    n = 127
    print('The next power of 2 is', findNextPowerOf2(n))
 

# Output:The next power of 2 is 128
```
### Approach 3
The idea is to calculate position p of the last set bit of n and return a number with its p+1 bit set.
```py
from math import log
 
 
def log2(x, base):
    return int(log(x) / log(base))
 
 
# Compute power of two greater than or equal to `n`
def findNextPowerOf2(n):
 
    # decrement `n` (to handle the case when `n` itself
    # is a power of 2)
    n = n - 1
 
    # calculate the position of the last set bit of `n`
    lg = log2(n, 2)
 
    # next power of two will have a bit set at position `lg+1`.
    return 1 << lg + 1
 
 
if __name__ == '__main__':
 
    n = 20
    print('The next power of 2 is', findNextPowerOf2(n))
 

Output:The next power of 2 is 32
```
