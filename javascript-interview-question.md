## topics to cover
- Hoisting
- How this works in JavaScript
- Closures
- mul function 
- recursion
- prototype - inheritance in js, how it differs from other languages

- scoping - functions as first class objects, closures, function vs block scoping

- AJAX - just general stuff, how you've used it, etc, not really super technical questions here

- Web Security - same origin policy, Cross Site Scripting, Cross Site Request Forgery, cookies (secure flag, http only flag, what to store in cookies, what not to, etc), basic session based security

- REST API design - given a random data model that I come up with on the spot, design a good API for it

- Troubleshooting techniques - race conditions, developer tools (firebug, chrome dev tools, windows script debugger), understanding that breakpoints affect the behavior of your code, proxy tools (Fiddler or the like), understanding that proxies can affect the behavior of your code (fiddler mishandles edge cases of content-encoding chunked, as an example), wireshark or similar

- code organization and dependency management - what do you do, are you familiar with AMD/require.js, commonjs, or es6 modules?

- Array functions - map/reduce/filter/reduce/sort/etc

- new ES6 features - not make-or-break, but it's good to know, babel transpiler experience also good.

- build tools - webpack, grunt, etc

- server side js - node.js, npm experience

- currently popular frameworks/libraries - don't care which, just like to hear they know about some, have an opinion, bonus points if they can give some advantages and disadvantages of a few of them.



## 1. Can you name two programming paradigms important for JavaScript app developers?

JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.

## 2. What is functional programming?

Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data. Lisp (specified in 1958) was among the first languages to support functional programming, and was heavily inspired by lambda calculus. Lisp and many Lisp family languages are still in common use today.

Functional programming is an essential concept in JavaScript (one of the two pillars of JavaScript). Several common functional utilities were added to JavaScript in ES5.

## 3. What is the difference between classical inheritance and prototypal inheritance?

Class Inheritance: instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the ```new``` keyword. Class inheritance may or may not use the `class` keyword from ES6.

Prototypal Inheritance: instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance. 
## 4. What are the pros and cons of functional programming vs object-oriented programming?
OOP Pros: It’s easy to understand the basic concept of objects and easy to interpret the meaning of method calls. OOP tends to use an imperative style rather than a declarative style, which reads like a straight-forward set of instructions for the computer to follow.

OOP Cons: OOP Typically depends on shared state. Objects and behaviors are typically tacked together on the same entity, which may be accessed at random by any number of functions with non-deterministic order, which may lead to undesirable behavior such as race conditions.

FP Pros: Using the functional paradigm, programmers avoid any shared state or side-effects, which eliminates bugs caused by multiple functions competing for the same resources. With features such as the availability of point-free style (aka tacit programming), functions tend to be radically simplified and easily recomposed for more generally reusable code compared to OOP.

FP also tends to favor declarative and denotational styles, which do not spell out step-by-step instructions for operations, but instead concentrate on what to do, letting the underlying functions take care of the how. This leaves tremendous latitude for refactoring and performance optimization, even allowing you to replace entire algorithms with more efficient ones with very little code change. (e.g., memoize, or use lazy evaluation in place of eager evaluation.)

Computation that makes use of pure functions is also easy to scale across multiple processors, or across distributed computing clusters without fear of threading resource conflicts, race conditions, etc…

FP Cons: Over exploitation of FP features such as point-free style and large compositions can potentially reduce readability because the resulting code is often more abstractly specified, more terse, and less concrete.

More people are familiar with OO and imperative programming than functional programming, so even common idioms in functional programming can be confusing to new team members.

FP has a much steeper learning curve than OOP because the broad popularity of OOP has allowed the language and learning materials of OOP to become more conversational, whereas the language of FP tends to be much more academic and formal. FP concepts are frequently written about using idioms and notations from lambda calculus, algebras, and category theory, all of which requires a prior knowledge foundation in those domains to be understood.

## 5. When is classical inheritance an appropriate choice?
The answer is never, or almost never. Certainly never more than one level. Multi-level class hierarchies are an anti-pattern. I’ve been issuing this challenge for years, and the only answers I’ve ever heard fall into one of several common misconceptions. More frequently, the challenge is met with silence.

## 6. When is prototypal inheritance an appropriate choice?
There is more than one type of prototypal inheritance:

