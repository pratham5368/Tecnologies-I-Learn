## 1. What is the difference between list.sort() and sorted() in Python?

Python provides two ways to sort a list, the built-in list method list.sort() and the built-in function sorted(). Although both will sort the elements of a list, if used incorrectly they can produce unexpected or undesired results.

### Differences and similarities
The primary difference between the two is that list.sort() will sort the list in-place, mutating its indexes and returning None, whereas sorted() will return a new sorted list leaving the original list unchanged. Another difference is that sorted() accepts any iterable while list.sort() is a method of the list class and can only be used with lists.
```
nums = [2, 3, 1, 5, 6, 4, 0]

print(sorted(nums))   # [0, 1, 2, 3, 4, 5, 6]
print(nums)           # [2, 3, 1, 5, 6, 4, 0]

print(nums.sort())    # None
print(nums)           # [0, 1, 2, 3, 4, 5, 6]
```
Both list.sort() and sorted() have the same key and reverse optional arguments and can be called on each list element prior to making comparisons.

### When to use each one
list.sort() should be used whenever mutating the list is intended and retrieving the original order of the elements is not desired. On the other hand, sorted() should be used when the object to be sorted is an iterable (e.g. list, tuple, dictionary, string) and the desired outcome is a sorted list containing all elements.

## 2. How can I check if a Python list is empty?
Checking the emptiness of a Python list is rather easy using the len() function. Yet, there's another technique that works on all types of sequences and collections. This is based on the truth value testing of the sequence or collection itself.

By default, a Python object is considered truthy unless its class defines either a __bool__() or a __len__() method that returns False or 0 respectively. Python's built-in objects, such as tuples, lists, strings, dictioners, sets and ranges all implement a __len__() method. This menas that truth value testing of these objects will return False if they are empty, and True otherwise.

Based on these observations, all you need to check if a Python list is empty is to test its truth value, using the not operator.
```
x = []
not x # True

y = [1, 2]
not y # False
```
## 3. String Interpolation
The most used f-string feature by far is string interpolation. All you need to do is wrap the value or variable in curly braces ({}) and you're good to go.
```
str_val = 'apples'
num_val = 42

print(f'{num_val} {str_val}') # 42 apples
```
## 4.Variable names
Apart from getting a variable's value, you can also get its name alongside the value. This can be especially useful when debugging and can be easily accomplished by adding an equals sign (=) after the variable name inside the curly braces.

Bear in mind that whitespace inside the curly braces is taken into account, so adding spaces around the equals sign can make for a more readable result.
```
str_val = 'apples'
num_val = 42

print(f'{str_val=}, {num_val = }') # str_val='apples', num_val = 42
```
## 5.Mathematical operations
Not syntactically unlike variable names, you can also perform mathematical operations in f-strings. You can place the mathematical expression inside the curly braces and, if you add an equal sign, you'll get the expression and its result.
```
num_val = 42

print(f'{num_val % 2 = }') # num_val % 2 = 0
```
## 6.Printable representation
Apart from plain string interpolation, you might want to get the printable representation of a value. This is already easy to accomplish using the repr() function. f-strings provide a much shorter syntax by appending a !r inside the curly braces.
```
str_val = 'apples'

print(f'{str_val!r}') # 'apples'
```
## 7.Number formatting
Additionally, f-strings can also be used for formatting - hence the f in the name. To add formatting to a value you can add a colon (:) followed by a format specifier. This can also be combined with the equals sing from before, shall you want to print the name of the variable as well.

Numbers are a great candidate for this. If, for example, you want to trim a numeric value to two digits after the decimal, you can use the .2f format specifier.
```
price_val = 6.12658

print(f'{price_val:.2f}') # 6.13
```
## 8.Date formatting
Finally, dates can also be formatted the same way as numbers, using format specifiers. As usual, %Y denotes the full year, %m is the month and %d is the day of the month.
```
from datetime import datetime;

date_val = datetime.utcnow()

print(f'{date_val=:%Y-%m-%d}') # date_val=2021-07-09
```

## 9.Checks if the a value is an empty sequence or collection.

```
def is_empty(val):
  return not val

is_empty([]) # True
is_empty({}) # True
is_empty('') # True
is_empty(set()) # True
is_empty(range(0)) # True
is_empty([1, 2]) # False
is_empty({ 'a': 1, 'b': 2 }) # False
is_empty('text') # False
is_empty(set([1, 2])) # False
is_empty(range(2)) # False
```