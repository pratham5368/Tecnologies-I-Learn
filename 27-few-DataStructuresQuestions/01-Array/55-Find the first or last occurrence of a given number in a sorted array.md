## Find the first or last occurrence of a given number in a sorted array
```
Input: nums = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
target = 5 
Output: The first occurrence of element 5 is located at index 1

The last occurrence of element 5 is located at index 3  Input: nums = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
target = 4 
Output: Element not found in the array
```
A simple solution would be to run a linear search on the array and return the given element’s first or last occurrence. The problem with this approach is that its worst-case time complexity is O(n), where n is the size of the input. This solution also does not take advantage of the fact that the input is sorted. We can easily solve this problem in O(log(n)) time by modifying the binary search algorithm.


## Finding first occurrence of the element
```
# Function to find the first occurrence of a given number
# in a sorted list of integers
def findFirstOccurrence(nums, target):
 
    # search space is nums[left…right]
    (left, right) = (0, len(nums) - 1)
 
    # initialize the result by -1
    result = -1
 
    # loop till the search space is exhausted
    while left <= right:
 
        # find the mid-value in the search space and compares it with the target
        mid = (left + right) // 2
 
        # if the target is located, update the result and
        # search towards the left (lower indices)
        if target == nums[mid]:
            result = mid
            right = mid - 1
 
        # if the target is less than the middle element, discard the right half
        elif target < nums[mid]:
            right = mid - 1
 
        # if the target is more than the middle element, discard the left half
        else:
            left = mid + 1
 
    # return the leftmost index, or -1 if the element is not found
    return result
 
 
if __name__ == '__main__':
 
    nums = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
    target = 5
 
    index = findFirstOccurrence(nums, target)
 
    if index != -1:
        print(f'The first occurrence of element {target} is located at index {index}')
    else:
        print('Element found not in the list')
 

Output:The first occurrence of element 5 is located at index 1
```
## Finding last occurrence of the element
```
# Function to find the last occurrence of a given number in a sorted list of integers
def findLastOccurrence(nums, target):
 
    # search space is nums[left…right]
    (left, right) = (0, len(nums) - 1)
 
    # initialize the result by -1
    result = -1
 
    # loop till the search space is exhausted
    while left <= right:
 
        # find the mid-value in the search space and compares it with the target
        mid = (left + right) // 2
 
        # if the target is located, update the result and
        # search towards the right (higher indices)
        if target == nums[mid]:
            result = mid
            left = mid + 1
 
        # if the target is less than the middle element, discard the right half
        elif target < nums[mid]:
            right = mid - 1
 
        # if the target is more than the middle element, discard the left half
        else:
            left = mid + 1
 
    # return the leftmost index, or -1 if the element is not found
    return result
 
 
if __name__ == '__main__':
 
    nums = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
    target = 5
 
    index = findLastOccurrence(nums, target)
 
    if index != -1:
        print(f'The last occurrence of element {target} is located at index {index}')
    else:
        print('Element found not in the list')
 

# Output:The last occurrence of element 5 is located at index 3
```