## Merge Sort Algorithm
Merge sort is a Divide and Conquer algorithm. Like all divide-and-conquer algorithms, merge sort divides a large array into two smaller subarrays and then recursively sort the subarrays. Basically, two steps are involved in the whole process:

- Divide the unsorted array into n subarrays, each of size 1 (an array of size 1 is considered sorted).
- Repeatedly merge subarrays to produce new sorted subarrays until only 1 subarray is left, which would be our sorted array.

![](https://www.techiedelight.com/wp-content/uploads/Merge-Sort-Steps.png)

```
# Merge two sorted sublists `A[low … mid]` and `A[mid+1 … high]`
def merge(A, aux, low, mid, high):
 
    k = low
    i = low
    j = mid + 1
 
    # while there are elements in the left and right runs
    while i <= mid and j <= high:
 
        if A[i] <= A[j]:
            aux[k] = A[i]
            k = k + 1
            i = i + 1
        else:
            aux[k] = A[j]
            k = k + 1
            j = j + 1
 
    # copy remaining elements
    while i <= mid:
        aux[k] = A[i]
        k = k + 1
        i = i + 1
 
    # No need to copy the second half (since the remaining items
    # are already in their correct position in the auxiliary array)
 
    # copy back to the original list to reflect sorted order
    for i in range(low, high + 1):
        A[i] = aux[i]
 
 
# Sort list `A[low…high]` using auxiliary list aux
def mergesort(A, aux, low, high):
 
    # base case
    if high <= low:                     # if run size <= 1
        return
 
    # find midpoint
    mid = (low + ((high - low) >> 1))
 
    # recursively split runs into two halves until run size <= 1,
    # then merge them and return up the call chain
 
    mergesort(A, aux, low, mid)         # split/merge left half
    mergesort(A, aux, mid + 1, high)    # split/merge right half
 
    merge(A, aux, low, mid, high)       # merge the two half runs
 
 
# Function to check if `A` is sorted in ascending order or not
def isSorted(A):
 
    prev = A[0]
    for i in range(1, len(A)):
        if prev > A[i]:
            print("MergeSort Fails!!")
            return False
 
        prev = A[i]
 
    return True
 
 
# Implementation of merge sort algorithm in Python
if __name__ == '__main__':
 
    A = [12, 3, 18, 24, 0, 5, -2]
    aux = A.copy()
 
    # sort list `A` using auxiliary list `aux`
    mergesort(A, aux, 0, len(A) - 1)
 
    if isSorted(A):
        print(A)
 

Output:[-2, 0, 3, 5, 12, 18, 24]
```
The worst-case time complexity of merge sort is O(n.log(n)), where n is the size of the input