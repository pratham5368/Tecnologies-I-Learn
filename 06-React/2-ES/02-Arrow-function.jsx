
//Arrow functions allow us to write shorter function syntax:
//Before:
hello = function() {
  return "Hello World!";
}


//After With Arrow Function:
hello = () => {
  return "Hello World!";
}

/*It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the 
return keyword:*/

//Arrow Functions Return Value by Default:

hello = () => "Hello World!";

//Note: This works only if the function has only one statement.

//If you have parameters, you pass them inside the parentheses:-Arrow Function With Parameters:
hello = (val) => "Hello " + val;


//In fact, if you have only one parameter, you can skip the parentheses as well:--Arrow Function Without Parentheses:

hello = val => "Hello " + val;



//The handling of (this) is also different in arrow functions compared to regular functions
/*In regular functions the this keyword represented the object that called the function, which could be the window, the document, 
a button or whatever.
With arrow functions, the this keyword always represents the object that defined the arrow function.*/

//Both examples call a method twice, first when the page loads, and once again when the user clicks a button.


/*The result shows that the first example returns two different objects (window and button), and the second example returns the
Header object twice.*/


//With a regular function, this represents the object that called the function:

class Header {
  constructor() {
    this.color = "Red";
  }

//Regular function:
  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
 


//With an arrow function, this represents the Header object no matter who called the function:

class Header {
  constructor() {
    this.color = "Red";
  }

//Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);