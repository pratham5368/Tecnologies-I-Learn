## Indexing

Indexing is a data structure technique to efficiently retrieve data from a database. It essentially creates a lookup that can be used to quickly find the location of data records on a disk. Indexes are created using a few database columns and are capable of rapidly locating data without scanning every row in a database table each time the database table is accessed. Indexes can be created using any combination of columns in a database table, reducing the amount of time it takes to find data.

Indexes can be structured in several ways: Binary Tree, B-Tree, Hash Map, etc., each having its own particular strengths and weaknesses. When creating an index, it’s crucial to understand which type of index to apply in order to achieve maximum efficiency. Indexes, like any other database feature, must be used wisely because they require disk space and need to be maintained, which can slow down insert and update operations.


## Linear Indexing

Linear indexing is a type of data structure method where each element of an array is indexed successively in a linear format. This method treats multi-dimensional arrays as a long vector and provides a simple way to traverse through all the elements of the array in a sequence without the need for multiple loop statements. For instance, in a 2D array, the first index refers to rows and the second to columns. Using linear indexing, elements are indexed from top left to bottom right moving row by row. Despite its simplicity, this method is often less efficient than other forms of indexing for multidimensional arrays.


## Tree-Based Indexing

Tree-based indexing involves using data structures that follow a tree-like model, with parent nodes, child nodes, and leaf nodes in a hierarchical order. Two popular tree-based indexing methods are B-tree and B+ tree. In a B-tree index, every data record is associated with a leaf node, while internal nodes can be linked to a number of lower nodes within a certain range. On the other hand, B+ tree index structure makes all records reside at the leaf level, with the internal nodes only containing key values. The path from the root to every leaf node in both B-tree and B+ tree is the same length, which allows for efficient and consistent retrieval times.


