/*Template literal types in TypeScript are a way to manipulate string values as types. They allow you to 
create a type based on the result of string manipulation or concatenation. Template literal types are created 
using the backtick (“) character and string manipulation expressions within the type. */

type Name = `Mr. ${string}`;

let name: Name = `Mr. Smith`;  // ok
let name: Name = `Mrs. Smith`;  // error

