## Difference between Subarray, Subsequence, and Subset
1. Subarray

A subarray is a slice from a contiguous array (i.e., occupy consecutive positions) and inherently maintains the order of elements.
```
# Function to print all sublists of the specified list
def printallSublists(nums):
    # consider all sublists starting from i
    for i in range(len(nums)):
        # consider all sublists ending at `j`
        for j in range(i, len(nums)):
            # Function to print a sublist formed by [i, j]
            print(nums[i: j + 1])
 
if __name__ == '__main__':
    nums = [1, 2, 3, 4, 5]
    printallSublists(nums)
 

Output: [1]
[1, 2]
[1, 2, 3]
[1, 2, 3, 4]
[1, 2, 3, 4, 5]
[2]
[2, 3]
[2, 3, 4]
[2, 3, 4, 5]
[3]
[3, 4]
[3, 4, 5]
[4]
[4, 5]
[5]
```

2. Substring

A substring of a string s is a string s' that occurs in s. A substring is almost similar to a subarray, but it is in the context of strings.
```
# Function to print all non-empty substrings of the specified string
def printAllSubstrings(s):
    # consider all substrings starting from i
    for i in range(len(s)):
        # consider all substrings ending at j
        for j in range(i, len(s)):
            print(s[i: j + 1], end=' ')
 
if __name__ == '__main__':
    s = 'techie'
    printAllSubstrings(s)
 

Output:t te tec tech techi techie e ec ech echi echie c ch chi chie h hi hie i ie e
```
3. Subsequence

A subsequence is a sequence that can be derived from another sequence by deleting some elements without changing the order of the remaining elements.
```
# Function to print all subsequences of the specified string
def findPowerSet(seq):
    # N stores the total number of subsets
    N = int(pow(2, len(seq)))
 
    # generate each subset one by one
    result = []
    for i in range(N):
        s = ''
        # check every bit of `i`
        for j in range(len(seq)):
            # if j'th bit of `i` is set, print S[j]
            if (i & (1 << j)) != 0:
                s += seq[j]
        result.append(s)
    print(result)
 
if __name__ == '__main__':
    seq = 'apple'
    findPowerSet(seq)
 

Output:['', 'a', 'p', 'ap', 'p', 'ap', 'pp', 'app', 'l', 'al', 'pl', 'apl', 'pl', 'apl', 'ppl', 'appl', 'e', 'ae', 'pe', 'ape', 'pe', 'ape', 'ppe', 'appe', 'le', 'ale', 'ple', 'aple', 'ple', 'aple', 'pple', 'apple']
```