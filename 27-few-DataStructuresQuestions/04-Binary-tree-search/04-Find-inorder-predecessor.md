## Find inorder predecessor
#### Recursive Version
```
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
 
 
# Helper function to find the maximum value node in a given BST
def findMaximum(root):
    while root.right:
        root = root.right
    return root
 
 
# Recursive function to find inorder predecessor for a given key in a BST
def findPredecessor(root, prec, key):
 
    # base case
    if root is None:
        return prec
 
    # if a node with the desired value is found, the predecessor is the maximum value
    # node in its left subtree (if any)
    if root.data == key:
        if root.left:
            return findMaximum(root.left)
 
    # if the given key is less than the root node, recur for the left subtree
    elif key < root.data:
        return findPredecessor(root.left, prec, key)
 
    # if the given key is more than the root node, recur for the right subtree
    else:
        # update predecessor to the current node before recursing
        # in the right subtree
        prec = root
        return findPredecessor(root.right, prec, key)
 
    return prec
 
 
if __name__ == '__main__':
 
    keys = [15, 10, 20, 8, 12, 16, 25]
 
    ''' Construct the following tree
               15
             /    \
            /      \
           10       20
          / \      /  \
         /   \    /    \
        8    12  16    25
    '''
 
    root = None
    for key in keys:
        root = insert(root, key)
 
    # find inorder predecessor for each key
    for key in keys:
        prec = findPredecessor(root, None, key)
 
        if prec:
            print(f'Predecessor of node {key} is {prec.data}')
        else:
            print('The predecessor doesn\'t exist for node', key)
 

#Output: The predecessor of node 15 is 12

#The predecessor of node 10 is 8

#The predecessor of node 20 is 16

#The predecessor doesn’t exist for node 8

#The predecessor of node 12 is 10

#The predecessor of node 16 is 15

#The predecessor of node 25 is 20
```

The time complexity of the above solution is O(n), where n is the size of the BST, and requires space proportional to the tree’s height for the call stack.
## Iterative Version
```
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
 
 
# Function to find the maximum value node in a given BST
def findMaximum(root):
    while root.right:
        root = root.right
    return root
 
 
# Iterative function to find inorder predecessor for a given key in a BST
def findPredecessor(root, key):
 
    # base case
    if not root:
        return None
 
    prec = None
 
    while True:
 
        # if the given key is less than the root node, visit the left subtree
        if key < root.data:
            root = root.left
 
        # if the given key is more than the root node, visit the right subtree
        elif key > root.data:
            # update predecessor to the current node before visiting
            # right subtree
            prec = root
            root = root.right
 
        # if a node with the desired value is found, the predecessor is the maximum
        # value node in its left subtree (if any)
        else:
            if root.left:
                prec = findMaximum(root.left)
            break
 
        # if the key doesn't exist in the binary tree, return previous greater node
        if root is None:
            return prec
 
    # return predecessor, if any
    return prec
 
 
if __name__ == '__main__':
 
    keys = [15, 10, 20, 8, 12, 16, 25]
 
    ''' Construct the following tree
               15
             /    \
            /      \
           10       20
          / \      /  \
         /   \    /    \
        8    12  16    25
    '''
 
    root = None
    for key in keys:
        root = insert(root, key)
 
    # find inorder predecessor for each key
    for key in keys:
        prec = findPredecessor(root, key)
        if prec:
            print(f'Predecessor of node {key} is {prec.data}')
        else:
            print('The predecessor doesn\'t exist for node', key)
 

Output: The predecessor of node 15 is 12The predecessor of node 10 is 8The predecessor of node 20 is 16The predecessor doesn’t exist for node 8The predecessor of node 12 is 10The predecessor of node 16 is 15The predecessor of node 25 is 20

```
The time complexity of the above solution is O(n), where n is the size of the BST. The auxiliary space required by the program is O(1).

