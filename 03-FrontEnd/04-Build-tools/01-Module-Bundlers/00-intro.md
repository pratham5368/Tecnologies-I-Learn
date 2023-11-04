A module bundler is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser. You may have used tools such as Browserify, Webpack, Rollup or one of many others.

It usually starts with an entry file, and from there it bundles up all of the code needed for that entry file.

![](https://cdn-media-1.freecodecamp.org/images/0*WwDTeWwIRxVPg5jK.png)

There are two main stages of a bundler:

- Dependency resolution
- Packing

Starting from an entry point (such as app.js above), the goal of dependency resolution is to look for all of the dependencies of your code (other pieces of code that it needs to function) and construct a graph (called a dependency graph).
