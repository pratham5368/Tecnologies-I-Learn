##  Find a pair with the given sum in an array(Given an unsorted integer array, find a pair with the given sum in it.)

```
Input: 
nums = [8, 7, 2, 5, 3, 1]
target = 10 

Output: 
Pair found (8, 2)
or
Pair found (7, 3)  

Input: 
nums = [5, 2, 6, 8, 1, 9]
target = 12 

Output: Pair not found

```

solution:
### 1. Using Brute-Force (python)
```
# Naive method to find a pair in a list with the given sum
def findPair(nums, target):
 
    # consider each element except the last
    for i in range(len(nums) - 1):
 
        # start from the i'th element until the last element
        for j in range(i + 1, len(nums)):
 
            # if the desired sum is found, print it
            if nums[i] + nums[j] == target:
                print('Pair found', (nums[i], nums[j]))
                return
 
    # No pair with the given sum exists in the list
    print('Pair not found')
 
 
if __name__ == '__main__':
 
    nums = [8, 7, 2, 5, 3, 1]
    target = 10
 
    findPair(nums, target)

##Pair found (8, 2)
```
The time complexity of the above solution is O(n2) and doesn’t require any extra space, where n is the size of the input.
### 2. Using Sorting
The idea is to sort the given array in ascending order and maintain search space by maintaining two indices (low and high) that initially points to two endpoints of the array. Then reduce the search space nums[low…high] at each iteration of the loop by comparing the sum of elements present at indices low and high with the desired sum. Increment low if the sum is less than the expected sum; otherwise, decrement high if the sum is more than the desired sum. If the pair is found, return it.
```
# Function to find a pair in an array with a given sum using sorting

def findPair(nums, target):
 
    # sort the list in ascending order
    nums.sort()
 
    # maintain two indices pointing to endpoints of the list
    (low, high) = (0, len(nums) - 1)
 
    # reduce the search space `nums[low…high]` at each iteration of the loop
 
    # loop till the search space is exhausted
    while low < high:
 
        if nums[low] + nums[high] == target:        # target found
            print('Pair found', (nums[low], nums[high]))
            return
 
        # increment `low` index if the total is less than the desired sum;
        # decrement `high` index if the total is more than the desired sum
        if nums[low] + nums[high] < target:
            low = low + 1
        else:
            high = high - 1
 
    # No pair with the given sum exists
    print('Pair not found')
 
 
if __name__ == '__main__':
 
    nums = [8, 7, 2, 5, 3, 1]
    target = 10
 
    findPair(nums, target)
```

The time complexity of the above solution is O(n.log(n)) and doesn’t require any extra space.
## Using Hashing
We can use a hash table to solve this problem in linear time. The idea is to insert each array element nums[i] into a map. We also check if difference (nums[i], target - nums[i]) already exists in the map or not. If the difference is seen before, print the pair and return. The algorithm can be implemented as follows in C++, Java, and Python:
```
# Function to find a pair in an array with a given sum using hashing
def findPair(nums, target):
 
    # create an empty dictionary
    d = {}
 
    # do for each element
    for i, e in enumerate(nums):
 
        # check if pair (e, target - e) exists
 
        # if the difference is seen before, print the pair
        if target - e in d:
            print('Pair found', (nums[d.get(target - e)], nums[i]))
            return
 
        # store index of the current element in the dictionary
        d[e] = i
 
    # No pair with the given sum exists in the list
    print('Pair not found')
 
 
if __name__ == '__main__':
 
    nums = [8, 7, 2, 5, 3, 1]
    target = 10
 
    findPair(nums, target)
```