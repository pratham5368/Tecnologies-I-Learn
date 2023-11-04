// Define a function
function sayHello() {
  console.log('Hello World');
}
/*Defining:

JavaScript function declarations are made by using the function keyword.
Functions can also be defined by saving function expressions to a variable. “Arrow” functions are commonly used in this way.


Calling:

When a function is defined, it is not yet executed.
To call and invoke a function’s code, use the function’s name followed by parentheses: functionName(). */
// Invoke, execute or call a function
sayHello();

// Define a function with parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

// Invoke function with arguments
add(5, 10);

// Parameters vs. Arguments
// Parameters are the names of the variables that are used to pass data into a function.
// Arguments are the values that are passed into the function

// Returning a value
function subtract(num1, num2) {
  return num1 - num2;

  console.log('After the return');
}

// Assign the returned value to a variable
const result = subtract(10, 2);

console.log(result, subtract(20, 5));

/*Useful Built-In Methods
Specific built-in objects have different built-in methods which we can use. Below you can find some useful methods for Date, Math, String, Array and Object objects. 👇

Date
JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

Useful built-in methods for Date objects

Date()

When called as a function, returns a string representation of the current date and time, exactly as new Date().toString() does.

new Date()

When called as a constructor, returns a new Date object.

Date.now()

Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.

Date.parse()

Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.Note: Parsing of strings with Date.parse is strongly discouraged due to browser differences and inconsistencies.

You can find a lot more information on built-in methods for Date objects in the documentation:

Date - JavaScript | MDN

Math
Math is a built-in object that has properties and methods for mathematical constants and functions.

Useful built-in methods for Math objects

Math.round(num)

Returns the provided number rounded to the closest integer (whole number).

Math.floor(num)

Rounds down to the previous integer.

Math.ceil(num)

Rounds up to the next integer.

Math.sqrt(x) & Math.cbrt(x)

Returns the square root of x and the cube root of x, respectively.

Math.PI

Not technically a method, but a property! Handy if you need Pi.

You can find a lot more information on built-in methods for Math objects in the documentation:

Math - JavaScript | MDN

String
The String object is used to represent and manipulate a sequence of characters. Strings are useful for holding data that can be represented in text form, and JavaScript provides a number of useful string built-in methods.

E.g. 'example string'.methodName().
console.log('hello'.toUpperCase()); // Prints 'HELLO'
Useful built-in methods for String objects

string.length()

Returns the length of a string.

string.toUpperCase()

Convert all of the characters in a string to capitals. Non-destructive — returns a new string, does not change the original string.

string.toLowerCase()

As with toUpperCase. Converts all characters to lower case. Non-destructive.

string.split(separator, limit)

Splits the string into an array, split by the provided separator. If an empty string (“”) is provided, it will split each character into a new element in the array. Eg. (“JavaScript is great”).split(“ “) will return [“JavaScript”, “is”, “great”].
'Javascript is great'.split("") // returns ['Javascript', 'is', 'great']
string.replace(searchFor, replaceWith)

Finds every instance of the search for substring and replaces it with the given new substring. Non-destructive.

You can find a lot more information on built-in methods for String objects in the documentation:

String - JavaScript | MDN

Array
The simplest way to describe Arrays is that they list-like objects. Something super important about arrays is that they are indexed, meaning that you can access specific values by the index or the location they hold in the list.
let fruits = ['Apple', 'Banana']
Useful built-in methods for Array objects

array.length

Not a method, but a super useful array’s built-in properties is length. It returns the number of items in the array.
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2
array.push()

Allows us to add items to the end of an array. Notice that .push() changes, or mutates, the array. You might also see .push() referred to as a destructive array method since it changes the initial array.
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
array.pop()

Removes the last item of an array. It does not take any arguments, it simply removes the last element of the array and it returns the value of the last element. It is a method that mutates the initial array.
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
Iterators

The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

array.forEach()

Executes the same code for each element of an array.
groceries.forEach(groceryItem => 
    console.log(' - ' + groceryItem)
);
Looping is a very important concept, so let’s explore the syntax of invoking .forEach().

groceries.forEach() calls the forEachmethod on the groceries array.
.forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
.forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
The return value for .forEach() will always be undefined.
We can also define a function beforehand to be used as the callback function.
function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);
It’s good to be aware of the different ways to pass in callback functions as arguments in iterators because developers have different stylistic preferences.

array.map()

When .map() is called on an array, it takes an argument of a callback function and returns a new array. Take a look at an example of calling .map():
const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});
.map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.

array.filter()

Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array.
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
}); */