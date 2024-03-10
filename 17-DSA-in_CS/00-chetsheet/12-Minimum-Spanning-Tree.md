## Minimum Spanning Tree

A Minimum Spanning Tree (MST) is a concept in graph theory where it represents a subset of the edges of a connected, undirected graph. This subset connects all the vertices together, without any cycles and with the minimum possible total edge weight. There are quite a few algorithms that can be used to find the MST of a graph such as Prim’s, Kruskal’s, and Boruvka’s algorithm. The concept is important in network design, where the goal is to minimize the total length of the wires yet still connect all of the points.

## Prim's Algorithm

Prim’s algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. This means it finds a subset of the edges that forms a tree that includes every vertex, where the total weight of all the edges in the tree is minimized. The algorithm operates by building this tree one vertex at a time, from an arbitrary starting vertex, at each step adding the cheapest possible connection from the tree to another vertex.

## Kruskal's Algorithm

Kruskal’s algorithm is a popular procedure in computer science for finding minimum spanning trees in a graph, developed by Joseph Kruskal in 1956. The algorithm operates by sorting the edges of the graph by their weight in ascending order. Then, it loops through each, adding the edge to the spanning tree if it doesn’t form a circuit with the edges already there. This process repeats until all the vertices in the graph are included in the tree. Kruskal’s algorithm belongs to the group of Greedy Algorithms as it tries to find the local optimum at each stage with the hope of finding the global optimum. It has an overall time complexity of O(E log E) or O(E log V), where E is the number of edges and V is the number of vertices.