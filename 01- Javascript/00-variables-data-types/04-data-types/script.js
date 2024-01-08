// String
/*In JavaScript, there are 3 types of quotes.

1. Double quotes: "Hello".
2. Single quotes: 'Hello'.
3. Backticks: `Hello`.
 */
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN


// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// Objects
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// BigInt
/*BigInt is a built-in object that provides a way to represent whole numbers larger than 2^(53) - 1, which
is the largest number JavaScript can reliably represent with the Number primitive and represented by the
 Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.*/
const n = 9007199254740991n;

//Empty values
let car = "";    // The value is "", the typeof is "string"

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3



/*The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check. */

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

console.log(typeof {}) // object
console.log(typeof []) // object
console.log(typeof "") // object
console.log(typeof typeof);  // Would not compile giving me SyntaxError: Unexpected token

// Undefined
console.log(typeof something); //  Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';


// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'
console.log(Symbol("prop")) // Symbol(prop)

// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
console.log(typeof NaN); // => number
typeof '1' === 'string'; // note that a number within a string is still typeof string
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Despite being "Not-A-Number"
typeof Number('1') === 'number';      // Number tries to parse things into numbers
typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number

// Bigint
typeof 42n === 'bigint';
/* BigInt is a built-in object that provides a way to represent whole numbers larger than 2^(53) - 1, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.

The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

A BigInt is created by appending n to the end of an integer or by calling the constructor.
 */

// Function
const func = () => console.log('Its a function');
console.log(typeof func); // function
typeof class C {} === 'function';
typeof Math.sin === 'function';


// Boolean
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()


typeof new Date() === 'object';
typeof /regex/ === 'object'; // See Regular expressions section for historical results



// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';