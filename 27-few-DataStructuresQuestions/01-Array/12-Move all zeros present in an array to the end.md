
```
Input:  { 6, 0, 8, 2, 3, 0, 4, 0, 1 } 
Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0 }
```
Solution:
```
# Function to move all zeros present in the list to the end
def reorder(A):
 
    # `k` stores the index of the next available position
    k = 0
 
    # do for each element
    for i in A:
        # if the current element is non-zero, put the element at the
        # next free position in the list
        if i:
            A[k] = i
            k = k + 1
 
    # move all 0's to the end of the list (remaining indices)
    for i in range(k, len(A)):
        A[i] = 0
 
 
if __name__ == '__main__':
 
    A = [6, 0, 8, 2, 3, 0, 4, 0, 1]
 
    reorder(A)
    print(A)
 
```
The time complexity of the above solution is O(n), where n is the size of the input.

### using quicksort
```
def swap(A, i, j):
 
    temp = A[i]
    A[i] = A[j]
    A[j] = temp
 
 
# Function to move all zeros present in a list to the end
def partition(A):
 
    j = 0
 
    # each time we encounter a non-zero, `j` is incremented, and
    # the element is placed before the pivot
    for i in range(len(A)):
        if A[i]:            # pivot is 0
            swap(A, i, j)
            j = j + 1
 
 
if __name__ == '__main__':
 
    A = [6, 0, 8, 2, 3, 0, 4, 0, 1]
 
    partition(A)
    print(A)
```