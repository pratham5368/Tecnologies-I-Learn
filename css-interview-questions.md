## 1. 4 ways to center content with CSS

### Flexbox
Using flexbox to vertically and horizontally center content is usually the preferred method. All it takes is three lines of code in the container element to set display: flex and then center the child element vertically and horizontally using align-items: center and justify-content: center respectively. You can view the Flexbox centering snippet for the code and examples.

### Grid
Using the grid module is very similar to flexbox and also a common technique, especially if you are already using grid in your layout. The only difference from the previous technique is the display which is set to grid instead. You can view the Grid centering snippet for the code and examples.

### Transform
Transform centering uses, as the name implies, CSS transforms to center an element. It depends on the container element having a position: relative, allowing the child element to utilize position: absolute to position itself. Then left: 50% and top: 50% are used to offset the child element and transform: translate(-50%, -50%) to negate its position. You can view the Transform centering snippet for the code and examples.

### Table
Last but not least, table centering is an older technique which you might favor when working with older browsers. It depends on the use of display: table in the container element. This allows the child element to use display: table-cell in combination with text-align: center and vertical-align: middle to center itself horizontally and vertically. You can view the Display table centering snippet for the code and examples.

## 2. Container
1. display: flex or display: inline-flex: creates a flex context (or an inline flex context) for direct children of this element
2. flex-direction determines the main and cross axis for the container, valid values are:
- row (default): horizontal, in the direction of writing (left to right for English)
- row-reverse: horizontal, in the opposite direction of writing (right to left for English)
- column: vertical, top to bottom
- column-reverse: vertical, bottom to top
3. flex-wrap determines if flex items will try to fit in one line, valid values are:
- nowrap (default): all flex items will be on one line
- wrap: flex items will wrap onto multiple lines, top to bottom
- wrap-reverse: flex items will wrap onto multiple lines, bottom to top
4. flex-flow: shorthand combining flex-direction and flex-wrap
- Formal syntax: flex-flow: <'flex-direction'> || <'flex-wrap'>
5. justify-content defines the alignment along the main axis, valid values are:
- flex-start (default): pack flex items from the start
- flex-end: pack flex items from the end
- start: pack items from the start
- end: pack items from the end
- left: pack items from the left
- right: pack items from the right
- center: pack items around the center
- space-around: distribute items evenly with equal space around them
- space-between: distribute items evenly with equal space between them
- space-evenly: distribute items evenly, ensuring equal space between any two items
- stretch: distribute items evenly, stretching auto-sized items to fit the container
6. align-items defines the alignment along the cross axis, valid values are:
- flex-start (default): pack flex items from the start
- flex-end: pack flex items from the end
- start: pack items from the start
- end: pack items from the end
- center: pack items around the center
- baseline: align items based on their baselines
- stretch: stretch items to fill the container
7. align-content defines the alignment of extra space along the cross axis, valid values are:
- flex-start (default): pack flex items from the start
- flex-end: pack flex items from the end
- start: pack items from the start
- end: pack items from the end
- center: pack items around the center
- space-around: distribute items evenly with equal space around them
- space-between: distribute items evenly with equal space between them
- space-evenly: distribute items evenly, ensuring equal space between any two items
- stretch: distribute items evenly, stretching auto-sized items to fit the container

