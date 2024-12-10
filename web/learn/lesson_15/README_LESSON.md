# Redux Toolkit: How to manage your states

## Redux Toolkit is a simplified version of the normal Redux.

### Install the packages
This project uses the @reduxjs/toolkit library and 
this library relies on react-redux.
```
npm install @reduxjs/toolkit
npm install react-redux
```

### Using redux toolkit.

The first thing needed is a 'store'.

The functionality/ purpose is similar to the Context.
With the Context, we need to create a wrapper and wrap it around all of the code that we want 
to have access to the Context.
In the example project, it would be around the whole Router tag as we want to have access to the Context
on all components (pages). We would pass an object called values and pass in all the states, variables, etc that 
we want to make available.

Redux Toolkit is similar.
The difference:
Instead of a 'value' object, there is a 'store' object.

The store
This is where you group all of your global variables.

#### Create the store.
Create a file in your app called 'store.ts'.

#### Configure the store.
In store.ts, import 'configureStore' method from the @reduxjs/toolkit library
```
import { configureStore } from '@reduxjs/toolkit';
```

#### Create an exportable store variable.
The configureStore method takes an object as its argument.
```
export const store = configureStore({});
```

One argument that the configureStore method takes is a function called a 'reducer'.
The reducer is a function that describes how the states will interact with each other.
The 'reducer' function takes two arguments.

1. An action
2. The previous state of the application

Based on those two things, it will return a new state.

```
export const store = configureStore({
    reducer:
});
```

The reducer will be set further down the page

#### Provider

Import a 'Provider' from react-redux.
```
import { Provider } from 'react-redux';
```

The provide is a component similar to the Context wrapper, you wrap it around all of the code that you want
to provide access to the redux state manager (Store.ts).

In this project, the three routes need to have access to the state so we would wrap the <Router> with a Provider tag
You then need to specify the name of the store that the Provider will use, in the example project, it is the 'store.ts' file.
```
import { store } from './Store';
```

Import the store constant from Store.ts
You need to import it so that it is available for the store property
```
<Provider store={store}>
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
</Provider>
```

### Creating the Reducer

In the example project, it is created in the same file as the store variable but normally
you would create it in its own file.

The reducer uses something called a 'slice'.
A slice is 'a way for redux toolkit to automatically generate all the different parts of the reducers.'
A siice is a part of the @reduxjs/toolkit and is what makes using this easier than using normal redux.

### Import the 'createSlice' function from @reduxjs/toolkit.
This can be done together with the configureStore import
```
import { configureStore, createSlice } from '@reduxjs/toolkit';
```

In this demo project, there is a login button and a logout button.
If the log in button is clicked it will create a state with a logged in status,
if the log out button is clicked it will clear the state of the logged in status.

### Create a variable of type createSlice in the store.ts file.
```
const userSlice = createSlice();
```

The createSlice() function takes an object as a argument.
The object specifies how the slice should look like.
The properties we set include the following:

name
This is the identifier of the slice

initialState
This is an object and we will specify one parameter, the value.
The value parameter can be set to any data type, ie a string.
In this project, it is set to be an object with relevant information.
In this project, we will set a 'userName' variable with the initial value of an empty string

reducers function
In the reducers element will be an object.
The key will be a function name and the value will be a function that takes two parameters,
a state and an action.
The state will be the previous state of the application and the action will be something that modifies it.
The new state will be returned.
In the reducer, we will create two functions:
The first function will be called 'login' and it will accept as parameters, 
a state and an action and will return a new state.
The state will be the value of the userName that we set in the initialState element.
The action will modify the value and then now the state will be what the new userName value is.

login function.
The initial state that we want to pass to it is the initial state which is the value property of the 'initialState'
ie a userName with an empty string.
The action is a placeholder for a function that changes the value of the userName value.
This will be located inside of the Login.ts file.

In Login.ts, we can have a function that sets the login property of the userSlice's reducers method to be
the value of the input.

Inside of the login function of the reducer, we want to make it so that the value of the state
will be that of the action's payload.

The Logout function of the reducers.
This function just clears the current value (sets it to an empty string), so we don't need an action.
Since we want to reuse the initialState code, it is good practice to make it it's own variable.