- Delegation (i.e., the prototype chain).
- Concatenative (i.e. mixins, `Object.assign()`).
- Functional (Not to be confused with functional programming. A function used to create a closure for private state/encapsulation).

Each type of prototypal inheritance has its own set of use-cases, but all of them are equally useful in their ability to enable composition, which creates has-a or uses-a or can-do relationships as opposed to the is-a relationship created with class inheritance.

## 7. What does “favor object composition over class inheritance” mean?
This is a quote from “Design Patterns: Elements of Reusable Object-Oriented Software”. It means that code reuse should be achieved by assembling smaller units of functionality into new objects instead of inheriting from classes and creating object taxonomies.

In other words, use can-do, has-a, or uses-a relationships instead of is-a relationships.
## 8. What are two-way data binding and one-way data flow, and how are they different?
Two way data binding means that UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa.

One way data flow means that the model is the single source of truth. Changes in the UI trigger messages that signal user intent to the model (or “store” in React). Only the model has the access to change the app’s state. The effect is that data always flows in a single direction, which makes it easier to understand.

One way data flows are deterministic, whereas two-way binding can cause side-effects which are harder to follow and understand.
## 9. What are the pros and cons of monolithic vs microservice architectures?
A monolithic architecture means that your app is written as one cohesive unit of code whose components are designed to work together, sharing the same memory space and resources.

A microservice architecture means that your app is made up of lots of smaller, independent applications capable of running in their own memory space and scaling independently from each other across potentially many separate machines.

Monolithic Pros: The major advantage of the monolithic architecture is that most apps typically have a large number of cross-cutting concerns, such as logging, rate limiting, and security features such audit trails and DOS protection.

When everything is running through the same app, it’s easy to hook up components to those cross-cutting concerns.

There can also be performance advantages, since shared-memory access is faster than inter-process communication (IPC).

Monolithic cons: Monolithic app services tend to get tightly coupled and entangled as the application evolves, making it difficult to isolate services for purposes such as independent scaling or code maintainability.

Monolithic architectures are also much harder to understand, because there may be dependencies, side-effects, and magic which are not obvious when you’re looking at a particular service or controller.

Microservice pros: Microservice architectures are typically better organized, since each microservice has a very specific job, and is not concerned with the jobs of other components. Decoupled services are also easier to recompose and reconfigure to serve the purposes of different apps (for example, serving both the web clients and public API).

They can also have performance advantages depending on how they’re organized because it’s possible to isolate hot services and scale them independent of the rest of the app.

Microservice cons: As you’re building a new microservice architecture, you’re likely to discover lots of cross-cutting concerns that you did not anticipate at design time. A monolithic app could establish shared magic helpers or middleware to handle such cross-cutting concerns without much effort.

In a microservice architecture, you’ll either need to incur the overhead of separate modules for each cross-cutting concern, or encapsulate cross-cutting concerns in another service layer that all traffic gets routed through.

Eventually, even monolthic architectures tend to route traffic through an outer service layer for cross-cutting concerns, but with a monolithic architecture, it’s possible to delay the cost of that work until the project is much more mature.

Microservices are frequently deployed on their own virtual machines or containers, causing a proliferation of VM wrangling work. These tasks are frequently automated with container fleet management tools.
## 10. What is asynchronous programming, and why is it important in JavaScript?
Synchronous programming means that, barring conditionals and function calls, code is executed sequentially from top-to-bottom, blocking on long-running tasks such as network requests and disk I/O.

Asynchronous programming means that the engine runs in an event loop. When a blocking operation is needed, the request is started, and the code keeps running without blocking for the result. When the response is ready, an interrupt is fired, which causes an event handler to be run, where the control flow continues. In this way, a single program thread can handle many concurrent operations.

User interfaces are asynchronous by nature, and spend most of their time waiting for user input to interrupt the event loop and trigger event handlers.

Node is asynchronous by default, meaning that the server works in much the same way, waiting in a loop for a network request, and accepting more incoming requests while the first one is being handled.

This is important in JavaScript, because it is a very natural fit for user interface code, and very beneficial to performance on the server.
## 11. What is a “closure” in JavaScript? Provide an example
A closure is a function defined inside another function (called the parent function), and has access to variables that are declared and defined in the parent function scope.

The closure has access to variables in three scopes:

