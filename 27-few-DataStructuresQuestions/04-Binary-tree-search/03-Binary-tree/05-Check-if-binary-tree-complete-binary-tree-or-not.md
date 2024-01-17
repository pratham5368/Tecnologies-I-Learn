## Check if a binary tree is a complete binary tree or not
1. Level Order Traversal (BFS)
The time complexity of the above solution is O(n) and requires O(n) extra space, where n is the size of the binary tree.
We can modify level order traversal to check if a given binary tree is a complete binary tree or not. The idea is for every dequeued node, check if it is a full node (have both left and right children
```
from collections import deque
 
 
# A class to store a binary tree node
class Node:
    def __init__(self, key=None, left=None, right=None):
        self.key = key
        self.left = left
        self.right = right
 
 
# Function to check if a given binary tree is complete or not
def isComplete(root):
 
    # return if the tree is empty
    if root is None:
        return True
 
    # create an empty queue and enqueue the root node
    queue = deque()
    queue.append(root)
 
    # flag to mark the end of full nodes
    flag = False
 
    # loop till queue is empty
    while queue:
 
        # dequeue front node
        front = queue.popleft()
 
        # if we have encountered a non-full node before and the current node
        # is not a leaf, a tree cannot be complete
        if flag and (front.left or front.right):
            return False
 
        # if the left child is empty and the right child exists,
        # a tree cannot be complete
        if front.left is None and front.right:
            return False
 
        # if the left child exists, enqueue it
        if front.left:
            queue.append(front.left)
 
        # if the current node is a non-full node, set the flag to true
        else:
            flag = True
 
        # if the right child exists, enqueue it
        if front.right:
            queue.append(front.right)
 
        # if the current node is a non-full node, set the flag to true
        else:
            flag = True
 
    return True
 
 
if __name__ == '__main__':
 
    ''' Construct the following tree
              1
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
 
    if isComplete(root):
        print('Complete binary tree')
    else:
        print('Not a complete binary tree')
 

Output:Complete binary tree
```
2. Array representation of a complete tree
We can solve this problem by using the properties of a complete binary tree. We know that in the array representation of a binary tree, the left child for a node at index i is present at index 2i+1, and the right child is present at index 2i+2.

The time complexity of the above solution is O(n) and requires O(n) extra space, where n is the size of the binary tree.
![](https://www.techiedelight.com/wp-content/uploads/Complete-Binary-Trees.png)
```
# A class to store a binary tree node
class Node:
    def __init__(self, key=None, left=None, right=None):
        self.key = key
        self.left = left
        self.right = right
 
# Utility function to calculate the total number of nodes in a binary tree
def size(root):
    if root is None:
        return 0
    return 1 + size(root.left) + size(root.right)
 
 
# Perform inorder traversal on the binary tree and fill list `A`
def inorder(root, A, i):
 
    if root is None or i >= len(A):
        return
 
    # recur with index `2i+1` for left node
    inorder(root.left, A, 2*i + 1)
 
    # mark index `i` as visited
    A[i] = True
 
    # recur with index `2i+2` for the right node
    inorder(root.right, A, 2*i + 2)
 
 
# Function to check if a given binary tree is a complete binary tree or not
def isComplete(root, n):
 
    # return if the tree is empty
    if root is None:
        return True
 
    # construct an auxiliary space of size `n`
    A = [False] * n
 
    # fill list `A`
    inorder(root, A, 0)
 
    # check if all positions in the list are filled or not
    for e in A:
        if not e:
            return False
 
    return True
 
 
if __name__ == '__main__':
 
    ''' Construct the following tree
              1
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
 
    if isComplete(root, size(root)):
        print('Complete binary tree')
    else:
        print('Not a complete binary tree')
 

Output:Complete binary tree
```