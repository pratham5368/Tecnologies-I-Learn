## Trapping Rain Water Problem
Trapping rainwater problem: Find the maximum amount of water that can be trapped within a given set of bars where each bar’s width is 1 unit.

Input: An array containing height of bars {7, 0, 4, 2, 5, 0, 6, 4, 0, 5}

![](https://www.techiedelight.com/wp-content/uploads/Rain-Water-Trapping-Bars.png)

```

# Function to find the amount of water that can be trapped within
# a given set of bars in linear time and constant space
def trap(heights):
 
    # maintain two pointers left and right, pointing to the leftmost and
    # rightmost index of the input list
    (left, right) = (0, len(heights) - 1)
    water = 0
 
    maxLeft = heights[left]
    maxRight = heights[right]
 
    while left < right:
        if heights[left] <= heights[right]:
            left = left + 1
            maxLeft = max(maxLeft, heights[left])
            water += (maxLeft - heights[left])
        else:
            right = right - 1
            maxRight = max(maxRight, heights[right])
            water += (maxRight - heights[right])
 
    return water
 
 
if __name__ == '__main__':
 
    heights = [7, 0, 4, 2, 5, 0, 6, 4, 0, 5]
    print("The maximum amount of water that can be trapped is", trap(heights))
 
```