//C++ has the following conditional statements:

/*1.Use if to specify a block of code to be executed, if a specified condition is true
2.Use else to specify a block of code to be executed, if the same condition is false
3.Use else if to specify a new condition to test, if the first condition is false
4.Use switch to specify many alternative blocks of code to be executed*/


//The if Statement :-Use the if statement to specify a block of C++ code to be executed if a condition is true.
if (condition) {
  // block of code to be executed if the condition is true
}

//Note that if is in lowercase letters. Uppercase letters (If or IF) will generate an error.

if (20 > 18) {
  cout << "20 is greater than 18";
}



//Use the else statement to specify a block of code to be executed if the condition is false.
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
//Example
int time = 20;
if (time < 18) {
  cout << "Good day.";
} else {
  cout << "Good evening.";
}
// Outputs "Good evening."


//Use the else if statement to specify a new condition if the first condition is false.
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}
//Example
int time = 22;
if (time < 10) {
  cout << "Good morning.";
} else if (time < 20) {
  cout << "Good day.";
} else {
  cout << "Good evening.";
}
// Outputs "Good evening."




//Use the SWITCH statement to select one of many code blocks to be executed.
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
/*This is how it works:

The switch expression is evaluated once
The value of the expression is compared with the values of each case
If there is a match, the associated block of code is executed
The break and default keywords are optional, and will be described later in this chapter
The example below uses the weekday number to calculate the weekday name:*/
int day = 4;
switch (day) {
  case 1:
    cout << "Monday";
    break;
  case 2:
    cout << "Tuesday";
    break;
  case 3:
    cout << "Wednesday";
    break;
  case 4:
    cout << "Thursday";
    break;
  case 5:
    cout << "Friday";
    break;
  case 6:
    cout << "Saturday";
    break;
  case 7:
    cout << "Sunday";
    break;
}
// Outputs "Thursday" (day 4)


//The break Keyword
/*When C++ reaches a break keyword, it breaks out of the switch block.
This will stop the execution of more code and case testing inside the block.
When a match is found, and the job is done, it's time for a break. There is no need for more testing.
A break can save a lot of execution time because it "ignores" the execution of all the rest of the code in the switch block.

The default Keyword
The default keyword specifies some code to run if there is no case match:*/

Example
int day = 4;
switch (day) {
  case 6:
    cout << "Today is Saturday";
    break;
  case 7:
    cout << "Today is Sunday";
    break;
  default:
    cout << "Looking forward to the Weekend";
}
// Outputs "Looking forward to the Weekend"