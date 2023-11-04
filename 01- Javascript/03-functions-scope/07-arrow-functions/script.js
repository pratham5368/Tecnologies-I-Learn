//  Normal function declaration:-Arrow Function is a new way of creating functions with the ’=>’ operator with a shorter syntax.
// function add(a, b) {
//   return a + b;
// }
//Before Arrow:
hello = function() {
  return "Hello World!";
}
//With Arrow Function:
hello = () => {
  return "Hello World!";
}

// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = (a) => a * 2;

// Returning an object
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());
