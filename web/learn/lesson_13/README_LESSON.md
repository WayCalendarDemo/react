# Typescript

## What is Type Safety?

Typescript is highly recommended for use in React.
An example is when you have a component that takes values and uses them through
the props object, you may have one variable where you expect a name to be passed in.
A name should be a string name but if for some reason, an int, for example, is passed in
then the UI or the code logic may break or behave unexpectedly because the data type you were 
expecting was different from the data type that you actually got.

Other places that Typescript is really helpful is when you need the data to be an array of something.
If the user only enters a single string, then when you try to use the map function, it will break the app.
It also helps to avoid an error caused by null.

## Prop Types in React

Prop Types are the React version of TypeScript.
HOWEVER, it isn't as good as using vanilla Typescript.

Install
```
npm install prop-types
```

Use in component
You need to install it inside the component that you want to use the prop types
```
import Proptypes from 'prop-types';
```

You then need to specify the propTypes of the component's props in the form of an object.
The keys of the object will be the names of the props you use in the component
Do this in the component file, outside of the component.
Special Note: The friends prop is an array of strings, therefore we specify that it is an
arrayOf Strings.
```
Person.propTypes = {
    name: Proptypes.string,
    email: Proptypes.string,
    age: Proptypes.number,
    isMarried: Proptypes.bool,
    friends: Proptypes.arrayOf(Proptypes.string)
}
```

What happens when a data type error occurs?
propTypes isn't designed to break your app, rather it will give you an error in the debug console of the browser.


## Typescript in React

This is better than prop types, although it is a bit harder than prop types to learn.
The rest continues from project 14.

It is best to configure your app to use Typescript when you start.

Create a new project like always but include the Typescript configuration.
After you do the initial create project command, you add the '--template' and
specify that the template be a typescript template.

For code source, refer to project 14
```
npx create-react-app . --template typescript
```