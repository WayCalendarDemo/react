## Typescript in React

This is better than prop types, although it is a bit harder than prop types to learn.
The rest continues from project 14.

It is best to configure your app to use Typescript when you start.

Create a new project like always but include the Typescript configuration.
After you do the initial create project command, you add the '--template' and
specify that the template be a typescript template.
```
npx create-react-app . --template typescript
```

This creates a new project with the normal project files.
In addition, it also creates a tsconfig.json file and in the src file you will notice that
all the project files that usually have the .js extension now has the .txs extension.

.tsx and .ts

It is a good idea to make components .tsx files and the other files .ts files.

## Creating Variables

When creating variables you need to specify the data type of the variable.
This system is very similar (almost the same) as Swift.
In some cases, typescript can infer the data type for example when you set an initial value
```
const name = "Wayland";
```

To implicity specify the data type do it like this:
```
const name: string = "Wayland";
```

However, when creating parameters for a function, you have to specify the data type.
If you don't then the default data type becomes 'any'.
You want to avoid using this data type as much as possible.

In the example project, there are two functions that take parameters:
The Person component and the maps method.

In the map function, each element is taken from the friends array which is an array of strings.
Therefore, the friend element is a single string so you need to specify it as a string.
```
{props.friends.map((friend: string) => (...))}
```

The friends array of string is simple in that all the data types are the same.
If you had an object that contains many different data types, you would need to create an 'interface'.

In the example, we will create an interface for the props object.
The interface is similar to the data model in swift.
You create this above the component function (above the export const Person = (props) => {...})
```
interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
}
```

NOTE:
You can also specify that each friend will be a person so you could say that the friends
array will be an array of data type Props:
```
interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: Props[];
}
```


Binding the interface with the props parameter.
You bind it the same way as for a normal variable:
```
props: Props
```

The result of specifying the data type will be that when you go to assign the values in the App.tsx file,
a red squiggly line will appear under the value assigned if it does not match the data type.

## Assigning Incorrect Data Types

When using the prop-types library to define data types, if the wrong data type was assigned it would show a console log
error. 
When using vanilla TypeScript, if you use the wrong data type then it will break your app meaning that you have to fix it.


When using JS, you never know if you are assigning the wrong data type until run time.
Using TS may seem tedious in the short term, it will make your coding faster in the long run because there will be less errors to deal with.

## Other things we can do with typescript

### Defining data types for states

If you create a useState and set the initial value of the variable, TS will infer the data type:
Below, we set the initial value of the useState to an empty string so the inferred data type is string.
```
const [name, setName] = useState("");
```

If you didn't specify the empty string, then name would be 'undefined'.
The way to specify the data type without relying on the data type to be inferred then you need to 
specify the data type after the 'useState' keyword using arrow brackets:
```
const [name, setName] = useState<string>("");
```
Now, if you were to set the initial value as a number, it would produce an error.

Another point that you must be aware of is that you have to pass in all the properties that 
you specify in the interface.
So if you added a 'country: String;' element to the interface that is being used for the 'Person'
component, when you use that component in the App.tsx file, you have to pass in the value for the country element.
If you don't specify the value for each item in the interface, the app will break.

You can make an element in the interface be an optional element by using the question mark
```
country?: String;
```

### Using enums

They are the same logic as an enum in Swift, enums are in TS.
This is the enum syntax:
Also, you need to export it so that it is accessible from another file
```
export enum Country {
    Brazil = "Brazil",
    France = "France",
    Canada = "Canada"
}
```

You need to import it in the file that you are using the enum in.
You can include it inside of the same import as the component also located in the same file:
```
import { Person, Country } from './components/Person';
```

You can now use this as a data type.
```
country?: Country;
```

To specify which one of the enums to use, you use the dot notation:
```
country={Country.Brazil}
```

## TypeScript in functions

In functions, you can specify the data type in two places:
1. For each of the parameters that the function will receive.
2. For the return type.

```
const getAge = (name: string): number => {
    return 99;
}
```