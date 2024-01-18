## Find floor and ceil of a number in a sorted array
```
# Function to find the ceiling of `x` in a sorted list nums[left…right].
# i.e., the smallest integer greater than or equal to `x`
def findCeiling(nums, left, right, x):
 
    # search space is nums[left…right]
 
    # base case
    if not nums:
        return -1
 
    # if `x` is less than equal to the lowest element in search
    # space, the lowest element is the ceiling
    if x <= nums[left]:
        return nums[left]
 
    # if `x` is more than the highest element in the search space,
    # its ceiling doesn't exist
    if x > nums[right]:
        return -1
 
    # find the middle index
    mid = (left + right) // 2
 
    # if `x` is equal to the middle element, it is the ceiling
    if nums[mid] == x:
        return nums[mid]
 
    # if `x` is more than the middle element, the ceiling exists in the right
    # sublist nums[mid+1…right]
    elif nums[mid] < x:
        return findCeiling(nums, mid + 1, right, x)
 
    # if `x` is less than the middle element, the ceiling exists in the left
    # sublist nums[left…mid] (Note – middle element can also be ceiling)
    else:
        return findCeiling(nums, left, mid, x)
 
 
# Function to find the floor of `x` in a sorted list nums[left…right]
# i.e., the largest integer less than or equal to `x`
def findFloor(nums, left, right, x):
 
    # search space is nums[left…right]
 
    # base case
    if not nums:
        return -1
 
    # if `x` is less than the lowest element in search
    # space, its floor doesn't exist
    if x < nums[left]:
        return -1
 
    # if `x` is more than equal to the highest element in
    # the search space, it is the floor
    if x >= nums[right]:
        return nums[right]
 
    # find the middle index
    mid = (left + right) // 2
 
    # this check is placed to handle infinite loop for
    # a call to `findFloor(nums, mid, right, x)`
    if mid == left:
        return nums[left]
 
    # if `x` is equal to the middle element, it is the floor
    if nums[mid] == x:
        return nums[mid]
 
    # if `x` is more than the middle element, the floor exists in the right
    # sublist nums[mid…right] (Note – middle element can also be the floor)
    elif nums[mid] < x:
        return findFloor(nums, mid, right, x)
 
    # if `x` is less than the middle element, the floor exists in the left
    # sublist nums[left…mid-1]
    else:
        return findFloor(nums, left, mid - 1, x)
 
 
if __name__ == '__main__':
 
    nums = [1, 4, 6, 8, 9]
 
    for i in range(10 + 1):
        print(f'Number {i} —> ceiling is {findCeiling(nums, 0, len(nums) - 1, i)}, '
              f'floor is {findFloor(nums, 0, len(nums) - 1, i)}')
 

Output: Number 0 —> ceiling is 1, floor is -1Number 1 —> ceiling is 1, floor is 1Number 2 —> ceiling is 4, floor is 1Number 3 —> ceiling is 4, floor is 1Number 4 —> ceiling is 4, floor is 4Number 5 —> ceiling is 6, floor is 4Number 6 —> ceiling is 6, floor is 6Number 7 —> ceiling is 8, floor is 6Number 8 —> ceiling is 8, floor is 8Number 9 —> ceiling is 9, floor is 9Number 10 —> ceiling is -1, floor is 9
```
The time complexity of the above solution is O(log(n)) and requires O(log(n)) implicit space for the call stack.
