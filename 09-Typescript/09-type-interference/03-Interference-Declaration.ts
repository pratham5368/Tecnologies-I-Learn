/*An interface in TypeScript is a blueprint for creating objects with specific structure. An interface defines a set of properties,
 methods, and events that a class or object must implement. The interface is a contract between objects and classes and can be used 
 to enforce a specific structure for objects in your code.*/


interface Person {
  firstName: string;
  lastName: string;
  age?: number;

  getFullName(): string;
}