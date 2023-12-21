## Given an integer array, find the maximum length subarray having a given sum.
```
nums[] = { 5, 6, -5, 5, 3, 5, 3, -2, 0 }
target = 8  

Subarrays with sum 8 are 
{ -5, 5, 3, 5 }
{ 3, 5 }
{ 5, 3 } 

The longest subarray is { -5, 5, 3, 5 } having length 4
```

Solution:

A naive solution is to consider all subarrays and find their sum. If the subarray sum is equal to the given sum, update the maximum length subarray. The time complexity of the naive solution is O(n3) as there are n2 subarrays in an array of size n, and it takes O(n) time to find the sum of its elements. We can optimize the method to run in O(n2) time by calculating the subarray sum in constant time.

```
# Naive function to find the maximum length sublist with sum `S` present
# in a given list
def findMaxLenSublist(nums, S):
 
    # `length` stores the maximum length of sublist with sum `S`
    length = 0
 
    # stores ending index of the maximum length sublist having sum `S`
    ending_index = -1
 
    # consider all sublists starting from i
    for i in range(len(nums)):
 
        target = 0
 
        # consider all sublists ending at `j`
        for j in range(i, len(nums)):
 
            # target of elements in the current sublist
            target += nums[j]
 
            # if we have found a sublist with sum `S`
            if target == S:
                # update length and ending index of maximum length sublist
                if length < j - i + 1:
                    length = j - i + 1
                    ending_index = j
 
    # print the sublist
    print((ending_index - length + 1, ending_index))
 
 
if __name__ == '__main__':
 
    nums = [5, 6, -5, 5, 3, 5, 3, -2, 0]
    target = 8
 
    findMaxLenSublist(nums, target)
```
Solution2:

We can use a map to solve this problem in linear time. The idea is to create an empty map to store the first subarray’s ending index, having a given sum. We traverse the given array and maintain the sum of elements seen so far.

- If the target is seen for the first time, insert the sum with its index into the map.
- If target-S is seen before, there is a subarray with the given sum that ends at the current index, and we update the maximum length subarray having sum S if the current subarray has more length.

```
# Find maximum length sublist with sum `S` present in a given list
def findMaxLenSublist(nums, S):
 
    # create an empty dictionary to store the ending index of the first
    # sublist having some sum
    d = {}
 
    # insert (0, -1) pair into the set to handle the case when a
    # sublist with sum `S` starts from index 0
    d[0] = -1
 
    target = 0
 
    # `length` stores the maximum length of sublist with sum `S`
    length = 0
 
    # stores ending index of the maximum length sublist having sum `S`
    ending_index = -1
 
    # traverse the given list
    for i in range(len(nums)):
 
        # target of elements so far
        target += nums[i]
 
        # if the sum is seen for the first time, insert the sum with its
        # into the dictionary
        if target not in d:
            d[target] = i
 
        # update length and ending index of the maximum length sublist
        # having sum `S`
        if target - S in d and length < i - d[target - S]:
            length = i - d[target - S]
            ending_index = i
 
    # print the sublist
    print((ending_index - length + 1, ending_index))
 
 
if __name__ == '__main__':
 
    nums = [5, 6, -5, 5, 3, 5, 3, -2, 0]
    target = 8
 
    findMaxLenSublist(nums, target)
```
The time complexity of the above solution O(n) and requires O(n) extra space, where n is the size of the input.