- Variables declared in their own scope
- Variables declared in a parent function scope
- Variables declared in the global namespace
```
var globalVar = "abc"; 

// Parent self invoking function 
(function outerFunction (outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope 
    var outerFuncVar = 'x';    
    // Closure self-invoking function 
    (function innerFunction (innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y"; 
        console.log(          
            "outerArg = " + outerArg + "\n" +
            "outerFuncVar = " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerFuncVar = " + innerFuncVar + "\n" +
            "globalVar = " + globalVar);
 
    }// end of scope innerFunction)(5); // Pass 5 as parameter 
}// end of scope outerFunction )(7); // Pass 7 as parameter 
```

## 12. How to empty an array in JavaScript?
For instance,
```
 var arrayList =  ['a','b','c','d','e','f'];
 ```


There are a couple ways we can use to empty an array, so let's discuss them all.

- Method 1
```
arrayList = []
```
Above code will set the variable arrayList to a new empty array. This is recommended if you don't have references to the original array arrayList anywhere else, because it will actually create a new, empty array. You should be careful with this method of emptying the array, because if you have referenced this array from another variable, then the original reference array will remain unchanged.

For Instance,
```
var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList = []; // Empty the array 
console.log(anotherArrayList); // Output ['a','b','c','d','e','f']
```
- Method 2
```
arrayList.length = 0;
```
The code above will clear the existing array by setting its length to 0. This way of emptying the array also updates all the reference variables that point to the original array. Therefore, this method is useful when you want to update all reference variables pointing to arrayList.

For Instance,
```
var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
```
- Method 3
```
arrayList.splice(0, arrayList.length);
```
The implementation above will also work perfectly. This way of emptying the array will also update all the references to the original array.
```
var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
Method 4
while(arrayList.length){
  arrayList.pop();
}
```

## 13. What is function hoisting in JavaScript?
Function Expression
```
var foo = function foo(){ 
 	return 12; 
}; 
```
In JavaScript, variable and functions are hoisted. Let's take function hoisting first. Basically, the JavaScript interpreter looks ahead to find all variable declarations and then hoists them to the top of the function where they're declared. For example:
```
foo(); // Here foo is still undefined 
var foo = function foo(){ 
 	return 12; 
}; 
```

## 14. What is the difference between declaring a function in the two formats below?
```
var foo = function() {
/* Some code */
};
```
```
function bar() {
/* Some code */
};
```
## 15. The main difference is the function foo is defined at run-time whereas function bar is defined at parse time. To understand this in better way, let's take a look at the code below:

Run-Time function declaration 
```
<script>
foo(); // Calling foo function here will give an Error
  var foo = function(){ 
    console.log("Hi I am inside Foo");
 }; 
 </script>
 <script>
Parse-Time function declaration 
bar(); // Calling foo function will not give an Error
 function bar(){ 
  console.log("Hi I am inside Foo");
 }; 
</script>
```
## 16. What is the drawback of declaring methods directly in JavaScript objects?
One of the drawbacks of declaring methods directly in JavaScript objects is that they are very memory inefficient.


## 17.  Write a mul function which will work properly when invoked with following syntax.
```
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
Answer
function mul (x) {
  return function (y) { // anonymous function
    return function (z) { // anonymous function
      return x * y * z;
    };
  };
}
```
Here the mul function accepts the first argument and returns an anonymous function which then takes the second parameter and returns one last anonymous function which finally takes the third and final parameter; the last function then multiplies x, y and z, and returns the result of the operation.

In Javascript, a function defined inside another function has access to the outer function's scope and can consequently return, interact with or pass on to other functions, the variables belonging to the scopes that incapsulate it.

- A function is an instance of the Object type
- A function can have properties and has a link to its constructor method
- A function can be stored as a variable
- A function can be passed as a parameter to another function
- A function can be returned by another function
## 18. What will be the output of the following code?
```
var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);
```
The code above will output 0 as output. delete operator is used to delete a property from an object. Here x is not an object, it's a local variable. delete operator doesn't affect local variables.

## 19. What will be the output of the following code?
```
var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);
```
The code above will output 1 as output. delete operator is used to delete a property from an object. Here x is not an object it's global variable of type number.

## 20.  What is negative Infinity?
Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.

## 21. What is the use of the Push method in JavaScript?
The push method is used to add or append one or more elements to an Array end. Using this method, we can append multiple elements by passing multiple arguments.

