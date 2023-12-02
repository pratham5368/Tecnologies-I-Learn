## 1. What are the major features of React?
The major features of React are:

- Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code.
- It uses Virtual DOM instead of Real DOM considering that Real DOM manipulations are expensive.
- Supports server-side rendering which is useful for Search Engine Optimizations(SEO).
- Follows Unidirectional or one-way data flow or data binding.
- Uses reusable/composable UI components to develop the view.

## 2. What is JSX?
JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the React.createElement(type, props, ...children) function, giving us expressiveness of JavaScript along with HTML like template syntax.

In the example below, the text inside ```<h1>``` tag is returned as JavaScript function to the render function.
```
export default function App() {
  return (
      <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>
  );
}
```
If you don't use JSX syntax then the respective JavaScript code should be written as below,
```
import { createElement } from 'react';

export default function App() {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello, this is a JSX Code!'
  );
}
```

## 3. How to create components in React?
Components are the building blocks of creating User Interfaces(UI) in React. There are two possible ways to create a component.

- Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the first parameter and return React elements to render the output:
```
function Greeting({ message }) {
  return <h1>{`Hello, ${message}`}</h1>;
}
```
- Class Components: You can also use ES6 class to define a component. The above function component can be written as a class component:
```
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>;
  }
}
```

But even there are two reasons to use Class components over Function components.

If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.
In older versions, If the component needs state or lifecycle methods then you need to use class component.
## 4. What is state in React?
State of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.

![](https://github.com/sudheerj/reactjs-interview-questions/raw/master/images/state.jpg)

```
import React, { useState } from "react";

function User() {
  const [message, setMessage] = useState("Welcome to React world");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
```
State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.
## 5. What are props in React?
Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality:

- Pass custom data to your component.
- Trigger state changes.
- Use via this.props.reactProp inside component's render() method.

For example, let us create an element with reactProp property:
```
<Element reactProp={"1"} />
```
This reactProp (or whatever you came up with) attribute name then becomes a property attached to React's native props object which originally already exists on all components created using React library.
```
props.reactProp
```
For example, the usage of props in function component looks like below:
```
import React from "react";
import ReactDOM from "react-dom";

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="John" age="30" />
      <ChildComponent name="Mary" age="25" />
    </div>
  );
};
```
The properties from props object can be accessed directly using destructing feature from ES6 (ECMAScript 2015). The above child component can be simplified like below.
```
  const ChildComponent = ({name, age}) => {
      return (
        <div>
          <p>{name}</p>
          <p>{age}</p>
        </div>
      );
    };
```
## 6. 