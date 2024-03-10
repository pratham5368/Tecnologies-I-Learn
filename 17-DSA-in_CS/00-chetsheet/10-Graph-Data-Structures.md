## Graph Data Structure

A Graph Data Structure consists of a set of vertices (or nodes) and edges where each edge connects a pair of vertices. It can be visualized as networks consisting of elements in interconnected various relationships. There are two major types of graphs: Directed and Undirected. In a directed graph, all the edges are unidirectional - they only go one way. On the other hand, in an undirected graph, the edges are not directed - they are bidirectional. Another concept important to graphs is the idea of ‘Weighted’ and ‘Unweighted’ graphs. In a weighted graph, each edge is assigned a weight or cost. Unweighted graphs don’t have these extra edge information. Graphs have a diverse set of applications in computer science, from creating connections between web pages to modeling networks and much more.

## Directed Graph

A Directed Graph, also known as a DiGraph, is a set of vertices and a collection of directed edges. Each directed edge has an initial vertex, also called the tail, and a terminal vertex, also known as the head. The directed edge is said to point from the tail to the head. To visualize this, think of a graph where the nodes are cities and the edges are one-way roads. Directed graphs are often used to represent relationships between objects where direction does matter, such as a sequence of events in a workflow.

## Undirected Graph

An Undirected Graph is a type of graph in which the edges are not directed. That is, they do not point in any specific direction and are not ordered pairs. They cannot be referred to as originating or ending node, instead, they are endpoints of the edges. In this type of graph, the edges essentially represent a two-way relationship, in the sense that, a travel can be made back and forth between the two vertices without any restriction. Every edge of the undirected graph always connects two different vertices or nodes.



## Search Algorithm
Search algorithms are fundamental techniques used for exploring a graph. Two classical methods are Depth-First Search (DFS) and Breadth-First Search (BFS). DFS relies on a stack and the concept of backtracking. Starting from a given node, it explores as far down a path as possible before backtracking. BFS, on the other hand, uses a queue and visits all of a node’s neighbors at one level before moving on to the next. For discovering the shortest path between two nodes, Dijkstra’s algorithm and the A* search algorithm are often used. Dijkstra’s algorithm builds up a table that provides the shortest distances to each reachable node from a selected starting node. A search algorithm*, a modification of Dijkstra’s algorithm, uses a heuristic to provide a best estimate of the path from the current node to the goal, thus often increasing the algorithm’s efficiency.

### Breadth First Search

Breadth-First Search (BFS) is a searching algorithm used to traverse or search in data structures like a tree or a graph. The algorithm starts with a root node and visits the nodes in a level by level manner (i.e., visiting the ones nearest to the root first). It makes use of a queue data structure to store nodes not yet visited. A check is performed before nodes are put in the queue. This is to ensure same node is not visited twice. BFS can be used in multiple areas like finding shortest paths, serialized tree or in test case scenarios where all vertices are equally important.


## Depth First Search

Depth-First Search (DFS) is an algorithm used for traversing or searching tree or graph data structures. The process starts at the root node (selecting some arbitrary node as the root in the case of a graph), and explores as far as possible along each branch before backtracking. It uses a last in, first out (LIFO) stack to remember to get the next vertex to start a search when a dead end occurs in any iteration. DFS has been used in a variety of applications including finding connected components, topological sorting, and finding articulation points (or cut vertices) in a graph.


 