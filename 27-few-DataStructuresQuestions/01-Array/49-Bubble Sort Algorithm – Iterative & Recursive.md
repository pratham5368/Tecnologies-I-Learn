## Bubble Sort Algorithm – Iterative & Recursive
Bubble sort is a stable, in-place sorting algorithm named for smaller or larger elements “bubble” to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even compared to insertion sort, and is not recommended for large input.

Each pass of bubble sort steps through the list to be sorted compares each pair of adjacent items and swaps them if they are in the wrong order. At the end of each pass, the next largest element will “Bubble” up to its correct position. These passes through the list are repeated until no swaps are needed, which indicates that the list is sorted. In the worst-case, we might end up making an n-1 pass, where n is the input size.

```
# Utility function to swap values at two indices in the list
def swap(A, i, j):
 
    temp = A[i]
    A[i] = A[j]
    A[j] = temp
 
 
# Function to perform bubble sort on a list
def bubbleSort(A):
 
    # `len(A)-1` passes
    for k in range(len(A) - 1):
 
        # last `k` items are already sorted, so the inner loop can
        # avoid looking at the last `k` items
        for i in range(len(A) - 1 - k):
            if A[i] > A[i + 1]:
                swap(A, i, i + 1)
 
    # the algorithm can be terminated if the inner loop didn't do any swap
 
 
if __name__ == '__main__':
 
    A = [3, 5, 8, 4, 1, 9, -2]
 
    bubbleSort(A)
 
    # print the sorted list
    print(A)
 

Output:[-2, 1, 3, 4, 5, 8, 9]

```
The bubble sort algorithm can be implemented recursively as well.
```
# Utility function to swap values at two indices in the list
def swap(A, i, j):
 
    temp = A[i]
    A[i] = A[j]
    A[j] = temp
 
 
# Recursive function to perform bubble sort on sublist `A[i…n]`
def bubbleSort(A, n):
 
    for i in range(n - 1):
        if A[i] > A[i + 1]:
            swap(A, i, i + 1)
 
    if n - 1 > 1:
        bubbleSort(A, n - 1)
 
 
if __name__ == '__main__':
 
    A = [ 3, 5, 8, 4, 1, 9, -2 ]
 
    bubbleSort(A, len(A))
 
    # print the sorted list
    print(A)
 

Output:[-2, 1, 3, 4, 5, 8, 9]
```