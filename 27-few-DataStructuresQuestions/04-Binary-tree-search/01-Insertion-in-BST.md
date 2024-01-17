## Insertion in a BST
A Binary Search Tree (BST) is a rooted binary tree, whose nodes each store a key (and optionally, an associated value), and each has two distinguished subtrees, commonly denoted left and right. The tree should satisfy the BST property, which states that each node’s key must be greater than all keys stored in the left subtree and not greater than all keys in the right subtree. Ideally, unique values should be present in the tree.
### Recursive Version
```

# A class to store a BST node
class Node:
    left = right = None
 
    # Function to create a new binary tree node having a given key
    def __init__(self, data):
        self.data = data
 
 
# Function to perform inorder traversal on the tree
def inorder(root):
 
    if root is None:
        return
 
    inorder(root.left)
    print(root.data, end=' ')
    inorder(root.right)
 
 
# Recursive function to insert a key into a BST
def insert(root, key):
 
    # if the root is None, create a new node and return it
    if root is None:
        return Node(key)
 
    # if the given key is less than the root node,
    # recur for the left subtree
    if key < root.data:
        root.left = insert(root.left, key)
 
    # otherwise, recur for the right subtree
    else:
        # key >= root.data
        root.right = insert(root.right, key)
 
    return root
 
 
# Function to construct a BST from given keys
def constructBST(keys):
    root = None
    for key in keys:
        root = insert(root, key)
    return root
 
 
if __name__ == '__main__':
 
    keys = [15, 10, 20, 8, 12, 16, 25]
 
    root = constructBST(keys)
    inorder(root)
 

#Output:8 10 12 15 16 20 25
```

## Iterative Version

```

# A class to store a BST node
class Node:
    # Function to create a new binary tree node having a given key
    def __init__(self, key):
        self.data = key
        self.left = self.right = None
 
 
# Function to perform inorder traversal on the tree
def inorder(root):
 
    if root is None:
        return
 
    inorder(root.left)
    print(root.data, end=' ')
    inorder(root.right)
 
 
# Iterative function to insert a key into a BST
def insertIterative(root, key):
 
    # start with the root node
    curr = root
 
    # pointer to store the parent of the current node
    parent = None
 
    # if the tree is empty, create a new node and set it as root
    if root is None:
        return Node(key)
 
    # traverse the tree and find the parent node of the given key
    while curr:
 
        # update the parent to the current node
        parent = curr
 
        # if the given key is less than the current node,
        # go to the left subtree; otherwise, go to the right subtree.
        if key < curr.data:
            curr = curr.left
        else:
            curr = curr.right
 
    # construct a node and assign it to the appropriate parent pointer
    if key < parent.data:
        parent.left = Node(key)
    else:
        parent.right = Node(key)
 
    return root
 
 
# Function to construct a BST from given keys
def constructBST(keys):
    root = None
    for key in keys:
        root = insertIterative(root, key)
    return root
 
 
if __name__ == '__main__':
 
    keys = [15, 10, 20, 8, 12, 16, 25]
 
    root = constructBST(keys)
    inorder(root)
 

#Output:8 10 12 15 16 20 25
#The time complexity of the above solution is O(h)
```