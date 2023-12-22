## Add elements of two arrays into a new array
```
Input: 
a = { 23, 5, 2, 7, 87 }
b = { 4, 67, 2, 8 } 
Output: { 2, 7, 7, 2, 4, 1, 5, 8, 7 }  

Input: 
a = {}
b = { 4, 67, 2, 8 } 
Output: { 4, 6, 7, 2, 8 }
```
The time complexity of both above-discussed methods is O(m + n) and runs in constant space. Here, m and n are the size of the first and second array, respectively.
```
# Recursive function to separate the digits of a positive integer
# and add them to a given list
def split_number(num, result):
 
    if num > 0:
        split_number(num // 10, result)
        result.append(num % 10)
 
 
# Function to add two lists
def append(a, b, result):
 
    m = len(a)
    n = len(b)
 
    # loop till either `a` or `b` runs out
    i = 0
    while i < m and i < n:
 
        # get the sum of the next element from each list
        total = a[i] + b[i]
 
        # separate the digits of the sum and add them to the output list
        split_number(total, result)
        i = i + 1
 
    # process remaining elements of the first list, if any
    while i < m:
        split_number(a[i], result)
        i = i + 1
 
    # process remaining elements of the second list, if any
    while i < n:
        split_number(b[i], result)
        i = i + 1
 
 
if __name__ == '__main__':
 
    # input lists
    a = [23, 5, 2, 7, 87]
    b = [4, 67, 2, 8]
 
    # list to store the output
    result = []
    append(a, b, result)
 
    # print the output list
    print(result)
```
