```
Input: A[] = { 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0 }  

For k = 0,
The length of the longest sequence is 4 (from index 6 to 9) 

For k = 1,
The length of the longest sequence is 7 (from index 3 to 9) 

For k = 2,
The length of the longest sequence is 10 (from index 0 to 9) 

For k = 3,
The length of the longest sequence is 11 (from index 0 to 10)
```

Solution:
```
# Function to find the maximum sequence of continuous 1's by replacing
# at most `k` zeros by 1 using sliding window technique
def findLongestSequence(A, k):
 
    left = 0        # represents the current window's starting index
    count = 0       # stores the total number of zeros in the current window
    window = 0      # stores the maximum number of continuous 1's found
                    # so far (including `k` zeros)
 
    leftIndex = 0   # stores the left index of maximum window found so far
 
    # maintain a window `[left…right]` containing at most `k` zeros
    for right in range(len(A)):
 
        # if the current element is 0, increase the count of zeros in the
        # current window by 1
        if A[right] == 0:
            count = count + 1
 
        # the window becomes unstable if the total number of zeros in it becomes
        # more than `k`
        while count > k:
            # if we have found zero, decrement the number of zeros in the
            # current window by 1
            if A[left] == 0:
                count = count - 1
 
            # remove elements from the window's left side till the window
            # becomes stable again
            left = left + 1
 
        # when we reach here, window `[left…right]` contains at most
        # `k` zeros, and we update max window size and leftmost index
        # of the window
        if right - left + 1 > window:
            window = right - left + 1
            leftIndex = left
 
    # no sequence found
    if window == 0:
        return
 
    # print the maximum sequence of continuous 1's
    print("The longest sequence has length", window, "from index",
        leftIndex, "to", (leftIndex + window - 1))
 
 
if __name__ == '__main__':
 
    A = [1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0]
    k = 2
 
    findLongestSequence(A, k)
```