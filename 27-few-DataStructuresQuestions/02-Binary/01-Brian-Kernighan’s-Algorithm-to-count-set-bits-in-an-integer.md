## Brian Kernighan’s Algorithm to count set bits in an integer
```
Input:  n = -1 (11…1111)
Output: The total number of set bits in -1 is 32 
Input:  n = 16 (00001000)
Output: The total number of set bits in 16 is 1
```
### Brute-Force Solution
```
# Naive solution to count the total number of set bits in `n`
def countSetBits(n):
    count = 0
    for _ in range(32):
        count += (n & 1)    # check last bit
        n >>= 1
    return count
 
 
if __name__ == '__main__':
 
    n = 16
    print(f'The total number of set bits in {str(n)} ({bin(n)}) is {countSetBits(n)}')
```

16 in binary is 10000
The total number of set bits in 16 (0b10000) is 1
