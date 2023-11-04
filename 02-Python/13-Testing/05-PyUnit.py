"""PyUnit is an easy way to create unit testing programs and UnitTests with Python. (Note that docs.python.org uses the name “unittest”, which is also the module name.)

https://wiki.python.org/moin/PyUnit%C2%A0


PyUnit is Python’s built-in unit testing framework and Python’s version of the corresponding JUnit testing framework for Java. To get started building a test file, we need to import the unittest library to use PyUnit:
"""
import unittest
#Then, we can get started writing out first unit test. Unit tests in PyUnit are structured as subclasses of the unittest.TestCase class, and we can override the runTest() method to perform our own unit tests which check conditions using different assert functions in unittest.TestCase:

class TestGetAreaRectangle(unittest.TestCase):
    def runTest(self):
        rectangle = Rectangle(2, 3)
        self.assertEqual(rectangle.get_area(), 6, "incorrect area")

"""That’s our first unit test! It checks if the rectangle.get_area() method returns the correct area for a rectangle with width = 2 and length = 3. We use self.assertEqual instead of simply using assert to allow the unittest library to allow the runner to accumulate all test cases and produce a report.

Using the different assert functions in unittest.TestCase also gives us a better ability to test different behaviors such as self.assertRaises(exception). This allows us to check if a certain block of code produces an expected exception.

To run the unit test, we make a call to unittest.main() in our program,
"""
...
unittest.main()
Since the code returns the expected output for this case, it returns that the tests run successfully, with the output:

.
----------------------------------------------------------------------
Ran 1 test in 0.003s
 
OK

#The complete code is as follows:

import unittest
 
# Our code to be tested
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
 
    def get_area(self):
        return self.width * self.height
 
    def set_width(self, width):
        self.width = width
 
    def set_height(self, height):
        self.height = height
 
# The test based on unittest module
class TestGetAreaRectangle(unittest.TestCase):
    def runTest(self):
        rectangle = Rectangle(2, 3)
        self.assertEqual(rectangle.get_area(), 6, "incorrect area")
 
# run the test
unittest.main()
"""Note: While in the above, our business logic Rectangle class and our test code TestGetAreaRectangle are put together. In reality, you may put them in separate files and import the business logic into your test code. This can help you better manage the code.

We can also nest multiple unit tests together in one subclass of unittest.TestCase, by naming methods in the new subclass with the “test” prefix, for example:
"""
class TestGetAreaRectangle(unittest.TestCase):
    def test_normal_case(self):
        rectangle = Rectangle(2, 3)
        self.assertEqual(rectangle.get_area(), 6, "incorrect area")
 
    def test_negative_case(self): 
        """expect -1 as output to denote error when looking at negative area"""
        rectangle = Rectangle(-1, 2)
        self.assertEqual(rectangle.get_area(), -1, "incorrect negative output")

"""Running this will give us our first error:"""

F.
======================================================================
FAIL: test_negative_case (__main__.TestGetAreaRectangle)
expect -1 as output to denote error when looking at negative area
----------------------------------------------------------------------
Traceback (most recent call last):
 File "<ipython-input-96-59b1047bb08a>", line 9, in test_negative_case
 self.assertEqual(rectangle.get_area(), -1, "incorrect negative output")
AssertionError: -2 != -1 : incorrect negative output
----------------------------------------------------------------------
Ran 2 tests in 0.003s
 
FAILED (failures=1)
We can see the unit test that failed, which is the test_negative_case as highlighted in the output along with the stderr message since get_area() doesn’t return -1 as we expected in our test.