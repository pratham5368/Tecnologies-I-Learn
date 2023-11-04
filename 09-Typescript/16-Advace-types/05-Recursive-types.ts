/**Recursive types in TypeScript are a way to define a type that references
 itself. Recursive types are used to define complex data structures, such as trees or 
linked lists, where a value can contain one or more values of the same type. */

type LinkedList<T> = {
    value: T;
    next: LinkedList<T> | null;
  };
  
  let list: LinkedList<number> = {
    value: 1,
    next: { value: 2, next: { value: 3, next: null } },
  };

  