## 1. What is VueJS?
Vue.js is an open-source, progressive Javascript framework for building user interfaces that aim to be incrementally adoptable. The core library of VueJS is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.


### Below are the some of major features available with VueJS

- Virtual DOM: It uses virtual DOM similar to other existing frameworks such as ReactJS, Ember etc. Virtual DOM is a light-weight in-memory tree representation of the original HTML DOM and updated without affecting the original DOM.
- Components: Used to create reusable custom elements in VueJS applications.
- Templates: VueJS provides HTML based templates that bind the DOM with the Vue instance data
- Routing: Navigation between pages is achieved through vue-router
- Light weight: VueJS is light weight library compared to other frameworks.
![](https://github.com/sudheerj/vuejs-interview-questions/raw/master/images/lifecycle.png)

## 2. What are the conditional directives?
VueJS provides set of directives to show or hide elements based on conditions. The available directives are: v-if, v-else, v-else-if and v-show

1. v-if: The v-if directive adds or removes DOM elements based on the given expression. For example, the below button will not show if isLoggedIn is set to false.
```
<button v-if="isLoggedIn">Logout</button>
```
You can also control multiple elements with a single v-if statement by wrapping all the elements in a ```<template>``` element with the condition. For example, you can have both label and button together conditionally applied,
```
<template v-if="isLoggedIn">
  <label> Logout </button>
  <button> Logout </button>
</template>
```
2. v-else: This directive is used to display content only when the expression adjacent v-if resolves to false. This is similar to else block in any programming language to display alternative content and it is preceded by v-if or v-else-if block. You don't need to pass any value to this. For example, v-else is used to display LogIn button if isLoggedIn is set to false(not logged in).
```
<button v-if="isLoggedIn"> Logout </button>
<button v-else> Log In </button>
```
3. v-else-if: This directive is used when we need more than two options to be checked. For example, we want to display some text instead of LogIn button when ifLoginDisabled property is set to true. This can be achieved through v-else statement.
```
<button v-if="isLoggedIn"> Logout </button>
<label v-else-if="isLoginDisabled"> User login disabled </label>
<button v-else> Log In </button>
```
4. v-show: This directive is similar to v-if but it renders all elements to the DOM and then uses the CSS display property to show/hide elements. This directive is recommended if the elements are switched on and off frequently.
```
<span v-show="user.name">Welcome user,{{user.name}}</span>
```
## 3. few important one
- What is the purpose of v-for directive?

The built-in v-for directive allows us to loop through items in an array or object. You can iterate on each element in the array or object.

- What is vue instance?

Every Vue application works by creating a new Vue instance with the Vue function. Generally the variable vm (short for ViewModel) is used to refer Vue instance. You can create vue instance as below,
```
var vm = new Vue({
  // options
})
```
- /*have to write above 11

 