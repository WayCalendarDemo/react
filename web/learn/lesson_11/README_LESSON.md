# Forms

## Project setup

Install react-hook-form
```
npm install react-hook-form
```

Install 'Yup'
```
npm install yup
```

Install 'resolver'
```
npm install @hookform/resolvers 
```

NOTE:
You can install both at the same time by doing the following
```
npm install react-hook-form yup
```

react-hook-form
This provides the functionality for displaying errors, submitting the form, etc.

yup
Only does the actual validation.

@hookform/resolvers 
Provides a connection between react-hook-form and yup so that you can use yup to validate the form through the react-hook-form.

## React Hook Form

Import react-hook-form into the component
We want to use the useForm hook
```
import { useForm } from 'react-hook-form';
```

Create a useForm hook variable within the app
From the useForm hook, we want to use 'register' and 'handlesubmit' methods
```
const { register, handleSubmit } = useForm();
```

handleSubmit

Create a function where all the code we write related to form submitting will be located:
```
const onSubmit = () => {
    
}
```

Bind the form's submit event to the onSubmit function
The handleSubmit method is a method of the useForm hook that executes before the form is actually submitted.
We pass our onSubmit function to the handleSubmit function so that it's contents will be executed.
```
<form onSubmit={handleSubmit(onSubmit)}>
```

register
It is way to insert values into the form for validation purposes.
You can specify which inputs should be validated.

The way to 'register an input to be vaildated is as follows:
```
<input type="text" placeholder="Name" {...register("fullName")} />
```

The register method returns an object that contains all the registered inputs so
The name you put in the quotation marks will be the key to the object and the value the user
inputs will be the value.
In the above example, the name is 'fullName' and if the user inputs 'Wayland' into the form
it will look like this:
```
{
    fullName: "Wayland"
}
```

You could think of the register property as being the 'name' attribute of an input in regular HTML.

Accessing the data (the register object)

In the onSubmit function that we created above, you can pass in a parameter called 'data'
```
const onSubmit = (data) => {...}
```

## Validation with Yup

First you need to import yup.
In this case, we want to import ALL of yup's methods, etc.
To do that we use the asterisk symbol and we write the import method like below:
NOTE: This is for the yup library. Other libraries will be different so check the documentation.
```
import * as yup from 'yup';
```

Use yup to 'generate a shape' of how the form should look.

So we create a variable called 'schema'. 'schema' is terminology for 'shaping how the form should look like'.
When using yup, you use dot notation to access the available properties and functions.
For each method of yup you want to use, you add a dot and then the feature you want to use (similar to the pipe functions in gulp)
In the example below, we use the 'object' method to specify that we want our schema to be of data type object.
The 'shape' method specifies the 'shape' of the object, it accepts an object and you specify the shape/identity of each element in the object.
The elements inside of shape will be those that you registered in the form.
```
const schema = yup.object()
```

The '.string()' after the yup keyword specifies that the data received should be of type string.
The '.required()' specifies that it is required.
The '.email()' specifies that it should look like an email address.
The '.number()' specifies that it should be a number
The '.positive()' specifies that negative numbers aren't accepted.
The '.integer()' specifies that only whole numbers are allowed.
The '.min()' 
    When used with '.integer', specifies the smallest number accepted, if it is .min(18) then 18 is the lowest number acceptable.
    When used with '.string', specifies the minimum number of characters.
The '.max()' is the same as '.min()' except you specify the maximum.

You can also use regex

Checking that one field's value is the same as another field's data is a bit more complicated:
The .oneof() accepts an array and specifies that the inputed value has to be one of them.
If you only put the value of the first field in then using .oneof() on the second field then yup will
check to see if the value of the second field is one of the values in the array, ie the first field's value.

To access the value of another object element, you use the following:
The 'key name' should be the key that you want to access.
A null value is also passed because it 'specifies that this is the only value we need'
```
yup.ref("key name", null);
```

This is what the oneof looks like
```
yup.string().oneOf([yup.ref("password"), null]).required
```

Now we need to bind the schema to the form

In the useForm() method, you can pass an object with the key 'resolver'.

You need to use the @hookform/resolver to pass the yup object to the react-hook-form.

Import @hookform/resolvers
```
import { yupResolver } from '@hookform/resolvers/yup';
```

Here we are importing the 'yupResolver'.

NOTE: 
This resolvers library has integrations for a lot of libraries.
You can see the available libraries when you add the slash at the end (before the yup word)
These libraries are the ones that @hookform/resolvers has integrations with.

Next we pass an object to 'useForm()' method.
In the object, we specify the key 'resolver' with the value being the yupResolver that we imported.
Inside the yupResolver() method, we specify that we want to use the schema that we previously created.
```
const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
});
```

NOTE:
Just because you validate your data here on the front end, it doesn't mean you shouldn't validate it on
the backend.
Data should be validated on both the front end and the back end.


Create the UI for the form.

Give the user feedback on whether the value given was okay or if there was an error.

First you have to add 'formState' method to the register variable.
Within this method, you can access all the form errors that could possibly occur in the form 
(the inputs we made and the validations we set)
The errors we get is in the form of an object.
The keys to the errors object will be the names you put in the register method in the form but only
if there is an error it will be in the error object, if there are no errors, then there won't be any.
```
const { register, handleSubmit, formState: {errors} } = useForm({...}}
```

You can then access the error message inside the JSX in the form of dot notation.
If you try to access an error message that doesn't exist, it will be null and cause the page to break.
Therefore, you should make it an optional by using the question mark.
```
<p>{errors.fullName?.message}</p>
```

Specifying a custom error message.
If you don't specify an error message, a preset message will be displayed when an error occurs.
To Specify an error message, add it as a string parameter of the validation method.
For example, the required() validation method could be set like this
```
fullName: yup.string().required("Enter a name bro..."),
```

For the oneOf validation method, you can hand in the custom error message inside of the oneOf() method,
after the null.
```
confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match").required()
```

Check the Form.js file for other ways to add an error message.