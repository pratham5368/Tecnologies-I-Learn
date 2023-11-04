/*The console is a REPL environment.

REPL stands for Read-Evaluate-Print-Loop. It simply refers to any program that continuously 
asks the user to input stuff, then evaluates it and finally prints the result out on the screen.
*/

// Log number
console.log(100);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Brad', email: 'brad@gmail.com' });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);

//Just to give an example at this point, consider the Document.prototype object. Go on and type this in the console, and notice what gets returned.



//The most popular implementation of JavaScript is the V8 engine, developed by Google
/*
In addition to this, we have other libraries such as:

Svelte — "a radical new approach to building user interfaces."
React, built by Facebook, to help us create interactive user interfaces.
D3.js for data visualization.
anime.js for complex animations.
Chart.js for creating graph and chart diagrams.
Swiper for creating highly-interactive mobile touch sliders.
Lozad.js for lazily loading resources.
Modernizr for detecting and polyfilling features across browsers.
MathJax for mathematical notation.
Mocha for unit testing JavaScript code.
...and so on and so forth.
*/ 

//Dialog boxes
//1.An alert dialog is displayed by calling the alert() function.
alert('Hello World!')
//2.A confirmation dialog is used to obtain confirmation from the end user about a given action. It's represented by the confirm() function.
confirm('This is a confirmation box')
//3.A prompt dialog is used to obtain input from the user. And it's given by the function prompt()
prompt('What is your age?')