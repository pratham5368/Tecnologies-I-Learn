## Generate binary numbers between 1 to `n` using a queue
For example, for n = 16, the binary numbers are:

1 10 11 100 101 110 111 1000 1001 1010 1011 1100 1101 1110 1111 10000

```py
from collections import deque
 
 
# Function to generate binary numbers between 1 and `n` using the
# queue data structure
def generate(n):
 
    # create an empty queue and enqueue 1
    q = deque()
    q.append('1')
 
    # run `n` times
    for i in range(n):
        # remove the front element
        front = str(q.popleft())
 
        # append 0 and 1 to the front element of the queue and
        # enqueue both strings
        q.append(front + '0')
        q.append(front + '1')
 
        # print the front element
        print(front, end=' ')
 
 
if __name__ == '__main__':
 
    n = 16
    generate(n)
 

# Output: 1 10 11 100 101 110 111 1000 1001 1010 1011 1100 1101 1110 1111 10000
```