## Given an integer array, find the subarray that has the maximum product of its elements. The solution should return the maximum product of elements among all possible subarrays.

```
Input:  { -6, 4, -5, 8, -10, 0, 8 }
Output: 1600
Explanation: The maximum product subarray is {4, -5, 8, -10} having product 1600  

Input:  { 40, 0, -20, -10 }
Output: 200
Explanation: The maximum product subarray is {-20, -10} having product 200
```
The time complexity of this solution is O(n2), where n is the size of the input.
```
# Function to return the maximum product of a sublist of a given list
def findMaxProduct(A):
 
    # base case
    if not len(A):
        return 0
 
    # maintain two variables to store the maximum and minimum product
    # ending at the current index
    max_ending = min_ending = A[0]
 
    # to store the maximum product sublist found so far
    max_so_far = A[0]
 
    # traverse the given list
    for i in range(1, len(A)):
        temp = max_ending
 
        # update the maximum product ending at the current index
        max_ending = max(A[i], max(A[i] * max_ending, A[i] * min_ending))
 
        # update the minimum product ending at the current index
        min_ending = min(A[i], min(A[i] * temp, A[i] * min_ending))
 
        max_so_far = max(max_so_far, max_ending)
 
    # return maximum product
    return max_so_far
 
 
if __name__ == '__main__':
 
    A = [-6, 4, -5, 8, -10, 0, 8]
    print("The maximum product of a sublist is", findMaxProduct(A))
 
```