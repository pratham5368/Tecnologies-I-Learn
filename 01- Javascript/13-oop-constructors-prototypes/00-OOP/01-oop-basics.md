Two principles with OOP in JS are:
- Object Creation Pattern (Encapsulation)

- Object Reuse Pattern (Inheritance)

### 1- Ubiquitous Object literal:
```js
var myOoj = {
	name: "Nikki",
	city: "New Delhi",
	loves: "so many"
};
```
### 2- Prototype Pattern
```js
function myFun() {}
myFun.prototype.name = "Nikki";
myFun.prototype.city = "New Delhi";
var myFun1 = new myFun();
console.log(myFun1.name); //Nikki
```
### 3- Constructor Pattern:
```js
function myFun(name, city, loves) {
	this.name = name;
	this.city = city;
	this.loves = loves;
}
var myFun1 = new myFun("Nikki", "New Delhi", "so much things");
console.log(myFun1.name); //Nikkia
```
### Constructor Functions
These functions are the most conventional way to create objects that use functionality from each other using prototypal inheritance.
```js
function Person(name) {
	// 1
	this.name = name;
	this.greet = function() {
		console.log("Hello, I'm " + this.name);
	};
}
//2
var person = new Person("Jack Johnson");

//3
console.log(Object.getPrototypeOf(person)); // Person {}
```