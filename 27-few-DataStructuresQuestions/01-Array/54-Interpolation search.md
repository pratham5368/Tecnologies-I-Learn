## Interpolation search
Interpolation search is an algorithm similar to binary search for searching for a given target value in a sorted array. It parallels how humans search through a telephone book for a particular name, the target value by which the book’s entries are ordered.

 We know that binary search always chooses the middle of the remaining search space, discarding one half or the other depending on the comparison result between the mid-value and the target value. The remaining search space is reduced to the part before or after the mid-position.

By comparison, at each search step, Interpolation search calculates wherein the remaining search space the target might be present, based on the low and high values of the search space and the target’s value. The value found at this estimated position is then compared to the target value. If it’s not equal, then the remaining search space is reduced to the part before or after the estimated position depending on the comparison. This method will only work if calculations on the size of differences between target values are sensible.
```
Input: arr[] = [2, 3, 5, 7, 9]
target = 7 
Output: Element found at index 3  

Input: arr[] = [1, 4, 5, 8, 9]
target = 2 
Output: Element not found
```
solution:
```
# Function to determine if target exists in the sorted list `A` or not
# using an interpolation search algorithm
def interpolationSearch(A, target):
 
    # base case
    if not A:
        return -1
 
    # search space is A[left…right]
    (left, right) = (0, len(A) - 1)
 
    while A[right] != A[left] and A[left] <= target <= A[right]:
 
        # estimate mid
        mid = left + (target - A[left]) * (right - left) // (A[right] - A[left])
 
        # key is found
        if target == A[mid]:
            return mid
        # discard all elements in the right search space, including the middle element
        elif target < A[mid]:
            right = mid - 1
        # discard all elements in the left search space, including the middle element
        else:
            left = mid + 1
 
    # if the key is found
    if target == A[left]:
        return left
 
    # target doesn't exist in the list
    return -1
 
 
if __name__ == '__main__':
 
    A = [2, 5, 6, 8, 9, 10]
    key = 5
 
    index = interpolationSearch(A, key)
 
    if index != -1:
        print('Element found at index', index)
    else:
        print('Element found not in the list')
 

Output:Element found at index 1
```
## Exponential search
```
Input: A[] = [2, 3, 5, 7, 9]
target = 7 
Output: Element found at index 3  

Input: A[] = [1, 4, 5, 8, 9]
target = 2 
Output: Element not found
```
Exponential search is an algorithm used for searching sorted, unbounded/infinite arrays. The idea is to determine a range that the target value resides in and perform a binary search within that range. Assuming that the array is sorted in ascending order, it looks for the first exponent, k, where the value 2k is greater than the search key. Now 2k and 2k-1 becomes the upper bound and lower bound for the binary search algorithm, respectively.
```
# Binary search algorithm to return the position of key `x` in sublist A[left…right]
def binarySearch(A, left, right, x):
 
    # base condition (search space is exhausted)
    if left > right:
        return -1
 
    # find the mid-value in the search space and
    # compares it with the key
 
    mid = (left + right) // 2
 
    # overflow can happen. Use below
    # mid = left + (right - left) // 2
 
    # base condition (a key is found)
    if x == A[mid]:
        return mid
 
    # discard all elements in the right search space,
    # including the middle element
    elif x < A[mid]:
        return binarySearch(A, left, mid - 1, x)
 
    # discard all elements in the left search space,
    # including the middle element
    else:
        return binarySearch(A, mid + 1, right, x)
 
 
# Returns the position of key `x` in a given list `A` of length `n`
def exponentialSearch(A, x):
 
    # base case
    if not A:
        return -1
 
    bound = 1
 
    # find the range in which key `x` would reside
    while bound < len(A) and A[bound] < x:
        bound *= 2        # calculate the next power of 2
 
    # call binary search on A[bound/2 … min(bound, n-1)]
    return binarySearch(A, bound // 2, min(bound, len(A) - 1), x)
 
 
# Exponential search algorithm
if __name__ == '__main__':
 
    A = [2, 5, 6, 8, 9, 10]
    key = 9
 
    index = exponentialSearch(A, key)
 
    if index != -1:
        print('Element found at index', index)
    else:
        print('Element found not in the list')
 

Output:Element found at index 4
```
The exponential search takes O(log(i)) time, where i is the target’s position in the array when the target is in the array or position where the target should be if it isn’t in the array.