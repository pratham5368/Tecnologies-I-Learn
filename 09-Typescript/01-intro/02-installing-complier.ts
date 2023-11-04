/*Installing the Compiler
TypeScript has an official compiler which can be installed through npm.

Learn more about npm, and how to get started here: What is npm?

Within your npm project, run the following command to install the compiler:

npm install typescript --save-dev


Initialize npm in your project directory by running the following command:
npm init

Which should give you an output similar to:

added 1 package, and audited 2 packages in 2s
found 0 vulnerabilities
The compiler is installed in the node_modules directory and can be run with: npx tsc.

npx tsc

Which should give you an output similar to:

Version 4.5.5
tsc: The TypeScript Compiler - Version 4.5.5
Followed by a list of all the Commmon Commands.*/ 




//Configuring the compiler
/*By default the TypeScript compiler will print a help message when run in an empty project.

The compiler can be configured using a tsconfig.json file.

You can have TypeScript create tsconfig.json with the recommended settings with:

npx tsc --init

Which should give you an output similar to:

Created a new tsconfig.json with:
TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig.json
Here is an example of more things you could add to the tsconfig.json file:

{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
}
You can open the file in an editor to add those options. This will configure the TypeScript compiler to transpile TypeScript files located in the src/ directory of your project, into JavaScript files in the build/ directory.



tsconfig.json is a configuration file in TypeScript that specifies the compiler options for building your project. It helps the TypeScript compiler understand the structure of your project and how it should be compiled to JavaScript. Some common options include:

target: the version of JavaScript to compile to.
module: the module system to use.
strict: enables/disables strict type checking.
outDir: the directory to output the compiled JavaScript files.
rootDir: the root directory of the TypeScript files.
include: an array of file/directory patterns to include in the compilation.
exclude: an array of file/directory patterns to exclude from the compilation.
Given below is the sample tsconfig.json file:

{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
  },
  "exclude": ["node_modules"],
  "include": ["src"]
}


tsc is the command line tool for the TypeScript compiler. It compiles TypeScript code into JavaScript code, making it compatible with the browser or any JavaScript runtime environment.

You can use the tsc command to compile your TypeScript code by running the following command in your terminal or command prompt:

tsc
This command will compile all TypeScript files in your project that are specified in your tsconfig.json file. If you want to compile a specific TypeScript file, you can specify the file name after the tsc command, like this:

tsc index.ts
*/

