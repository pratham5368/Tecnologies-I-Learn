## Given an integer array, find a subarray having a given sum in it.

```
Input:  nums[] = {2, 6, 0, 9, 7, 3, 1, 4, 1, 10}, 
target = 15
Output: {6, 0, 9} 

Input:  nums[] = {0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10}, target = 15
Output: {1, -4, 7, 6, 1, 4} or {4, 1, 10}  

Input:  nums[] = {0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10}, target = -3
Output: {1, -4} or {-7, 1, -4, 7}
```

 Using Hashing
 ```
 
# Function to check if a sublist with the given sum exists in the list or not
def findSublist(nums, target):
 
    # create an empty set
    s = set()
 
    # insert number 0 into the set to handle the case when a
    # sublist with the given sum starts from index 0
    s.add(0)
 
    # keep track of the sum of elements so far
    sum_so_far = 0
 
    # traverse the given list
    for i in nums:
 
        # update sum_so_far
        sum_so_far += i
 
        # if `sum_so_far - target` is seen before, we have found
        # the sublist with sum equal to `target`
        if (sum_so_far - target) in s:
            return True
 
        # otherwise, add the sum of elements so far in the set
        s.add(sum_so_far)
 
    # we reach here when no sublist exists
    return False
 
 
if __name__ == '__main__':
 
    # a list of integers
    nums = [0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10]
    target = -3
 
    if findSublist(nums, target):
        print('Sublist with the given sum exists')
 
    else:
        print('Sublist with the given sum does not exist')
 
 ```