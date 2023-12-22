## Ternary Search vs Binary search
In Ternary Search, we divide our array into three parts (by taking two mid) and discard two-third of our search space at each iteration. At first look, it seems that ternary search might be faster than binary search as its time complexity on an input containing n items should be O(log3n), which is less than the time complexity of binary search O(log2n).

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
![](https://www.techiedelight.com/wp-content/uploads/Complexity.png)

- For Binary search – T(n) = 2clog2n + O(1)

- For Ternary search – T(n) = 4clog3n + O(1)