### We can easily solve this problem in linear time using Kadane’s algorithm. The idea is to maintain a maximum (positive-sum) subarray “ending” at each index of the given array. This subarray is either empty (in which case its sum is zero) or consists of one more element than the maximum subarray ending at the previous index.

```
# Function to find the maximum sum of a contiguous subarray
# in a given integer array
def kadane(arr):
 
    # stores the maximum sum sublist found so far
    max_so_far = 0
 
    # stores the maximum sum of sublist ending at the current position
    max_ending_here = 0
 
    # traverse the given list
    for i in arr:
        # update the maximum sum of sublist "ending" at index 'i' (by adding the
        # current element to maximum sum ending at previous index 'i-1')
        max_ending_here = max_ending_here + i
 
        # if the maximum sum is negative, set it to 0 (which represents
        # an empty sublist)
        max_ending_here = max(max_ending_here, 0)
 
        # update the result if the current sublist sum is found to be greater
        max_so_far = max(max_so_far, max_ending_here)
 
    return max_so_far
 
 
if __name__ == '__main__':
 
    arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 
    print('The sum of contiguous sublist with the largest sum is',
        kadane(arr))
 
```

### Solution-2
```
import sys
 
 
# Function to find the maximum sum of a contiguous subarray
# in a given integer array (handles negative numbers as well)
def kadaneNeg(arr):
    # stores the maximum sum sublist found so far
    max_so_far = -sys.maxsize
 
    # stores the maximum sum of sublist ending at the current position
    max_ending_here = 0
 
    # traverse the given list
    for i in range(len(arr)):
        # update the maximum sum of sublist "ending" at index 'i' (by adding the
        # current element to maximum sum ending at previous index 'i-1')
        max_ending_here = max_ending_here + arr[i]
 
        # maximum sum should be more than the current element
        max_ending_here = max(max_ending_here, arr[i])
 
        # update the result if the current sublist sum is found to be greater
        max_so_far = max(max_so_far, max_ending_here)
 
    return max_so_far
 
 
if __name__ == '__main__':
 
    arr = [-8, -3, -6, -2, -5, -4]
    print('The sum of contiguous sublist with the largest sum is', kadaneNeg(arr))
```