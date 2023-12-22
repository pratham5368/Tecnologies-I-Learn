## Find k’th largest element in an array
```
Input: arr = [7, 4, 6, 3, 9, 1]
k = 2 
Output: The 2nd largest array element is 7

```
### Using Min Heap
We can easily solve this problem in O(n.log(k)) by using a min-heap. The idea is to construct a min-heap of size k and insert the first k elements of array A[0…k-1] into the min-heap. Then for each of the remaining array elements A[k…n-1], if that element is more than the min-heap’s root, replace the root with the current element. Repeat this process until the array is exhausted. Now we will be left with top k largest array elements in the min-heap, and k'th largest element will reside at the root of the min-heap.
```
import heapq
 
# Function to find the k'th largest element in a list using min-heap
def find_kth_largest(ints, k):
 
    # base case
    if not ints or len(ints) < k:
        exit(-1)
 
    # build a min-heap from the first `k` elements in the list
    pq = ints[0:k]
    heapq.heapify(pq)
 
    # do for remaining list elements
    for i in range(k, len(ints)):
        # if the current element is more than the root of the heap
        if ints[i] > pq[0]:
            # replace root with the current element
            heapq.heapreplace(pq, ints[i])
 
    # return the root of min-heap
    return pq[0]
 
 
if __name__ == '__main__':
 
    ints = [7, 4, 6, 3, 9, 1]
    k = 2
 
    print('k\'th largest element in the list is', find_kth_largest(ints, k))
```
### Using Max Heap
We can easily solve this problem in O(n + k.log(n)) by using a max-heap. The idea is to simply construct a max-heap of size n and insert all the array elements [0…n-1] into it. Then pop first k-1 elements from it. Now k'th largest element will reside at the root of the max-heap.
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
 
 
# Function to find the k'th largest element in a list using max-heap
def find_kth_largest(ints, k):
 
    # base case
    if not ints or len(ints) < k:
        exit(-1)
 
    # build a max-heap from all elements in the list
    pq = MaxHeap(ints)
 
    # pop from max-heap exactly `k-1` times
    while k > 1:
        pq.pop()
        k = k - 1
 
    # return the root of max-heap
    return pq.top()
 
 
if __name__ == '__main__':
 
    ints = [7, 4, 6, 3, 9, 1]
    k = 2
 
    print('k\'th largest element in the list is', find_kth_largest(ints, k))
```