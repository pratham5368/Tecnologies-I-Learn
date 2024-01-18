## Quicksort Algorithm
How Quicksort Works?
Quicksort is a Divide and Conquer algorithm. Like all divide-and-conquer algorithms, it first divides a large array into two smaller subarrays and then recursively sort the subarrays. Basically, three steps are involved in the whole process:

- Pivot selection: Pick an element, called a pivot, from the array (usually the leftmost or the rightmost element of the partition).
- Partitioning: Reorder the array such that all elements with values less than the pivot come before the pivot. In contrast, all elements with values greater than the pivot come after it. The equal values can go either way. After this partitioning, the pivot is in its final position.
- Recur: Recursively apply the above steps to the subarray of elements with smaller values than the pivot and separately to the subarray of elements with greater values than the pivot.



```
def swap(A, i, j):
 
    temp = A[i]
    A[i] = A[j]
    A[j] = temp
 
 
# Partition using the Lomuto partition scheme
def partition(a, start, end):
 
    # Pick the rightmost element as a pivot from the list
    pivot = a[end]
 
    # elements less than the pivot will be pushed to the left of `pIndex`
    # elements more than the pivot will be pushed to the right of `pIndex`
    # equal elements can go either way
    pIndex = start
 
    # each time we find an element less than or equal to the pivot,
    # `pIndex` is incremented, and that element would be placed
    # before the pivot.
    for i in range(start, end):
        if a[i] <= pivot:
            swap(a, i, pIndex)
            pIndex = pIndex + 1
 
    # swap `pIndex` with pivot
    swap(a, end, pIndex)
 
    # return `pIndex` (index of the pivot element)
    return pIndex
 
 
# Quicksort routine
def quicksort(a, start, end):
 
    # base condition
    if start >= end:
        return
 
    # rearrange elements across pivot
    pivot = partition(a, start, end)
 
    # recur on sublist containing elements less than the pivot
    quicksort(a, start, pivot - 1)
 
    # recur on sublist containing elements more than the pivot
    quicksort(a, pivot + 1, end)
 
 
# Python implementation of the Quicksort algorithm
if __name__ == '__main__':
 
    a = [9, -3, 5, 2, 6, 8, -6, 1, 3]
 
    quicksort(a, 0, len(a) - 1)
 
    # print the sorted list
    print(a)
 

Output:[-6, -3, 1, 2, 3, 5, 6, 8, 9]
```

The worst-case time complexity of Quicksort is O(n2), where n is the size of the input. The worst case happens when the pivot happens to be the smallest or largest element in the list or when all the array elements are equal. This will result in the most unbalanced partition as the pivot divides the array into two subarrays of sizes 0 and n-1. If this repeatedly happens in every partition (say, we have sorted array), then each recursive call processes a list of size one less than the previous list, resulting in O(n2) time.

T(n) = T(n-1) + cn = O(n²)

(Note – partition takes O(n) time that accounts for cn)

 The best-case time complexity of Quicksort is O(n.log(n)). The best case happens when the pivot divides the array into two nearly equal pieces. Now each recursive call processes a list of half the size.

T(n) = 2 T(n/2) + cn = O(n.log(n))

 The auxiliary space required by the Quicksort algorithm is O(n) for the call stack.