## Search an element in a circularly sorted array
A simple solution would be to run a linear search on the array and find the given element’s index. The problem with this approach is that its worst-case time complexity is O(n), where n is the size of the input. This solution also does not take advantage of the fact that the input is circularly sorted.

 We can easily solve this problem in O(log(n)) time by modifying the binary search algorithm. We know that the middle element always divides the array into two subarrays, and the target element can lie only in one of these subarrays. It is worth noticing that at least one of these subarrays will always be sorted. If the middle element happens to be the point of rotation (minimum element), then both left and right subarrays will be sorted, but in any case, one half (subarray) must be sorted. The idea is to use this property to discard the left half or the right half at each iteration of the binary search.

```
# Function to find an element in a circularly sorted list
def searchCircularList(nums, target):
 
    # search space is nums[left…right]
    (left, right) = (0, len(nums) - 1)
 
    # loop till the search space is exhausted
    while left <= right:
 
        # find the mid-value in the search space and
        # compares it with the target
        mid = (left + right) // 2
 
        # if the key is found, return its index
        if target == nums[mid]:
            return mid
 
        # if right half nums[mid…right] is sorted and `mid` is not
        # the key element
        if nums[mid] <= nums[right]:
            # compare key with nums[mid] and nums[right] to know
            # if it lies in nums[mid…right] or not
            if nums[mid] < target <= nums[right]:
                left = mid + 1      # go searching in the right sorted half
            else:
                right = mid - 1     # go searching left
 
        # if left half nums[left…mid] is sorted, and `mid` is not
        # the key element
        else:
            # compare key with nums[left] and nums[mid] to know
            # if it lies in nums[left…mid] or not
            if nums[left] <= target < nums[mid]:
                right = mid - 1     # go searching in the left sorted half
            else:
                left = mid + 1      # go searching right
 
    # key not found or invalid input
    return -1
 
 
if __name__ == '__main__':
 
    nums = [9, 10, 2, 5, 6, 8]
    key = 5
 
    index = searchCircularList(nums, key)
 
    if index != -1:
        print('Element found at index', index)
    else:
        print('Element found not in the list')
 

Output:Element found at index 3
The time complexity of the above solution is O(log(n)) and doesn’t require any extra space.




```