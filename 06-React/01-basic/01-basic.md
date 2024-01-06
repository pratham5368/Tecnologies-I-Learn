## react 
-  to update the website page the react change in the virtual DOM which is faster than regular DOM 
- it is a component based library which divide pages into components and then make changes.
    
    - class based components 
    - function based components

- Jsx helps to make the user interface   
[visit here](https://egghead.io/courses/the-beginner-s-guide-to-react) or on scrimba.com


File.jsx

{To put comments inside JSX, you use the syntax {/* */}to wrap around the comment text.}


## React Directly in HTML
The quickest way start learning React is to write React directly in your HTML files.
The easiest way to get started with creating HTML files is W3Schools Spaces!
Start by including three scripts, the first two let us write React code in our JavaScripts, and the third,
Babel, allows us to write JSX syntax and ES6 in older browsers.

Include three CDN's in your HTML file:
```
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>

    <div id="mydiv"></div>

    <script type="text/babel">
      function Hello() {
        return <h1>Hello World!</h1>;
      }

      const container = document.getElementById('mydiv');
      const root = ReactDOM.createRoot(container);
      root.render(<Hello />)
    </script>

  </body>
</html>

```




## Setting up a React Environment
If you have npx and Node.js installed, you can create a React application by using create-react-app.
If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always 
uses the latest version of create-react-app.

### To uninstall, run this command:
```
npm uninstall -g 
create-react-app.
``` 


### Run this command to create a React application named my-react-app:
```
npx create-react-app my-react-app
or
npm init react-app my-app
```
The create-react-app will set up everything you need to run a React application.

### Run the React Application :-
Run this command to move to the my-react-app directory:
```
cd my-react-app
```

### Run this command to run the React application my-react-app:
```
npm start
```
A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.





### Modify the React Application
you will find a src folder. Inside the src folder there is a file called App.js, open it and it will look like this:  

myReactApp/src/App.js:
```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```


Try changing the HTML content and save the file.
Notice that the changes are visible immediately after you save the file, you do not have to reload the browser!


Example

Replace all the content inside the``` <div className="App"> ```with a ```<h1>``` element.
```
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}
```
export default App;

Notice that we have removed the imports we do not need (logo.svg and App.css).This will be showing only Hello World! on the page





"Show React" tool to explain the various aspects of React, and how they are displayed in the browser.

the same steps on your computer, start by stripping down the src folder to only contain one file: index.js. You should also remove 
any unnecessary lines of code inside the index.js file to make them look like the example in the "Show React" tool below:


### index.js:rather than using the cdn earlier this is bettr way to use react in .js files
```
import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
```



### Selecting a template
You can now optionally start a new app from a template by appending ```--template [template-name]``` to the creation command.

Templates are always named in the format ```cra-template-[template-name]```, however you only need to provide the ```[template-name]``` to the 

#### creation command.
```
npx create-react-app my-app --template [template-name]
```
You can find a list of available templates by searching for 
```
"cra-template-*" on npm.
```
## Creating a TypeScript app
You can start a new TypeScript app using templates. To use our provided TypeScript template, append --template typescript to 
the creation command.
```
npx create-react-app my-app --template typescript
```
If you already have a project and would like to add TypeScript, see our Adding TypeScript documentation.

## Selecting a package manager
When you create a new app, the CLI will use npm or Yarn to install dependencies, depending on which tool you use to run create-react-app.
 

Run this to use npm
```
npx create-react-app my-app
```
[docs](https://react.dev/learn/start-a-new-react-project)


### To close the react window
```
CTRL+C
```
