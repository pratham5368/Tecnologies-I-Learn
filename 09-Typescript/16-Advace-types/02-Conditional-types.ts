/*Conditional types in TypeScript are a way to select a type based on a condition. They allow you to write a type that 
dynamically chooses a type based on the types of its inputs. Conditional types are declared using a combination of the 
infer keyword and a type that tests a condition and selects a type based on the result of the test. */

type Extends<T, U> = T extends U ? T : U;

type A = Extends<string, any>; // type A is 'string'
type B = Extends<any, string>; // type B is 'string'

//https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#handbook-content

