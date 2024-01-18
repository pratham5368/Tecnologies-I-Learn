## Find the missing term in a sequence
# Function to find a missing term in a sequence
```
def findMissingTerm(nums):
 
    # search space is nums[left…right]
    (left, right) = (0, len(nums) - 1)
 
    # calculate the common difference between successive elements
    diff = (nums[-1] - nums[0]) // len(nums)
 
    # loop till the search space is exhausted
    while left <= right:
 
        # find the middle index
        mid = right - (right - left) // 2
 
        # check the difference of middle element with its right neighbor
        if mid + 1 < len(nums) and nums[mid + 1] - nums[mid] != diff:
            return nums[mid + 1] - diff
 
        # check the difference of middle element with its left neighbor
        if mid - 1 >= 0 and nums[mid] - nums[mid - 1] != diff:
            return nums[mid - 1] + diff
 
        # if the missing element lies on the left sublist, reduce
        # our search space to the right sublist nums[left…mid-1]
        if nums[mid] - nums[0] != (mid - 0) * diff:
            right = mid - 1
 
        # if the missing element lies on the right sublist, reduce
        # our search space to the right sublist nums[mid+1…right]
        else:
            left = mid + 1
 
    return -1
 
 
if __name__ == '__main__':
 
    nums = [5, 7, 9, 11, 15]
    print('The missing term is', findMissingTerm(nums))
 

#Output:The missing term is 13
```