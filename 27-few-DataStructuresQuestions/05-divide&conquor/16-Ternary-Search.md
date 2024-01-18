## Ternary Search
![](https://www.techiedelight.com/wp-content/uploads/Complexity.png)

```
# Ternary search algorithm to return the position of
# target `x` in a given list `A`
def ternarySearch(A, x):
 
    (left, right) = (0, len(A) - 1)
 
    while left <= right:
 
        leftMid = left + (right - left) // 3
        rightMid = right - (right - left) // 3
 
        # leftMid = (2*left + right) // 3
        # rightMid = (left + 2*right) // 3
 
        if A[leftMid] == x:
            return leftMid
        elif A[rightMid] == x:
            return rightMid
        elif A[leftMid] > x:
            right = leftMid - 1
        elif A[rightMid] < x:
            left = rightMid + 1
        else:
            left = leftMid + 1
            right = rightMid - 1
 
    return -1
 
 
if __name__ == '__main__':
 
    A = [2, 5, 6, 8, 9, 10]
    key = 6
 
    index = ternarySearch(A, key)
 
    if index != -1:
        print(f'Element found at index {index}')
    else:
        print('Element found not in the list')
 

Output:Element found at index 2
```