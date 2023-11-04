// Ways to declare a variable
// `var`, `let`, & `const`

let firstName = 'John';
const lastName = 'Doe';
let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: 'Brad',
};
person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);

/*Hoisting is a concept that enables us to extract values of variables
and functions even before initializing/assigning value without getting 
errors and this happens during the 1st phase (memory creation phase) of 
the Execution Context. */
<script>
	// Hoisting
	function codeHoist(){
		a = 10;
		let b = 50;
	}
	codeHoist();

	console.log(a); // 10
	console.log(b); // ReferenceError : b is not defined
</script>


/*The three types of Scope are Global Scope, Function Scope, and Block Scope.
Before ES6 (2015), JavaScript had only Global Scope and Function Scope with the
var keyword. ES6 introduced let and const which allow Block Scope in JavaScript.

1. Global Scope: Variables declared outside any function or curly braces ’{}’ 
have Global Scope, and can be accessed from anywhere within the same Javascript code. 
var, let and const all provide this Scope.*/
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}


/*2. Function Scope: Variables declared within a function can only be used within that 
same function. Outside that function, they are undefined. var, let and const all provide this Scope.*/
function myFunction() {
  var carName = "Volvo";   // Function Scope
}


/* 3. Block Scope: A block is any part of JavaScript code bounded by ’{}‘. Variables declared 
within a block can not be accessed outside that block. This Scope is only provided by the let 
and const keywords. If you declare a variable within a block using the var keyword, it will NOT have Block Scope.*/
{
  let x = 2;
}
// x can NOT be used here


/* 4. Local Scope: Local variables are only recognized inside their functions, variables with 
the same name can be used in different functions. Local variables are created when a function starts, 
and deleted when the function is completed. var, let and const all provide this Scope. */
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

