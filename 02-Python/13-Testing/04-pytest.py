"""pytest is a mature full-featured Python testing tool that helps you write better programs.

https://docs.pytest.org/en/7.4.x/


To install the latest version of pytest, execute the following command −

pip install pytest

Create a file named test_square.py and add the below code to that file.
"""
import math

def test_sqrt():
   num = 25
   assert math.sqrt(num) == 5

def testsquare():
   num = 7
   assert 7*7 == 40

def tesequality():
   assert 10 == 11
#Run the test using the following command −

pytest


#The above command will generate the following output −
'''
test_square.py .F
============================================== FAILURES 
==============================================
______________________________________________ testsquare 
_____________________________________________
   def testsquare():
   num=7
>  assert 7*7 == 40
E  assert (7 * 7) == 40
test_square.py:9: AssertionError
================================= 1 failed, 1 passed in 0.06 seconds 
=================================
'''