## 22. What is event bubbling?
JavaScript allows DOM elements to be nested inside each other. In such a case, if the handler of the child is clicked, the handler of the parent will also work as if it were clicked too.

## 23.  What are some important JavaScript Unit Testing Frameworks?
Following is a curated list of popular JavaScript Unit Testing Frameworks and Tools that are widely used :

- Unit.js: It is known as an open-source assertion library running on browser and Node.js. It is extremely compatible with other JavaScript Unit Testing frameworks like Mocha, Karma, Jasmine, QUnit, Protractor, etc. Provides the full documented API of assertion list.

- QUnit: It is used for both client-side and server-side JavaScript Unit Testing. This Free JavaScript testing framework is used for jQuery projects. It follows Common JS unit testing Specification for unit testing in JavaScript. It supports the Node Long-term Support Schedule.

- Jasmine: Jasmine is the behavior-driven development framework to unit test JavaScript. It is used for testing both synchronous and asynchronous JavaScript codes. It does not require DOM and comes with an easy syntax that can be written for any test.

- Karma: Karma is an open-source productive testing environment. Easy workflow control running on the command line. Offers the freedom to write the tests with Jasmine, Mocha, and QUnit. You can run the test on real devices with easy debugging.

- Mocha: Mocha runs on Node.js and in the browser. Mocha performs asynchronous testing more simply. Provides accuracy and flexibility in reporting. Provides tremendous support of rich features such as test-specific timeouts, JavaScript APIs.

- Jest: Facebook uses jest so far to test all the JavaScript code. It provides the ‘zero-configuration testing experience. Supports independent and non-interrupting running tests without any conflict. Do not require any other setup configuration and libraries.

- AVA: AVA is a simple JavaScript Unit Testing Framework. Tests are being run in parallel and serially. Parallel tests run without interrupting each other. This testing framework supports asynchronous testing as well. AVA uses subprocesses to run the unit test JavaScript.

## 24. What is Event Propagation?
↑ When an event occurs on a DOM element, that event does not entirely occur on that just one element. In the Bubbling Phase, the event bubbles up or it goes to its parent, to its grandparents, to its grandparent's parent until it reaches all the way to the window while in the Capturing Phase the event starts from the window down to the element that triggered the event or the event.target.

Event Propagation has three phases.

- Capturing Phase – the event starts from window then goes down to every element until it reaches the target element.
- Target Phase – the event has reached the target element.
- Bubbling Phase – the event bubbles up from the target element then goes up every element until it reaches the window.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--pU4TmVPB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://thepracticaldev.s3.amazonaws.com/i/hjayqa99iejfhbsujlqd.png)
## 25.  What's Event Bubbling?
↑ When an event occurs on a DOM element, that event does not entirely occur on that just one element. In the Bubbling Phase, the event bubbles up or it goes to its parent, to its grandparents, to its grandparent's parent until it reaches all the way to the window.

If we have an example markup like this.
```
 <div class="grandparent">
    <div class="parent">
      <div class="child">1</div>
    </div>
  </div>
```
And our js code.
```
function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== 'function') return;
  if (typeof el === 'string') {
    el = document.querySelector(el);
  };
  el.addEventListener(event, callback, isCapture);
}

addEvent(document, 'DOMContentLoaded', () => {
  const child = document.querySelector('.child');
  const parent = document.querySelector('.parent');
  const grandparent = document.querySelector('.grandparent');

  addEvent(child, 'click', function (e) {
    console.log('child');
  });

  addEvent(parent, 'click', function (e) {
    console.log('parent');
  });

  addEvent(grandparent, 'click', function (e) {
    console.log('grandparent');
  });

  addEvent(document, 'click', function (e) {
    console.log('document');
  });

  addEvent('html', 'click', function (e) {
    console.log('html');
  })

  addEvent(window, 'click', function (e) {
    console.log('window');
  })

});
```
The addEventListener method has a third optional parameter useCapture with a default value of false the event will occur in the Bubbling phase if true the event will occur in the Capturing Phase. If we click on the child element it logs child,parent,grandparent, html, document and window respectively on the console. This is Event Bubbling.

## 26. What's the difference between event.preventDefault() and event.stopPropagation() methods?
↑ The event.preventDefault() method prevents the default behavior of an element. If used in a form element it prevents it from submitting. If used in an anchor element it prevents it from navigating. If used in a contextmenu it prevents it from showing or displaying. While the event.stopPropagation() method stops the propogation of an event or it stops the event from occurring in the bubbling or capturing phase.

