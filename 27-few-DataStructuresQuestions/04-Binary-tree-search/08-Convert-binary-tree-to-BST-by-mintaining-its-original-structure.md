## Convert a binary tree to BST by maintaining its original structure
```
# A class to store a BST node
class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
 
 
# Function to perform inorder traversal on the tree
def inorder(root):
    if root is None:
        return
    inorder(root.left)
    print(root.data, end=' ')
    inorder(root.right)
 
 
# Function to traverse the binary tree and store its keys in a set
def extractKeys(root, keys):
    # base case
    if root is None:
        return
    extractKeys(root.left, keys)
    keys.append(root.data)
    extractKeys(root.right, keys)
 
 
# Function to put keys back into a set in their correct order in a BST
# by doing inorder traversal
def convertToBST(root, it):
    if root is None:
        return
    convertToBST(root.left, it)
    root.data = next(it)
    convertToBST(root.right, it)
 
 
# Function to convert a binary tree to BST by maintaining its original structure
def convert(root):
    # traverse the binary tree and store its keys in a set
    keys = list()
    extractKeys(root, keys)
 
    # put back keys present in the set to their correct order in the BST
    it = iter(sorted(keys))
    convertToBST(root, it)
 
 
if __name__ == '__main__':
 
    ''' Construct the following tree
               8
             /   \
            /     \
           3       5
          / \     / \
         /   \   /   \
        10    2 4     6
    '''
 
    root = Node(8)
    root.left = Node(3)
    root.right = Node(5)
    root.left.left = Node(10)
    root.left.right = Node(2)
    root.right.left = Node(4)
    root.right.right = Node(6)
 
    convert(root)
    inorder(root)
 

Output:2 3 4 5 6 8 10
The time complexity of the above solution is O(n.log(n)), where n is the size of the BST, and requires linear space for storing the tree nodes.
```