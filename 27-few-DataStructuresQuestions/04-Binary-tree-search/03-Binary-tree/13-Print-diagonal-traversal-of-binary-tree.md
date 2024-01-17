## Print diagonal traversal of a binary tree

![](https://www.techiedelight.com/wp-content/uploads/Diagonal-Traversal-Binary-Tree.png)

### Recursive Version
We can easily solve this problem with the help of hashing. The idea is to create an empty map where each key in the map represents a diagonal in the binary tree, and its value maintains all nodes present in the diagonal. Then perform preorder traversal on the tree and update the map. For each node, recur for its left subtree by increasing the diagonal by one and recur for the right subtree with the same diagonal.

The time complexity of the above solution is O(n) and requires O(n) extra space, where n is the size of the binary tree.


```
# A class to store a binary tree node
class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
 
 
# Recursive function to perform preorder traversal on the tree and
# fill the dictionary with diagonal elements
def printDiagonal(node, diagonal, d):
 
    # base case: empty tree
    if node is None:
        return
 
    # insert the current node into the current diagonal
    d.setdefault(diagonal, []).append(node.data)
 
    # recur for the left subtree by increasing diagonal by 1
    printDiagonal(node.left, diagonal + 1, d)
 
    # recur for the right subtree with the same diagonal
    printDiagonal(node.right, diagonal, d)
 
 
# Function to print the diagonal elements of a given binary tree
def printDiagonalElements(root):
 
    # create an empty dictionary to store the diagonal element in every slope
    d = {}
 
    # perform preorder traversal on the tree and fill the dictionary
    printDiagonal(root, 0, d)
 
    # traverse the dictionary and print diagonal elements
    for i in range(len(d)):
        print(d.get(i))
 
 
if __name__ == '__main__':
 
    ''' Construct the following tree
               1
             /   \
            /     \
          2        3
         /        /  \
        /        /    \
       4        5      6
               / \
             /    \
            7      8
    '''
 
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.right.left = Node(5)
    root.right.right = Node(6)
    root.right.left.left = Node(7)
    root.right.left.right = Node(8)
 
    printDiagonalElements(root)
 

Output:[1, 3, 6][2, 5, 8][4, 7]
```

### Iterative Version
We can also use a queue to solve this problem. The idea is similar to level order traversal, but instead of storing nodes of a level, we enqueue nodes in a diagonal.

```
from collections import deque
 
 
# A class to store a binary tree node
class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
 
 
# Iterative function to print the diagonal elements of a given binary tree
def diagonalPrint(root):
 
    # create an empty queue
    q = deque()
 
    # create a sentinel (dummy) node to denote the end of a diagonal
    sentinel = Node(-1)
 
    # enqueue all nodes of the first diagonal in the binary tree
    while root:
        q.append(root)
        root = root.right
 
    # enqueue sentinel node at the end of each diagonal
    q.append(sentinel)
 
    # run till the only sentinel is left
    while len(q) != 1:
 
        # dequeue front node
        front = q.popleft()
 
        if front != sentinel:
            # print the current node
            print(front.data, end=' ')
 
            # enqueue nodes of the next diagonal in the binary tree
            node = front.left
            while node:
                q.append(node)
                node = node.right
 
        else:
            # If the current diagonal end is reached, enqueue the sentinel node
            # and print an empty line
            q.append(sentinel)
            print()
 
 
if __name__ == '__main__':
 
    ''' Construct the following tree
               1
             /   \
            /     \
          2        3
         /        /  \
        /        /    \
       4        5      6
               / \
             /    \
            7      8
    '''
 
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.right.left = Node(5)
    root.right.right = Node(6)
    root.right.left.left = Node(7)
    root.right.left.right = Node(8)
 
    diagonalPrint(root)
 

Output:1 3 62 5 84 7
```
The time complexity of the above solution is O(n) and requires O(n) extra space, where n is the size of the binary tree.
