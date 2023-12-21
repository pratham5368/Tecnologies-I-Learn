```
Input:  { 10, 68, 75, 7, 21, 12 } 

Output: 77568211210
```
Solution:
```
from functools import cmp_to_key
 
@cmp_to_key
def custom_compare(a, b):
    value1 = str(a) + str(b)
    value2 = str(b) + str(a)
 
    if value1 < value2:
        return 1
    elif value1 > value2:
        return -1
    else:
        return 0
 
 
def findLargestNumber(numbers):
    # sort using a custom function object
    numbers.sort(key=custom_compare)
 
    # join and return
    return ''.join(map(str, numbers))
 
 
if __name__ == '__main__':
    numbers = [10, 68, 97, 9, 21, 12]
 
    largestNumber = findLargestNumber(numbers)
    print('The largest number is', largestNumber)
 
```
The time complexity of the above solution is O(n.log(n)) and doesn’t require any extra space, where n is the size of the input.



