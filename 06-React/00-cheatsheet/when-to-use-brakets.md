### Why enclose actions returned by Redux action creators in curly braces?

1> [https://medium.com/@leannezhang/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f](https://medium.com/@leannezhang/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f)

Curly braces { } are special syntax in JSX. It is used to evaluate a JavaScript expression during compilation. A JavaScript expression can be a variable, function, an object, or any code that resolves into a value.

#### How parenthesis ( {} ) are used?

Parenthesis are used in an arrow function to return an object.

```js
() => ({ name: 'Amanda' })  // Shorthand to return an object

// The above is equivalent to

() => {
   return { name : 'Amanda' }
}
```

2> [https://stackoverflow.com/a/41461040/1902852](https://stackoverflow.com/a/41461040/1902852)

Functional React Component with an argument in curly braces

```js
const List = ({ items }) => (
  <ul className="list">
    {items.map(item => (
      <ListItem item={item} />
    ))}
  </ul>
);
```

This is called a "destructuring". Actually, you're passing an object as an argument to the function, but the destructuring uses only the named properties of the object.

```js
const destructuring = ({ used }) => console.log(used);

const properties = {
  unused: 1,
  used: 2
};

destructuring(properties); // 2
```

### Because of ES-6 official syntax guide - This is true for all arrow functions, not just redux. See below official guide.

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Advanced_Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Advanced_Syntax)

// Parenthesize the body of function to return an object literal expression:
`params => ({foo: bar})`

The action creators are functions. Function bodies are enclosed in curly braces. Arrow functions allow you to return immediately instead of using the return keyword by omitting the curly braces that normally surround a function body. However, objects are also surrounded by curly braces.

So, in those action creator functions, per ES-6 guide of arrow functions - if you want to return an object you have to use ({..}). If you don't use parentheses and use only the curly ones function sees that like function blocks and can't return an object as intended here.

If you leave out the parenthesis, the arrow function believes it is opening and closing the function, as opposed to returning an object.

```js
// It believes:

const myActionCreator = value => {
  type: "MY_ACTION", value;
};

// Means:

const myActionCreator = function(value) {
  type: "MY_ACTION", value;
};

// Instead of:

const myActionCreator = function(value) {
  return {
    type: "MY_ACTION",
    value
  };
};

// SO THE CORRECT SYNTAX IS -

const myActionCreator = value => ({
  type: "MY_ACTION", value;
});
```

To solve this issue, you put parenthesis around the curly braces. Now the arrow function knows it is returning what is inside the parenthesis, as opposed to opening the function body. And inside the parenthesis -- your object.

## How braces { } are used
Curly braces { } are special syntax in JSX. It is used to evaluate a JavaScript expression during compilation. A JavaScript expression can be a variable, function, an object, or any code that resolves into a value.

Let’s take an example.

Evaluating a JavaScript variable
```jsx
const yellowStyle={color: 'yellow'} 
<Star style={yellowStyle} />
```
which is same as
```jsx
<Star style={{color: 'yellow'}} />
```
Evaluating a function or an event handler
```jsx
class PopUp extends React.Component {
  // es7 way of setting default state
  state = {
    visible: true;
  }
  render() {
    return <Modal onClose={this._handleClose}/>;
  }
  _handleClose = () => {
    this.setState({ visible: false });
  }
}
```
This is not be confused with Class methods in ES6 which also uses curly braces { }
```jsx
class StarsComponent {
  constructor(size) {
    this.size = size;
  }
  // Curly braces are used to define a method body in a class
  get size() {
    return this.size;
  }
  
  // ReactJS library comes with a predefined render() method
  render() {
    return <div>*</div>;
  }
}

const stars = new StarsComponent(5);

console.log(stars.size); // 5
```
## How parenthesis ( ) are used?
Parenthesis are used in an arrow function to return an object.
```jsx
() => ({ name: 'Amanda' })  // Shorthand to return an object
That is equivalent to:

() => {
   return { name : 'Amanda' }
}
```
Parenthesis are used to group multiline of codes on JavaScript return statement so to prevent semicolon inserted automatically in the wrong place.

Let’s talk about some fundamentals.

It is not necessary to add a semicolon in JavaScript. JavaScript engine automatically inserts a semicolon at the first possible opportunity on a line after a return statement. If the JavaScript engine places the semicolon where it should not be, your code won’t compile.

Let’s take a look at the following code.

Ney, this doesn’t compile.
```jsx
class StarsComponent {
  constructor(size) {
    this.size = size;
  }
  
  render() {
    return <div>  // <--JavaScript engine inserts semicolon here
           *
           </div>
  }
}
```
Yay, this works.
```jsx
class StarsComponent {
  constructor(size) {
    this.size = size;
  }
  
  render() {
    return (<div> 
            *
            </div>) // <--JavaScript engine inserts semicolon here
  }
}
```
Why? When you place your opening bracket on the same line as return:

return (
You are telling JavaScript engine that it can’t automatically insert a semicolon until the bracket is closed.
```jsx
return (
    ... 
    ...
); <-- inserts semicolon at the end of parenthesis
For a single line statement, we don’t need to wrap it inside brackets.

class StarsComponent {
  constructor(size) {
    this.size = size;
  }
  
  // Not required to wrap brackets around a single line of code
  render() {
    return <div>*</div>;
  }
}
```