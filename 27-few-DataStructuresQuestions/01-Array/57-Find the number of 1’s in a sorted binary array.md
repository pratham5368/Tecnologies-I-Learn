## Find the number of 1’s in a sorted binary array
```
Input:  nums[] = [0, 0, 0, 0, 1, 1, 1] 
Output: The total number of 1’s present is 3  

Input:  nums[] = [0, 0, 1, 1, 1, 1, 1] 
Output: The total number of 1’s present is 5
```
We can easily solve this problem in O(log(n)) time using recursion by taking advantage of the fact that the input is sorted (i.e., all 0’s, followed by all 1’s). The idea is to split the array into two halves and recur for both halves. If the last element of the subarray is 0, then all 0’s are present in it since it is sorted, and we return 0 from the function. If the first array element is 1, then all its elements are 1’s only since the array is sorted, and we return the total number of elements in that partition.
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
 

# Output:The total number of 1’s present is 3
```