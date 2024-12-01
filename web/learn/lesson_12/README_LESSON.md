# Custom Hooks

## What is a Hook?

Hooks we have learnt so far:
useState
useContext
useEffect

A hook is essentially a function.
A hook starts with the word 'use'
It is always camel case (the first letter not capitalised)
They are all built into react.

Purpose of a hook:
To abstract a lot of repeated code to a file out of sight.
To abstract a large volume of logic into an external file.
Repeated code could also be interpreted as code that is reused a lot within the project.

Use case:
API calls, etc.

Difference between a function/component and a hook.
With a hook, you are able to import only the required functions you want to use.
With a hook, you gain access to the different states of the app's lifestyle.

## Creating a Custom Hook

Create a folder to keep all your hooks in.
In the folder, create a file for your hook. It should start with 'use'

Rules for using a hook, both custom and prebuilt
You can only call a useHook at the highest level of your component.
You can't call a useHook from inside a function.
For example:
```
function App() {
Here
return (...)
}
```

Create the hook like you would a component.
Import the required libraries (in the example, useState)
When creating the useState in the component, make sure to use generic names so that you can use it 
throughout your app.
You can also create parameters to be handed in when calling the hook.
To make them optional, set default values.

Create a function that encapsulates the common functionality that you will use over and over.

Finally, you have to return something.
Different from a normal component, you don't return JSX.
Hooks don't return UI, rather they only handle computaional or state logic only.

If you only wanted to return the toggle function you would do 
```
return toggle
```
To return both the state and the toggle function, you should return an array.
You shouldn't return the set function of the useState.
When you return an array, it allows you to give the 'state' property a different name when using it in your app.
```
return [state, toggle]
```

To use this custom hook in your project:

Import the custom hook
```
import { useToggle } from './hooks/useToggle';
```
Create a useToggle variable in the app.
Because we returned an array, we can call the variable 'isVisible' instead of 'state'.
```
const [isVisible, toggle] = useToggle();
```

Scalability
Because the toggle logic is inside a custom hook, you can use this code over and over again.
```
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();
```

Custom hooks and objects.

Sometimes when you use a prebuilt hook, you will notice that when creating the variable, you use an array and other times you 
use an object:

Array:
```
const [state, setState] = useState(initialValue);
```

Object:
```
const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
});
```

With an array, you can change the name of the variable but with an object, you can't, you have to use the name
already defined.

So, when creating a custom hook, if you want to have predefined names then use an object.
If you want to allow custom name setting, use an array.

BUT, even when you use an object, you can still change the name if you want to:
Here we change the name from state to isVisible.
```
const {state: isVisible, toggle} = useToggle();
```

Other ideas when creating a custom hook.

Example, create a custom hook that fetches cat data using Axios and useQuery.
The useQuery has a refetch method that allows you to send a request again for the latest data.

Inside the hook, you can create a wrapper method that allows you to do other thngs along with executing the refetch method
Check 'useGetCat.js' for reference.
It may seem that we are just passing along a lot of repeated code but the point is that you can abstract the code to its own hook file.

NOTE:
Due to updates, etc.
This example is not working because of the lack of a QueryProvider.
Don't know how to fix yet...