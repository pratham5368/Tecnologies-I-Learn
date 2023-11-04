/*Ambient modules in TypeScript are used to declare external modules or third-party libraries in a TypeScript program. Ambient modules provide type information for modules that have no TypeScript declarations, but are available in the global scope.

Here’s an example of how you can use ambient modules in TypeScript:*/

// myModule.d.ts
declare module 'my-module' {
  export function doSomething(): void;
}

// main.ts
import * as myModule from 'my-module';
myModule.doSomething();
//In this example, we declare an ambient module “my-module” in the myModule.d.ts file