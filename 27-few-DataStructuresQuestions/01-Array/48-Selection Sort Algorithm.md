## Selection Sort Algorithm
Selection sort is an unstable, in-place sorting algorithm known for its simplicity. It has performance advantages over more complicated algorithms in certain situations, particularly where the auxiliary memory is limited. It can be implemented as a stable sort and requires O(n2) time to sort n items, making it inefficient to use on large lists. Among simple average-case O(n2) algorithms, selection sort almost always outperforms bubble sort and generally performs worse than the insertion sort.

The idea is to divide the array into two subsets – sorted subset and unsorted subset. Initially, the sorted subset is empty, and the unsorted subset is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted subset, swapping it with the leftmost unsorted element (putting it in sorted order), and moving the subset boundaries one element to the right. 

```
# Utility function to swap values at two indices in the list
def swap(A, i, j):
 
    temp = A[i]
    A[i] = A[j]
    A[j] = temp
 
 
# Function to perform selection sort on a list
def selectionSort(A):
 
    for i in range(len(A) - 1):
 
        # find the minimum element in the unsorted sublist `A[i…n-1]`
        # and swap it with `A[i]`
        min = i
 
        for j in range(i + 1, len(A)):
            # if the `A[j]` element is less, then it is the new minimum
            if A[j] < A[min]:
                min = j        # update the index of minimum element
 
        # swap the minimum element in sublist `A[i…n-1]` with `A[i]`
        swap(A, min, i)
 
 
if __name__ == '__main__':
 
    A = [3, 5, 8, 4, 1, 9, -2]
 
    selectionSort(A)
 
    # print the sorted list
    print(A)
```

The selection sort algorithm can be implemented recursively
```
# Utility function to swap values at two indices in the list
def swap(A, i, j):
 
    temp = A[i]
    A[i] = A[j]
    A[j] = temp
 
 
# Recursive function to perform selection sort on sublist `A[i…n-1]`
def selectionSort(A, i, n):
 
    # find the minimum element in the unsorted sublist `A[i…n-1]`
    # and swap it with `A[i]`
    min = i
    for j in range(i + 1, n):
 
        # if the `A[j]` element is less, then it is the new minimum
        if A[j] < A[min]:
            min = j            # update the index of minimum element
 
    # swap the minimum element in sublist `A[i…n-1]` with `A[i]`
    swap(A, min, i)
 
    if i + 1 < n:
        selectionSort(A, i + 1, n)
 
 
if __name__ == '__main__':
 
    A = [3, 5, 8, 4, 1, 9, -2]
 
    selectionSort(A, 0, len(A))
 
    # print the sorted list
    print(A)
```