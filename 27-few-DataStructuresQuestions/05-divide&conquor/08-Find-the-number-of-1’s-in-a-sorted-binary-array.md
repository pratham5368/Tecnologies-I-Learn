## Find the number of 1’s in a sorted binary array
The problem with this approach is that its worst-case time complexity is O(n), where n is the size of the input.
```
# Function to find the total number of 1's in a sorted binary list
def count(nums, left=None, right=None):
 
    # base case
    if not nums:
        return 0
 
    # Initialize left and right
    if left is None and right is None:
        left, right = 0, len(nums) - 1
 
    # if the last element in the list is 0, no 1's can
    # be present since it is sorted
    if nums[right] == 0:
        return 0
 
    # if the first element in the list is 1, all its elements
    # are ones only since it is sorted
    if nums[left] == 1:
        return right - left + 1
 
    # divide the list into left and right sublist and recur
    mid = (left + right) // 2
    return count(nums, left, mid) + count(nums, mid + 1, right)
 
 
if __name__ == '__main__':
 
    nums = [0, 0, 0, 0, 1, 1, 1]
    print('The total number of 1\'s present is', count(nums))
 

Output:The total number of 1’s present is 3
```