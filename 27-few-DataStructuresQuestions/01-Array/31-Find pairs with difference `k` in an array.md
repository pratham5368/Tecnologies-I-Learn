## Find pairs with difference `k` in an array
```
Input: arr = [1, 5, 2, 2, 2, 5, 5, 4]
k = 3 
Output: (2, 5) and (1, 4)
```
Solution:
```
# Function to find a pair with the given difference in the list.
# This method handles duplicates in the list
def findPair(A, diff):
 
    # sort list in ascending order
    A.sort()
 
    # take an empty set
    s = set()
 
    # do for every element in the list
    i = 0
    while i < len(A):
 
        # to avoid printing duplicates (skip adjacent duplicates)
        while i + 1 < len(A) and A[i] == A[i + 1]:
            i = i + 1
 
        # check if pair with the given difference `(A[i], A[i]-diff)` exists
        if A[i] - diff in s:
            print((A[i], A[i] - diff))
 
        # check if pair with the given difference `(A[i]+diff, A[i])` exists
        if A[i] + diff in s:
            print((A[i] + diff, A[i]))
 
        # insert the current element into the set
        s.add(A[i])
 
        i = i + 1
 
 
if __name__ == '__main__':
 
    A = [1, 5, 2, 2, 2, 5, 5, 4]
    diff = -3
 
    findPair(A, diff)
 
```
The time complexity of the above solution is O(n.log(n)) and requires O(n) extra space, where n is the size of the input.