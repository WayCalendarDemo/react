## Component Lifecycle

Lifecycle
Refers to all the different stages of a component from its birth till its death.
There are three different stages for a component:
1. mounting
    The component appearing on the screen (starting to exist)
2. updating
    When changes happen in the component and the UI changes depending on prop, etc changes.
3. unmounting
    The component stops appearing on the screen (ceases to exist)

Example project
A state called 'showText' with a Boolean state.
There is a component called Text and a button that when clicked changes the state's boolean to the opposite of what it currently is.
The text is in a ternary operator that will only show the Text component when true
```
{showText && <Text />}
```
UI
On page load, there is a single button, when the button is clicked, an input field appears.
Whatever you type into the input will appear in an h1 tag below it.

This functionality demonstrates the three states:
When the page first loads, the Text component doesn't exist on the screen or in the DOM.
When you click on the Show Text button, the Text component is mounted (is added to the DOM and is visible)
When you type text into the input, the h1 tag is updated to show the current value of the input element
WHen you click on the Show Text button again, the Text component is completely removed from the DOM and UI.

## useEffect Hook (the useEffect function)

This is the second most important hook after useState there are.
Although some projects may not use useState, (nearly) all projects use the useEffect hook
The useEffect hook controls what happens to the component based on the stage it is in.

```
import {useState, useEffect} from "react";
```

Using the useEffect hook, you can create an action that will be triggered when the component is mounting, updating or unmounting.

How to use the useEffect

The syntax below is the useEffect() with an anyonymous function inside of it () => {}.
By default, any code within the anonymous function will be executed during the mounting stage, it will execute each time the component is mounted.
It will actually be called everytime there is a state change (mount, updating BUT not unmount)
The place you put it is in the component file inside the Text function before the return statement (the same place you would
put a useState)

```
    useEffect(() => {
        
    })
```

Use cases:
When you want to make an API call before showing the component

To specify that the useEffect code only triggers during a certain stage or only when a certain variable changes, 
do it like below:
```
    useEffect(() => {
        console.log('mounted');
    }, []);
```
You specify the states you want to listen for in the array (square parenthesis).
You can specify states and/ or props.
NOTE: If you leave it blank, the useEffect will only fire during the mounting stage.

Executing code during the unmount stage
This is different from the above, which only fires on the mount and updating stages.
To execute code during the unmount stage, you need to return a function within the anonymous function
```
useEffect(() => {
    console.log('mounted');
    return () => {
        console.log('unmount');
    }
}, []);
```

Use case:
When an API call finishes, you can clear the API fetch request.

NOTE:
If you put a console log in the useEffect function, you will notice that it console logs twice, the reason is
because of the <React.StrictMode> located in the index.js file


## React StrictMode

You will notice that when strict mode is enabled (in index.js) that console logs occur twice.

Strict mode helps keep track of the programming rules that come with Reactjs.
It prevents you from making mistakes so if strict mode is preventing from writing code in a certain way, you should
change how you are coding.

In the project, inside of the useEffect hook, when you write a console.log that fires when the component mounts and also 
a console.log for when the component unmounts, you will notice in the browser that the component mounts once then unmounts, it then mounts one more time.
This is strict mode checking that there are no errors within the useEffect code.
Things it can detect are whether there are any memory leaks.

