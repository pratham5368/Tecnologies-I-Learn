## Print all subarrays of an array having distinct elements

```
Input:  A[] = { 5, 2, 3, 5, 4, 3 } 
Output: The largest subarrays with all distinct elements are: 

{ 5, 2, 3 }
{ 2, 3, 5, 4 }
{ 5, 4, 3 }
```
```
# Function to print all sublists having distinct elements
def calculate(A):
 
    # create a map to mark elements as visited in the current window
    visited = {}
 
    # put all elements in a dictionary
    for val in A:
        visited[val] = False
 
    # points to the left and right boundary of the current window,
    # i.e., the current window is formed by `A[left, right]`
    right = 0
    left = 0
 
    # loop until the right index of the current window is less
    # than the maximum index
    while right < len(A):
 
        # keep increasing the window size if all elements in the
        # current window are distinct
        while right < len(A) and not visited[A[right]]:
            visited[A[right]] = True
            right = right + 1
 
        print(A[left: right])
 
        # As soon as a duplicate is found (`A[right]`), terminate the above loop,
        # and reduce the window's size from its left to remove the duplicate
        while right < len(A) and visited[A[right]]:
            visited[A[left]] = False
            left = left + 1
 
 
if __name__ == '__main__':
 
    A = [5, 2, 3, 5, 4, 3]
    calculate(A)
```