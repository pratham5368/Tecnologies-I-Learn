## Reverse every consecutive `m`-elements of a subarray
```
Consider the below array. 

A[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 },
m = 3 

Then for subarray [i, j], where i and j is  

Input:  i = 1, j = 7 or 8
Output: [1, 4, 3, 2, 7, 6, 5, 8, 9, 10]  

Input:  i = 1, j = 9
Output: [1, 4, 3, 2, 7, 6, 5, 10, 9, 8]  

Input:  i = 3, j = 5
Output: [1, 2, 3, 6, 5, 4, 7, 8, 9, 10]  

Input:  i = 3, j = 4
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Solution:
```
# Utility function to swap elements `A[i]` and `A[j]` in
def swap(A, i, j):
    temp = A[i]
    A[i] = A[j]
    A[j] = temp
 
 
# Utility function to reverse `[i, j]`
def reverse(A, i, j):
    if i >= j:
        return
 
    # otherwise, swap two elements
    swap(A, i, j)
 
    # recur for the next pair
    reverse(A, i + 1, j - 1)
 
 
# Function to reverse every consecutive `m` elements of `[beg, end]`
def rev(A, beg, end, m):
 
    # base case
    if m <= 0:
        return
 
    # return if the length is less than `m`
    if m > end - beg + 1:
        return
 
    # reverse every consecutive `m` elements
    for i in range(beg, end + 1, m):
        # check if the length is at least `m`
        if i + m - 1 <= end:
            reverse(A, i, i + m - 1)
 
 
if __name__ == '__main__':
 
    A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    m = 3
 
    (beg, end) = (1, 8)
 
    # reverse
    rev(A, beg, min(end, len(A) - 1), m)
 
    # print the modified
    print(A)
```