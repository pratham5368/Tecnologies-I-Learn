/*Enum
Enums is not a type-level extension of JavaScript. It allow a developer to define a set of named constants. 
Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides 
both numeric and string-based enums.

Here is an example of a numeric enum in TypeScript:*/

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

/*Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented 
from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.*/

