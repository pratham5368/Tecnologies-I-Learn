## Print all triplets that form an arithmetic progression
```
Input:  A[] = { 5, 8, 9, 11, 12, 15 } 
Output:
5 8 11
9 12 15  

Input:  A[] = { 1, 3, 5, 6, 8, 9, 15 } 
Output:
1 3 5
1 5 9
3 6 9
1 8 15
3 9 15
```

Solution:
```
# Function to print all triplets that forms arithmetic progression
# in a given sorted list
def findAllTriplets(A):
 
    if len(A) < 3:
        return
 
    # consider `A[j]` as the middle element of AP
    for j in range(1, len(A) - 1):
 
        # start with the left and right index of `j`
        i = j - 1
        k = j + 1
 
        # Find all `i` and `k` such that `(i, j, k)` form an AP triplet
        while i >= 0 and k < len(A):
 
            # if `(A[i], A[j], A[k])` forms a triplet
            if A[i] + A[k] == 2 * A[j]:
 
                # print the triplet
                print((A[i], A[j], A[k]))
 
                # Since the list is sorted and elements are distinct
                k = k + 1
                i = i - 1
 
            # otherwise, if `(A[i] + A[k])` is less than `2×A[j]` then
            # try next `k`. Else, try the previous `i`.
            elif A[i] + A[k] < 2 * A[j]:
                k = k + 1
            else:
                i = i - 1
 
 
if __name__ == '__main__':
 
    A = [1, 3, 5, 6, 8, 9, 15]
    findAllTriplets(A)
```