/*In JavaScript, the this keyword is a little different compared to other languages. It refers to an object, but it depends on how or where it is being invoked. It also has some differences between strict mode and non-strict mode.

In an object method, this refers to the object
Alone, this refers to the global object
In a function, this refers to the global object
In a function, in strict mode, this is undefined
In an event, this refers to the element that received the event
Methods like call(), apply(), and bind() can refer this to any object */



fullName : function() {
    return this.firstName + " " + this.lastName;
  }



const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}


//this in a Function (Default)
/*In a function, the global object is the default binding for this.

In a browser window the global object is [object Window]:
*/

function myFunction() {
  return this;
}


//this Alone
/*When used alone, this refers to the global object.

Because this is running in the global scope.

In a browser window the global object is [object Window]:
*/

let x = this;


//this in Event Handlers
//In HTML event handlers, this refers to the HTML element that received the event:


<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>


// new custom Prototype function to Array - this refers to the array on which I will invoke this custom function.
// Another custom Prototype example - Popular Interview Question

const a = [1, 2, 3, 4, 5];
Implement this
a.multiply();
console.log(a); // [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]


// Here I am using the old iteration syntax with i
Array.prototype.multiply = function() {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(this[i] ** 2)
  }
  return [...this, ...result]
}


/*
[
  1, 2, 3,  4,  5,
  1, 4, 9, 16, 25
]

 */


// Below will produce slightly different result, the last element will be NaN

Array.prototype.multiply = function() {
  let result = []
  for (i of this) {
    result.push(this[i] ** 2)
  }
  return [...this, ...result]
}

let myArr = [1, 2, 3, 4, 5]

console.log(myArr.multiply())
/*
[
  1, 2,  3,  4,   5,
  4, 9, 16, 25, NaN
]

 */






/*this (aka "the context") is a special keyword inside each function and its value only depends on how the function was 
called, not how/when/where it was defined. It is not affected by lexical scopes like other variables (except for arrow 
  functions, see below).*/
  function foo() {
    console.log(this)
  }
  
  // normal function call
  foo() // `this` will refer to `window` or global in node environment
  
  // as object method
  var obj = { bar: foo }
  obj.bar() // `this` will refer to `obj`
  
  // as constructor function
  new foo() // `this` will refer to an object that inherits from `foo.prototype`

  // *********************** EXPLANATION - 1 **************************************//
/* By the official doc (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) - 'this' is just The JavaScript context object in which the current code is executing. In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

Inside a function, the value of this depends on how the function is called.

Case-1 - WITHOUT STRICT MODE - If a function is not in strict mode, and if the value of this is not set by the call, this will default to the global object, which is window in a browser or global in Node environment

Case-2 - In strict mode, however, the value of this remains at whatever it was set to when entering the execution context, 'this' will default to undefined. So, in strict mode, if this was not defined by the execution context, it remains undefined. The global object refers to 'undefined' in place of the windows object.

*/

// Case-1 - WITHOUT STRICT MODE - Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser, or global in node environment.

function f1() {
  return this === global
}

console.log(f1()) // => true

// In a browser:
f1() === window // true

// In Node:
f1() === global // true

// Case-2 - In strict mode, however, the value of this remains at whatever it was set to when entering the execution context, so, in the following case, this will default to undefined. So, in strict mode, if this was not defined by the execution context, it remains undefined. And also, f2 was called directly and not as a method or property of an object (e.g. window.f2())

function f2() {
  "use strict"
  return this === undefined
}

console.log(f2()) // true

/* Now the case when “this” Refers to a New Instance - HERE, `this` will refer to an object that inherits from `instance.prototype` . Meaning with exact JS syntax

Object.getPrototypeOf(instance)

OR

instance.__proto__

( I can print the above 2 expression to get the prototype of the instance)

When a function is invoked with the new keyword, then the function is known as a constructor function and returns a new instance. In such cases, the value of this refers to a newly created instance.
For example: */

function Person(first, last) {
  this.first = first
  this.last = last

  this.displayName = function() {
    console.log(`Full name : ${this.first} ${this.last}`)
  }
}

// Note in above, I can not use arrow function as I can not create a constructor function with arrow syntax

let person1 = new Person("John", "Reed")
let person2 = new Person("Rohan", "Paul")

person1.displayName() // Full name : John Reed
person2.displayName() // Full name : Rohan Paul

/* In the case of person1.displayName, this refers to a new instance of person1, and in case of person2.displayName(), this refers to person2 (which is a different instance than Person).

I can check what the the prototype object of person1 with below

console.log(person1.prototype) // undefined

Object.getPrototypeOf(person1) // Person {}

person1.__proto__ // Person {}

*/

// NOW AS A SIDE POINT - To pass the value of this from one context to another, use call(), or apply():

// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = { a: "Custom" }

// This property is set on the global object
var a = "Global"

function whatsThis() {
  return this.a // The value of this is dependent on how the function is called
}

whatsThis() // 'Global'
whatsThis.call(obj) // 'Custom'
whatsThis.apply(obj) // 'Custom'

/* Where a function uses the 'this' keyword in its body, its value can be bound to a particular object in the call using the call() or apply() methods which all functions inherit from Function.prototype. */

function add(c, d) {
  return this.a + this.b + c + d
}

var o = { a: 1, b: 3 }

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as
// arguments in the function call
add.call(o, 5, 7) // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]) // 34

// *********************** EXPLANATION - 2 **************************************//
/* MORE TEST CASE - Case-1
 A) Inside a function, the value of this depends on how the function is called.
Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser. And global in node
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

B) By default the execution context for an execution is global which means that if a code is being executed as part of a simple function call then “this” refers to global object.
“window” object is the global object in case of browser and in Node.JS environment, a special object “global” will be the value of “this”.
*/

global.a = 2

function foo() {
  return this.a
}

console.log(foo()) // => 2

// SECOND TEST CASE

var b = 2

function foo1() {
  console.log(this.b)
}

foo1() // => 'undefined'

// Explanation of the above - I got 'undefined' because in VS-Code here, I am in node environment so just declaring var b = 2 will not attach the variable to the 'global' environment of vs-code

/* THIRD TEST CASE - “this” refers to invoker object (parent object).
When an Object’s method is invoked then “this” refers to the object which contains the method being invoked. */

var obj = {
  c: 3,
  foo3: foo3,
}

function foo3() {
  console.log(this.c)
}
obj.foo3() // => 3

// FOURTH TEST CASE
function foo4() {
  console.log(this === global)
}
foo4() // => true

// FIFTH TEST CASE - If strict mode is enabled for any function then the value of “this” will be “undefined” as in strict mode, global object refers to undefined in place of windows object.

function foo5() {
  "use strict"
  console.log(this === global)
}
foo5() // => false