//1.For Loop:-A for loop is used when you know the number of times you want to traverse through a block of code. 
//It consists of an initialization statement, a condition, and an increment/decrement operation.


for (initialization; condition; increment/decrement) {
    // block of code to execute
}
//For example:

#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 5; i++) {
        cout << "Iteration: " << i << endl;
    }
    return 0;
}
//2.While Loop:-A while loop runs as long as a specified condition is true. The loop checks for the condition before 
//entering the body of the loop.


while (condition) {
    // block of code to execute
}
//For example:

#include <iostream>
using namespace std;

int main() {
    int i = 0;
    while (i < 5) {
        cout << "Iteration: " << i << endl;
        i++;
    }
    return 0;
}
//3.Do-While Loop:-A do-while loop is similar to a while loop, with the key difference being that the loop body is 
//executed at least once, even when the condition is false.


do {
    // block of code to execute
} while (condition);
//For example:

#include <iostream>
using namespace std;

int main() {
    int i = 0;
    do {
        cout << "Iteration: " << i << endl;
        i++;
    } while (i < 5);
    return 0;
}


//C++ Break the break statement was used to "jump out" of a switch statement.
//The break statement can also be used to jump out of a loop.

for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  cout << i << "\n";
}


//C++ Continue
//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  cout << i << "\n";
}

//4. Switch Statement
switch (variable) {
    case value1:
        // Code to execute if variable == value1
        break;
    case value2:
        // Code to execute if variable == value2
        break;
    // More cases...
    default:
        // Code to execute if variable does not match any case value
}