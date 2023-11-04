"""List comprehensions are a concise way to create a list using a single line of code in Python. They are a powerful tool for creating and manipulating lists, and they can be used to simplify and shorten code.

The Syntax
newlist = [expression for item in iterable if condition == True]


The condition is like a filter that only accepts the items that valuate to True.
newlist = [x for x in fruits if x != "apple"]


The iterable can be any iterable object, like a list, tuple, set etc.
newlist = [x for x in range(10)]


Expression
The expression is the current item in the iteration, but it is also the outcome, which you can manipulate before it ends up like a list item in the new list:
newlist = [x.upper() for x in fruits]


"""