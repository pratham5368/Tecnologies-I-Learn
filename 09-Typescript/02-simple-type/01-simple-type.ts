/*There are three main primitives in JavaScript and TypeScript.

boolean - true or false values
number - whole numbers and floating point values
string - text values like "TypeScript Rocks"
There are also 2 less common primitives used in later versions of Javascript and TypeScript.

bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
symbol are used to create a globally unique identifier.*/ 



/*When creating a variable, there are two main ways TypeScript assigns a type:

Explicit
Implicit
In both examples below firstName is of type string
Explicit - writing out the type:*/

let firstName: string = "Dylan";

/*Implicit - TypeScript will "guess" the type, based on the assigned value:
*/
let firstName = "Dylan";




//Error In Type Assignment:-TypeScript will throw an error if data types do not match.
let firstName: string = "Dylan"; // type string
firstName = 33; // attempts to re-assign the value to a different type
//Implicit type assignment would have made firstName less noticeable as a string, but both will throw an error:
let firstName = "Dylan"; // inferred to type string
firstName = 33; // attempts to re-assign the value to a different type
