## The Longest Bitonic Subarray (LBS) problem is to find a subarray of a given sequence in which the subarray’s elements are first sorted in increasing order, then in decreasing order, and the subarray is as long as possible. Strictly ascending or descending subarrays are also accepted.
```
Longest bitonic subarray of the sequence { 3, 5, 8, 4, 5, 9, 10, 8, 5, 3, 4 } is { 4, 5, 9, 10, 8, 5, 3 } 

For sequences sorted in increasing or decreasing order, the output is the same as the input sequence, i.e., 
[1, 2, 3, 4, 5] ——> [1, 2, 3, 4, 5]

[5, 4, 3, 2, 1] ——> [5, 4, 3, 2, 1]

```
Solution:
```
# Function to find the length of the longest bitonic subarray in a list
def findBitonicSublist(A):
 
    if len(A) == 0:
        return
 
    # `I[i]` store the length of the longest increasing sublist,
    # ending at `A[i]`
    I = [1] * len(A)
 
    for i in range(1, len(A)):
        if A[i - 1] < A[i]:
            I[i] = I[i - 1] + 1
 
    # `D[i]` store the length of the longest decreasing sublist,
    # starting with `A[i]`
    D = [1] * len(A)
 
    for i in reversed(range(len(A) - 1)):
        if A[i] > A[i + 1]:
            D[i] = D[i + 1] + 1
 
    # consider each element as a peak and calculate LBS
    lbs_len = 1
    beg = end = 0
 
    for i in range(len(A)):
        if lbs_len < I[i] + D[i] - 1:
            lbs_len = (I[i] + D[i] - 1)
            beg = i - I[i] + 1
            end = i + D[i] - 1
 
    # print the longest bitonic subarray
    print("The length of the longest bitonic subarray is", lbs_len)
    print("The longest bitonic subarray is", A[beg:end+1])
 
 
if __name__ == '__main__':
 
    A = [3, 5, 8, 4, 5, 9, 10, 8, 5, 3, 4]
    findBitonicSublist(A)
```
The time complexity of the above solution is O(n) and requires O(n) extra space, where n is the size of the input.


```
# Function to find the length of the longest bitonic subarray in a list
def findBitonicSublist(A):
 
    n = len(A)
    if n == 0:
        return
 
    end_index = 0
    max_len = 1
    i = 0
 
    while i + 1 < n:
 
        # check for the longest bitonic subarray starting at `A[i]`
 
        # reset length to 1
        length = 1
 
        # run till sequence is increasing
        while i + 1 < n and A[i] < A[i + 1]:
            i = i + 1
            length = length + 1
 
        # run till sequence is decreasing
        while i + 1 < n and A[i] > A[i + 1]:
            i = i + 1
            length = length + 1
 
        # run till sequence is equal
        while i + 1 < n and A[i] == A[i + 1]:
            i = i + 1
 
        # update longest bitonic subarray if required
        if length > max_len:
            max_len = length
            end_index = i
 
    # print the longest bitonic subarray
    print("The length of the longest bitonic subarray is", max_len)
    print("The longest bitonic subarray is", A[end_index - max_len + 1: end_index + 1])
 
 
if __name__ == '__main__':
 
    A = [3, 5, 8, 4, 5, 9, 10, 8, 5, 3, 4]
    findBitonicSublist(A)
```
The time complexity of the above solution is O(n) and requires O(n) extra space, where n is the size of the input.

