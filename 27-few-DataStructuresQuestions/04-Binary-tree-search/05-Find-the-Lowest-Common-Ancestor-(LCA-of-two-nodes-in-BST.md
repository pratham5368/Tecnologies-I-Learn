## Recursive Version
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
 
 
# Iterative function to search a given node in a BST
def search(root, key):
 
    # traverse the tree and search for the key
    while root:
 
        # if the given key is less than the current node, go to the left
        # subtree; otherwise, go to the right subtree
 
        if key.data < root.data:
            root = root.left
        elif key.data > root.data:
            root = root.right
        # if the key is found, return true
        elif key == root:
            return True
        else:
            return False
 
    # we reach here if the key is not present in the BST
    return False
 
 
# Recursive function to find the lowest common ancestor of given nodes
# `x` and `y`, where both `x` and `y` are present in a BST
def LCARecursive(root, x, y):
 
    # base case: empty tree
    if root is None:
        return None
 
    # if both `x` and `y` is smaller than the root, LCA exists in the left subtree
    if root.data > max(x.data, y.data):
        return LCARecursive(root.left, x, y)
 
    # if both `x` and `y` are greater than the root, LCA exists in the right subtree
    elif root.data < min(x.data, y.data):
        return LCARecursive(root.right, x, y)
 
    # if one key is greater (or equal) than the root and one key is smaller
    # (or equal) than the root, then the current node is LCA
    return root
 
 
# Print lowest common ancestor of two nodes in a BST
def LCA(root, x, y):
 
    # return if the tree is empty, or `x` or `y` is not present in the tree
    if not root or not search(root, x) or not search(root, y):
        return
 
    # `lca` stores the lowest common ancestor of `x` and `y`
    lca = LCARecursive(root, x, y)
 
    # if the lowest common ancestor exists, print it
    if lca:
        print('LCA is', lca.data)
    else:
        print('LCA does not exist')
 
 
if __name__ == '__main__':
 
    keys = [15, 10, 20, 8, 12, 16, 25]
 
    ''' Construct the following tree
             15
            /  \
           /    \
          10     20
         / \     / \
        /   \   /   \
       8    12 16   25
    '''
 
    root = None
    for key in keys:
        root = insert(root, key)
 
    LCA(root, root.left.left, root.left.right)
 

Output:LCA is 10
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
 
 
# Iterative function to search a given node in a BST
def search(root, key):
 
    # traverse the tree and search for the key
    while root:
 
        # if the given key is less than the current node, go to the left
        # subtree; otherwise, go to the right subtree
 
        if key.data < root.data:
            root = root.left
        elif key.data > root.data:
            root = root.right
        # if the key is found, return true
        elif key == root:
            return True
        else:
            return False
 
    # we reach here if the key is not present in the BST
    return False
 
 
# Iterative function to find the lowest common ancestor of given nodes
# in the BST
def LCA(root, x, y):
 
    # return if the tree is empty, or `x` or `y` is not present in the tree
    if not root or not search(root, x) or not search(root, y):
        return None
 
    # start from the root node
    curr = root
 
    # traverse the tree
    while curr:
 
        # if both `x` and `y` is smaller than the root, LCA exists in the
        # left subtree
        if curr.data > max(x.data, y.data):
            curr = curr.left
 
        # if both `x` and `y` are greater than the root, LCA exists in the
        # right subtree
        elif curr.data < min(x.data, y.data):
            curr = curr.right
 
        # if one key is greater (or equal) than the root and one key is
        # smaller (or equal) than the root, then the current node is LCA
        else:
            return curr
 
    return curr
 
 
if __name__ == '__main__':
 
    keys = [15, 10, 20, 8, 12, 16, 25]
 
    ''' Construct the following tree
             15
            /  \
           /    \
          10     20
         / \     / \
        /   \   /   \
       8    12 16   25
    '''
 
    root = None
    for key in keys:
        root = insert(root, key)
 
    # `lca` stores the lowest common ancestor of 8 and 12
    lca = LCA(root, root.left.left, root.left.right)
 
    # if the lowest common ancestor exists, print it
    if lca:
        print('LCA is', lca.data)
    else:
        print('LCA does not exist')
 

Output:LCA is 10
```
The time complexity of the above solution is O(n), where n is the size of the BST. The auxiliary space required by the program is O(1).
