## 27.  What does the !! operator do?
↑ The Double NOT operator or !! coerces the value on the right side into a boolean. basically it's a fancy way of converting a value into a boolean.
```
console.log(!!null); //logs false
console.log(!!undefined); //logs false
console.log(!!''); //logs false
console.log(!!0); //logs false
console.log(!!NaN); //logs false
console.log(!!' '); //logs true
console.log(!!{}); //logs true
console.log(!![]); //logs true
console.log(!!1); //logs true
console.log(!![].length); //logs false
```

## 28. What is Hoisting?
↑ Hoisting is the term used to describe the moving of variables and functions to the top of their (global or function) scope on where we define that variable or function.

Ok to understand Hoisting, I have to explain the execution context.
The Execution Context is the "environment of code" that is currently executing. The Execution Context has two phases compilation and execution.

Compilation - in this phase it gets all the function declarations and hoists them up to the top of their scope so we can reference them later and gets all variables declaration (declare with the var keyword) and also hoists them up and give them a default value of undefined.

Execution - in this phase it assigns values to the variables hoisted earlier and it executes or invokes functions (methods in objects).

## 29. What is the prototype of an object?
↑ A prototype in simplest terms is a blueprint of an object. It is used as a fallback for properties and methods if it does exist in the current object. It's the way to share properties and functionality between objects. It's the core concept around JavaScript's Prototypal Inheritance.
```
  const o = {};
  console.log(o.toString()); // logs [object Object] 
```
Even though the o.toString method does not exist in the o object it does not throw an error instead returns a string [object Object]. When a property does not exist in the object it looks into its prototype and if it still does not exist it looks into the prototype's prototype and so on until it finds a property with the same in the Prototype Chain. The end of the Prototype Chain is null after the Object.prototype.
```
   console.log(o.toString === Object.prototype.toString); // logs true
   // which means we we're looking up the Prototype Chain and it reached 
   // the Object.prototype and used the "toString" method.
```
## 30.  What's the difference between Function.prototype.apply and Function.prototype.call?
↑ The only difference between apply and call is how we pass the arguments in the function being called. In apply we pass the arguments as an array and in call we pass the arguments directly in the argument list.
```
const obj1 = {
 result:0
};

const obj2 = {
 result:0
};

function reduceAdd(){
   let result = 0;
   for(let i = 0, len = arguments.length; i < len; i++){
     result += arguments[i];
   }
   this.result = result;
}

reduceAdd.apply(obj1, [1, 2, 3, 4, 5]); // returns 15
reduceAdd.call(obj2, 1, 2, 3, 4, 5); // returns 15
```
## 31.  What is Object Destructuring?
↑ Object Destructuring is a new and cleaner way of getting or extracting values from an object or an array.
## 32.  Show the usage of typeof operator on different types of values
The typeof operator returns a string indicating the type of the operand
```
typeof 50; //   "number"
typeof "text"; //   "string"
typeof true; //   "boolean"
typeof undefined; //   "undefined"
typeof function () {}; //   "function"
typeof 10n; //   "bigint"
typeof Symbol(); //   "symbol"
typeof [1, 2]; //   "object"
typeof {}; //   "object"
 
typeof NaN; //   "number"        (NaN is Not a Number)
typeof undeclaredVar; //   "undefined"     (undeclaredVariable is never declared)
typeof Infinity; //   "number"        (Infinity, -Infinity, -0 are all valid numbers in JavaScript)
typeof null; //   "object"        (This stands since the beginning of JavaScript)
typeof /regex/; //   "object"        (regular expressions start and end with '/' in literal form)
```
## 33.  Show the different ways of concatenating numbers and strings
```
// numbers and strings
1 + "2"; // 12
1 + 2 + "3"; // 33
1 + 2 + "3" + "4"; // 334
1 + "One"; // 1One
 
// strings and numbers
"1" + 2; // 12
"1" + "2" + 3; // 123
"1" + "2" + 3 + 4; // 1234
"1" + "2" + (3 + 4); // 127
"One" + 1; // One1
 
// mix of string and numbers
1 + 2 + "3" + "4" + 5 + 6; // 33456
1 + 2 + "3" + "4" + (5 + 6); // 33411
"1" + "2" + (3 + 4) + 5 + "6"; // 12756
```
## 34. Show the conversion from number to string and vice versa
```
// number to string conversion
const num = 12;
 
String(num); // "12"
num.toString(); // "12"
num + ""; // "12"

// string to number conversion
const str = "12";
 
Number(str); // 12
+str; // 12
parseInt(str); // 12
```

