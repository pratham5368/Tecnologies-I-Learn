## Find the minimum index of a repeating element in an array
```
Input:  { 5, 6, 3, 4, 3, 6, 4 }
Output: The minimum index of the repeating element is 1  

Input:  { 1, 2, 3, 4, 5, 6 }
Output: Invalid Input
```
We can use hashing to solve this problem in linear time. The idea is to traverse the array from right to left. If the element is seen for the first time, insert it into the set; otherwise, update the minimum index to the element’s index. Finally, return the minimum index after all elements are processed.

The time complexity of the above solution is O(n) and requires O(n) extra space.

```

# Function to find the minimum index of the repeating element
def findMinIndex(A):
 
    minIndex = len(A)
 
    # create an empty set to store list elements
    s = set()
 
    # traverse the list from right to left
    for i in reversed(range(len(A))):
 
        # if the element is seen before, update the minimum index
        if A[i] in s:
            minIndex = i
        # if the element is seen for the first time, insert it into the set
        else:
            s.add(A[i])
 
    # invalid input
    if minIndex == len(A):
        return -1
 
    # return minimum index
    return minIndex
 
 
if __name__ == '__main__':
 
    A = [5, 6, 3, 4, 3, 6, 4]
    # A = [1, 2, 3, 4, 5, 6]
 
    minIndex = findMinIndex(A)
 
    if minIndex != len(A):
        print("The minimum index of the repeating element is", minIndex)
    else:
        print("Invalid Input")
```