## Learn the Pre-requisites
Before you start learning React Native, you should have a basic knowledge of JavaScript and React. You don’t need to fully master these topics, but you should be familiar with them. Learn the basics of JavaScript (e.g. topics marked for beginners in JavaScript Roadmap and continue with React Native. I have heard good things about official React Native documentation, so you can start there and pick up the relevant topics wherever needed.)

## React Basics
React Native uses React, a JavaScript library for building user interfaces. You should have a basic understanding of React concepts before proceeding with React Native. Some of the concepts you should be familiar with include:

## React Basics
React Native uses React, a JavaScript library for building user interfaces. You should have a basic understanding of React concepts before proceeding with React Native. Some of the concepts you should be familiar with include:

- [Components](https://react.dev/learn/your-first-component) and [Props](https://react.dev/learn/passing-props-to-a-component)
- [Component State](https://react.dev/learn/managing-state)
- [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

Once you have a basic understanding of React, start with React Native.

- [React Native Basics](https://reactnative.dev/docs/getting-started)

## State
State is an object that holds data managed within a React component. It allows components to become dynamic and interactive by keeping track of its data changes. When the state of a component changes, React re-renders the component and updates the DOM accordingly.

In a functional component, utilize the useState hook to initialize state:
```
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('Hello, World!');
  //...
}
```
### Accessing State
In functional components, access the state by utilizing the first variable from the useState hook:
```
function App() {
  const [text, setText] = useState('Hello, World!');
  return <div>{text}</div>;
}
```
### Updating State
Utilize the second variable returned from the useState hook (which is a function) to update the state:
```
function App() {
  const [text, setText] = useState('Hello, World!');

  function handleClick() {
    setText('State updated!');
  }

  return (
    <div>
      <div>{text}</div>
      <button onClick={handleClick}>Update State</button>
    </div>
  );
}
```

## JSX
JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It was developed to be used with React and has become an integral part of working with React.

### Basic Syntax
JSX looks similar to HTML, and you can mix it with JavaScript expressions within curly braces {}.

Here’s an example with a simple JSX element:
```
const element = <h1>Hello, world!</h1>;
```
### JavaScript Expressions in JSX
You can embed JavaScript expressions within JSX by wrapping them in curly braces {}.

Here’s an example:
```
const name = 'John Doe';
const element = <h1>Hello, {name}!</h1>;
```
### Attributes in JSX
You can use JSX to define attributes for your elements, similar to how you would in HTML. However, some attribute names in JSX are slightly different from their HTML counterparts due to conflicts with reserved JavaScript keywords (for example, className instead of class).

Here’s an example:
```
const className = 'my-class';
const element = <h1 className={className}>Hello, world!</h1>;
```
### Children in JSX
You can nest JSX elements by enclosing them within the opening and closing tags of a parent element.

Here’s an example:
```
const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>This is an example of nested JSX elements.</p>
  </div>
);
```
### JSX Represents Objects
Under the hood, JSX represents JavaScript objects called “React elements”. When you use JSX, your JavaScript code gets automatically transformed into these React elements.

Here’s an example of a JSX element and its corresponding JavaScript object:
```
const elementJSX = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const elementJSObject = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
Both elementJSX and elementJSObject represent the same thing and will produce the same result when rendered.

[docs](https://react.dev/learn/writing-markup-with-jsx)
