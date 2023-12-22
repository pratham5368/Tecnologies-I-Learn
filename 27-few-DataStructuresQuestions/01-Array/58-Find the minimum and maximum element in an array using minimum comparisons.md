## Find the minimum and maximum element in an array using minimum comparisons
```
Input: nums[] = [5, 7, 2, 4, 9, 6] 
Output: 
The minimum array element is 2
The maximum array element is 9
```

Solution
```
# Naive solution to find the minimum and maximum number in a list
def findMinAndMax(nums):
 
    # initialize minimum and maximum element with the first element
    max = min = nums[0]
 
    # do for each element in the list
    for i in range(1, len(nums)):
 
        # if the current element is greater than the maximum found so far
        if nums[i] > max:
            max = nums[i]
 
        # if the current element is smaller than the minimum found so far
        elif nums[i] < min:
            min = nums[i]
 
    print('The minimum element in the list is', min)
    print('The maximum element in the list is', max)
 
 
if __name__ == '__main__':
 
    nums = [5, 7, 2, 4, 9, 6]
 
    # find the minimum and maximum element, respectively
    findMinAndMax(nums)
 

# Output: The minimum array element is 2The maximum array element is 9
```