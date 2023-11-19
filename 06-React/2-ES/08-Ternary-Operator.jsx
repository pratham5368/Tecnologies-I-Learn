
//The ternary operator is a simplified conditional operator like if / else.

//Syntax: condition ? <expressHere if true> : <Here if false>

//Before:

if (authenticated) {
  renderApp();
} else {
  renderLogin();
}

//Here is the same example using a ternary 

authenticated ? renderApp() : renderLogin();