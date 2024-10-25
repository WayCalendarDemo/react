# Teneray Operators, Lists in React, CSS

## CSS

Use the import statement to include a css file in the application (/src/App.js)

```
import './App.css';
```

### CSS Modules

To make a css file a module file, you add the 'module' word between the file name and the file type both when naming the file and when importing it. When you make the css file into a module file you import it like:

```
import styles from './App.module.css';
```

When you do this, you can treat the styles keyword like an object and use dot(.) notation to access the class names:

```
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.name}>Wayland</h1>
    </div>
  );
}

export default App;
```

You don't have to do it this way but one reason for doing it this way is if you don't like using strings (You can also potentially minimize mistakes with class names)

NOTE:
Because you specify the path, you can have the css file anywhere you want and you can still use gulp to compile the scss as normal.

### Inline styling

You can also do this just as you would with normal HTML but there are a few differences:

```
<h1 style={{color: "red", backgroundColor: "green"}}>text</h1>
```

Note:
When the property normally has a dash(-), you remove the dash and type in camel casing.
You can also use ternary operators here

```
<h1 style={{color: isGreen ? "green" : "red"}}>text</h1>
```

## Ternary operators (how to conditionally render in React)

These have the same syntax as JS

```
const age = 18;
const isAdult = age >= 18 ? true : false;
```

You can also use a normal if else statement
Refer to /src/App.js for an example

## Lists 

### Arrays

They help to reduce code in React
The array syntax is just like a JS array:
```
const names = ["John","Frank","George","Simon"];
```

You can also access these names as with the JS
```
names[0] // John
```

You can also use the following JS array functions:
name.forEach
name.map
name.filter
name.reduce

One often used in React is the map function
The map allows you to pass a callback function

If you pass in the value,key parameters, the second parameter (key) is the index of the names array.
The first parameter (value) is the actual value store at the key index.

```
{names.map( (value,key) => {
  return <p>Hello, {name}</p>
})}
```

NOTE: 
Whenever you want to use code within an html tag, you need to use the curly brackets {}

### Objects

Object syntax is the same as JS.
Below is an array of objects

```
const users = [
  {name: "John", age: 21},
  {name: "Frank", age: 31},
  {name: "George", age: 41},
  {name: "Simon", age: 51}
];
```

Using the array map function you can loop through the array and access each object's properties using dot notation or
with brack notation:
```
{users.map( (user,key) => {
  return (
    <div>
      {user.name} is {user.age} years old.
      {user["name"]} is {user["age"]} years old
    </div>
  )
})}
```

You can create a component:

```
const UserComp = (props) => {
  return (
    <div>
      {props.name} is {props.age} years old.
      {props["name"]} is {props["age"]} years old
    </div>
  )
}
```

And use like so:

```
  {users.map( (user,key) => {
    return (
      <UserComp name={user.name} age={user.age}/>
    )
  })}
```

Components should be abstracted to its own file.
The file name should be the same as the components name and should be of file type .js
The file name should start with a capital letter.
Eg.
User.js

To access the component, there are two things to do:

In the component file add 'export' before the component name:
```
  export const User = (props) => {}
```

And add an import statement in the file that we want to use the component in:
The name of the component goes in the curly brackets
The path is the relative path to the User component file
```
import {User} from './User';
```

Using a ternary operator, you can reduce the code to the following:
```
{planets.map( (planet,key) => planet.isGasPlanet && <p>{planet.name}</p> )}
```

Using the && is like a shortcut for the full ternary operator and you don't need a else statement.