## Print all paths from the root to leaf nodes of a binary tree
The binary tree has four root-to-leaf paths: 

1 —> 2 —> 4

1 —> 2 —> 5

1 —> 3 —> 6 —> 8

1 —> 3 —> 7 —> 9

The time complexity of the above solution is O(n), where n is the total number of nodes in the binary tree. The program requires O(h) extra space for the call stack, where h is the height of the tree.


```
from collections import deque
 
# A class to store a binary tree node
class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
 
 
# Function to check if a given node is a leaf node or not
def isLeaf(node):
    return node.left is None and node.right is None
 
 
# Recursive function to find paths from the root node to every leaf node
def printRootToLeafPaths(node, path):
 
    # base case
    if node is None:
        return
 
    # include the current node to the path
    path.append(node.data)
 
    # if a leaf node is found, print the path
    if isLeaf(node):
        print(list(path))
 
    # recur for the left and right subtree
    printRootToLeafPaths(node.left, path)
    printRootToLeafPaths(node.right, path)
 
    # backtrack: remove the current node after the left, and right subtree are done
    path.pop()
 
 
# The main function to print paths from the root node to every leaf node
def printRootToLeafPath(root):
 
    # list to store root-to-leaf path
    path = deque()
    printRootToLeafPaths(root, path)
 
 
if __name__ == '__main__':
 
    ''' Construct the following tree
              1
            /   \
           /     \
          2       3
         / \     / \
        4   5   6   7
               /     \
              8       9
    '''
 
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.left.right = Node(5)
    root.right.left = Node(6)
    root.right.right = Node(7)
    root.right.left.left = Node(8)
    root.right.right.right = Node(9)
 
    # print all root-to-leaf paths
    printRootToLeafPath(root)
 

Output:[1, 2, 4][1, 2, 5][1, 3, 6, 8][1, 3, 7, 9]
```