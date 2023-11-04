// Open 'sources' tab and put a breakpoint at the first() function
/*A call stack is a mechanism for an interpreter (like the JavaScript 
interpreter in a web browser) to keep track of its place in a script 
that calls multiple functions — what function is currently being run 
and what functions are called from within that function */
// First Example

function first() {
  console.log('first...');
}

function second() {
  console.log('second...');
}

function third() {
  console.log('third...');
}

first();
second();
third();

// Second Example

// function first() {
//   console.log('first...');
//   second();
// }

// function second() {
//   console.log('second...');
//   third();
// }

// function third() {
//   console.log('third...');
// }

// first();
