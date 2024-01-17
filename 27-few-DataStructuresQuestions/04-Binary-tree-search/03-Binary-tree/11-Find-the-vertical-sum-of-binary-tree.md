## Find the vertical sum of a binary tree
1. Using Hashing
We can easily solve this problem with the help of hashing. The idea is to create an empty map where each key represents the relative horizontal distance of a node from the root node, and the value in the map maintains the sum of all nodes present at the same horizontal distance. Then perform preorder traversal on the tree, and update the sum for the current horizontal distance in the map. For each node, recur for its left subtree by decreasing horizontal distance by one, and recur for the right subtree by increasing horizontal distance by one.

```
# Data structure to store a binary tree node
class Node:
    def __init__(self, key=None, left=None, right=None):
        self.key = key
        self.left = left
        self.right = right
 
 
# Recursive function to perform preorder traversal on the tree and fill the dictionary.
# Here, the node has `dist` horizontal distance from the tree's root
def printVerticalSum(root, dist, d):
 
    # base case: empty tree
    if not root:
        return
 
    # update the dictionary
    d[dist] = d.get(dist, 0) + root.key
 
    # recur for the left subtree by decreasing horizontal distance by 1
    printVerticalSum(root.left, dist - 1, d)
 
    # recur for the right subtree by increasing horizontal distance by 1
    printVerticalSum(root.right, dist + 1, d)
 
 
# Function to print the vertical sum of a given binary tree
def printVertical(root):
 
    # create an empty dictionary where
    # key —> relative horizontal distance of the node from the root node, and
    # value —> sum of all nodes present at the same horizontal distance
    d = {}
 
    # perform preorder traversal on the tree and fill the dictionary
    printVerticalSum(root, 0, d)
 
    # traverse the dictionary in sorted order of their keys
    # and print vertical sum
    for key in sorted(d.keys()):
        print(d.get(key), end=' ')
 
 
if __name__ == '__main__':
 
    ''' Construct the following tree
            1
          /   \
         /     \
        2       3
              /   \
             /     \
            5       6
          /   \
         /     \
        7       8
    '''
 
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.right.left = Node(5)
    root.right.right = Node(6)
    root.right.left.left = Node(7)
    root.right.left.right = Node(8)
 
    printVertical(root)
 

Output:9 6 11 6
```
The time complexity of the above solution is O(n.log(n)) and requires O(n) extra space, where n is the size of the binary tree.
2. Using Auxiliary Data Structure
We can improve the time complexity of the above solution to linear by using a doubly-linked list data structure. The idea is to store the vertical sum of the binary tree in a doubly-linked list, where each node of the doubly linked list stores the sum of all nodes corresponding to a vertical line in a binary tree.

```
# Data structure to store a binary tree node
class TreeNode:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
 
 
# A Doubly Linked List Node
class ListNode:
    def __init__(self, data, prev, next):
        self.data = data
        self.prev = prev
        self.next = next
 
 
# Function to print the vertical sum stored in a given doubly linked list
def printList(mid):
 
    # find the head node
    while mid and mid.prev:
        mid = mid.prev
 
    # start with the head node
    head = mid
    while head:
        print(head.data, end=' ')
        head = head.next
 
 
# Recursive function to perform preorder traversal on the tree and calculate
# the vertical sum of the given binary tree.
# Each node of the doubly linked list will store the sum of tree nodes at
# the corresponding vertical line in a binary tree.
def updateDLLwithVerticalSum(root, curr):
 
    # base case
    if not root:
        return
 
    # update the linked list node data corresponding to the vertical line
    # passing through the current tree node
    curr.data += root.data
 
    # create a new linked list node corresponding to the vertical line passing
    # through the root's left child, if not already.
    # This node would be the `prev` pointer of the current list node
 
    if root.left and curr.prev is None:
        curr.prev = ListNode(0, None, curr)
 
    # create a new linked list node corresponding to the vertical line passing
    # through the root's right child, if not already.
    # This node would be the next pointer of the current list node
 
    if root.right and curr.next is None:
        curr.next = ListNode(0, curr, None)
 
    # recur for the left and right subtree
    updateDLLwithVerticalSum(root.left, curr.prev)
    updateDLLwithVerticalSum(root.right, curr.next)
 
 
# Function to find and print the vertical sum of a given binary tree
def printVerticalSum(root):
 
    # base case
    if not root:
        return
 
    # create a new linked list node corresponding to the vertical line passing
    # through the root node
    curr = ListNode(0, None, None)
 
    # calculate the vertical sum and store it in a doubly-linked list
    updateDLLwithVerticalSum(root, curr)
 
    # print the linked list
    printList(curr)
 
 
if __name__ == '__main__':
 
    ''' Construct the following tree
            1
          /   \
         /     \
        2       3
              /   \
             /     \
            5       6
          /   \
         /     \
        7       8
    '''
 
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)
    root.right.left = TreeNode(5)
    root.right.right = TreeNode(6)
    root.right.left.left = TreeNode(7)
    root.right.left.right = TreeNode(8)
 
    printVerticalSum(root)
 

Output:9 6 11 6
```
The time complexity of the above solution is O(n), where n is the total number of nodes in the binary tree. The auxiliary space required by the program is O(n) for linked list nodes.


