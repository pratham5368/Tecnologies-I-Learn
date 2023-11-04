/*The arguments object is an Array-like object accessible inside functions that contains the values of 
the arguments passed to that function, available within all non-arrow functions. You can refer to a 
function’s arguments inside that function by using its arguments object. It has entries for each argument 
the function was called with, with the first entry’s index at 0. But, in modern code, rest parameters should 
be preferred. */

function func1(a, b, c) {
    console.log(arguments[0]);
    // Expected output: 1
  
    console.log(arguments[1]);
    // Expected output: 2
  
    console.log(arguments[2]);
    // Expected output: 3
  }
  
  func1(1, 2, 3);
  