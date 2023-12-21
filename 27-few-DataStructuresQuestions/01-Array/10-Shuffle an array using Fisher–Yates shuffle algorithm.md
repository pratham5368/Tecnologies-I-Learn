### Fisher–Yates shuffle is an algorithm to generate random permutations. It takes time proportional to the total number of items being shuffled and shuffles them in place. The algorithm swaps the element at each iteration at random among all remaining unvisited indices, including the element itself.

Here’s the complete algorithm:
```
— To shuffle an array ‘a’ of ‘n’ elements:
for i from n-1 down to 1 do    
j = random integer such that 0 <= j <= i    
exchange a[j] and a[i]
```
Solution:O(n)
```
from random import randrange
 
 
# Utility function to swap elements `A[i]` and `A[j]` in a list
def swap(A, i, j):
 
    temp = A[i]
    A[i] = A[j]
    A[j] = temp
 
 
# Function to shuffle a list `A`
def shuffle(A):
 
    # read list from the highest index to lowest
    for i in reversed(range(1, len(A))):
 
        # generate a random number `j` such that 0 <= j <= i
        j = randrange(i + 1)
 
        # swap the current element with the randomly generated index
        swap(A, i, j)
 
 
if __name__ == '__main__':
 
    A = [1, 2, 3, 4, 5, 6]
 
    shuffle(A)
 
    # print the shuffled list
    print(A)
```

Solution2- O(n)
```
from random import randrange
 
 
# Utility function to swap elements `A[i]` and `A[j]` in a list
def swap(A, i, j):
 
    temp = A[i]
    A[i] = A[j]
    A[j] = temp
 
 
# Function to shuffle a list `A`
def shuffle(A):
 
    # read list from the lowest index to highest
    for i in range(len(A) - 1):
        # generate a random number `j` such that `i <= j < n`
        j = randrange(i, len(A))
 
        # swap the current element with the randomly generated index
        swap(A, i, j)
 
 
if __name__ == '__main__':
 
    A = [1, 2, 3, 4, 5, 6]
 
    shuffle(A)
 
    # print the shuffled list
    print(A)
```