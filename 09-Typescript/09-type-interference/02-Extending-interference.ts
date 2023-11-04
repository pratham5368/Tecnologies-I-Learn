/*In TypeScript, you can extend an interface by creating a new interface that inherits from the original interface 
using the “extends” keyword. The new interface can include additional properties, methods, or redefine the members of the original interface.*/

interface Shape {
  width: number;
  height: number;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  width: 10,
  height: 10,
  sideLength: 10,
};
