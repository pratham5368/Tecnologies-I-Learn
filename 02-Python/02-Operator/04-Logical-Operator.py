"""Logical operators

@see: https://www.w3schools.com/python/python_operators.asp

Logical operators are used to combine conditional statements.
"""


def test_logical_operators():
    """Logical operators"""

    # Let's work with these number to illustrate logic operators.
    first_number = 5
    second_number = 10

    # and
    # Returns True if both statements are true.
    assert first_number > 0 and second_number < 20

    # or
    # Returns True if one of the statements is true
    assert first_number > 5 or second_number < 20

    # not
    # Reverse the result, returns False if the result is true.
    # pylint: disable=unneeded-not
    assert not first_number == second_number
    assert first_number != second_number

    #and is a Logical AND that returns True if both the operands are true whereas ‘&’ is a bitwise operator in Python that acts on bits and performs bit-by-bit operations.