## Find the smallest missing element from a sorted array
```
# Function to find the smallest missing element in a sorted
# list of distinct non-negative integers
def findSmallestMissing(nums, left=None, right=None):
 
    # initialize left and right
    if left is None and right is None:
        (left, right) = (0, len(nums) - 1)
 
    # base condition
    if left > right:
        return left
 
    mid = left + (right - left) // 2
 
    # if the mid-index matches with its value, then the mismatch
    # lies on the right half
    if nums[mid] == mid:
        return findSmallestMissing(nums, mid + 1, right)
 
    # mismatch lies on the left half
    else:
        return findSmallestMissing(nums, left, mid - 1)
 
 
if __name__ == '__main__':
 
    nums = [0, 1, 2, 3, 4, 5, 6]
 
    print('The smallest missing element is', findSmallestMissing(nums))
 

Output:The smallest missing element is 7

```
The time complexity of the above solution is O(log(n)) and requires O(log(n)) implicit space for the call stack.