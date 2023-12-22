## Insertion Sort Algorithm
Insertion sort is a stable, in-place sorting algorithm that builds the final sorted array one item at a time. It is not the very best in terms of performance but more efficient traditionally than most other simple O(n2) algorithms such as selection sort or bubble sort. Insertion sort is also used in Hybrid sort, which combines different sorting algorithms to improve performance.

The idea is to divide the array into two subsets – sorted subset and unsorted subset. Initially, a sorted subset consists of only one first element at index 0. Then for each iteration, insertion sort removes the next element from the unsorted subset, finds the location it belongs within the sorted subset and inserts it there. It repeats until no input elements remain
```
# Function to perform insertion sort on a list
def insertionSort(A):
 
    # Start from the second element
    # (the element at index 0 is already sorted)
    for i in range(1, len(A)):
 
        value = A[i]
        j = i
 
        # find index `j` within the sorted subset `A[0…i-1]`
        # where element `A[i]` belongs
        while j > 0 and A[j - 1] > value:
            A[j] = A[j - 1]
            j = j - 1
 
        # Note that sublist `A[j…i-1]`is shifted to
        # the right by one position, i.e., `A[j+1…i]`
 
        A[j] = value
 
 
if __name__ == '__main__':
 
    A = [3, 8, 5, 4, 1, 9, -2]
 
    insertionSort(A)
 
    # print the sorted list
    print(A)
 

# Output:[-2, 1, 3, 4, 5, 8, 9]
```