/*“lambda”, is an anonymous (unnamed) function that is defined in place, within your source code, 
and with a concise syntax. Lambda functions were introduced in C++11 and have since become a widely used 
feature, especially in combination with the Standard Library algorithms.*/

[capture-list](parameters) -> return_type {
    // function body
};

/*1.capture-list: A list of variables from the surrounding scope that the lambda function can access.
  2.parameters: The list of input parameters, just like in a regular function. Optional.
  3.return_type: The type of the value that the lambda function will return. This part is optional, and the compiler can deduce it in many cases.
  4.function body: The code that defines the operation of the lambda function.*/


//Lambda function with no capture, parameters, or return type.
auto printHello = []() {
    std::cout << "Hello, World!" << std::endl;
};
printHello(); // Output: Hello, World!


//Lambda function with parameters.
auto add = [](int a, int b) {
    return a + b;
};
int result = add(3, 4); // result = 7

//Lambda function with capture-by-value.
int multiplier = 3;
auto times = [multiplier](int a) {
    return a * multiplier;
};
int result = times(5); // result = 15

//Lambda function with capture-by-reference
int expiresInDays = 45;
auto updateDays = [&expiresInDays](int newDays) {
    expiresInDays = newDays;
};
updateDays(30); // expiresInDays = 30