![](https://www.30secondsofcode.org/assets/illustrations/flexbox-diagram.png)

## Items
1. flex-grow determines how much the item can grow if necessary
- Accepts a single positive number (unitless), default value is 0
- Specifies how much of the remaining space in the flex container should be assigned to the item
- The remaining space is the size of the flex container minus the size of all flex items' sizes together
- If all items have the same flex-grow, all items will receive an equal share of the remaining space
- If not all items have the same flex-grow, the remaining space is distributed according to the ratio defined by these values
2. flex-shrink determines how much the items can shrink if necessary
- Accepts a single positive number (unitless), default value is 1
- If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink
3. flex-basis determines the initial size of a flex item before the remaining space is distributed
- Can use any valid width value, intrinsic size values, auto (default) or content
- auto means "look at my width or height property", whereas content is used for automatic sizing
4. flex: shorthand combining flex-grow, flex-shrink and flex-basis
- Formal syntax: flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
5. align-self allows the item to override the default align-items specified by the container
- Valid values are the same as those of the align-items property in the container
6. order determines the ordering of the item
- Accepts an integer value
- Items in a container are sorted by ascending order value and then by their source code order
- Might cause accessibility issues if used incorrectly

## CSS easing variables
Most web developers use the built-in ease, ease-in, ease-out or ease-in-out functions for most use-cases of transition-timing-function in their designs. While these are perfectly fine for everyday use, there's a far more powerful, yet intimidating option available, the bezier-curve() function.

Using the bezier-curve() we can easily define custom easing variables that can help our designs pop out. In fact the built-in functions mentioned above can also be written using the bezier-curve() function. Here's a handful of useful easing functions stored in CSS variables for ease of use:
```
:root {
  /* ease-in corresponds to cubic-bezier(0.42, 0, 1.0, 1.0) */
  --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  --ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  --ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  --ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.335);

  /* ease-out corresponds to cubic-bezier(0, 0, 0.58, 1.0) */
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
  --ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);

  /* ease-in-out corresponds to cubic-bezier(0.42, 0, 0.58, 1.0) */
  --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);
  --ease-in-out-expo: cubic-bezier(1, 0, 0, 1);
  --ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
```

## Use clamp() in CSS for responsive typography
Responsive typography has been in fashion for a while now, but some developers find it hard to implement. This is usually due to confusing algebraic formulas or complex hacks. Luckily, CSS has introduced the clamp() function, which makes it easy to create responsive typography with a single line of code. All you need to do is set the minimum, maximum, and preferred value and the browser will do the rest.

## Typographic scale basics
CSS, Web development, Typography · Nov 7, 2021
Building a typographic scale might seem hard. Yet it's not all that difficult, as long as you learn some basic techniques and principles.

The first steps are to pick a font family, a starting value for the font size and a ratio which will serve as the scaling factor. Common values for these variables are the Roboto font family, a great choice due to its many different font weights, a starting font size of 18px and a ratio of 1.618, which is the golden ratio.

Based on these values, the basis of our typographic scale is an element with font-size: 18px and line-height: 1.618. Notice that the ratio is also applied to the line height. This allows the text to breathe a little more and makes it easier to read, while creating a consistent vertical rhythm.

Next, we are going to apply our ratio to scale the font up or down, as necessary. For example, we can multiply once by 1.618 for a sub heading, twice for a normal heading and three times for a large heading (e.g. our website's name on the home page). Similarly, we can scale the font down by dividing by our ratio to make elements less visually important (e.g. footnotes).

While this gives us a pretty solid setup, some elements might not look properly emphasized. To deal with this, we can use font weight to increase or decrease the visual importance of some elements. We could, for example, make headings bolder to make them more important. We could also make footnotes slightly bold to emphasize them as their font size is very small and they might get overlooked.

Putting it all together, we should end up with a typographic scale that looks similar to this:

Typographic scale example
```
:root {
  --font-family: 'Roboto', sans-serif;
  --font-size: 18px;
  --font-weight: 300;
  --line-height: 1.618;
}

* {
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  line-height: var(--line-height);
}

.sub-heading {
  --font-size: 1.618rem;
  --font-weight: 600;
}

.heading {
  --font-size: 2.618rem;
  --font-weight: 400;
}

.large-heading {
  --font-size: 4.236rem;
  --font-weight: 500;
}

.footnote {
  --font-size: 0.618rem;
  --font-weight: 500;
}
```

## CSS units Cheat Sheet

- px: Absolute pixel value
- rem: Relative to the font-size of the root element
- em: Relative to the font-size of the element
- %: Relative to the parent element
- vw: Relative to the viewport's width, 1vw = 1% * viewport width
- vh: Relative to the viewport's height, 1vh = 1% * viewport height
- vmin: Relative to the viewport's smaller dimension, 1vmin = min(1vh, 1vw)
- vmax: Relative to the viewport's larger dimension, vmax = max(1vh, 1vw)
- ch: Relative to the width of the glyph "0" of the element's font
- in: Inches 1in = 2.54cm = 96px
- pc: Picas 1pc = 1in / 6 = 16px
- pt: Points 1pt = 1in / 72 = 1.333px (approximately)
- cm: Centimeters 1cm = 96px / 2.54 = 37.8px (approximately)
- mm: Millimeters 1mm = 1cm / 10 = 3.78px (approximately)