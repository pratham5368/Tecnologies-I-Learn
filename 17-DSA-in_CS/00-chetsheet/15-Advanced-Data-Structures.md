## Advanced Data Structures

Advanced data structures are an integral part of advanced programming. They include structures such as Binary Search Trees (BST), Balanced trees like AVL Trees, Red-Black Trees, Heap, Disjoint Data Set, Trie, Suffix Array, Suffix tree and others. BST is a node-based data structure where each node contains a key, a pointer to left child and a pointer to right child. AVL and Red-Black trees are self-balancing binary search trees. Disjoint set data structure supports union and find operations making them useful in computer vision for segmentation. Trie is an ordered tree structure used for faster retrievals, while Suffix Array and Suffix tree are data structures used in pattern matching algorithms. These structures offer an efficient way of manipulating and storing data.

## Trie

A Trie, also called digital tree and sometimes radix tree or prefix tree, is a type of search tree that is used to store a dynamic set or associative array where the keys are usually strings. Unlike binary search trees, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. All the descendants of any one node have a common prefix of the string associated with that node, and the root is associated with the empty string. A ‘trie’ is thus a way to represent the ‘retrieval’ of information and is a type of tree structure used for this purpose. Typical usage scenarios could be in storing a predictive text or autocomplete dictionary, such as found on your smartphone or search engine.

## Segment Tree

A Segment Tree is a data structure designed for efficient processing of range queries and updates on array elements. In a situation where you have an array and you need to execute several types of queries including updating array elements and computing sum or minimum or maximum of elements in a given range, segment trees could be a great choice. The tree itself is a height-balanced binary tree and is filled with data from the input array. The leaves of the Segment Tree contain the array elements, while the internal nodes store information needed for processing the query, often the sum, minimum, or maximum of the elements represented by their child nodes. Efficient implementation of segment trees can achieve query and update operations in logarithmic time.


## Fenwick Trees

Fenwick Trees, also known as Binary Indexed Trees, are data structures that can efficiently support the operation of updating elements and calculating prefix sums in a table of numbers. This makes it particularly useful in situations where the table gets updated often and different kinds of queries (such as sum of elements) need to be answered fast. A Fenwick Tree typically takes O(log n) time for both updation and query operations, which is more efficient than an array or a segment tree. It achieves this efficiency by storing partial sum information in the array. This allows for efficient calculation of sum ranges, with the operation of adding an element and getting the sum of a range both achieve in O(log n) time.


## Disjoint Set ( Union-Find )

A disjoint-set data structure, also called a union-find data structure or merge-find set, is a data structure that tracks a partition of a set into numerous non-overlapping subsets. It provides near-constant-time operations to add new sets, to merge existing sets, and to determine whether elements are in the same set. The underlying algorithm uses two main techniques, Union by Rank and Path Compression, to achieve the efficient time complexity. Each element is represented as a node, and each group of disjoint sets forms a tree structure. Disjoint sets are useful in multitude of graph algorithms like Kruskal’s algorithm and many more.

## Suffix Trees and Arrays

Suffix Trees and Arrays are advanced data structures used primarily for string manipulation and searches. A Suffix Tree is a compressed trie containing all the suffixes of a given text as their keys and positions as their values. On the other hand, a Suffix Array is a sorted array of all possible suffixes of a given text. Both these data structures provide an efficient way to store and search substrings in a text, but differ in terms of space complexity and time complexity.