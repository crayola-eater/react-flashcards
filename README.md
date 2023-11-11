# React Flashcards

An example React application used to introduce React fundamentals (such as JSX, components, state and props).

![Component tree with props and state](/component-tree.png)

```js
// React: Building UIs

// Component:
//    - Reusable piece of the UI
//    - Functions starts with a capital letter
//    - Return some JSX (or anything that React can render)

// JSX:
//    - Language for expressing UIs (similar to HTML and lets you insert things from your JavaScript code)
//    - Gets converted from JSX to regular JS code

// Props:
//    Input to a component (just like how functions can take input)
//    Passed from parent to child in key={value} pairs
//    Child can then extract values from the props object

// State:
//    Like a special "React variable". You can use it to remember/keep track of things and give it a new value
//    It's special because it's "reactive": when you change the variable's value, the UI updates (to keep in sync with new changes)

// useState:
//    A function for creating state
//    Returns an array containing 2 things:
//      current value of that reactive variable
//      a way to change that reactive variable

// Callback pattern:
//    Pass something a function
//    That something will call your function with a predefined set of arguments (in a specific order)
//    Your function can optionally use the arguments
//    Your function can call its parameters what it likes
//    It usually matters what your function returns
```