## 35. Show the frequently and commonly used methods available on Number object with coding examples
- isInteger is used to check if the given number is integer or not
- parseInt is used to convert a given value in to integer
- parseFloat is used to convert a given value in to floating number
- isNaN is used to check if the given value is NaN or no
- toFixed is used to limit the number of digits after the decimal place
- toPrecision is used to limit the total number of digits to represent the number
```
Number.isInteger(1.5); // false
Number.isInteger(-15); // true
 
Number.parseInt("5.8"); // 5
Number.parseInt("123x"); // 123
 
Number.parseFloat("5.86"); // 5.86
Number.parseFloat("-12.69x"); // -12.69
 
Number.isNaN(NaN); // true
Number.isNaN("text" - 10); // true
Number.isNaN("text"); // false

(56.369).toFixed(2); // 56.37
(59).toFixed(3); // 59.000
 
(32.458).toPrecision("3"); // 32.5
(98.1).toPrecision(1); // 1e+2
```
## 36. Create a function which returns a random number in the given range of values both inclusive
Math.random function returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive)
```
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return rangeStart + Math.round(Math.random() * (rangeEnd - rangeStart));
}
 
randomNumberGeneratorInRange(10, 50); // 12
```
## 37. Write a program to reverse a string
- String can be reversed by iterating it and storing it in reverse order
- String can also be reversed by converting it to array, then joining it after reversing
```
const str = "JavaScript is awesome";
let reversedString = "";
for (let i = 0; i < str.length; i++) {
  reversedString = str.charAt(i) + reversedString;
}
 
reversedString; // "emosewa si tpircSavaJ"

const str = "JavaScript is awesome";
str.split("").reverse().join(""); // "emosewa si tpircSavaJ"
```
## 38.  Write a program to reverse a given integer number
- The remainder of the number can be fetched and the number can be divided by 10 to remvoe the the digit in loop till number becomes 0
- A simple approach to reverse a number could also be to convert it in to a string and then reverse it
```
let num = 3849;
 
let reversedNum = 0;
while (num !== 0) {
  reversedNum = reversedNum * 10 + (num % 10);
  num = Math.floor(num / 10);
}
 
reversedNum; // 9483
```
```
let num = 3849;
 
let numStr = String(num);
+numStr.split("").reverse().join(""); // 9483
```
## 39. Write a function to truncate a string to a certain number of letters
```
// Example
truncateString("JavaScript", 7); // "Java..."
truncateString("JS is fun", 10); // "JS is fun"
truncateString("JS is funny", 10); // "JS is f..."
```
- Text can be truncated by fetching the substring from start till the count of characters
- substr methods of String can be used to fetch the part of the string
```
function truncateString(str, charCount) {
  if (str.length > charCount) {
    return str.substr(0, charCount - 3) + "...";
  } else {
    return str;
  }
}
```
## 40. Write a code to truncate a string to a certain number of words
```
const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;
 
str.split(" ").slice(0, wordLimit).join(" "); // "JavaScript is simple"
```
## 41.  Create a function which returns random hex color code
- The color code is popularly represented in hexadecimal format for RGB colors
- The minimum value for the color is '#000000' and maximum is '#FFFFFF'
```
function getGetHEXColorCode() {
  const rValue = Math.round(0xff * Math.random())
    .toString(16)
    .padStart(2, "0");
  const gValue = Math.round(0xff * Math.random())
    .toString(16)
    .padStart(2, "0");
  const bValue = Math.round(0xff * Math.random())
    .toString(16)
    .padStart(2, "0");
  return "#" + rValue + gValue + bValue;
}
```
## 42.  Explain hoisting in JavaScript.

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase.
```
console.log(x);  // Output: undefined
var x = 10;
console.log(x);  // Output: 10
```
## 43. Show the most common ways of creating functions in JavaScript
Functions are most commonly created using function statements, function expressions and arrow functions
Function statements get hoisted unlike function expressions
```
// Regular function as a function statement
function functionName(params) {
  //code block
}

// Regular function as a function expression
const functionName = function (params) {
  //code block
};

// Arrow function as a function expression
const arrowFunctionName = (params) => {
  //code block
};
```
## 44. Achieve prototypal inheritance using functions to create objects in JavaScript
- 2 functions can be used to create objects with constructor call to the functions
- The prototype of the child function is connected with the parent function to achieve the inheritance behavior
```
function parent(name) {
  this.name = name;
}
 
parent.prototype.getName = function () {
  return this.name;
};
 
function child(name) {
  parent.call(this, name);
}
 
child.prototype = Object.create(parent.prototype);
child.prototype.getMyName = function () {
  return this.name;
};
 
// driver code
var fk = new child("FK");
console.log(fk.getName());
console.log(fk.getMyName());
 
var pk = new parent("PK");
console.log(pk.getName());
```

