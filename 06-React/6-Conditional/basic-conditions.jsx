//if Statement:--We can use the if JavaScript operator to decide which component to render.

//We'll use these two components:

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

//Now, we'll create another component that chooses which component to render based on a condition:

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);

Try changing the isGoal attribute to true:

Example:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={true} />);


//Logical && Operator:-Another way to conditionally render a React component is by using the && operator.

//We can embed JavaScript expressions in JSX by using curly braces:

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);

//If cars.length > 0 is equates to true, the expression after && will render.

const cars = [];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);


//Ternary Operator:-Another way to conditionally render elements is by using a ternary operator.

//condition ? true : false

//Return the MadeGoal component if isGoal is true, otherwise return the MissedGoal component:

function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);