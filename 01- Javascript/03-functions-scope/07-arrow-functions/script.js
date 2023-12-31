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
 
/*Arrow functions are cool in ES6. When should you NOT use arrow functions. Name three or more cases.
1. Event Handlers
Let's look at this example, we have a link on our page with an id of myLink. Every time you hover over this link, 
a CSS class highlight is toggled and the text is highlighted.*/

var myLink = document.getElementById("myLink")
myLink.addEventListener("mouseenter", function() {
  this.classList.toggle("highlight")
  console.log(this.classList)
})

//This logs highlight.
//Using ES6 syntax, this works as expected. Now let's try that in ES6 using arrow functions:

const myLink = document.getElementById("myLink")
myLink.addEventListener("mouseenter", () => {
  this.classList.toggle("hightlight")
  console.log(this.classList)
})

//This logs TypeError: Cannot read property 'classList' of undefined.

/*When using an arrow function this is not bound to anything and it just inherits it from the parent scope which
may be window. If we use a regular function, the keyword 'this' will be bound to the element we clicked. Remember,*/

//2: Object Methods
const person = {
  points: 23,
  score: () => {
    return this.points++
  },
}

person.score()

console.log(person.points) // it outputs 23 irrespective of how many times i run the above block of code instead of getting incremented by earlier call of person.score().

/*We have our method called score, and whenever we call person.score, it should add one to our points, which is currently 23.

If we run person.score(); a few times, we should be at 26 or something.

But if I call person.points is still at 23. Why?

Because it’s trying to add points to the window! Remember, when using an arrow function this is not bound to anything and it just inherits it from the parent scope which in this case is the window.
*/
//So let’s do the same thing with a normal function:

const person = {
    points: 23,
    score: function()  {
        this.points++;
    }
}

person.score();

console.log(person.points)