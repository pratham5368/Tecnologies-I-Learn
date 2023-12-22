## Find the maximum absolute difference between the sum of two non-overlapping subarrays

```
Input:  A[] = { -3, -2, 6, -3, 5, -9, 3, 4, -1, -8, 2 } Output: The maximum absolute difference is 19. The two subarrays are { 6, -3, 5 }, { -9, 3, 4, -1, -8 } whose sum of elements are 8 and -11, respectively. So, abs(8-(-11)) or abs(-11-8) = 19.
```
solution:
```

import sys
 
 
# `diff` ——> counter for loop from `i` to `j` in `A[]` (`diff` can be `+1` or `-1`)
# Fill `aux[k]` with the maximum sum of sublist `A(0, k)` if the `diff` is 1, or
# maximum sum of sublist `A(k, n-1)` if the `diff` is -1 using Kadane’s algorithm
def findMaxSumSublist(A, aux, i, j, diff):
 
    max_so_far = max_ending_here = aux[i] = A[i]
 
    k = i + diff
    while k != j:
        # update the maximum sum of sublist "ending" or "starting" at index `k`
        max_ending_here = max(A[k], max_ending_here + A[k])
 
        # update the result if the current sublist sum is found to be greater
        max_so_far = max(max_so_far, max_ending_here)
        aux[k] = max_so_far
 
        k = k + diff
 
 
def fillArrays(A, left_max, right_max, left_min, right_min, n):
 
    findMaxSumSublist(A, left_max, 0, n - 1, 1)
    findMaxSumSublist(A, right_max, n - 1, 0, -1)
 
    # negate `A` for finding the minimum sum of sublists using
    # the same logic for finding the maximum sum of sublists
    for i in range(n):
        A[i] = -A[i]
 
    findMaxSumSublist(A, left_min, 0, n - 1, 1)
    findMaxSumSublist(A, right_min, n - 1, 0, -1)
 
    # negate `left_min[]` and `right_min[]` to get the minimum sum of sublists
    for i in range(n):
        left_min[i] = -1 * left_min[i]
 
    for i in range(n):
        right_min[i] = -1 * right_min[i]
 
    # restore the sign of `A`
    for i in range(n):
        A[i] = -A[i]
 
 
# Find the maximum absolute difference between the sum of elements of
# two non-overlapping sublists in a given list
def findMaxAbsDiff(A):
 
    n = len(A)
 
    # base case
    if n == 0:
        return 0
 
    # base case
    if n == 1:
        return nums[0]
 
    # `left_max[i]` stores maximum sum of sublist in `A(0, i)`
    left_max = [-sys.maxsize] * n
 
    # `right_max[i]` stores maximum sum of sublist in `A(i, n-1)`
    right_max = [-sys.maxsize] * n
 
    # `left_min[i]` stores minimum sum of sublist in `A(0, i)`
    left_min = [sys.maxsize] * n
 
    # `right_min[i]` stores minimum sum of sublist in `A(i, n-1)`
    right_min = [sys.maxsize] * n
 
    fillArrays(A, left_max, right_max, left_min, right_min, n)
 
    # stores the maximum absolute difference
    max_abs_diff = -sys.maxsize
 
    # do for each index `i` in the list
    for i in range(n - 1):
        abs_diff = max(abs(left_max[i] - right_min[i + 1]),
                    abs(left_min[i] - right_max[i + 1]))
        max_abs_diff = max(max_abs_diff, abs_diff)
 
    return max_abs_diff
 
 
if __name__ == '__main__':
 
    A = [-3, -2, 6, -3, 5, -9, 3, 4, -1, -8, 2]
 
    print("The maximum absolute difference is", findMaxAbsDiff(A))
```