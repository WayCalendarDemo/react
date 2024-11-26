## What is State Management?

### Prop Drilling = not good practice
A concept, that should be avoided, where you pass a property to a function or component, the property won't actually be used in that function or component but will just be passed to another function or property located within the first function or component
Example:
The 'state' variable is created in TopComponent,
The 'state' variable is then passed to the MiddleComponent,
The 'state' variable is then passed to the BottomComponent.
The 'state' variable is used in the BottomComponent.
The 'state' variable was created in TopComponent but only used in the BottomComponent, it wasn't used in the MiddleComponent.
This is bad practice.
```
const TopComponent = () => {
    const [state, setState] = useState();
    return (
        <div>
            <MiddleComponent state={state} />
        </div>
    );
};

const MiddleComponent =(state) => {
    return (
        <div>
            <BottomComponent state={state} />
        </div>
    )
}

const BottomComponent = (state) => {
    return <div>{state}</div>;
}
```

## useContext Hook - Correct way to manage states

The goal:
To have a single state
All components (pages) can access that state and also update/change it.

Example use case:
Having a user name that is availabe on all pages.
There is a 'ChangeProfile' component.

Step 1
In App.js
Import the createContext from react
Create a useState in the App.js file above the return statement.
```
import {useState, createContext} from 'react';
const [userName, setUserName] = useState("");
``

The useContext allows you to create a global variable in the form of a useContext that allows you to make useStates, etc that will be accessible in all components.

Step 2
In App.js
Create an exportable 'Context'. In this example, it will be called 'AppContext'.
This is created outside of the function App().
```
export const AppContext = createContext();
```

Step 3
You need to wrap all the components that you want to have access to the global variables inside of tags of the same name as
the useContext's name, in this case it is AppContext:
```
<div className="App">
    <AppContext.provider>
    <Navbar />
    </AppContext.provider>
</div>
```

NOTE: 
As the AppContext useContext will be providing data (user name), you need to add '.provider' to the tag.
When you create a provider, you have specify what variables you want to make available.
In this example, hte UserName variable and the setUserName function will be provided.
```
<AppContext.provider value={{UserName,setUserName}}>
```

Step 4
Inside the component file that you want access the provided data:
Import useContext from react and import the context you created (AppContext) from the App.js file
```
import { useContext } from "react";
import { AppContext } from "../App";
```

Step 5
Inside the component and above the return statement (where you would usually create a useState variable),
create a context variable.
Inside the useContext brackets, you specify the Contect you want to use (AppContext)
Inside the curly braces, you specify which of the provided data you want to have access to (userName)
```
const {userName} = useContext(AppContext);
```

Step 6
You can now use the userName like you would a normal variable.
You can also use the setUsername method in the same way.
```
<h1>This is {userName}'s Homepage</h1>
```

NOTEs:

When creating a useState, you use an array.
When creating a useContext, you use an object.
```
    const [newUsername, setNewUsername] = useState("");
    const {setUsername} = useContext(AppContext);
```

