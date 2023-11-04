## Layouts in React Native
In React Native, layouts are primarily managed using the Flexbox styling system. Flexbox is a powerful and flexible layout system that allows you to create responsive and complex UIs using a set of simple rules.

[docs](https://reactnative.dev/docs/flexbox)

### Flexbox
Flexbox consists of three key elements: the container, main axis, and cross axis.

- The container is the parent flex container that holds and distributes all the child elements.
- The main axis is the primary direction of the layout (horizontal or vertical).
- The cross axis is the perpendicular direction, opposite of the main axis.

Here are some of the most commonly used Flexbox styles:

- `flexDirection`: This style specifies the primary axis using four possible values: row, row-reverse, column, or column-reverse.
```
<View style={{flexDirection: 'row'}}>
  <Text>First child</Text>
  <Text>Second child</Text>
</View>
```
- `alignItems`: This style is used to align the child items along the cross-axis. It uses the values flex-start, flex-end, center, stretch, or baseline.
```
<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <Text>First child</Text>
  <Text>Second child</Text>
</View>
```
- `justifyContent`: This style is used to align the child items along the main axis. It accepts the values flex-start, flex-end, center, space-between, or space-around.
```
<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
  <Text>First child</Text>
  <Text>Second child</Text>
</View>
```
- `flexWrap`: Set to either wrap or nowrap to specify if child items should wrap around to the next line when there’s not enough space on the current line.
```
<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
  <Text>First child</Text>
  <Text>Second child</Text>
  <Text>Third child</Text>
</View>
```
- `flex`: This style determines how the child items grow or shrink when there’s remaining space in the container. It’s a shorthand for flex-grow, flex-shrink, and flex-basis.
```
<View style={{flexDirection: 'row'}}>
  <Text style={{flex: 1}}>First child</Text>
  <Text style={{flex: 2}}>Second child</Text>
</View>
```