//Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

class Example {
    constructor(private name: string, public age: number) {}
  }



class Point {
  x: number;
  y: number;
 
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}





/*There are just a few differences between class constructor signatures and function signatures:

Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
Constructors can’t have return type annotations - the class instance type is always what’s returned
*/