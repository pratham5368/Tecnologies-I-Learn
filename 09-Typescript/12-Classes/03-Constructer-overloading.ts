//In TypeScript, you can achieve constructor overloading by using multiple constructor definitions with different parameter lists in a single class. 

class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}