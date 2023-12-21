## Given an integer array, find the maximum product of two integers in it.

For example, consider array {-10, -3, 5, 6, -2}. The maximum product is the (-10, -3) or (5, 6) pair.

```
# A naive solution to finding the maximum product of two integers in a list
def findMaximumProduct(A):
 
    # `n` is the length of the list
    n = len(A)
 
    # base case
    if n < 2:
        return
 
    # sort list in ascending order
    A.sort()
 
    # choose the maximum of the following:
    # 1. Product of the first two elements or
    # 2. Product of the last two elements.
 
    if (A[0] * A[1]) > (A[n - 1] * A[n - 2]):
        print("Pair is", (A[0], A[1]))
    else:
        print("Pair is", (A[n - 1], A[n - 2]))
 
 
if __name__ == '__main__':
 
    A = [-10, -3, 5, 6, -20]
    findMaximumProduct(A)
```

The time complexity of the above solution is O(n.log(n)) and doesn’t require any extra space.

 