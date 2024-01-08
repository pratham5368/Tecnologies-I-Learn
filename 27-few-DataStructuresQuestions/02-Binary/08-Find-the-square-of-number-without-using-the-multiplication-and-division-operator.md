## Find the square of a number without using the multiplication and division operator
12 = 122 = (1 + 3) = 432 = (1 + 3 + 5 = 9)42 = (1 + 3 + 5 + 7) = 16


```py
def findSquare(num):
 
    odd = 1
    sq = 0
 
    # convert the number to positive if it is negative
    num = abs(num)
 
    while num > 0:
        sq = sq + odd
        odd = odd + 2
        num = num - 1
 
    return sq
 
 
if __name__ == '__main__':
 
    print(findSquare(8))
    print(findSquare(-4))
 

# Output:64 16
```