
//Everything You Need to Know in One Handy Cheatsheet


// Primitive types are the building blocks of all other types.
//
// TypeScript has 6 primitive types:
//   > boolean: true or false
//   > number: floating point numbers
//   > string: text
//   > void: no value
//   > null: null value
//   > undefined: undefined value
//
let flag: boolean = true;
let num: number = 123;
let str: string = 'Hello, TypeScript!';
let undefValue: undefined = undefined;
let nullValue: null = null;

// Void type example
function logMessage(message: string): void {
  console.log(message);
}





//Object Types
// Here is the list of different object types in TypeScript:
//   > Interface: Describes the properties and types of an object
//   > Class: Describes the properties, types and behaviors of an object
//   > Enum: enumeration of named values
//   > Array: list of values
//   > Tuple: fixed-length array

// Interface
// ----------------------------
// Defines the structure of an object
interface User {
  name: string;
  age: number;
}

// Declare a class implementing the User interface
class Person implements User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}





// Arrays
// ----------------------------
// Similar to other languages, an array is a list of values.
let numbers: number[] = [1, 2, 3, 4, 5];



// Tuple
// ----------------------------
// A tuple is a fixed-length array. It is useful when you know the exact number of elements in an array.
let tuple: [string, number] = ['Hello', 42];



//Enum Types
// Enum is a way of giving more friendly names to sets of numeric values.
// By default, enums begin numbering their members starting at 0.
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Access enum values using enum name
console.log(Direction.Up); // Output: 0
// Access enum values using enum index
console.log(Direction[1]); // Output: "Down"

// Enum with custom values
// ----------------------------
// You can also set the value of each enum member.
enum StatusCode {
  Success = 200,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
}

function logResult(status: StatusCode) {
  if (status === StatusCode.Success) {
    console.log('The request was successful');
  } else {
    console.log('The request failed with status code: ', status);
  }
}

logResult(StatusCode.Success); // Output: "The request was successful"
logResult(StatusCode.NotFound); // Output: "The request failed with status code: 404"

// Enum with string values
// ----------------------------
// Declare an enum with string values
enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
}

// Use an enum value for comparison or other operations
function checkRole(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log('This is an admin user');
  } else {
    console.log('This is not an admin user');
  }
}

checkRole('ADMIN'); // Output: "This is an admin user"
Other Types
// Other types are:
// > any: any type
// > unknown: unknown type
// > never: never type
// > object: object type






// Any
// ----------------------------
// any is a type that allows you to assign any type of value to a variable.
let data: any = 'Hello';
data = 42;
data = true;




// Enforces array input but array values can be of any type.
// Also doesn't restrict any typings on the return
function untypedFunction(inputs: any[]): any {
  // Function implementation
}

// Object
// ----------------------------
// object is a type that represents the non-primitive type i.e. anything that is not number, string, boolean, symbol, null, or undefined.
function logObject(obj: object): void {
  console.log(obj);
}

logObject({ greeting: 'Hello, TypeScript!' });





// Unknown
// ----------------------------
// unknown is a type-safe counterpart of any - meaning that we can assign any value to it, 
// but we can’t access any properties on it, unless we first narrow it to a more specific type.
let unknownValue: unknown = 42;
console.log(unknownValue * 2); // Error: Operator '*' cannot be applied to types 'unknown' and '2'.

// You must enforce a type before using it
if (typeof unknownValue === 'number') {
    console.log(unknownValue * 2); // Output: 84
}




// Never
// ----------------------------
// never is the type that represents the type of values that never occur.
// For example, never is the return type for a function expression or an
//arrow function expression that always throws an exception or one that never returns.
function throwError(message: string): never {
  throw new Error(message);
}




// Type assertion is a way to tell the compiler that you know better than it what the type of a variable is.

// Type assertion with the angle-bracket syntax
let someValue: any = 'This is a string';
let strLength: number = (someValue as string).length;
console.log(strLength); // Output: 16

// as const
// ----------------------------
// The `as const` assertion is used to tell the compiler that the value is a constant.
const colors = ['red', 'green', 'blue'] as const;
// colors is now of type readonly ['red', 'green', 'blue']
colors[0] = 'yellow'; // Error: Cannot assign to '0' because it is a read-only property

// Bypass TypeScript's type checking using `as` with `any`
let obj: unknown = { key: 'value' };
let bypassTypeCheck = (obj as any).key;
Non-Null Assertion Operator
// Non-null assertion operator (!) is used to tell the compiler that the value is not null or undefined.

