
//ES6 introduced classes.

/*A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties 
are assigned inside a constructor() method.*/

//A simple class constructor:

class Car {
  constructor(name) {
    this.brand = name;
  }
}


//Create an object called "mycar" based on the Car class:

class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Ford");


//Note: The constructor function is called automatically when the object is initialized.



//Method in Classes
//Create a method named "present":

class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

const mycar = new Car("Ford");
mycar.present();
    
//you call the method by referring to the object's method name followed by parentheses (parameters would go inside the parentheses).


//Class Inheritance
//A class created with a class inheritance inherits all the methods from another class:

//Create a class named "Model" which will inherit the methods from the "Car" class:

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
const mycar = new Model("Ford", "Mustang");
mycar.show();
document.write(mycar.brand);// similar to javascript it will print the letter 

//The super() method refers to the parent class.

/*By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's 
properties and methods.*/



/*to compose these components together, you could create an App parent component which renders each of these three components as 
children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. 
For example, in the render method you could write:*/

return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
/*When React encounters a custom HTML tag that references another component (a component name wrapped in < /> like in this example),
it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the
App component and the Navbar, Dashboard, and Footer*/