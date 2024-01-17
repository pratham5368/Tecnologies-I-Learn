## Print all nodes of a perfect binary tree

### Variation 1: Print Top-Down

The idea is to modify level order traversal by maintaining two queues. We process two nodes each from one queue and enqueue the left and right child of the first popped node into the first queue and the right and left child of the second popped node into the second queue.
```
from collections import deque
 
 
# A class to store a binary tree node
class Node:
    def __init__(self, key=None, left=None, right=None):
        self.key = key
        self.left = left
        self.right = right
 
 
# Function to print all nodes of a given binary tree in a specific
# order from top to bottom
def printNodes(root):
 
    # return if the tree is empty
    if root is None:
        return
 
    # print the root node
    print(root.key, end=' ')
 
    # create two empty queues and enqueue root's left and
    # right child, respectively
    q1 = deque()
    q2 = deque()
 
    if root.left and root.right:
        q1.append(root.left)
        q2.append(root.right)
 
    # loop till queue is empty
    while q1:
 
        # calculate the total number of nodes at the current level
        n = len(q1)
 
        # process every node of the current level
        for _ in range(n):
 
            # dequeue front node from the first queue and print it
            x = q1.popleft()
 
            print(x.key, end=' ')
 
            # enqueue left and right child of `x` to the first queue
            if x.left:
                q1.append(x.left)
 
            if x.right:
                q1.append(x.right)
 
            # dequeue front node from the second queue and print it
            y = q2.popleft()
 
            print(y.key, end=' ')
 
            # enqueue right and left child of `y` to the second queue
            if y.right:
                q2.append(y.right)
 
            if y.left:
                q2.append(y.left)
 
 
if __name__ == '__main__':
 
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.left.right = Node(5)
    root.right.left = Node(6)
    root.right.right = Node(7)
    root.left.left.left = Node(8)
    root.left.left.right = Node(9)
    root.left.right.left = Node(10)
    root.left.right.right = Node(11)
    root.right.left.left = Node(12)
    root.right.left.right = Node(13)
    root.right.right.left = Node(14)
    root.right.right.right = Node(15)
 
    printNodes(root)
 

# Output:1 2 3 4 7 5 6 8 15 9 14 10 13 11 12
```
The time complexity of the above solution is O(n) and requires O(n) extra space, where n is the size of the binary tree.

## Variation 2: Print Bottom-Up
```
from collections import deque
 
 
# A class to store a binary tree node
class Node:
    def __init__(self, key, left=None, right=None):
        self.key = key
        self.left = left
        self.right = right
 
 
# Function to print all nodes of a given binary tree in
# a specific order from bottom to top
def printNodes(root):
 
    # return if the tree is empty
    if root is None:
        return
 
    # start with level 1 (of the root node)
    level = 1
 
    # create an empty dictionary of integers (every key can be
    # associated with multiple values)
    d = {}
 
    # insert the root node at the first level
    d.setdefault(level, []).append(root.key)
 
    # create two empty queues and enqueue root's left and
    # right child, respectively
    q1 = deque()
    q2 = deque()
 
    if root.left and root.right:
        q1.append(root.left)
        q2.append(root.right)
 
    # loop till queue is empty
    while q1:
 
        # increment level by 1
        level = level + 1
 
        # calculate the total number of nodes at the current level
        n = len(q1)
 
        # process every node of the current level
        while n > 0:
 
            # dequeue front node from the first queue and insert it into the dictionary
            x = q1.popleft()
            d.setdefault(level, []).append(x.key)
 
            # enqueue left and right child of `x` to the first queue
            if x.left:
                q1.append(x.left)
 
            if x.right:
                q1.append(x.right)
 
            # dequeue front node from the second queue
            y = q2.popleft()
 
            # insert the dequeued node into the dictionary
            d.get(level).append(y.key)
 
            # enqueue right and left child of `y` to the second queue
            if y.right:
                q2.append(y.right)
 
            if y.left:
                q2.append(y.left)
 
            n = n - 1
 
    # iterate through the dictionary and print all nodes present at every level
    for i in reversed(d.keys()):
        print(d.get(i), end='')
 
 
if __name__ == '__main__':
 
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.left.right = Node(5)
    root.right.left = Node(6)
    root.right.right = Node(7)
    root.left.left.left = Node(8)
    root.left.left.right = Node(9)
    root.left.right.left = Node(10)
    root.left.right.right = Node(11)
    root.right.left.left = Node(12)
    root.right.left.right = Node(13)
    root.right.right.left = Node(14)
    root.right.right.right = Node(15)
 
    printNodes(root)
 

#Output:[8, 15, 9, 14, 10, 13, 11, 12][4, 7, 5, 6][2, 3][1]
```
The time complexity of the above solution is O(n.log(n)) and requires O(n) extra space, where n is the size of the binary tree.

