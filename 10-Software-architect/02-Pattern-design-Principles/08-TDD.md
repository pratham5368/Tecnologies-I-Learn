Test driven development (TDD) is the process of writing tests for software’s requirements which will fail until the software is developed to meet those requirements. Once those tests pass, then the cycle repeats to refactor code or develop another feature/requirement. In theory, this ensures that software is written to meet requirements in the simplest form, and avoids code defects.

### How to perform TDD Test
Following steps define how to perform TDD test,

1. Add a test.
2. Run all tests and see if any new test fails.
3. Write some code.
4. Run tests and Refactor code.
5. Repeat.

![](https://www.guru99.com/images/8-2016/081216_0811_TestDrivenD2.png)

### TDD cycle defines
1. Write a test
2. Make it run.
3. Change the code to make it right i.e. Refactor.
4. Repeat process.
### Some clarifications about TDD:
- TDD approach is neither about “Testing” nor about “Design”.
- TDD does not mean “write some of the tests, then build a system that passes the tests.
- TDD does not mean “do lots of Testing.”

## TDD Vs. Traditional Testing
Below is the main difference between Test driven development and traditional testing:

TDD approach is primarily a specification technique. It ensures that your source code is thoroughly tested at confirmatory level.

- With traditional testing, a successful test finds one or more defects. It is same as TDD. When a test fails, you have made progress because you know that you need to resolve the problem.
- TDD ensures that your system actually meets requirements defined for it. It helps to build your confidence about your system.
- In TDD more focus is on production code that verifies whether testing will work properly. In traditional testing, more focus is on test case design. Whether the test will show the proper/improper execution of the application in order to fulfill requirements.
- In TDD, you achieve 100% coverage test. Every single line of code is tested, unlike traditional testing.
- The combination of both traditional testing and TDD leads to the importance of testing the system rather than perfection of the system.
- In Agile Modeling (AM), you should “test with a purpose”. You should know why you are testing something and what level its need to be tested.

## What is acceptance TDD and Developer TDD
There are two levels of TDD

1. Acceptance TDD (ATDD): With ATDD you write a single acceptance test. This test fulfills the requirement of the specification or satisfies the behavior of the system. After that write just enough production/functionality code to fulfill that acceptance test. Acceptance test focuses on the overall behavior of the system. ATDD also was known as Behavioral Driven Development (BDD).
2. Developer TDD: With Developer TDD you write single developer test i.e. unit test and then just enough production code to fulfill that test. The unit test focuses on every small functionality of the system. Developer TDD is simply called as TDD.The main goal of ATDD and TDD is to specify detailed, executable requirements for your solution on a just in time (JIT) basis. JIT means taking only those requirements in consideration that are needed in the system. So increase efficiency.
![](https://www.guru99.com/images/8-2016/081216_0811_TestDrivenD3.png)

## Scaling TDD via Agile Model Driven Development (AMDD)
TDD is very good at detailed specification and validation. It fails at thinking through bigger issues such as overall design, use of the system, or UI. AMDD addresses the Agile scaling issues that TDD does not.
![](https://www.guru99.com/images/8-2016/081216_0811_TestDrivenD4.png)
