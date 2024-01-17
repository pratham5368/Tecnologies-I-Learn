## Calculate the height of a binary tree – Iterative and Recursive

### Calculate the height of a binary tree – Iterative and Recursive
The time complexity of the above recursive solution is O(n),
```
# A class to store a binary tree node
class Node:
    def __init__(self, key=None, left=None, right=None):
        self.key = key
        self.left = left
        self.right = right
 
 
# Recursive function to calculate the height of a given binary tree
def height(root):
 
    # base case: empty tree has a height of 0
    if root is None:
        return 0
 
    # recur for the left and right subtree and consider maximum depth
    return 1 + max(height(root.left), height(root.right))
 
 
if __name__ == '__main__':
 
    root = Node(15)
    root.left = Node(10)
    root.right = Node(20)
    root.left.left = Node(8)
    root.left.right = Node(12)
    root.right.left = Node(16)
    root.right.right = Node(25)
 
    print('The height of the binary tree is', height(root))
 

Output:The height of the binary tree is 3
```

### Iterative Solution
In an iterative version, perform a level order traversal on the tree. Then the height of a tree is equal to the total number of levels in it. Following is the C++, Java, and Python program that demonstrates it:

The time complexity of the above iterative solution is O(n)
```

from collections import deque
 
 
# A class to store a binary tree node
class Node:
    def __init__(self, data, left=None, right=None):
        self.key = data
        self.left = left
        self.right = right
 
 
# Iterative function to calculate the height of a given binary tree
# by doing level order traversal on the tree
def height(root):
 
    # empty tree has a height of 0
    if root is None:
        return 0
 
    # create an empty queue and enqueue the root node
    queue = deque()
    queue.append(root)
 
    height = 0
 
    # loop till queue is empty
    while queue:
 
        # calculate the total number of nodes at the current level
        size = len(queue)
 
        # process each node of the current level and enqueue their
        # non-empty left and right child
        while size > 0:
            front = queue.popleft()
 
            if front.left:
                queue.append(front.left)
 
            if front.right:
                queue.append(front.right)
 
            size = size - 1
 
        # increment height by 1 for each level
        height = height + 1
 
    return height
 
 
if __name__ == '__main__':
 
    root = Node(15)
    root.left = Node(10)
    root.right = Node(20)
    root.left.left = Node(8)
    root.left.right = Node(12)
    root.right.left = Node(16)
    root.right.right = Node(25)
 
    print('The height of the binary tree is', height(root))
 

## Output:The height of the binary tree is 3

```