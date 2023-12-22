## Decode an array constructed from another array
```
{  (A[0] + A[1]), (A[0] + A[2]), … (A[0] + A[n-1]),  (A[1] + A[2]), (A[1] + A[3]), … (A[1] + A[n-1]),  …  …  (A[i] + A[i+1]), (A[i] + A[i+2]), … (A[i] + A[n-1]),  …  …  (A[n-2] + A[n-1])}
```

example:
```
Input:  { 3, 4, 5, 5, 6, 7 }
Output: { 1, 2, 3, 4 }  

Input:  { 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 }
Output: { 1, 2, 3, 4, 5 }  

Input:  { 3 }
Output: { 1, 2 } or { 2, 1 } or { 0, 3 } or { 3, 0 }  

Input:  { 3, 4, 5 }
Output: { 1, 2, 3 }
```
Solution:
```

from math import sqrt
 
 
# Function to decode a given list to get back the original list elements
def decode(inp):
 
    # base case
    m = len(inp)
    if m in (0, 2):
        return
 
    # calculate the size of the original list
    n = int((sqrt(8 * m + 1) + 1) / 2)
 
    # create an auxiliary space of size `n` to store elements
    # of the original list
    A = [0] * n
 
    # calculate the first element of the original list
    if n == 1 or m == 1:
        A[0] = inp[0]
    elif n == 2:
        A[0] = inp[0] - inp[1]
    else:
        A[0] = (inp[0] + inp[1] - inp[n - 1]) // 2
 
    # calculate the remaining elements of the original list using
    # the first element
    for i in range(1, n):
        A[i] = inp[i - 1] - A[0]
 
    # print the original list
    print(A)
 
 
if __name__ == '__main__':
 
    inp = [3, 4, 5, 6, 5, 6, 7, 7, 8, 9]
    decode(inp)
```
