## Determine whether a binary tree is a subtree of another binary tree
```
# A class to store a binary tree node
class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
 
    def __repr__(self):
        return str(self.data)
 
 
# Function to store inorder traversal on the tree in a list
def inorder(node, list):
    if node is None:
        return
 
    inorder(node.left, list)
    list.append(node.data)
    inorder(node.right, list)
 
 
# Function to store postorder traversal on the tree in a list
def postorder(node, list):
    if node is None:
        return
 
    postorder(node.left, list)
    postorder(node.right, list)
    list.append(node.data)
 
 
# Utility function to check if y is sublist of x or not
def is_sublist(x, y):
    for i in range(len(x) - len(y) + 1):
        if x[i: i + len(y)] == y:
            return True
    return False
 
# Function to check if a given binary tree is a subtree of another
# binary tree or not
def checkSubtree(tree, subtree):
 
    # base case: both trees are the same
    if tree == subtree:
        return True
 
    # base case: if the first tree is empty but the second tree is non-empty
    if tree is None:
        return False
 
    # store the inorder traversal of both trees in `first` and `second`, respectively
    first = []
    second = []
 
    inorder(tree, first)
    inorder(subtree, second)
 
    # return false if the second list is not a sublist of the first list
    if not is_sublist(first, second):
        return False
 
    # reset both lists
    first.clear()
    second.clear()
 
    # Now store postorder traversal of both trees in `first` and `second`, respectively
    postorder(tree, first)
    postorder(subtree, second)
 
    # return false if the second list is not a sublist of the first list
    if not is_sublist(first, second):
        return False
 
    return True
 
 
if __name__ == '__main__':
 
    ''' Construct the following tree
              1
            /   \
           /     \
          2       3
         / \     / \
        4   5   6   7
    '''
 
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.left.right = Node(5)
    root.right.left = Node(6)
    root.right.right = Node(7)
 
    if checkSubtree(root, root.right):
        print('Yes')
    else:
        print('No')
 

Output:Yes
```

The time complexity of the above solution is O(n2), where n is the total number of nodes in the binary tree. The auxiliary space required by the program is O(n).