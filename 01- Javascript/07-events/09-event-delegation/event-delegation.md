Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received.

Event delegation makes use of two features of JavaScript events: event bubbling and the target element. When an event is triggered on an element, for example a mouse click on a button, the same event is also triggered on all of that element’s ancestors. This process is known as event bubbling. So in other words, When an event is fired from an element, the event will be bubbled up to its parent nodes.

### How Does Event Delegation Work?
With event delegation, instead of handling the click event on the button, you can handle it on the div.

The idea is that you "delegate" the handling of an event to a different element (in this case, the div, which is a parent element) instead of the actual element (the button) that received the event.
```js
const div = document.getElementsByTagName("div")[0]

div.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log("button was clicked")
  }
})
```

1. Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic.
