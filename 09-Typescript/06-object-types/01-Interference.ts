//Interface:-TypeScript allows you to specifically type an object using an interface that can be reused by multiple objects.

/*interface Person {
  name: string;
  age: number;
}*/

function greet(person: Person) {
  return 'Hello ' + person.name;
}