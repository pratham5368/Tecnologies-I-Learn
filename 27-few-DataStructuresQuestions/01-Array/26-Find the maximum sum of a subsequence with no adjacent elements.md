## Find the maximum sum of a subsequence with no adjacent elements

```
Input:  { 1, 2, 9, 4, 5, 0, 4, 11, 6 }
Output: The maximum sum is 26 

The maximum sum is formed by subsequence { 1, 9, 5, 11 }
```

solution:

```
import sys
 
 
# Function to calculate the maximum sum in a given list
# with no adjacent elements considered
# `i` ——> index of the current element
# `prev` ——> index of the previous element included in the sum
def findMaxSumSubsequence(nums, i, n, prev=-sys.maxsize):
 
    # base case: all elements are processed
    if i == n:
        return 0
 
    # recur by excluding the current element
    excl = findMaxSumSubsequence(nums, i + 1, n, prev)
 
    incl = 0
 
    # include current element only if it's not adjacent to
    # the previous element
    if prev + 1 != i:
        incl = findMaxSumSubsequence(nums, i + 1, n, i) + nums[i]
 
    # return maximum sum we get by including or excluding
    # current item
    return max(incl, excl)
 
 
if __name__ == '__main__':
 
    nums = [1, 2, 9, 4, 5, 0, 4, 11, 6]
    print('The maximum sum is', findMaxSumSubsequence(nums, 0, len(nums)))
```

```
# Constant space DP-solution to calculate the maximum sum in a given
# list with no adjacent elements considered
def findMaxSumSubsequence(nums):
 
    # base case
    if not nums:
        return 0
 
    # base case
    if len(nums) == 1:
        return nums[0]
 
    # store maximum sum until index `i-2`
    prevOfPrev = nums[0]
 
    # stores maximum sum until index `i-1`
    prev = max(nums[0], nums[1])
 
    # start from index 2
    for i in range(2, len(nums)):
        # `curr` stores the maximum sum until index `i`
        curr = max(nums[i], max(prev, prevOfPrev + nums[i]))
        prevOfPrev = prev
        prev = curr
 
    # return maximum sum
    return prev
 
 
if __name__ == '__main__':
 
    nums = [1, 2, 9, 4, 5, 0, 4, 11, 6]
    print('The maximum sum is', findMaxSumSubsequence(nums))
 
```