## Directives​
Directives are special attributes with the v- prefix. Vue provides a number of built-in directives, including v-html and v-bind which we have introduced above.

Directive attribute values are expected to be single JavaScript expressions (with the exception of v-for, v-on and v-slot, which will be discussed in their respective sections later). A directive's job is to reactively apply updates to the DOM when the value of its expression changes. Take v-if as an example:

template

``<p v-if="seen">Now you see me</p>``

Here, the v-if directive would remove / insert the ``<p>`` element based on the truthiness of the value of the expression seen.