## Big O Notation
Big O Notation describes, how well an algorithm scales with the input size. It is used to describe the worst case scenario of an algorithm. It is used to compare algorithms and to determine which algorithm is better.

### In Big O, there are six major types of complexities (time and space):

- Constant: O(1)
- Linear time: O(n)
- Logarithmic time: O(n log n)
- Quadratic time: O(n^2)
- Exponential time: O(2^n)
- Factorial time: O(n!)

### The next question that comes to mind is how you know which algorithm has which time complexity, given that this is meant to be a cheatsheet 😂.

- When your calculation is not dependent on the input size, it is a constant time complexity (O(1)).
- When the input size is reduced by half, maybe when iterating, handling recursion, or whatsoever, it is a logarithmic time complexity (O(log n)).
- When you have a single loop within your algorithm, it is linear time complexity (O(n)).
- When you have nested loops within your algorithm, meaning a loop in a loop, it is quadratic time complexity (O(n^2)).
- When the growth rate doubles with each addition to the input, it is exponential time complexity (O2^n).

### Constant Time: O(1)
When your algorithm is not dependent on the input size n, it is said to have a constant time complexity with order O(1). This means that the run time will always be the same regardless of the input size.

For example, if an algorithm is to return the first element of an array. Even if the array has 1 million elements, the time complexity will be constant if you use this approach:
```
const firstElement = (array) => {
  return array[0];
};

let score = [12, 55, 67, 94, 22];
console.log(firstElement(score)); // 12
```
The function above will require only one execution step, meaning the function is in constant time with time complexity O(1).

But as I said earlier, there are various ways to achieve a solution in programming. Another programmer might decide to first loop through the array before returning the first element:
```
const firstElement = (array) => {
  for (let i = 0; i < array.length; i++) {
    return array[0];
  }
};

let score = [12, 55, 67, 94, 22];
console.log(firstElement(score)); // 12
```
This is just an example – likely nobody would do this. But if there is a loop, this is no longer constant time but now linear time with the time complexity O(n).

### The Time complexity or Big O notations for some popular algorithms are listed below:

- Binary Search: O(log n)
- Linear Search: O(n)
- Quick Sort: O(n * log n)
- Selection Sort: O(n * n)
- Travelling salesperson : O(n!)

### Linear Time: O(n)
You get linear time complexity when the running time of an algorithm increases linearly with the size of the input. This means that when a function has an iteration that iterates over an input size of n, it is said to have a time complexity of order O(n).

For example, if an algorithm is to return the factorial of any inputted number. This means if you input 5 then you are to loop through and multiply 1 by 2 by 3 by 4 and by 5 and then output 120:
```
const calcFactorial = (n) => {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

console.log(calcFactorial(5)); // 120
```
The fact that the runtime depends on the input size means that the time complexity is linear with the order O(n).

### Logarithm Time: O(log n)
This is similar to linear time complexity, except that the runtime does not depend on the input size but rather on half the input size. When the input size decreases on each iteration or step, an algorithm is said to have logarithmic time complexity.

This method is the second best because your program runs for half the input size rather than the full size. After all, the input size decreases with each iteration.

A great example is binary search functions, which divide your sorted array based on the target value.

For example, suppose you use a binary search algorithm to find the index of a given element in an array:
```
const binarySearch = (array, target) => {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    if (array[middleIndex] === target) {
      return middleIndex;
    }

    if (array[middleIndex] > target) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
  }
  return -1;
};

let score = [12, 22, 45, 67, 96];
console.log(binarySearch(score, 96));
```
In the code above, since it is a binary search, you first get the middle index of your array, compare it to the target value, and return the middle index if it is equal. Otherwise, you must check if the target value is greater or less than the middle value to adjust the first and last index, reducing the input size by half.

Because for every iteration the input size reduces by half, the time complexity is logarithmic with the order O(log n).

### Quadratic Time: O(n^2)
When you perform nested iteration, meaning having a loop in a loop, the time complexity is quadratic, which is horrible.

A perfect way to explain this would be if you have an array with n items. The outer loop will run n times, and the inner loop will run n times for each iteration of the outer loop, which will give total n^2 prints. If the array has ten items, ten will print 100 times (10^2).

Here is an example by Jared Nielsen, where you compare each element in an array to output the index when two elements are similar:
```
const matchElements = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        return `Match found at ${i} and ${j}`;
      }
    }
  }
  return "No matches found 😞";
};

const fruit = ["🍓", "🍐", "🍊", "🍌", "🍍", "🍑", "🍎", "🍈", "🍊", "🍇"];
console.log(matchElements(fruit)); // "Match found at 2 and 8"
```
In the example above, there is a nested loop, meaning that the time complexity is quadratic with the order O(n^2).
### Exponential Time: O(2^n)
You get exponential time complexity when the growth rate doubles with each addition to the input (n), often iterating through all subsets of the input elements. Any time an input unit increases by 1, the number of operations executed is doubled.

The recursive Fibonacci sequence is a good example. Assume you're given a number and want to find the nth element of the Fibonacci sequence.

The Fibonacci sequence is a mathematical sequence in which each number is the sum of the two preceding numbers, where 0 and 1 are the first two numbers. The third number in the sequence is 1, the fourth is 2, the fifth is 3, and so on... (0, 1, 1, 2, 3, 5, 8, 13, …).

This means that if you pass in 6, then the 6th element in the Fibonacci sequence would be 8:
```
const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(6)); // 8
```
In the code above, the algorithm specifies a growth rate that doubles every time the input data set is added. This means the time complexity is exponential with an order O(2^n).