// Declare a variable with a possible null value
let possibleNullValue: string | null = 'TypeScript';

console.log(possibleNullValue.length); // Error: Object is possibly 'null'
console.log(possibleNullValue!.length); // Output: 10
satisfies keyword
// The `satisfies` keyword is used to check if a type satisfies a given constraint.
// Without satisfies keyword, we would have to use type assertions to check if a type satisfies a given constraint.

type Colors = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  bleu: [0, 0, 255],
  //~~~~ The typo is caught!
} satisfies Record<Colors, string | RGB>;

// Both of these methods are still accessible!
const redComponent = palette.red.at(0);
const greenNormalized = palette.green.toUpperCase();
Type Inference
// TypeScript compiler can infer the type of a variable from its value.

// Declare a variable with an inferred type
// TypeScript compiler will infer the type to be string
let inferredValue = 'TypeScript';
console.log(inferredValue); // Output: "TypeScript"
Type Compatibility
// TypeScript uses structural typing to determine type compatibility. This means that two types are considered compatible if they have the same structure, regardless of their names.
interface Point {
  x: number;
  y: number;
}

let p1: Point = { x: 10, y: 20 };
// Even though p2 has a different name, it is still compatible with p1
let p2: { x: number; y: number } = p1;

console.log(p2.x); // Output: 10
Union Types
// Union types are used to represent a value that can be one of several types.

// Declare a union type
let unionValue: string | number;

unionValue = 'TypeScript';
unionValue = 42;

// it also works with object types
type User = { name: string; age: number };
type Admin = { name: string; age: number; role: string };

let user: User | Admin;
Intersection Types
// Intersection types are used to combine multiple types into one.

type Human = {
  name: string;
  age: number;
};

type Animal = {
  species: string;
  age: number;
};

// Declare an intersection type
let human: Human & Animal = {
  name: 'John',
  species: 'Human',
  age: 30,
};




//Type Aliases
// Type aliases are used to create a new name for a type.

// Declare a type alias
type Name = string;
type Age = number;
type User = { name: Name; age: Age };

const user: User = { name: 'John', age: 30 };
Keyof Operator
// The `keyof` operator is used to get the keys of an object.

interface User {
  name: string;
  age: number;
  location: string;
}

type UserKeys = keyof User; // "name" | "age" | "location"
const key: UserKeys = 'name';
Type Guards using typeof
// typeof type guards are used to narrow down the type of a variable based on its value.

let value: string | number = 'hello';

// Type guard using typeof
if (typeof value === 'string') {
  console.log('value is a string');
} else {
  console.log('value is a number');
}
Type Guards using instanceof
class Bird {
  fly() {
    console.log('flying...');
  }
  layEggs() {
    console.log('laying eggs...');
  }
}

const pet = new Bird();

if (pet instanceof Bird) {
  pet.fly();
} else {
  console.log('pet is not a bird');
}




//Type Guards using Equality
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}



//Type Guards using truthiness
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }

  return "Nobody's here. :(";
}



//Functions
// Function types are used to describe the structure of a function.

// Normal function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// Function type
let divide: (a: number, b: number) => number;

divide = (a, b) => {
  return a / b;
};




//Function Overloads
// Function overloads are used to describe multiple signatures of a function.
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Remember that there is only one implementation of the function.
// Overloads are only used to describe the function signature.
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add('Hello', ' World')); // "Hello World"



//Interfaces
// Interfaces are used to describe the structure of an object.
interface User {
  name: string;
  age: number;
}
const user: User = { name: 'John Doe', age: 30 };

// Types vs Interfaces
// -------------------
// Types are used to create a new named type based on an existing type or to combine existing types into a new type. They can be created using the type keyword. For example:
type Person = { name: string; age: number };
const person: Person = { name: 'John Doe', age: 30 };

// Interfaces, on the other hand, are used to describe the structure of objects and classes. They can be created using the interface keyword. For example:
interface Person {
  name: string;
  age: number;
}
const person: Person = { name: 'John Doe', age: 30 };

// The main difference between types and interfaces is that types can be used to create new types based on existing types, while interfaces can only be used to describe the structure of objects and classes.
// Also, interfaces can be extended using the extends keyword, while types can be extended using the & operator.

// Extending Interfaces
// -------------------
// Create a new interface that inherits from the original interface using the “extends” keyword
interface Shape {
  width: number;
  height: number;
}
interface Square extends Shape {
  sideLength: number;
}

