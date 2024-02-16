## Components
Components allow us to split the UI into independent and reusable pieces, and think about each piece in isolation.

[docs](https://vuejs.org/guide/essentials/component-basics.html)

[more](https://vuejs.org/guide/components/registration.html)

## Single File Components
Vue Single-File Components (a.k.a. *.vue files, abbreviated as SFC) is a special file format that allows us to encapsulate the template, logic, and styling of a Vue component in a single file.

[docs](https://vuejs.org/guide/scaling-up/sfc.html)

## Component Registration
A Vue component needs to be “registered” so that Vue knows where to locate its implementation when it is encountered in a template. There are two ways to register components: global and local.



[Component Registration](https://vuejs.org/guide/components/registration.html)

## Props
If we are building a blog, we will likely need a component representing a blog post. We want all the blog posts to share the same visual layout, but with different content. Such a component won’t be useful unless you can pass data to it, such as the title and content of the specific post we want to display. That’s where props come in.

Props are custom attributes you can register on a component.

- [Props Basics](https://vuejs.org/guide/essentials/component-basics.html#passing-props)
- [Props in Depth](https://vuejs.org/guide/components/props.html)
## Events
As we develop our applications we may need to communicate with the parent component in order to notify of some actions e.g. when a user clicks on a button. In order to do this we need to use events.


[Listening to Events](https://vuejs.org/guide/essentials/component-basics.html#listening-to-events)
[Events in Detail](https://vuejs.org/guide/components/events.html)
## Attribute Inheritance
Attribute inheritance aka “fallthrough attributes” is a feature of Vue.js that allows you to inherit attributes from a parent component.

Visit the following resources to learn more:

[Fallthrough Attributes](https://vuejs.org/guide/components/attrs.html)