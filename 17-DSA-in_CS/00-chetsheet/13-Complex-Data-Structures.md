## Complex Data Structures

Complex data structures are advanced structures that are used for storing and organizing data in a more specialized way to manage larger amounts of data more effectively. These include Trees, Graphs, Hash Tables, and Heaps. Trees allow for hierarchical data structures and can be utilized in many ways like Binary Trees, AVL Trees etc. Graphs are networks consisting of nodes or vertices, connected by edges. Hash Tables use a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. Heaps are a special case of a binary tree where the parent nodes are compared to their children with specific rules.


## B/B+ Trees

B trees and B+ trees are both types of self-balancing, sorted, tree-based data structures that maintain sorted data in a way that allows for efficient insertion, deletion, and search operations. A B tree is a tree data structure in which each node has multiple keys and can be in more than two children nodes. Each internal node in a B tree can contain a variable number of keys and pointers. The keys act as separation values which divide its subtrees. One important aspect of a B tree is that every key in the node also appears in the parent node. On the other hand, a B+ tree is an extension of a B tree which allows for efficient traversal of data. In a B+ tree, data pointers are stored only at the leaf nodes of the tree, making every leaf node of a B+ tree a linked list. The intermediary nodes only use the keys to aid with the search.


## Skip List

A Skip List is a probabilistic data structure that allows efficient search, insertion, and removal operations. It is a layered list that consists of a base list holding all the elements and several lists layered on top, each layer containing a random subset of the elements from the layer below. The highest level contains only one element, the maximum. Every element in the lists is connected by a link to the element of the same value in the list below. This structure provides a balance between the speed of binary search trees and the ease of implementation of linked lists, providing an efficient means for storing data while allowing fast retrieval, even within large sets of data.

## ISAM  ( Indexed Sequential Access Method )
ISAM, which stands for Indexed Sequential Access Method, is a type of disk storage access method developed by IBM. It combines features of both sequential and direct access methods to store and retrieve data. ISAM primarily organizes data sequentially but creates an index to provide direct access to the data blocks. This index allows for quick retrieval of data records, improving efficiency and performance. A key feature of ISAM is that it maintains the data sequence even after insertions and deletions, ensuring that the data remains ordered for efficient processing.