let square: Square = { width: 10, height: 10, sideLength: 10 };

// Hybrid Types
// -------------------
// Hybrid types are types that combine the features of two or more types.
// For example, a hybrid type can be an object that has both properties and methods, or an array that has both numbers and strings.
type Education = { degree: string; school: string; year: number };
type User = { name: string; age: number; email: string; education: Education };
Classes
// Classes are used to create objects that have both data and functionality.
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} is making a sound`);
  }
}

const dog = new Animal('Dog');
dog.makeSound(); // Output: Dog is making a sound

// Constructor Parameters
// -------------------
// Constructor parameters can be declared as public, private, or protected.
class Example {
  // Public (default) properties are accessible from anywhere
  // Private properties are only accessible from within the class
  // Protected properties are only accessible from within the class and its subclasses
  // Note: TypeScript will automatically create properties for constructor parameters that are declared as public or protected.
  constructor(private name: string, public age: number) {}
}

// Constructor Overloads
// -------------------
// Constructor overloads are used to create multiple constructors for a class.
class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // Note: we only have one implementation of the constructor
    // The overloads are just used to define the types of the parameters
  }
}

// Abstract Classes
// -------------------
// Abstract classes are used to create base classes from which other classes can be derived.
// Abstract classes cannot be instantiated directly. You can only create instances of derived classes.
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log('moving...');
  }
}

// Dog inherits from Animal (Inheritance).
// Also known as a subclass or derived class.
class Dog extends Animal {
  makeSound(): void {
    console.log('bark');
  }
}

// Method Overriding
// -------------------
// Mechanism by which a subclass redefines a superclass method.
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  move(distanceInMeters = 5) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}





// Generics
// Generics are used to create reusable components that can work with a variety of types rather than a single one.
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello'); // type of output will be 'string'

// Generic Types
// -------------------
// Generics can also be used with classes, interfaces, object types, and type aliases.
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();

myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// Generic Constraints
// -------------------
// Generic constraints are used to ensure that a type parameter is constrained to a specific type or set of types.
// For example, we can use the `extends` keyword to constrain a type parameter to a type that is derived from a specific type.
interface Measurable {
  length: number;
}

// Here we constrain the type parameter T to be of type Measurable.
function loggingIdentity<T extends Measurable>(arg: T): T {
  // Now we know it has a .length property, so no more error
  console.log(arg.length);

  return arg;
}

// Error, number doesn't have a .length property
loggingIdentity(3);
loggingIdentity({ length: 10, value: 3 }); // OK
Decorators
// Decorators are used to modify the behavior of a class, method, property, or parameter.
// They are a way to add additional functionality to existing code, and they can be used for a wide range of tasks, including logging, performance optimization, and validation.
function log(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  // the @log decorator modifies the behavior of the add method
  // in the Calculator class. The log decorator logs the arguments
  // passed to the method before calling the original method
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);
// Output: Calling add with arguments: 1,2
// Output: 3




// Utility Types
// Utility types are types that provide helpful shortcuts when working with other types.

// Partial
// -------------------
// The Partial type is used to create a new type from an existing type where all properties are made optional.
interface Person {
  name: string;
  age: number;
}

// toUpdate is of type Partial<Person> i.e. it will have some of the properties of Person
function updatePerson(person: Person, toUpdate: Partial<Person>): Person {
  return { ...person, ...toUpdate };
}

// Pick
// -------------------
// The Pick type is used to create a new type from an existing type by picking a set of properties.
interface Product {
  name: string;
  description: string;
  amount: number;
  shippingCountry: string;
  shippingMethod: string;
  imageUrl: string;
  creatorId: string;
  createdAt: string;
  updatedAt: string;
}

// ProductPreview picks only the properties we need
type ProductPreview = Pick<Product, 'name' | 'description' | 'amount' | 'imageUrl'>;

// Omit
// -------------------
// The Omit type is used to create a new type from an existing type by omitting a set of properties.
type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

// Remove the password property from User
type PublicUser = Omit<User, 'password'>;

// Readonly
// -------------------
// The Readonly type is used to create a new type from an existing type where all properties are made readonly.
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
};

// Cannot assign to 'title' because it is a read-only property.
todo.title = 'Hello';

// Record
// -------------------
// You can use it to create a type where key is of specific type and value is of another type.
type Cats = Record<
  string,
  {
    name: string;
    age: number;
  }
>;

// Hash map of cat names to cat info
const catInfo: Cats = {
  mimi: { name: 'Mimi', age: 3 },
  momo: { name: 'Momo', age: 2 },
};

// Exclude
// -------------------
// The Exclude type is used to create a new type by excluding a set of properties from an existing type.
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

// Extract
// -------------------
// The Extract type is used to create a new type by extracting a set of properties from an existing type.
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () => void
type T2 = Extract<string | number | (() => void), Function | string>; // string | (() => void)

// NonNullable
// -------------------
// The NonNullable type is used to create a new type by excluding null and undefined from an existing type.
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]

// Parameters
// -------------------
// The Parameters type is used to create a new type from a function type by extracting its parameter types.
type T0 = Parameters<() => string>; // []
type T1 = Parameters<(s: string) => void>; // [string]
type T2 = Parameters<<T>(arg: T) => T>; // [unknown]
type T3 = Parameters<<T extends U, U extends number[]>() => T>; // []
type T4 = Parameters<typeof Object.create>; // [object | null]

// ReturnType
// -------------------
// The ReturnType type is used to create a new type from a function type by extracting its return type.
type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void
type T2 = ReturnType<<T>() => T>; // {}
type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type T4 = ReturnType<<T>() => T>; // {}
type T5 = ReturnType<typeof Object.create>; // object
type T6 = ReturnType<any>; // any
type T7 = ReturnType<never>; // any
type T8 = ReturnType<string>; // Error
type T9 = ReturnType<Function>; // Error

// InstanceType
// -------------------
// This type constructs a type consisting of the instance type of a constructor function in Type.
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>; // C
type T1 = InstanceType<any>; // any
type T2 = InstanceType<never>; // any
type T3 = InstanceType<string>; // Error
type T4 = InstanceType<Function>; // Error

// Awaited
// -------------------
// Creates a type that is the awaitable counterpart of given type.
type T0 = Awaited<Promise<string>>; // string
type T1 = Awaited<Promise<string> | Promise<number>>; // string | number
type T2 = Awaited<Promise<string | number>>; // string | number
type T3 = Awaited<Promise<Promise<string>>>; // string
type T4 = Awaited<Promise<Promise<string> | Promise<number>>>; // string | number




// Namespaces
// Namespaces are used to organize code into logical groups and to provide a way to handle name collisions.
// myMath.ts — Namespace declaration
namespace MyMath {
  const PI = 3.14;

  export function calculateCircumference(diameter: number): number {
    return diameter * PI;
  }
}

// main.ts — Namespace usage
/// <reference path="myMath.ts" />
const circumference = MyMath.calculateCircumference(10);

// Ambient namespaces
// -------------------
// Ambient modules in TypeScript are used to declare external modules or third-party libraries in a TypeScript program.
// Ambient modules provide type information for modules that have no TypeScript declarations, but are available in the global scope.
// myMath.d.ts — Ambient namespace declaration
declare namespace "my-math" {
  function calculateCircumference(diameter: number): number;
}

// main.ts — Ambient namespace usage
import * as MyMath from './my-math';
const circumference = MyMath.calculateCircumference(10);

// External modules
// ----------------
// External modules allow you to organize and share code across multiple files.
// External modules in TypeScript follow the CommonJS or ES modules standards.

// myModule.ts
export function doSomething() {
    console.log("Doing something...");
}

// main.ts
import { doSomething } from "./myModule";
doSomething(); // Output: "Doing something..."

// Namespace Augmentation
// ----------------------
// Namespace augmentation is a way to extend or modify existing namespaces.
// This is useful when you want to add new functionality to existing namespaces or to fix missing or incorrect declarations in third-party libraries.
// myModule.d.ts
declare namespace MyModule {
  export interface MyModule {
    newFunction(): void;
  }
}

// main.ts
/// <reference path="myModule.d.ts" />
namespace MyModule {
  export class MyModule {
    public newFunction() {
      console.log("I am a new function in MyModule!");
    }
  }
}

const obj = new MyModule.MyModule();
obj.newFunction(); // Output: "I am a new function in MyModule!"

// Global Augmentation
// -------------------
// Global augmentation is a way to add declarations to the global scope.
// This is useful when you want to add new functionality to existing libraries or to augment the built-in types in TypeScript.

// myModule.d.ts
declare namespace NodeJS {
  interface Global {
    myGlobalFunction(): void;
  }
}

// main.ts
global.myGlobalFunction = function () {
  console.log("I am a global function!");
};

myGlobalFunction(); // Output: "I am a global function!"