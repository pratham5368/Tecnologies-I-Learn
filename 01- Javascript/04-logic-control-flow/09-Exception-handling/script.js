//The “try…catch” syntax
//The try...catch construct has two main blocks: try, and then catch:

try {

  // code...

} catch (err) {

  // error handling

}
/*It works like this:

First, the code in try {...} is executed.
If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch.
If an error occurs, then the try execution is stopped, and control flows to the beginning of catch (err). The err variable (we can use any name for it) will contain an error object with details about what happened.

So, an error inside the try {...} block does not kill the script – we have a chance to handle it in catch.

Let’s look at some examples.

An errorless example: shows alert (1) and (2):
*/
try {

  alert('Start of try runs');  // (1) <--

  // ...no errors here

  alert('End of try runs');   // (2) <--

} catch (err) {

  alert('Catch is ignored, because there are no errors'); // (3)

}

//An example with an error: shows (1) and (3):

try {

  alert('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  alert('End of try (never reached)');  // (2)

} catch (err) {

  alert(`Error has occurred!`); // (3) <--

}



//Error object
//When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch:

try {
  // ...
} catch (err) { // <-- the "error object", could use another word instead of err
  // ...
}



//Using “try…catch”
/*As we already know, JavaScript supports the JSON.parse(str) method to read JSON-encoded values.

Usually it’s used to decode data received over the network, from the server or another source.*/


let json = '{"name":"John", "age": 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object

// now user is an object with properties from the string
alert( user.name ); // John
alert( user.age );  // 30




//“Throw” operator
The throw operator generates an error.
/*
The syntax is:

throw <error object>
Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).

JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well.
*/

let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// .


//The try statement defines a code block to run (to try).
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}


/*The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error. */


/*Utilizing error objects
When a runtime error occurs, a new Error object is created and thrown. With this Error object, we can determine the type of the Error and handle it according to its type.

Types of Errors:
Besides error constructors, Javascript also has other core Error constructors.

AggregateError
EvalError
InternalError
RangeError
ReferenceError
SyntaxError
Example
try {
  willGiveErrorSometime();
} catch (error) {
  if (error instanceof RangeError) {
    rangeErrorHandler(error);
  } else if (error instanceof ReferenceError) {
    referenceErrorHandle(error);
  } else {
    errorHandler(error);
  }
}
 */

