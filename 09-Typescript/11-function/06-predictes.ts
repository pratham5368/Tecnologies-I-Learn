/*Type predicates are functions that return a boolean value. They are used to narrow the type of a variable. 
Type predicates are used in type guards.*/

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function example(x: unknown) {
  if (isString(x)) {
    // We can now call any 'string' method on 'x'.
    x.toUpperCase();
  } else {
    console.log(x);
  }
}