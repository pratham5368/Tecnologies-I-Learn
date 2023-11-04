/*Mapped types in TypeScript are a way to create a new type based on an existing type, where each property of the
existing type is transformed in some way. Mapped types are declared using a combination of the keyof operator and 
a type that maps each property of the existing type to a new property type. */

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  
  let obj = { x: 10, y: 20 };
  let readonlyObj: Readonly<typeof obj> = obj;

//https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content