## Find the diagonal sum of a binary tree

![](https://www.techiedelight.com/wp-content/uploads/Diagonal-Sum-Binary-Tree.png)
The time complexity of the above solution is O(n) and requires O(n) extra space, where n is the size of the binary tree.

```
# A class to store a binary tree node
class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
 
 
# Recursive function to perform preorder traversal on the tree and
# fill the dictionary with the diagonal sum of elements
def diagonalSum(root, diagonal, d):
 
    # base case: empty tree
    if root is None:
        return
 
    # update the current diagonal with the node's value
    d[diagonal] = d.get(diagonal, 0) + root.data
 
    # recur for the left subtree by increasing diagonal by 1
    diagonalSum(root.left, diagonal + 1, d)
 
    # recur for the right subtree with the same diagonal
    diagonalSum(root.right, diagonal, d)
 
 
# Function to print the diagonal sum of a given binary tree
def printDiagonalSum(root):
 
    # create an empty dictionary to store the diagonal sum for every slope
    d = {}
 
    # traverse the tree in a preorder fashion and fill the dictionary
    diagonalSum(root, 0, d)
 
    # print the diagonal sum
    print(list(d.values()))
 
 
if __name__ == '__main__':
 
    ''' Construct the following tree
               1
             /   \
            /     \
           2       3
          /      /  \
         /      /    \
        4      5      6
              / \
             /   \
            7     8
    '''
 
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.right.left = Node(5)
    root.right.right = Node(6)
    root.right.left.left = Node(7)
    root.right.left.right = Node(8)
 
    printDiagonalSum(root)
 

Output:[10, 15, 11]

 
```