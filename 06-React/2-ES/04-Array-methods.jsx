
/*The .map() method allows you to run a function on each item in the array, returning a new array as the result.

In React, map() can be used to generate lists.*/


//Generate a list of items from an array:

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)