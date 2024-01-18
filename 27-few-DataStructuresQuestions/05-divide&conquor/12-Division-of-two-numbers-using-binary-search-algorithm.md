## Division of two numbers using binary search algorithm
```
# Function to perform a division of two numbers using the
# binary search algorithm
def divide(x, y):
 
    INF = 100000000000.0    # take a huge number as INFINITY
 
    # handle divisibility by 0
    if y == 0:
        return INF          # return INFINITY
 
    # Set range for result [left, right].
    # The `right` is set to INFINITY to handle the case
    # when `y < 1`, and `x < result < INFINITY`
    left = 0.0
    right = INF
 
    # set accuracy of the result
    precision = 0.001
 
    # store sign of the result
    sign = 1
    if x * y < 0:
        sign = -1
 
    # make both input numbers positive
    x = abs(x)
    y = abs(y)
 
    while True:
        # calculate mid
        mid = left + (right - left) / 2
 
        # if `y×mid` is almost equal to `x`, return `mid`
        if abs(y * mid - x) <= precision:
            return mid * sign
 
        # if `y×mid` is less than `x`, update `left` to `mid`
        if y * mid < x:
            left = mid
        else:
            # if `y×mid` is more than `x`, update `right` to `mid`
            right = mid
 
 
if __name__ == '__main__':
 
    print(divide(22, 7))
 

# Output:3.1428222656249996
# The time complexity of the above solution is O(log(n)), where n is equal to MAX_VAL.
```