"""Python Syntax compared to other programming languages**

- Python was designed to for readability, and has some similarities to the English language with influence from mathematics.
- Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.
- Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions and classes.
 Other programming languages often use curly-brackets for this purpose."""

## Python Indentations

"""Where in other programming languages the indentation in code is for readability only, in Python the indentation is very important.
Python uses indentation to indicate a block of code."""


if 5 > 2:
  print("Five is greater than two!")

#Python will give you an error if you skip the indentation.

## Comments

#Python has commenting capability for the purpose of in-code documentation.
#Comments start with a `#`, and Python will render the rest of the line as a comment:


#This is a comment.
print("Hello World!")

## Docstrings

"""Python also has extended documentation capability, called docstrings.
Docstrings can be one line, or multiline. Docstrings are also comments:
Python uses triple quotes at the beginning and end of the docstring:"""


"""This is a 
multiline docstring."""
print("Hello, World!")


"""
Python Keywords
Listed below in the table are the keywords in Python. They are some unique purpose 
words that can be used only for specific cases and not as identifiers.
"""
import keyword
print(keyword.kwlist)

"""['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 
'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is',
 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']



List of Python Keywords
Keyword	Description
False	 Represents the boolean value false.
None	 Represents the absence of a value or a null value.
True	 Represents the boolean value true.
and	   A logical operator used to combine conditional statements.
as	   Used to create an alias while importing a module.
assert	Used for debugging purposes to check if a statement is true.
break	 breakout out of the current closest enclosing loop.
class	 Used to define a new user-defined class.
continue	Continues to the next iteration of the current loop.
def	   Used to define a function.
del	   Used to delete an object.
elif  	Used in conditional statements, same as else if.
else  	Used in conditional statements.
except	Used with exceptions, what to do when an exception occurs.
finally	Used with exceptions, a block of code that will be executed whether there is an exception or not.
for   	Used to create a for loop.
from	  Used to import specific parts of a module.
global	Declares a global variable.
if	     Used to make a conditional statement.
import	Used to import a module.
in	    Checks if a value is present in a list, tuple, etc.
is	    Tests object identity.
lambda  	Creates an anonymous function.
nonlocal	Declares a non-local variable.
not	      A logical operator used to invert the truth value.
or	      A logical operator used to combine conditional statements.
pass     	A null statement, a statement that will do nothing.
raise   	Used to raise an exception.
return   	Used to exit a function and return a value.
try	     Makes a try-except statement.
while	   Used to create a while loop.
with	   Used to simplify exception handling.
yield   	Ends a function, returns a generator.
"""