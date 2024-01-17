## Determine whether a given binary tree is a BST or not

The greedy algorithm – traverse the tree, at every node check whether the node contains a value larger than the value at the left child and smaller than the value on the right child – does not work for all cases.
```
import sys
 
 
# A class to store a BST node
class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
 
 
# Recursive function to insert a key into a BST
def insert(root, key):
 
    # if the root is None, create a new node and return it
    if root is None:
        return Node(key)
 
    # if the given key is less than the root node, recur for the left subtree
    if key < root.data:
        root.left = insert(root.left, key)
 
    # if the given key is more than the root node, recur for the right subtree
    else:
        root.right = insert(root.right, key)
 
    return root
 
 
# Function to determine whether a given binary tree is a BST by keeping a
# valid range (starting from [-INFINITY, INFINITY]) and keep shrinking
# it down for each node as we go down recursively
def isBST(node, minKey, maxKey):
 
    # base case
    if node is None:
        return True
 
    # if the node's value falls outside the valid range
    if node.data < minKey or node.data > maxKey:
        return False
 
    # recursively check left and right subtrees with an updated range
    return isBST(node.left, minKey, node.data) and \
        isBST(node.right, node.data, maxKey)
 
 
# Function to determine whether a given binary tree is a BST
def checkForBST(root):
 
    if isBST(root, -sys.maxsize, sys.maxsize):
        print('The tree is a BST.')
    else:
        print('The tree is not a BST')
 
 
def swap(root):
 
    left = root.left
    root.left = root.right
    root.right = left
 
 
if __name__ == '__main__':
 
    keys = [15, 10, 20, 8, 12, 16, 25]
 
    root = None
    for key in keys:
        root = insert(root, key)
 
    # swap left and right nodes
    swap(root)
    checkForBST(root)
 

#Output:The tree is not a BST!
```
The time complexity of the above solution is O(n), where n is the size of the BST, and requires space proportional to the tree’s height for the call stack.
