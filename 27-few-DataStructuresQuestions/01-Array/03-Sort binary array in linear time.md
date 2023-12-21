## Given a binary array, sort it in linear time and constant space. The output should print all zeros, followed by all ones.

```
Input:  { 1, 0, 1, 0, 1, 0, 0, 1 }
Output: { 0, 0, 0, 0, 1, 1, 1, 1 }
```

Solution:
```
# Function to sort a binary list in linear time
def sort(A):
 
    # count number of 0's
    zeros = A.count(0)
 
    # put 0's at the beginning
    k = 0
    while zeros:
        A[k] = 0
        zeros = zeros - 1
        k = k + 1
 
    # fill all remaining elements by 1
    for k in range(k, len(A)):
        A[k] = 1
```

Solution2:
```
# Function to sort a binary list in linear time
def sort(A):
 
    # `k` stores index of next available position
    k = 0
 
    # do for each element
    for i in range(len(A)):
        # if the current element is zero, put 0 at the next free
        # position in the list
        if A[i] == 0:
            A[k] = 0
            k = k + 1
 
    # fill all remaining indices by 1
    for i in range(k, len(A)):
        A[k] = 1
        k = k + 1
```