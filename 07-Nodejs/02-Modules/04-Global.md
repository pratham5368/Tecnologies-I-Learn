## global keyword
In browsers, the top-level scope is the global scope. This means that within the browser var something will define a new global variable. In Node.js this is different. The top-level scope is not the global scope; var something inside a Node.js module will be local to that module.
