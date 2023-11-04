//try { … }
/*In the try block, you write the code that can possibly generate an exception. If an exception is encountered, the control is passed 
to the relevant catch block to handle the issue.*/



try {
  // code that might throw an exception
}


//catch (…) { … }
/*The catch block follows the try block and is responsible for handling the exceptions thrown by the try block. There can be multiple
catch blocks to handle different types of exceptions.*/



catch (int e) {
  // handle exception of type int
}
catch (char e) {
  // handle exception of type char
}
catch (...) {
  // handle any other exception
}


//throw … ;
/*In case an error occurs within the try block, you can use the throw keyword to generate an exception of the specific type. 
This will then be caught and handled by the corresponding catch block.*/



try {
  int num1 = 10, num2 = 0;
  if (num2 == 0) {
    throw "Division by zero not allowed!";
  } else {
    int result = num1 / num2;
    cout << "Result: " << result << endl;
  }
}
catch (const char* e) {
  cout << "Error: " << e << endl;
}