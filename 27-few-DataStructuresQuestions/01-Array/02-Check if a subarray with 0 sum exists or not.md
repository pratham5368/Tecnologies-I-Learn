## 1. Given an integer array, check if it contains a subarray having zero-sum.
```
Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 } 

Output: Subarray with zero-sum exists 

The subarrays with a sum of 0 are:
 { 3, 4, -7 }
 { 4, -7, 3 }
 { -7, 3, 1, 3 }
 { 3, 1, -4 }
 { 3, 1, 3, 1, -4, -2, -2 }
 { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

```
Solution:
```
# Function to check if a sublist with zero-sum is present in a given list or not
def hasZeroSumSublist(nums):
 
    # create an empty set to store the sum of elements of each
    # sublist `nums[0…i]`, where `0 <= i < len(nums)`
    s = set()
 
    # insert 0 into the set to handle the case when sublist with
    # zero-sum starts from index 0
    s.add(0)
 
    total = 0
 
    # traverse the given list
    for i in nums:
 
        # sum of elements so far
        total += i
 
        # if the sum is seen before, we have found a sublist with zero-sum
        if total in s:
            return True
 
        # insert sum so far into the set
        s.add(total)
 
    # we reach here when no sublist with zero-sum exists
    return False
 
 
if __name__ == '__main__':
 
    nums = [4, -6, 3, -1, 4, 2, 7]
 
    if hasZeroSumSublist(nums):
        print('Sublist exists')
    else:
        print('Sublist does not exist')
```

## 2. Print all subarrays with 0 sum

- same question just have to print out the solution

```
# Function to print all sublists with a zero-sum present in a given list
def printAllSublists(nums):
 
    # consider all sublists starting from `i`
    for i in range(len(nums)):
        total = 0
        # consider all sublists ending at `j`
        for j in range(i, len(nums)):
            # sum of elements so far
            total += nums[j]
            # if the sum is seen before, we have found a sublist with zero-sum
            if total == 0:
                print('Sublist', (i, j))
 
 
if __name__ == '__main__':
 
    nums = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
    printAllSublists(nums)
```