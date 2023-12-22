## Find k’th smallest element in an array
```
Input: 
arr = [7, 4, 6, 3, 9, 1]
k = 3 
Output: k’th smallest array element is 4
```
### Using Max Heap
We can easily solve this problem in O(n.log(k)) time by using a max-heap, where n is the size of the input. The idea is to simply construct a max-heap of size k and insert the first k elements of array [0…k-1] into the max-heap. Then for each of the remaining array elements [k…n-1], if that element is less than the heap’s root, replace the root with the current element. Repeat this process till the array is exhausted. Now, we will be left with k smallest array elements in the max-heap, and k'th smallest element will reside at the root of the max-heap.
```
import heapq
 
 
# A simple implementation of max-heap based on `heapq`
class MaxHeap:
 
    def __init__(self, data=None):
        if data is None:
            self.data = []
        else:
            self.data = [-i for i in data]
            heapq.heapify(self.data)
 
    def top(self):
        return -self.data[0]
 
    def push(self, item):
        heapq.heappush(self.data, -item)
 
    def pop(self):
        return -heapq.heappop(self.data)
 
    def replace(self, item):
        return heapq.heapreplace(self.data, -item)
 
 
# Function to find the k'th smallest element in a list using max-heap
def find_kth_smallest(input, k):
 
    # base case
    if not input or len(input) < k:
        exit(-1)
 
    # build a max-heap from the first `k` elements in the list
    pq = MaxHeap(input[0:k])
 
    # do for remaining list elements
    for i in range(k, len(input)):
        # if the current element is less than the root of the heap
        if input[i] < pq.top():
            # replace root with the current element
            pq.replace(input[i])
 
    # return the root of max-heap
    return pq.top()
 
 
if __name__ == '__main__':
 
    input = [7, 4, 6, 3, 9, 1]
    k = 3
 
    print('k\'th smallest element in the list is', find_kth_smallest(input, k))
```
### Using Min Heap
We can easily solve this problem in O(n + k.log(n)) by using a min-heap. The idea is to construct a min-heap of size n and insert all the array elements input[0…n-1] into it. Then pop first k-1 elements from it. Now k'th smallest element will reside at the root of the min-heap.
```
import heapq
from heapq import heappop
 
 
# Function to find the k'th smallest element in a list using min-heap
def find_kth_smallest(input, k):
 
    # base case
    if not input or len(input) < k:
        exit(-1)
 
    # transform the input list into a min-heap
    heapq.heapify(input)
 
    # pop from min-heap exactly `k-1` times
    while k > 1:
        heappop(input)
        k = k - 1
 
    # return the root of min-heap
    return input[0]
 
 
if __name__ == '__main__':
 
    input = [7, 4, 6, 3, 9, 1]
    k = 3
 
    print('k\'th smallest element in the list is', find_kth_smallest(input, k))
```