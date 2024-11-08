# States and Hooks

## States

Very Important
Key strength of ReactJS

A State can be imagined as a variable that holds data.

To add logic to an element, you can do it inline similar to JS.
Note the camel casing.
The function name goes inside the brackets.

```
<button onClick={increaseAge}>Increase Age</button>
```

To create the function that will be called, use the following syntax:
Assuming that an age variable was created and set to 0.

```
const increaseAge = () => {
age += 1;
}
```

At this point, if you had a element that was displaying the age variable, it wouldn't change.
The actual variable value would be changing but not the UI (browser).

The reason being is that when the page is loaded, React renders the page once and then it becomes static.
The variable value is rendered as the value it was when React loaded the page and isn't dynamic which is why it doesn't change.

This is what states are, a rendering of the page in its current state.

In JS, to change the rendered HTML, you would do something like document.querySelector... and change the value that way.

This is not necessary in React because you can use a State instead.

## Hook

To use States in your application, you need to import the 'useState' hook:

```
import {useState} from 'react';
```

A HOOK in react is basically:
A function that starts with the word 'use'

To use the useState Hook, you need to create the following variable:
```
const [] = useState();
```
The useState function will return some information in the []
For example the age variable.
We also need to create a function that will affect the first variable.
Normally, the function name will start with the word 'set'.
Within the 'useState()' parenthesis, we set the initial value so by adding 0 below, the initial value of age will be '0'.

```
const [age, setAge] = useState(0);
```

In summary,
This is a state that has a variable name, a function that will affect the variable and the initial value.

Accessing the age variable within the state is done the same as a normal variable 

```
<p>{age}</p>
```

To change the value of the variable, in this case age, you would do it inside of a JS function.
Inside your function, you would call the method that we created inside of the state, in this example it is setAge();
Whatever value you pass will become the variable's (age) new value.
NOTE: The dynamic changing of the UI is done through the useState method.

```
  const increaseAge = () => {
    // setAge(5); ← This only sets it to the number five.
    setAge(age + 1);  ← This adds one to the current value.
  }
```


## States with inputs

Example use case:
As the user types something into the input, the typed text should appear in the <p>tag.

Syntax for an input

```
<input type="text"/>
```

Steps to create the functionality for the use case above:
1. Create a state:
```
const [inputValue, setInputValue] = useState("");
```
Since the initial value will be an empty string, it is initialised with "".

2. Create a function that will handle updating the input change:
```
 const handleInputChange = (event) => {
  setInputValue(event.target.value);
 }; 
```
The event is an inbuilt function just as in JS.
The InputTextValue's value is the value of the element where the event was triggered.
The state's set method is used to update the value of the inputValue variable and to update the UI.

3. Set an on change event listener on the input that fires the handlInputChange function everytime the value of the input changes:
```
<input type="text" onChange={handleInputChange}/>
```

## States with toggling visibility of an element (using a boolean with state)

Use a state to toggle the visiblity of an element.

1. Create a state that will handle the logic
```
const [showText, setShowText] = useState(true);
```

The initial value passed in the useState will be of type boolean.
Because we want the element to be visible on page load, the initial value is true.

2. Create an if statement:
If the showText value equals true, display the element:
```
{showText === true && <p>I am visibile right now.</p>}
```

The ternary operator is used: if showText = true then show the text.
To make the above shorter, you could also do this (just like in JS):
```
{showText && <p>I am visibile right now.</p>}
```

3. Create a function that toggles the boolean and the visibility of the element:
You could create a function like in the above cases and then bind the button to this function like above with the input OR
You can create an anonymous function

Anonymous function syntax:

```
<button onClick={() => {}}>Show/Hide Text</button>
```

The code you want to fire goes within the curly brackets.

From here, we call call the state's setShowText method:

```
<button onClick={() => {setShowText(!showText)}}>Show/Hide Text</button>
```

Other things you do is change css by using ternary operators.