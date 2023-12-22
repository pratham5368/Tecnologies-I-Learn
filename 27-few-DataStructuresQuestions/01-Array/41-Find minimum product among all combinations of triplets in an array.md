## Find minimum product among all combinations of triplets in an array
```
Input:  { 4, -1, 3, 5, 9 }
Output: The minimum product is -45 (-1, 5, 9)  

Input:  { 1, 4, 10, -2, 4 }
Output: The minimum product is -80 (10, 4, -2)  

Input:  { 3, 4, 1, 2, 5 }
Output: The minimum product is 6 (3, 1, 2)
```
1. Using Sorting
A better approach, that takes O(n.log(n)) time, is to sort the array and return the minimum among its first three elements and the product of the first element with its last two items. This logic works as the multiplication of two negative numbers results in a positive number. The multiplication of a large positive number with a negative number results in a large negative number.

```
import sys
 
 
# Find the minimum product among all combinations of triplets in a list
def findMinTripletProduct(A):
 
    n = len(A)
    if n <= 2:
        return sys.maxsize
 
    # sort the given list in a natural order
    A.sort()
 
    # consider the minimum among the product of the first three elements and
    # the product of the first element with the last two
    return min(A[n-1] * A[n-2] * A[0], A[0] * A[1] * A[2])
 
 
if __name__ == '__main__':
 
    A = [4, -1, 3, 5, 9]
 
    min = findMinTripletProduct(A)
 
    if min == sys.maxsize:
        print("No triplet exists since the list has less than 3 elements")
    else:
        print("The minimum product is", min)
```
2. Linear time solution
The following approach runs in O(n) time but takes O(n) extra space. The idea is to take the help of four auxiliary arrays, left_min[], left_max[], right_min[], and right_max[] of the same size as the input array, where:

- left_min[i] contains the minimum element to the left of A[i].
- left_max[i] contains the maximum element to the left of A[i].
- right_min[i] contains the minimum element to the right of A[i].
- right_max[i] contains the maximum element to the right of A[i].

```
import sys
 
 
# Find the minimum product among all combinations of triplets in a list
def findMinTripletProduct(A):
 
    # get list size
    n = len(A)
 
    # Take four auxiliary spaces of size `n`
 
    # `left_max[i]` contains the maximum element to the left of `A[i]`
    left_max = [None] * n
 
    # `right_max[i]` contains the maximum element to the right of `A[i]`
    right_max = [None] * n
 
    # `left_min[i]` contains the minimum element to the left of `A[i]`
    left_min = [None] * n
 
    # `right_min[i]` contains the minimum element to the right of `A[i]`
    right_min = [None] * n
 
    # fill `left_min` and `left_max`
    min_so_far = sys.maxsize
    max_so_far = -sys.maxsize
 
    for i in range(n):
        left_min[i] = min_so_far
        left_max[i] = max_so_far
 
        min_so_far = min(min_so_far, A[i])
        max_so_far = max(max_so_far, A[i])
 
    # fill `left_min` and `left_max`
    min_so_far = sys.maxsize
    max_so_far = -sys.maxsize
 
    for i in reversed(range(n)):
        right_min[i] = min_so_far
        right_max[i] = max_so_far
 
        min_so_far = min(min_so_far, A[i])
        max_so_far = max(max_so_far, A[i])
 
    # consider each array element (except first and last) as the triplet's
    # middle element and find the minimum by considering all combinations
    result = sys.maxsize
    for i in range(1, n - 1):
        result = min(result, min(A[i] * left_min[i] * right_min[i],
                                A[i] * left_min[i] * right_max[i],
                                A[i] * left_max[i] * right_min[i],
                                A[i] * left_max[i] * right_max[i]))
 
    return result
 
 
if __name__ == '__main__':
 
    A = [4, -1, 3, 5, 9]
 
    min = findMinTripletProduct(A)
 
    if min == sys.maxsize:
        print("No triplet exists since the list has less than 3 elements")
    else:
        print("The minimum product is", min)
```

3. Linear time and constant space solution
We have seen that the sorting solution only uses the first three and last two array elements but sorts the whole array, which modifies the input array and is also costly for large inputs. This can be avoided by finding the smallest, the second smallest, and the third smallest element, along with the largest and the second largest array element in linear time. 
```
import sys
 
 
# Find the minimum product among all combinations of triplets in a list
def findMinTripletProduct(A):
 
    # explicitly handle the wrong input
    if len(A) <= 2:
        return sys.maxsize
 
    # 1. Find the smallest, second smallest, and third smallest element in the list
    first = A[0]
    second = sys.maxsize
    third = sys.maxsize
 
    for i in range(1, len(A)):
 
        # if the current element is less than the smallest element found so far
        if A[i] < first:
            third = second
            second = first
            first = A[i]
 
        # if the current element is less than the second smallest element
        elif A[i] < second:
            third = second
            second = A[i]
 
        # if the current element is less than the third smallest element
        elif A[i] < third:
            third = A[i]
 
    # 2. Find the largest and second largest element in the list
    max1 = A[0]
    max2 = -sys.maxsize
 
    for i in range(1, len(A)):
 
        # if the current element is more than the largest element found so far
        if A[i] > max1:
            max2 = max1
            max1 = A[i]
 
        # if the current element is more than the second largest element
        elif A[i] > max2:
            max2 = A[i]
 
    return min(first * second * third, max1 * max2 * first)
 
 
if __name__ == '__main__':
 
    A = 4, -1, 3, 5, 9
 
    min = findMinTripletProduct(A)
 
    if min == sys.maxsize:
        print("No triplet exists since the list has less than 3 elements")
    else:
        print("The minimum product is", min)
 
```