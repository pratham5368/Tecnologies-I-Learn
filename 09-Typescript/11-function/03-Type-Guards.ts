/*typeof Operator
The typeof operator is used to check the type of a variable. It returns a string value representing the type of the variable.
*/
let value: string | number = 'hello';

if (typeof value === 'string') {
  console.log('value is a string');
} else {
  console.log('value is a number');
}