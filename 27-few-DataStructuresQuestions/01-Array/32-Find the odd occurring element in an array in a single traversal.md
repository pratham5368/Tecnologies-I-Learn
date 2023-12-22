## Find the odd occurring element in an array in a single traversal

```
Input:  arr[] = [4, 3, 6, 2, 6, 4, 2, 3, 4, 3, 3] 
Output: The odd occurring element is 4
```
Solution:
```
# Function to find an odd occurring element in a given list
def findOddOccuring(arr):
 
    xor = 0
    for i in arr:
        xor = xor ^ i
 
    return xor
 
 
if __name__ == '__main__':
 
    arr = [4, 3, 6, 2, 6, 4, 2, 3, 4, 3, 3]
    print('The odd occurring element is', findOddOccuring(arr))
# odd occurring element is 4
```
## Find two odd occurring elements in an array without using any extra space

```
from math import log
 
 
def log2(x, base):
    return int(log(x) / log(base))
 
 
def findOddOccuring(arr):
 
    # take XOR of all list elements
    result = 0
    for i in arr:
        result = result ^ i
 
    # find the position of the rightmost set bit in `result`
    k = log2(result & -result, 2)
 
    # `x` and `y` are two odd appearing elements
    x = y = 0
 
    # split the list into two sublists
    for i in arr:
 
        # elements that have k'th bit set
        if i & (1 << k):
            x = x ^ i
 
        # elements that don't have k'th bit set
        else:
            y = y ^ i
 
    return x, y
 
 
if __name__ == '__main__':
 
    arr = [4, 3, 6, 2, 4, 2, 3, 4, 3, 3]
    print('The odd occurring elements are', findOddOccuring(arr))
```