//The keyof operator in TypeScript is used to get the union of keys from an object type. Here’s an example of how it can be used:

interface User {
  name: string;
  age: number;
  location: string;
}

type UserKeys = keyof User; // "name" | "age" | "location"
const key: UserKeys = 'name';