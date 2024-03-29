## Balanced Search Trees
Balanced search trees are a type of data structure that allow for fast insertion, deletion, and lookup of data. They are a type of self-balancing binary search tree, which means that they are a binary tree that maintains the binary search tree property while also keeping the tree balanced. This means that the tree is always approximately balanced, which allows for fast insertion, deletion, and lookup of data.

## AVL Trees
AVL trees are a type of self-balancing binary search tree. They are named after their inventors, Adelson-Velskii and Landis. AVL trees are the most popular self-balancing binary search tree.

In practice: From what I can tell, these aren’t used much in practice, but I could see where they would be: The AVL tree is another structure supporting O(log n) search, insertion, and removal. It is more rigidly balanced than red–black trees, leading to slower insertion and removal but faster retrieval. This makes it attractive for data structures that may be built once and loaded without reconstruction, such as language dictionaries (or program dictionaries, such as the opcodes of an assembler or interpreter)

Visit the following resources to learn more:

## Red/Black Trees
In computer science, a red–black tree is a kind of self-balancing binary search tree. Each node stores an extra bit representing “color”, used to ensure that the tree remains balanced during insertions and deletions.

These are a translation of a 2-3 tree (see below).

In practice: Red–black trees offer worst-case guarantees for insertion time, deletion time, and search time. Not only does this make them valuable in time-sensitive applications such as real-time applications, but it makes them valuable building blocks in other data structures which provide worst-case guarantees; for example, many data structures used in computational geometry can be based on red–black trees, and the Completely Fair Scheduler used in current Linux kernels uses red–black trees. In the version 8 of Java, the Collection HashMap has been modified such that instead of using a LinkedList to store identical elements with poor hashcodes, a Red-Black tree is used.


## 2-3 Search Trees
In practice: 2-3 trees have faster inserts at the expense of slower searches (since height is more compared to AVL trees).

You would use 2-3 tree very rarely because its implementation involves different types of nodes. Instead, people use Red Black trees.

## 2-3-4 Search Trees
In practice: For every 2-4 tree, there are corresponding red–black trees with data elements in the same order. The insertion and deletion operations on 2-4 trees are also equivalent to color-flipping and rotations in red–black trees. This makes 2-4 trees an important tool for understanding the logic behind red–black trees, and this is why many introductory algorithm texts introduce 2-4 trees just before red–black trees, even though 2-4 trees are not often used in practice.

## N-ary (K-ary, M-ary) Trees
Note: the N or K is the branching factor (max branches)

Binary trees are a 2-ary tree, with branching factor = 2

2-3 trees are 3-ary

## B-Trees
Fun fact: it’s a mystery, but the B could stand for Boeing, Balanced, or Bayer (co-inventor).

In Practice: B-Trees are widely used in databases. Most modern filesystems use B-trees (or Variants). In addition to its use in databases, the B-tree is also used in filesystems to allow quick random access to an arbitrary block in a particular file. The basic problem is turning the file block i address into a disk block (or perhaps to a cylinder-head-sector) address