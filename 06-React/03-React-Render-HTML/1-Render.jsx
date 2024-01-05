
//React renders HTML to the web page by using a function called createRoot() and its method render().
//The createRoot() function takes one argument, an HTML element.
//The purpose of the function is to define the HTML element where a React component should be displayed.

/*What's ReactDOM?
ReactDOM offers a simple method to render React elements to the DOM which looks like this: ReactDOM.render(componentToRender, targetNode),
where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want
to render the component to.

Keep in mind that ReactDOM.render() must be called after the JSX element statements.*/

//The render() method is then called to define the React component that should be rendered.

//There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.

//Display a paragraph inside an element with the id of "root":

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);

//The result is displayed in the <div id="root"> element:
<body>
  <div id="root"></div>
</body>

//Note that the element id does not have to be called "root", but this is the standard convention.

//The HTML code in this tutorial uses JSX which allows you to write HTML tags inside the JavaScript code:

//Create a variable that contains HTML code and display it in the "root" node:

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myelement);



//The root node is the HTML element where you want to display the result.

/*It is like a container for content managed by React.
It does NOT have to be a <div> element and it does NOT have to have the id='root':*/

<body>

  <header id="sandy"></header>

</body>

//Display the result in the <header id="sandy"> element:

const container = document.getElementById('sandy');
const root = ReactDOM.createRoot(container);
root.render(<p>Hallo</p>);

/**
 * eact follows a declarative approach to rendering components, which means that developers specify what a component should look like, and React takes care of rendering the component to the screen. This is in contrast to an imperative approach, where developers would write code to manually manipulate the DOM (Document Object Model) to update the UI.

The virtual DOM (VDOM) is an important aspect of how React works. It is a lightweight in-memory representation of the DOM (Document Object Model), and it is used to optimize the rendering of components in a React application.

Components are written as JavaScript classes or functions that define a render method. The render method returns a description of what the component should look like, using JSX syntax.
When a component is rendered, React creates a virtual DOM (VDOM) representation of the component. The VDOM is a lightweight in-memory representation of the DOM, and it is used to optimize the rendering of components.
React compares the VDOM representation of the component with the previous VDOM representation (if it exists). If there are differences between the two VDOMs, React calculates the minimum number of DOM updates needed to bring the actual DOM into line with the new VDOM.
React updates the actual DOM with the minimum number of DOM updates needed to reflect the changes in the VDOM.
 */