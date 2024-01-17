## Print top view of a binary tree
![](https://www.techiedelight.com/wp-content/uploads/Horizontal-distance-vs-Level-Binary-Tree.png)

```
# A class to store a binary tree node
class Node:
    def __init__(self, key=None, left=None, right=None):
        self.key = key
        self.left = left
        self.right = right
 
 
# Recursive function to perform preorder traversal on the tree and fill the dictionary.
# Here, the node has `dist` horizontal distance from the tree's root,
# and the level represents the node's level.
def printTop(root, dist, level, d):
 
    # base case: empty tree
    if root is None:
        return
 
    # if the current level is less than the maximum level seen so far
    # for the same horizontal distance, or if the horizontal distance
    # is seen for the first time, update the dictionary
    if dist not in d or level < d[dist][1]:
        # update value and level for current distance
        d[dist] = (root.key, level)
 
    # recur for the left subtree by decreasing horizontal distance and
    # increasing level by 1
    printTop(root.left, dist - 1, level + 1, d)
 
    # recur for the right subtree by increasing both level and
    # horizontal distance by 1
    printTop(root.right, dist + 1, level + 1, d)
 
 
# Function to print the top view of a given binary tree
def printTopView(root):
 
    # create a dictionary where
    # key —> relative horizontal distance of the node from the root node, and
    # value —> pair containing the node's value and its level
    d = {}
 
    # perform preorder traversal on the tree and fill the dictionary
    printTop(root, 0, 0, d)
 
    # traverse the dictionary in sorted order of keys and print the top view
    for key in sorted(d.keys()):
        print(d.get(key)[0], end=' ')
 
 
if __name__ == '__main__':
 
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.right = Node(4)
    root.right.left = Node(5)
    root.right.right = Node(6)
    root.right.left.left = Node(7)
    root.right.left.right = Node(8)
 
    printTopView(root)
 

Output:2 1 3 6
```
The time complexity of the above solution is O(n.log(n)) and requires O(n) extra space, where n is the size of the binary tree.
