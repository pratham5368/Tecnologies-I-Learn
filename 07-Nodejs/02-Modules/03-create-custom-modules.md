Modules are the collection of JavaScript codes in a separate logical file that can be used in external applications on the basis of their related functionality. Modules are popular as they are easy to use and reusable. To create a module in Node.js, you will need the exports keyword. This keyword tells Node.js that the function can be used outside the module.

Syntax:
```
exports.function_name = function(arg1, arg2, ....argN) {
    // function body
};  
```
```
// File name: calc.js

exports.add = function (x, y) {
	return x + y;
};

exports.sub = function (x, y) {
	return x - y;
};

exports.mult = function (x, y) {
	return x * y;
};

exports.div = function (x, y) {
	return x / y;
};

```