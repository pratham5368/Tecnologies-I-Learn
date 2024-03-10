## Shortest Path Algos

Shortest Path Algorithms are a set of algorithms used in graph theory to find the shortest path between two vertices or nodes. The two most well-known algorithms are Dijkstra’s Algorithm and the Bellman-Ford Algorithm. Dijkstra’s Algorithm operates by visiting neighbors of the starting vertex and keeps a running tally of the shortest distance from the starting vertex to each visited vertex. This is repeated until all vertices have been visited and the shortest distances calculated. Bellman-Ford Algorithm, on the other hand, is capable of handling graphs with negative edges. It works by iteratively relaxing the graph edges and thereby finding the shortest paths to all vertices.


## Dijkstra’s Algorithm

Dijkstra’s algorithm is a popular method used in computing and graph theory for finding the shortest paths between nodes in a graph. Named after Dutch computer scientist Edsger W. Dijkstra, this algorithm works by visiting vertices in the graph starting from the object’s starting point and gradually spreading out until the shortest path to the desired endpoint is known. This algorithm is applicable in such situation where all the edges are non-negative. Linear data structures such as stacks and queues are commonly used in the implementation of this algorithm. Although its worst-case time complexity appears to be high (O(|V|^2)), it runs significantly faster in practice.



## Bellman-Ford

The Bellman Ford algorithm is a method used in graph theory for finding the shortest path between a single source vertex and all other vertices in a weighted graph. This algorithm is significant because it is capable of handling graphs with negative weight edges, unlike Dijkstra’s algorithm. It follows a bottom-up approach, filling up the distance table gradually while relaxing edges. The algorithm gets its name from its developers, Richard Bellman and Lester Ford. However, it can lead to an infinite loop if there are negative weight cycles in the graph, which should be addressed separately using another check.