When setting the logout state to the initialState, although we want to reset the initialState inside of the 
logout function, we can't just say that state equals initialState. The reason is that you can't just alter the state itself, rather you alter the state's value, so you would have to say that the state's value equals the initialState's value.
```
logout: (state) => {
    state.value = initialState.value
}
```

### Accessing (using) the userSlice

Now that we set the two methods inside the reducers property of the userSlice, we want to be able to access them
and use them.

Create a object that equals to userSlice.actions.
The .actions will give us access to the two methods (login,logout) of the userSlice.
You need to write the names of the methods you want access to inside of the curly brackets.
```
export const {login,logout} = userSlice.actions;
```

Now that we have created the userSlice, we can finally specify that the configureStore's reducers property
equals the userSlice's reducers.

### Using the useState Hook

Inside Login.tsx, we want to use the login and logout methods to set and clear the user name
when the user enters a user name and clicks login or when they click logout.


NOTE:
When to use redux and when to use useState.

redux is used storing the values of global variables used throughout the application.
useState is mainly for use within the current page.

### Capturing the user's name

In Login.tsx, create a useState Hook to capature the user's inputted name.
```
const [newUserName, setNewUserName] = useState("");

<input onChange={(e) => {setNewUserName(e.target.value);}} />
```

### Storing the new user name in redux toolkit

Import the login and logout methods from Store.ts file
```
import { login, logout } from '../Store';
```

Also import the 'useDispatch' hook from react-redux
```
import { useDispatch } from 'react-redux';
```

This lets you 'dispatch' any functions or actions from the Store file.
What this means that it lets you call a function from the Store.tsx file.
useDispatch is for modifying states.

Create a variable of the type useDispatch().
```
const dispatch = useDispatch();
```

Now you can call the login and logout functions.

To update the userName that is stored in the Store.tsx file
use on the onClick event to trigger the dispatch method.
In the dispatch method, you add the login method.
Inside the login method, you pass an object
```
<button onClick={() => {dispatch(login({userName: newUserName}))}}>Log In</button>
```

### How to display the saved data

Import the 'useSelector' hook from react-redux.
```
import { useSelector } from 'react-redux';
```

useSelector is for getting states.

Create a variable
```
const userName = useSelector((state) => state.user.value.userName)
```

The state includes all the data from the reducers made in Store.ts
The reducers are those registered in the configureStore() method.
Since we created one reducer via a slice and named it 'user', we use dot notation to specify 'user'.
The user slice has the a value property that stores the all the properties created so we specify 'value'.
Since we only want the userName, not every single property we specify 'userName' at the end.

Note:
If you are using TS then the above state from state.user will cause an error because the type is not specified.
An easy remedy is to specify the passed in (state)'s data type as 'any'
```
const userName = useSelector((state: any) => state.user.value.userName);
```

At this point, the app should now persist the user's name throughout the app.
NOTE:
If you just type in a url for a different page then the app will refresh and the state
will be reset (the name will be reset to an empty string).
Also, if you refresh the page, it will also reset the state.
To fix this, you should have a navigation component and use that to move around the application.

```
<Router>
    <Link to="/">Home</Link>
        <Routes>
        ...
        </Routes>
</Router>
```

## Adding Typescript

Inputs
If you want to add typesript to the onChange event you need to use the React library.
You specify that the event (e) that gets passed into the function from the event is
a React ChangeEvent of the type HTMLInputElement.
```
<input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setNewUserName(e.target.value);}} />
```

InitialState
Set the format of the initialState
There is only one property to set for initialState and that is the value property which is an object 
containing a property of the type string.

Make two interfaces.
The first interface will be for the actual userName which will be of type string.
The second interface will be for the userState. The userState has one property called 'value'
which will be of type userStateValue.
```
interface userStateValue {
    userName: string
}
interface userState {
    value: userStateValue
}
```

You can now specify the initial state to be of data type 'userStateValue'.
You can use the 'as' keyword.
```
const initialState = {value: {userName: ""}} as userState;
```

The reducer functions

The login method has two arguments: state and action
The logout method has one argument: state

The state should be of type userState because that is how we already defined it
in the initialState.


The advantage of using TS here is that it will show an autocomplete.

The action argument is defined inside of react-redux and already has a specific
data type: PayloadAction
When then need to specify that the PayloadAction is of type UserStateValue
```
ogin: (state: UserState, action: PayloadAction<UserStateValue>) => {...}
```

