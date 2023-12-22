## Quicksort Algorithm
Quicksort is an efficient in-place sorting algorithm, which usually performs about two to three times faster than merge sort and heapsort when implemented well. Quicksort is a comparison sort, meaning that it can sort items of any type for which a less-than relation is defined. In efficient implementations, it is usually not a stable sort.

Quicksort, on average, makes O(n.log(n)) comparisons to sort n items. In the worst-case, it makes O(n2) comparisons, though this behavior is very rare.

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
 

// Output:[-6, -3, 1, 2, 3, 5, 6, 8, 9]
```
## Iterative Implementation of Quicksort
```
from collections import deque
 
 
def swap (A, i, j):
    temp = A[i]
    A[i] = A[j]
    A[j] = temp
 
 
def partition(a, start, end):
 
    # Pick the rightmost element as a pivot from the list
    pivot = a[end]
 
    # elements less than the pivot will go to the left of `pIndex`
    # elements more than the pivot will go to the right of `pIndex`
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
    swap(a, pIndex, end)
 
    # return `pIndex` (index of the pivot element)
    return pIndex
 
 
# Iterative Quicksort routine
def iterativeQuicksort(a):
 
    # create a stack for storing sublist start and end index
    stack = deque()
 
    # get the starting and ending index of a given list
    start = 0
    end = len(a) - 1
 
    # push the start and end index of the array into the stack
    stack.append((start, end))
 
    # loop till stack is empty
    while stack:
 
        # remove top pair from the list and get sublist starting
        # and ending indices
        start, end = stack.pop()
 
        # rearrange elements across pivot
        pivot = partition(a, start, end)
 
        # push sublist indices containing elements that are
        # less than the current pivot to stack
        if pivot - 1 > start:
            stack.append((start, pivot - 1))
 
        # push sublist indices containing elements that are
        # more than the current pivot to stack
        if pivot + 1 < end:
            stack.append((pivot + 1, end))
 
 
# Iterative Implementation of Quicksort
if __name__ == '__main__':
 
    a = [9, -3, 5, 2, 6, 8, -6, 1, 3]
 
    iterativeQuicksort(a)
 
    # print the sorted list
    print(a)
 

# Output:[-6, -3, 1, 2, 3, 5, 6, 8, 9]
```
## Quicksort using Dutch National Flag Algorithm
Quicksort exhibits poor performance for inputs that contain many repeated elements. The problem is visible when all the input elements are equal. Then at each point in recursion, the left partition is empty (no input values are less than the pivot), and the right partition has only decreased by one element (the pivot is removed). Consequently, the algorithm takes quadratic time to sort an array of equal values.
```
def swap (nums, i, j):
    temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
 
 
# Partition routine using the Dutch national flag algorithm
def partition(nums, start, end):
    mid = start
    pivot = nums[end]
 
    while mid <= end:
        if nums[mid] < pivot:
            swap(nums, start, mid)
            start += 1
            mid += 1
        elif nums[mid] > pivot:
            swap(nums, mid, end)
            end -= 1
        else:
            mid += 1
 
    # nums[start … mid-1] contains all occurrences of a pivot
    return start - 1, mid
 
 
# 3–way Quicksort routine
def quicksort(nums, start, end):
 
    # base condition for 0 or 1 elements
    if start >= end:
        return
 
    # rearrange elements across pivot using the Dutch national flag algorithm
    x, y = partition(nums, start, end)
 
    # recur on sublist containing elements that are less than the pivot
    quicksort(nums, start, x)
 
    # recur on sublist containing elements that are more than the pivot
    quicksort(nums, y, end)
 
 
if __name__ == '__main__':
 
    nums = [2, 6, 5, 2, 6, 8, 6, 1, 2, 6]
 
    # sort list
    quicksort(nums, 0, len(nums) - 1)
 
    # print the sorted list
    print(nums)
 

# Output:[1, 2, 2, 2, 5, 6, 6, 6, 6, 8]

```
## Hoare Partition Scheme
Hoare uses two indices that start at the ends of the array being partitioned, then move toward each other until they detect an inversion: a pair of elements, one greater than the pivot, one smaller, in the wrong order relative to each other. The inverted elements are then swapped. When the indices meet, the algorithm stops and returns the final index.

Hoare’s scheme is more efficient than Lomuto’s partition scheme because it does three times fewer swaps on average, and it creates efficient partitions even when all values are equal. But like Lomuto’s partition scheme, Hoare partitioning also causes Quicksort to degrade to O(n2) when the input array is already sorted; it also doesn’t produce a stable sort.

```

def swap(A, i, j):
 
    temp = A[i]
    A[i] = A[j]
    A[j] = temp
 
 
# Partition using Hoare's Partitioning scheme
def partition(a, low, high):
 
    pivot = a[low]
    (i, j) = (low - 1, high + 1)
 
    while True:
 
        while True:
            i = i + 1
            if a[i] >= pivot:
                break
 
        while True:
            j = j - 1
            if a[j] <= pivot:
                break
 
        if i >= j:
            return j
 
        swap(a, i, j)
 
 
# Quicksort routine
def quicksort(a, low, high):
 
    # base condition
    if low >= high:
        return
 
    # rearrange elements across pivot
    pivot = partition(a, low, high)
 
    # recur on sublist containing elements less than the pivot
    quicksort(a, low, pivot)
 
    # recur on sublist containing elements more than the pivot
    quicksort(a, pivot + 1, high)
 
 
if __name__ == '__main__':
 
    a = [9, -3, 5, 2, 6, 8, -6, 1, 3]
 
    quicksort(a, 0, len(a) - 1)
 
    # print the sorted list
    print(a)
 

# Output:[-6, -3, 1, 2, 3, 5, 6, 8, 9]
```