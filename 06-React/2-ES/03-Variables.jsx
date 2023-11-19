
//var

var x = 5.6;

/*If you use var outside of a function, it belongs to the global scope.

If you use var inside of a function, it belongs to that function.

If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

var has a function scope, not a block scope.*/


//let

let x = 5.6;

/*let is the block scoped version of var, and is limited to the block (or expression) where it is defined.

If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

let has a block scope.*/


//const

const x = 5.6;

/*const is a variable that once it has been created, its value can never change.

const has a block scope.*/

//It does not define a constant value. It defines a constant reference to a value.

/*Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object*/