## Find the count of distinct elements in every subarray of size `k`
```
Input: 
arr[] = { 2, 1, 2, 3, 2, 1, 4, 5 };
k = 5; 

Output: The count of distinct elements in subarray { 2, 1, 2, 3, 2 } is 3
The count of distinct elements in subarray { 1, 2, 3, 2, 1 } is 3
The count of distinct elements in subarray { 2, 3, 2, 1, 4 } is 4
The count of distinct elements in subarray { 3, 2, 1, 4, 5 } is 5
```

Solution: 
```
# Function to find all distinct elements present in each sublist
# of size `k` in a list
def findDistinctCount(A, k):
 
    # loop through the list
    for i in range(len(A) - (k - 1)):
        distinct = set(A[i:i+k])
        print(f"The count of distinct elements in sublist [{i}, {(i + k - 1)}] is",
            len(distinct))
 
 
if __name__ == '__main__':
 
    input = [2, 1, 2, 3, 2, 1, 4, 5]
    k = 5
 
    findDistinctCount(input, k)
```