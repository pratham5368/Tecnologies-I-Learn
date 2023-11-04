/*Functions are a core building block in TypeScript. Functions allow you to wrap a piece of code and reuse it multiple times. 
Functions in TypeScript can be either declared using function declaration syntax or function expression syntax.

Function Declaration Syntax:*/

function name(param1: type1, param2: type2, ...): returnType {
  return value;
}

//Function Expression Syntax:

let name = function(param1: type1, param2: type2, ...): returnType {
  return value;
};

/*Typing Functions
In TypeScript, functions can be typed in a few different ways to indicate the input parameters and return type of the function.

Function declaration with types:*/

function add(a: number, b: number): number {
  return a + b;
}

//Arrow function with types:

const multiply = (a: number, b: number): number => {
  return a * b;
};


//Function type:

let divide: (a: number, b: number) => number;

divide = (a, b) => {
  return a / b;
};
