## Find all symmetric pairs in an array of pairs
Given an array of pairs of integers, find all symmetric pairs, i.e., pairs that mirror each other. For instance, pairs (x, y) and (y, x) are mirrors of each other.

```
Input:  {3, 4}, {1, 2}, {5, 2}, {7, 10}, {4, 3}, {2, 5} Output: 
{4, 3} | {3, 4}
{2, 5} | {5, 2}
```
A naive solution would be to consider every pair and check if they are a mirror of each other or not. The time complexity of this solution is O(n2), where n is the size of the input.
```
# Function to find all pairs that are a mirror of each other
def findPairs(pairs):
 
    # create an empty set of strings
    s = set()
 
    # do for each pair
    for (x, y) in pairs:
 
        # insert the current pair `(x, y)` into the set
        s.add((x, y))
 
        # if mirror pair `(y, x)` is seen before, print the pairs
        if (y, x) in s:
            print((x, y), "|", (y, x))
 
 
if __name__ == '__main__':
 
    pairs = [(3, 4), (1, 2), (5, 2), (7, 10), (4, 3), (2, 5)]
    findPairs(pairs)
```