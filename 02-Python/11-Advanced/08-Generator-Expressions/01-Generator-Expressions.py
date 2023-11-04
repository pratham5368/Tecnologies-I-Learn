"""Generator comprehensions are a concise way to create a generator using a single line of code in Python. They are similar to list comprehensions, but instead of creating a list, they create a generator object that produces the values on-demand, as they are needed.

Generator comprehensions are a useful tool for creating generators that generate a large sequence of values, as they allow you to create the generator without creating the entire sequence in memory at once. This can be more efficient and use less memory, especially for large sequences.

"""
# Python code to illustrate generator, yield() and next(). 
def generator(): 
	t = 1
	print ('First result is ',t) 
	yield t 

	t += 1
	print ('Second result is ',t) 
	yield t 

	t += 1
	print('Third result is ',t) 
	yield t 

call = generator() 
next(call) 
next(call) 
next(call) 


"""Difference between Generator function and Normal function – 

1. Once the function yields, the function is paused and the control is transferred to the caller.
2. When the function terminates, StopIteration is raised automatically on further calls.
3. Local variables and their states are remembered between successive calls.
4. The generator function contains one or more yield statements instead of a return statement.
5. As the methods like _next_() and _iter_() are implemented automatically, we can iterate through the items using next().
"""

# Python code to illustrate generator expression 
generator = (num ** 2 for num in range(10)) 
for num in generator:
	print(num)
