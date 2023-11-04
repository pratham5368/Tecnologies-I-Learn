/*A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array:*/

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];



//Readonly Tuple
//A good practice is to make your tuple readonly.

//Tuples only have strongly defined types for the initial values:

// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);


//Named Tuples
//Named tuples allow us to provide context for our values at each index.

const graph: [x: number, y: number] = [55.2, 41.3];

