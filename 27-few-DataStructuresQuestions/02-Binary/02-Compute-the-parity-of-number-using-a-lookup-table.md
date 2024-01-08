## Compute the parity of a number using a lookup table
1. Divide and Conquer
The idea is to calculate the parity of an integer by recursively dividing the 32–bit integer into two halves and take their XOR until only the 1 bit is left. Taking the XOR will cancel out set bits at the same position in two halves, and since parity will not be affected if we take out even set bits from it (why?), the problem is successfully reduced to half at each step.

For example, we initially split the 32–bit (4 bytes) integer into two 16–bit chunks and take their XOR. Then again, we split the 16–bit chunk into 8–bit chunks and take their XOR. Then 8–bit chunks further get divided into 4–bits chunks and so on… This process continues until only the 1 bit is left.
```py
# Compute parity of a number `x` using the lookup table
def findParity(x):
 
    # recursively divide the (32–bit) integer into two equal
    # halves and take their XOR until only 1 bit is left
 
    x = (x & 0x0000FFFF) ^ (x >> 16)
    x = (x & 0x000000FF) ^ (x >> 8)
    x = (x & 0x0000000F) ^ (x >> 4)
    x = (x & 0x00000003) ^ (x >> 2)
    x = (x & 0x00000001) ^ (x >> 1)
 
    # return true if the last bit is set
    return (x & 1) == 1
 
 
if __name__ == '__main__':
 
    x = 127
 
    print(f'{x} in binary is {bin(x)}')
 
    if findParity(x):
        print(x, 'contains odd bits')
    else:
        print(x, 'contains even bits')
 

```
127 in binary is 0b1111111127 contains odd bits

```py
# Compute parity of a number `x` using the lookup table
def findParity(x):
 
    # recursively divide the (32–bit) integer into two equal
    # halves and take their XOR until only 1 bit is left
 
    x ^= x >> 16
    x ^= x >> 8
    x ^= x >> 4
    x ^= x >> 2
    x ^= x >> 1
 
    # return true if the last bit is set
    return (x & 1) == 1
 
 
if __name__ == '__main__':
 
    x = 15
 
    print(f'{x} in binary is {bin(x)}')
 
    if findParity(x):
        print('Number contains an odd number of bits')
    else:
        print('Number contains an even number of bits.')
 

#Output:15 in binary is 0b1111
#Number contains an even number of bits.
```
