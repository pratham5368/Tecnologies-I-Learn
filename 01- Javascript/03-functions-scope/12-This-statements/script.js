/*In JavaScript, the this keyword is a little different compared to other languages. It refers to an object, but it depends on how or where it is being invoked. It also has some differences between strict mode and non-strict mode.

In an object method, this refers to the object
Alone, this refers to the global object
In a function, this refers to the global object
In a function, in strict mode, this is undefined
In an event, this refers to the element that received the event
Methods like call(), apply(), and bind() can refer this to any object */



fullName : function() {
    return this.firstName + " " + this.lastName;
  }



const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}


//this in a Function (Default)
/*In a function, the global object is the default binding for this.

In a browser window the global object is [object Window]:
*/

function myFunction() {
  return this;
}


//this Alone
/*When used alone, this refers to the global object.

Because this is running in the global scope.

In a browser window the global object is [object Window]:
*/

let x = this;


//this in Event Handlers
//In HTML event handlers, this refers to the HTML element that received the event:


<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>


