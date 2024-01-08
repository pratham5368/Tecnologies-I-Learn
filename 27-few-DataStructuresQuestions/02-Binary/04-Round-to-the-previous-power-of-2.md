## Round up to the previous power of 2
Input:  n = 20
Output: 16 

Input:  n = 16
Output: 16

```py
# Compute a power of two less than or equal to `n`
def findPreviousPowerOf2(n):
 
    # do till only one bit is left
    while (n & n - 1):
        n = n & n - 1       # unset rightmost bit
 
    # `n` is now a power of two (less than or equal to `n`)
    return n
 
 
if __name__ == '__main__':
 
    n = 128
    print('The previous power of 2 is', findPreviousPowerOf2(n))
#Output:The previous power of 2 is 64
```
### Approach 2
The idea is to run a loop by initializing the result by 1. We double the result value at each iteration of the loop and divide n in half and continue the loop till n becomes 0.
```py
# Compute a power of two less than or equal to `n`
def findPreviousPowerOf2(n):
 
    # initialize result by 1
    k = 1
 
    # `k` and divide `n` in half till it becomes 0
    while n:
        k = k << 1          # k
        n >>= 1
 
    return k >> 1
 
 
if __name__ == '__main__':
 
    n = 127
    print('The previous power of 2 is', findPreviousPowerOf2(n))
# Output:The previous power of 2 is 64
```