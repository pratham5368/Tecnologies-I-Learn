
/*Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items 
contained in these.Destructuring makes it easy to extract only what is needed.*/

//Destructing Arrays:-Here is the old way of assigning array items to a variable:


//Before:

const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

//Here is the new way of assigning array items to a variable:With destructuring:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;


//When destructuring arrays, the order that variables are declared is important.
//If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;


//Destructuring comes in handy when a function returns an array:

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);



//Destructuring Objects:-Here is the old way of using an object inside a function:
//Before:

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}


//Here is the new way of using an object inside a function:--With destructuring:

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

//Notice that the object properties do not have to be declared in a specific order.


const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}