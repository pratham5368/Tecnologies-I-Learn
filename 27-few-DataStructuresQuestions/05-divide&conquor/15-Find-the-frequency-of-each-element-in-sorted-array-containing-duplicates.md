## Find the frequency of each element in a sorted array containing duplicates
A simple solution would be to run a linear search on the array and count the number of occurrences of each element and finally print them. The problem with this approach is that its worst-case time complexity is O(n), where n is the input size, and we are scanning the whole array (violating problem constraints).

 We can easily solve this problem in O(m.log(n)) time by taking advantage of the fact that the input is sorted and contains duplicates. Here m is the total number of distinct elements in the array, and n is the input size.
1. Recursive Implementation
```
# Function to find the frequency of each element in a sorted list
def findFrequency(nums, left, right, freq):
 
    if left > right:
        return
 
    # if every element in sublist nums[left…right] is equal,
    # then increment the element's count by `n`
    if nums[left] == nums[right]:
 
        count = freq.get(nums[left])
        if count is None:
            count = 0
 
        freq[nums[left]] = count + (right - left + 1)
        return
 
    mid = (left + right) // 2
 
    # divide the list into left and right sublist and recur
    findFrequency(nums, left, mid, freq)
    findFrequency(nums, mid + 1, right, freq)
 
 
if __name__ == '__main__':
 
    nums = [2, 2, 2, 4, 4, 4, 5, 5, 6, 8, 8, 9]
 
    # find the frequency of each element in the list and store it in a dictionary
    freq = {}
    findFrequency(nums, 0, len(nums) - 1, freq)
    print(freq)
 

Output:{2: 3, 4: 3, 5: 2, 6: 1, 8: 2, 9: 1}

```
2. Iterative Implementation
```
# Function to find the frequency of each element in a sorted list
def findFrequency(nums):
 
    # dictionary to store the frequency of each element in the list
    freq = {}
 
    # search space is nums[left…right]
    (left, right) = (0, len(nums) - 1)
 
    # loop till the search space is exhausted
    while left <= right:
 
        # if nums[left…right] consists of only one element, update its count
        if nums[left] == nums[right]:
            freq[nums[left]] = freq.get(nums[left], 0) + (right - left + 1)
 
            # now discard nums[left…right] and continue searching in
            # nums[right+1… n-1] for nums[left]
            left = right + 1
            right = len(nums) - 1
        else:
            # reduce the search space
            right = (left + right) // 2
 
    return freq
 
 
if __name__ == '__main__':
 
    nums = [2, 2, 2, 4, 4, 4, 5, 5, 6, 8, 8, 9]
    print(findFrequency(nums))
 

Output:{2: 3, 4: 3, 5: 2, 6: 1, 8: 2, 9: 1}
```
