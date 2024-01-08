## Find the odd occurring element in an array in a single traversal
Input:  arr[] = [4, 3, 6, 2, 6, 4, 2, 3, 4, 3, 3] 
Output: The odd occurring element is 4

For an input containing n elements, we can use hashing to solve this problem in O(n) time. We initially traverse the array and maintain the frequency of each element in a hash table. Then, after each array element is processed, return the element with the odd frequency. The problem with this approach is that it requires O(n) extra space as well. Also, it requires one traversal of the array and one traversal of the hash table.

```py
# Function to find an odd occurring element in a given list
def findOddOccuring(arr):
 
    xor = 0
    for i in arr:
        xor = xor ^ i
 
    return xor
 
 
if __name__ == '__main__':
 
    arr = [4, 3, 6, 2, 6, 4, 2, 3, 4, 3, 3]
    print('The odd occurring element is', findOddOccuring(arr))

#Output:The odd occurring element is 4
```