## 45.  Write a code to show the differences between the techniques, currying and partial application
A function returning another function that might return another function, but every returned function must take only one parameter at a time is currying
A function returning another function that might return another function, but each returned function can take several parameters is partial application
```
// currying
function multiply(num1) {
  return function (num2) {
    return function (num3) {
      return num1 * num2 * num3;
    };
  };
}

// partial application
function multiply(num1) {
  return function (num2, num3) {
    return function (num4) {
      return num1 * num2 * num3 * num4;
    };
  };
}
```
## 46.  Write a function which helps to achieve multiply(a)(b) and returns product of a and b
```
// Example
multiply(2)(4); // 8
multiply(5)(3); // 15
```
The implementation of this can be achieved by calling a function which returns a function
```
function multiply(num1) {
  return function (num2) {
    return num1 * num2;
  };
}
```
## 47. Show the different ways of creating an object
- Object can be created using Object constuctor
- Object can also be created using Object literal form
- Object can be created using new keyword to constructor function
- Object can be created using Class
```
const object = Object.create({ key: value });

const object = {
  key: value,
};
```
```
function getObject(key, value) {
  this[key] = value;
}
```
```
const object = new getObject("key", "value");
```
```
class Obj {
  constructor(key, value) {
    this[key] = value;
  }
}
```
```
const object = new Obj("key", "value");
```
## 48. What is currying in JavaScript?
Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.

Example of a curried function:
```
function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4) 
```
For Example, if we have a function f(a,b), then the function after currying, will be transformed to f(a)(b).

By using the currying technique, we do not change the functionality of a function, we just change the way it is invoked.

Let’s see currying in action:
```
function multiply(a,b){
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12
```
## 49. What are classes in javascript?
Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions. They provide a new way of declaring constructor functions in javascript.  Below are the examples of how classes are declared and used:
```
// Before ES6 version, using constructor functions
function Student(name,rollNumber,grade,section){
  this.name = name;
  this.rollNumber = rollNumber;
  this.grade = grade;
  this.section = section;
}

// Way to add methods to a constructor function
Student.prototype.getDetails = function(){
  return 'Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}';
}


let student1 = new Student("Vivek", 354, "6th", "A");
student1.getDetails();
// Returns Name: Vivek, Roll no:354, Grade: 6th, Section:A

// ES6 version classes
class Student{
  constructor(name,rollNumber,grade,section){
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.section = section;
  }

  // Methods can be directly added inside the class
  getDetails(){
    return 'Name: ${this.name}, Roll no: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}';
  }
}

let student2 = new Student("Garry", 673, "7th", "C");
student2.getDetails();
// Returns Name: Garry, Roll no:673, Grade: 7th, Section:C
```
Key points to remember about classes:

- Unlike functions, classes are not hoisted. A class cannot be used before it is declared.
- A class can inherit properties and methods from other classes by using the extend keyword.
- All the syntaxes inside the class must follow the strict mode(‘use strict’) of javascript. An error will be thrown if the strict mode rules are not followed

[few important one ](https://www.interviewbit.com/javascript-interview-questions/#output-of-following-code-1)

## 50.  What is the value of -'34'+10

 -24. minus(-) in front of a string is an unary operator that will convert the string to a number and will make it negative. Hence, -'34' becomes, -34 and then plus (+) will perform simple addition as both the operands are number.

## 51. Question: What is the value of +'dude'

Answer: NaN. The plus (+) operator in front of a string is an unary operator that will try to convert the string to number. Here, JavaScript will fail to convert the "dude" to a number and will produce NaN.