When an object’s method is invoked, then this refers to the object which contains the method being invoked.
```js
function foo() {
  console.log("Simple function call")
  console.log(this === global)
}

let user = {
  count: 10,
  foo: foo,
  foo1: function() {
    console.log(this === global)
  },
}

user.foo() // Prints false because now “this” refers to user object instead of global object.
let fun1 = user.foo1
fun1() // Prints true as this method is invoked as a simple function.
user.foo1() // Prints false on console as foo1 is invoked as a object’s method, and the 'this' refers to the containing object NOT 'window' or 'global'
```

foo()

Then it prints 'true' - Because now the simple function foo is in the global execution context and so the 'this' refers to global
```js
function foo() {
  "use strict"
  console.log("Simple function call")
  console.log(this === global)
}
```