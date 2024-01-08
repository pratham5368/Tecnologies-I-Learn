## Check if a number is a power of 4 or not
### Approach 1
A simple solution is to calculate log4n for a given number n. If it returns an integral value, then we can say that the number is a power of four.
```py
from math import log, floor
 
 
# Returns true if `n` is a power of four
def checkPowerOf4(n):
 
    # find `log4(n)`
    i = log(n) / log(4)
 
    # return true if `log4(n)` is an integer
    return i == floor(i)
 
 
if __name__ == '__main__':
 
    n = 256
 
    if checkPowerOf4(n):
        print(n, 'is a power of 4')
    else:
        print(n, 'is not a power of 4')
 

#Output:256 is a power of 4
```
### Approach 2
The given number n is a power of 4 if it is a power of 2 and its remainder is 1 when it is divided by 3. 

```py
# Returns true if `n` is a power of four
def checkPowerOf4(n):
 
    # return true if `n` is a power of 2, and
    # the remainder is 1 when divided by 3
    return ((n & (n - 1)) == 0) and (n % 3 == 1)
 
 
if __name__ == '__main__':
 
    n = 256
 
    if checkPowerOf4(n):
        print(n, 'is a power of 4')
    else:
        print(n, 'is not a power of 4')
 

# Output:256 is a power of 4
```

