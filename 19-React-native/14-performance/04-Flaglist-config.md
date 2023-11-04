## Optimizing FlatList Config
In React Native, the FlatList component is used to efficiently display large lists of items. It’s crucial to optimize the FlatList configuration for better performance. Here are some important tips to help you optimize FlatList configurations:

[docs](https://reactnative.dev/docs/optimizing-flatlist-configuration)

1. Set windowSize
windowSize is a prop that determines the number of pages rendered above and below the current window. By default, this value is 21. You can decrease it based on your needs to reduce the number of off-screen rendered components.

Example:
```
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  windowSize={10}
/>
```
2. Set removeClippedSubviews
Enable the removeClippedSubviews prop to unmount components that are off the screen.

Example:
```
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  removeClippedSubviews={true}
/>
```
3. Set maxToRenderPerBatch
maxToRenderPerBatch prop helps to control the number of items to be rendered per batch. By default, this is set to 10. Optimize this value according to your list’s requirements.

Example:
```
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  maxToRenderPerBatch={5}
/>
```
4. Set initialNumToRender
initialNumToRender is used to set the number of items to be rendered initially. Setting this value to a reasonable number can help in avoiding blank screens on load.

Example:
```
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  initialNumToRender={10}
/>
```
5. Set getItemLayout
Using the getItemLayout prop allows you to specify the exact dimensions of each item. This prevents the need for measuring them dynamically, resulting in improved performance.

Example:
```
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  getItemLayout={(data, index) => (
    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  )}
/>
```