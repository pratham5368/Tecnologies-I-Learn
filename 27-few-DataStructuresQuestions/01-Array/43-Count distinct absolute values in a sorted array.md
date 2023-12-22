## Count distinct absolute values in a sorted array
```
Input:  { -1, -1, 0, 1, 1, 1 }
Output: The total number of distinct absolute values is 2 (0 and 1)  

Input:  { -2, -1, 0, 1, 2, 3 }
Output: The total number of distinct absolute values is 4 (0, 1, 2 and 3)  

Input:  { -1, -1, -1, -1 }
Output: The total number of distinct absolute values is 1 (only 1)
```
Solution:

The time complexity of the above solution is O(n), where n is the size of the input. It doesn’t take advantage of the fact that the input is already sorted and requires O(n) extra space. We can use the sliding window approach to easily solve this problem in O(1) extra space.
```
# Returns the total number of distinct absolute values in a given input
def findDistinctCount(input):
 
    s = set([abs(i) for i in input])
    return len(s)
 
 
if __name__ == '__main__':
 
    input = [-1, -1, 0, 1, 1, 1]
 
    print('The total number of distinct absolute values is', findDistinctCount(input))
```