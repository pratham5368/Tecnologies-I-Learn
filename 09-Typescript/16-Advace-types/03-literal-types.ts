/*Literal types in TypeScript are a way to specify a value exactly, rather than just a type. 
Literal types can be used to enforce that a value must be of a specific type and a specific value.
Literal types are created by using a literal value, such as a string, number, or boolean, as a type. */

type Age = 42;

let age: Age = 42; // ok
let age: Age = 43; // error

//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types