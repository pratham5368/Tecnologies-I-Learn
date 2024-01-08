//Example -1 super simple example of custom callback. done() is a callback which I am definining seperately.
done = () => {
    console.log("Done from Callback");
  };
  
  printNum = (num, callback) => {
    for (let i = 0; i <= num; i++) {
      console.log(i);
    }
    if (callback && typeof callback === "function") {
      callback();
    }
  };
  
  printNum(5, done);
  
  // Example-2, where, I will pass the callback after invoking the function, without defining the callback separately
  mySandwitch = (a, b, callback) => {
    console.log(`Started eating my sandwitch.\n\nIt has: ${a} and ${b}`);
    callback();
  };
  
  /*mySandwitch('cheese', 'ham', () => {
      console.log('Finished eating my sandwitch');
  })*/
  
  // To make the callback optional, we can just do this:
  mySandwitchOptional = (a, b, callback) => {
    console.log(`Started eating my sandwitch.\n\nIt has: ${a} and ${b}`);
  
    if (callback && typeof callback === "function") {
      callback();
    }
  };
  
  /* Write a custom callback function which returns the addition of its 2 arguments through a callback. That, the function would take 2 arguments and the third agument would be a callback function. And the final return output of that function would be with callback. - Was asked in Techolution interview */
  
  addTwoArgs = (a, b, callback) => {
    if (callback && typeof callback === "function") {
      return callback();
    }
  };
  
  let result = addTwoArgs(2, 5, () => {
    return 2 + 5;
  });
  
  console.log(result);




/* Example - 1 Define our function with the callback argument that generates a random number between arg1 and arg2 */

printRandom = (max, min, callback) => {

	let randNum = Math.floor(Math.random() * (max - min) + min)	;

	if (callback && typeof(callback) === 'function' ) {
		callback(randNum);
	}
}

printRandom(15, 5, (num) => {
	console.log(num);
})

// Example - 2, calculate Area and Perimeter of a rectangle by passing a calculation function with a callback
// First write the callbacks for area and peremeter
calculateArea = (h, w) => h * w;

calculatePeremeter = (h, w) => 2 * (h + w);


rectangleCalculation = (h, w, callback) => {
	if (callback && typeof(callback) === 'function') {
		console.log(`For Input Heights and Widths ${h} and ${w} respectively`);
		console.log(`The result is ${callback(h, w)}`);
	}
}

rectangleCalculation(5, 7, calculateArea);
rectangleCalculation(5, 7, calculatePeremeter);
