## CommonJS vs ESM
CommonJS and ES (EcmaScript) are module systems used in Node. CommonJS is the default module system. However, a new module system was recently added to NodeJS - ES modules. CommonJS modules use the require() statement for module imports and module.exports for module exports while it’s import and export for ES.


[more](https://reflectoring.io/nodejs-modules-imports/)

### Comparing CommonJS modules and ES modules syntax
By default, Node.js treats JavaScript code as CommonJS modules. Because of this, CommonJS modules are characterized by the require() statement for module imports and module.exports for module exports.

For example, this is a CommonJS module that exports two functions:
```
module.exports.add = function(a, b) {
        return a + b;
} 

module.exports.subtract = function(a, b) {
        return a - b;
}
``` 
We can also import the public functions into another Node.js script using require(), just as we do here:
```
const {add, subtract} = require('./util')

console.log(add(5, 5)) // 10
console.log(subtract(10, 5)) // 5
```
If you are looking for a more in-depth tutorial on CommonJS modules, check this out.

On the other hand, library authors can also simply enable ES modules in a Node.js package by changing the file extensions from .js to .mjs.

For example, here’s a simple ES module (with an .mjs extension) exporting two functions for public use:
```
// util.mjs

export function add(a, b) {
        return a + b;
}

export function subtract(a, b) {
        return a - b;
}
```
We can then import both functions using the import statement:
```
// app.mjs

import {add, subtract} from './util.mjs'

console.log(add(5, 5)) // 10
console.log(subtract(10, 5)) // 5
```
Another way to enable ES modules in your project can be done by adding a "type: module" field inside the nearest package.json file (the same folder as the package you’re making):
```
{
  "name": "my-library",
  "version": "1.0.0",
  "type": "module",
  // ...
}
```
With that inclusion, Node.js treats all files inside that package as ES modules, and you won’t have to change the file to .mjs extension. You can learn more about ES modules here.

Alternatively, you can install and set up a transpiler like Babel to compile your ES module syntax down to CommonJS syntax. Projects like React and Vue support ES modules because they use Babel under the hood to compile the code.``