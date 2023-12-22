## Print all combinations of numbers from 1 to `n` having sum `n`
```
For n = 5, 
the following combinations are possible: 
{ 5 }
{ 1, 4 }
{ 2, 3 }
{ 1, 1, 3 }
{ 1, 2, 2 }
{ 1, 1, 1, 2 }
{ 1, 1, 1, 1, 1 }  

For n = 4, 
the following combinations are possible: 
{ 4 }
{ 1, 3 }
{ 2, 2 }
{ 1, 1, 2 }
{ 1, 1, 1, 1 }
```
We can use recursion to solve this problem. The idea is to consider every integer i from 1 to n and add it to the output and recur for remaining elements [i…n] with reduced sum n-i. To avoid printing permutations, each combination will be constructed in non-decreasing order. If a combination with the given sum is reached, print it.

Solution:
```
# Recursive function to print all combinations of numbers from `i` to `n`
# having sum `n`. The `index` denotes the next free slot in the output list `out`
def printCombinations(i, n, out, index):
 
    # if the sum becomes `n`, print the combination
    if n == 0:
        print(out[:index])
 
    # start from the previous element in the combination till `n`
    for j in range(i, n + 1):
 
        # place current element at the current index
        out[index] = j
 
        # recur with a reduced sum
        printCombinations(j, n - j, out, index + 1)
 
 
if __name__ == '__main__':
 
    n = 5
    out = [None] * n
 
    # print all combinations of numbers from 1 to `n` having sum `n`
    printCombinations(1, n, out, 0)
```
