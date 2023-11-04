//Type Inference
/*Type inference in TypeScript refers to the process of automatically determining the type of a variable based on the value assigned to it. 
This allows you to write code that is more concise and easier to understand, as the TypeScript compiler can deduce the types of variables 
without you having to explicitly specify them.*/


let name = 'John Doe';


/*types are used to create a new named type based on an existing type or to combine existing types into a new type. They can be created using the type keyword.*/

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'John Doe',
  age: 30,
};


/*Interfaces, on the other hand, are used to describe the structure of objects and classes. They can be created using the interface keyword.*/

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'John Doe',
  age: 30,
};