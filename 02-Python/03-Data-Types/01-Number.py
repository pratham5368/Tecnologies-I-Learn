#You can get the data type of any object by using the type() function:
#Print the data type of the variable x:
x = 5.00022
print(type(x))


let x;

const num = new Number(5);

### // toString() - returns a string representation of the number
x = num.toString();

# to change a number to a string
def number_to_string(num):
    return str(num)



#// To get the length
x = num.toString().length;

### // toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);

### // toPrecision() - returns a number with the specified length
x = num.toPrecision(3);

#// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2);

#// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US');

#// valueOf - Get value
x = num.valueOf();

#// The Number object itself has some properties and methods

#// Largest and smallest possible number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);


#Type Conversion can convert from one type to another with the int(), float(), and complex() methods:

x = 1    # int
y = 2.8  # float
z = 1j   # complex

#convert from int to float:
a = float(x)

#convert from float to int:
b = int(y)

#convert from int to complex:
c = complex(x)

print(a)
print(b)
print(c)

print(type(a))
print(type(b))
print(type(c))
#Note: You cannot convert complex numbers into another number type.



#Random Number Python does not have a random() function to make a random number, but Python has a built-in module called random that can be used to make random numbers:
import random

print(random.randrange(1, 10))