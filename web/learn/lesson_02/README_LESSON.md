# Fundamentals - JSX, Components, Props


## JSX

When you look at the /src/App.js file of a React project, you will see something like below:

```
import './App.css';

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
```

It looks like JS but it isn't, it is JSX.
It allows you to mix rendering logic with UI.
It allows you to mix JS with HTML

NOTE:
When assigning a value that consists of multiple lines, you need to surround them with a parenthesis:

```
const user = (
    <div>
        {name}
        {age}
        {gender}
    </div>
);
```

## Components

The above user variable is not good practice because it inflates the code and looks ugly, instead it is better to use a component.

A component is a JS(JSX) function that returns some UI (JSX).
They are used extensively in React, the benefit is code reuse instead of copy and pasting the same code over and over.

Look inside /lesson_02/src/App.js to see the difference between a JS function and a React Component.
To be a component, there needs to be UI related objects (HTML).

Component Rules:

The component name needs start with a capital letter.
To call a component from within the App() function, you need to use the following syntax:
(This is not the only way)
```
<User />
```
It is best practice to abstract components to another file.
The name of the file should be the same name as the components name.
Check lesson 3 for more details.

## Props

Passing arguments in React is different from passing arguments in JS.

A prop is a JS object that exists inside of the parenthesis of the component.
In the example below, the prop is the 'props' word within the parenthesis and it represents all
the data that is passed to the component (any data type can be passed)

```
const User = (props) => {}
```

To pass data when calling the component you do it like below:

```
<User name="Wayland" age={42} gender="Male" />
```

Note:
Strings need quotations
Ints need curly braces {}

As the props argument is an object it looks like this (based on the data passed above);

```
const props = {
  name: "Wayland",
  age: 42,
  gender: "Male"
}
```

When you access it inside of the component, you use dot(.)notation like so:

```
const User = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.gender}</p>
    </div>
  );
}
```