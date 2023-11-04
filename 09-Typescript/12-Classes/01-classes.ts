/*Classes in TypeScript are a blueprint for creating objects (instances of a class), providing a way to structure objects and 
encapsulate data and behavior. Classes in TypeScript have a similar syntax to classes in other object-oriented programming 
languages, such as Java and C#.

A class in TypeScript is defined using the class keyword, followed by the name of the class. The class definition can include 
fields (also known as properties or attributes), methods (functions), and a constructor.*/

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