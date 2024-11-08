# CRUD and States

This project focuses on a TODO list.

The UI components:

An input for typing tasks
A button that will add the typed task to the list.

An area that shows the items in the list.

## Storing the tasks

To keep track of tasks, create a state with an initial value of an empty array

```
const [todoList, setTodoList] = useState([]);
```

Create a state for the input that will capture the new task inputted by the user,
the initial value will be an empty string.

```
const [newTask, setNewTask] = useState("");
```

Create a function that will be called when a change is detected in the input.
This function will capture the typed text of the user and update the newTask state variable.

```
const handleChange = (event) => {
    setNewTask(event.target.value);
}
```

Add an input for the user to type in a task and add an onChange method that will call the above function.
Everytime a change is detected in the input value and the newTask variable will be updated.

NOTE: When adding the function name, you don't need the parenthesis.

```
 <input onChange={handleChange}/>
```

Next, create a function that will add the value of the newTask variable to the todoList array.


## Adding to an array in Reactjs

In vanilla JS, you can push to an array by using the push method of the array.
In reactjs, you can't use this method to add a value to a state array.
The reason why is that with a state, you don't access the variable directly, rather you use the set method that is associated with the state.
The way to do it is to create a normal JS array variable that holds the existing array that is in the state and then add to the array and then use the set method to update the state array to equal the array that you made.

```
const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
}
```

NOTE 1:
... ← This is the JS spread operator.
The spread operator allows you to copy all or part of an existing array or object into another array or object.
More Info: → https://www.w3schools.com/react/react_es6_spread.asp

NOTE 2:
The above code can be refactored (and is probably better to do it this way)
```
const addTask = () => {
    setTodoList([...todoList, newTask]);
}
```


Create a button that will fire the addTask function on the click function
```
<button onClick={addTask}>Add Task</button>
```

Showing the currently stored tasks

### array map function
The array.prototype.map() function creates a new array that consists of outcomes from calling a function on the items in the array.


```
{todoList.map()}
```

Get a reference to the todoList state and use the map function to iterated through the task,
withi the map brackets, we will create an autonomous function that is passed the task and then displays the task with JSX.

```
{todoList.map((task) => {
    return <div>{task}</div>
})}
```

### Deleting tasks

Add a button next to each task in the list.

```
{todoList.map((task) => {
    return (
        <div>
            <p>{task}</p>
            <button></button>
        </div>
    )
})}
```

### FIlter function

Create a function that will be responsible for deleting a task.
When we added an element to the list. we used the spread operator (...) but when we want to delete something from the list,
we should use the filter function.

The filter function creates a copy of the array that only contains the elements that pass the test given.
In this case, we loop through the todoList array and return false if the name equals the parameter name given and return true for everything else. By returning false for the name that matches, it won't be added to the new array.

```
  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      if( task === taskName) {
        return false;
      } else {
        return true;
      }
    })
    setNewTask(newTodoList);
  }
```

Refactoring the above function, we can just return true for every element that doesn't equal the taskName.
```
  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      return task !== taskName
    })
    setTodoList(newTodoList);
  }
```

To make it even shorter we could do the below which has the same meaning as above.
And rather than make a new variable, we could just put the logic inside of the set method.
```
  const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName));
  }
```


Add an onClick event to the button in the loop
We can pass arguments to the function when called.

```
<button onClick={deleteTask}>delete</button>
```

NOTE:
In Reactjs, when you call a function from within the onClick event inline, if you want to pass a parameter,
you can't just add a parenthesis after the function name like in JS.
You can't do : ``` onClick={deleteTask(task)}```

Instead, you have to create an anonymous function but without the curly brackets:
```
<button onClick={() => deleteTask(task)}>delete</button>
```


## Using Objects

A bug
Bug with deleting the element based on the string value:
If there are more than one task with the same text, then all will be deleted.
For example, if you added 'do homework' twice, then when you click the delete button next to one of these, both will be deleted
because they both elements in the list match the string passed in.

It is better to assign an id for each task and to do this, it is better to use an object rather than a string.
Each object will have an id and a string value that is the task.

In this example, we will use a counter starting from 0 and add 1 to this number each time we add a new item.
The way we do it is to get the id of last element in the array of objects and then add 1 to it.
If the array is empty then we should set the id to 1.

```
    const taskObject = {
      id: todoListObject.length === 0 ? 1: todoListObject[todoListObject.length - 1].id + 1,
      taskName: newTaskObject
    }
```

Now that the todoListObject is an object, when you want to use a value from the object you have to use
dot notation (in the previous example it was a string)

```
<p>{task.taskName}</p>
```

Deleting the object based on the object's id.

In the call to the deleteTaskObject method, instead of passing the task (which was a string in the previous example),
we pass the task id
```
<button onClick={() => deleteTaskObject(task.id)}>delete</button>
```

## Creating a task component

Rather than have all the logic in the App.js file, it is better to have the JSX and Reactjs related to the task be in its
own file.

Create the component file:
In this project it is Task.js

Create an empty component (this is just a function)

```
export const Task = () => {
  
}
```

Add the JSX (html and js) related to the Task inside the component.
We need to pass data to this component so we pass in the props parameter, and
replace the 'task' word with 'props
```
export const Task = (props) => {
    return (
        <div>
          <p>{props.taskName}</p>
          <button onClick={() => deleteTaskObject(props.id)}>delete</button>
        </div>
    )
}
```

You also need to add related function (functions called from within the component) in the component file:
One way you could do it is by keeping the function and all related functions within the component file.
Another way to do it (easier way) is to pass the function the same way that the other variables are passed

```
<button onClick={() => deleteTaskObject(props.id)}>delete</button>
↓
<button onClick={() => props.deleteTaskObject(props.id)}>delete</button>
```


Import the module into the App.js file
```
import {Task} from './Task';
```

Use the component in App.js
Inside the map function where the component JSX was, add the task component, making sure to pass in the data we need

```
<Task taskName={task.taskName} id={task.id} deleteTask={deleteTaskObject}/>
```

Add another button that changes the text to green 

In the addTask function where new task objects are created and added to the taskArray,
create a new property of type boolean that tracks whether a task is completed, the initial value will be set to false.
```
  const addTaskObject = () => {
    const task = {
      id: todoListObject.length === 0 ? 1 : todoListObject[todoListObject.length - 1].id + 1,
      taskName: newTaskObject,
      isComplete: false
    }
    setTodoListObject([...todoListObject, task]);
  }
```

Create a function that updates the 'isComplete' value from false to true.
This function receives the id parameter and loops through the existing tasks,
if the task's id matches the id handed in, then the task's isComplete property is changed from false to true.

This function uses map to loop through each task and if the task's id matches the id given, changes isComplete from false to true.
This logic is done within the set method of the state.
When changing the isComplete property, the thread method is used. Thread means that we want to keep the object as it is BUT change the isComplete property to true.
```
  const completeTaskObject = (id) => {
    setTodoListObject(
      todoListObject.map((task) => {
        if(task.id === id) {
          return {...task, isComplete: true}
        } else {
          return task
        }
      })
    );
  }
```

As the 'completeTaskObject' function can't be accessed from withi Task.js, we need to pass the function to the component in the
same way that was done for the deleteTask function
```
<Task  taskName={task.taskName} 
      id={task.id} 
      isComplete={task.isComplete}
      deleteTaskObject={deleteTaskObject}
      completeTaskObject={completeTaskObject}
/>
```

Add a button to the Task.js file that when clicked calls the completeTask function
```
<button onClick={() => props.completeTaskObject(props.id)}>complete</button>
```

In Task.js, use style to set the colour of the text.
Use a ternary statement that checks if the 'isComplete' property is true, the text color is green, if not it is initial.
```
<p style={{color: props.isComplete ? "green" : "initial"}}>{props.taskName}</p>
```

## Key points for this lesson

The key points of this lesson are to remember are:

How to add an item to an array
```
const addTaskObject = () => {
  const task = {
    id: todoListObject.length === 0 ? 1 : todoListObject[todoListObject.length - 1].id + 1,
    taskName: newTaskObject,
    isComplete: false
  }
  setTodoListObject([...todoListObject, task]);
}
```

How to delete an item from an array
```
const deleteTaskObject = (id) => {
  setTodoListObject(todoListObject.filter((task) => task.id !== id));
}
```

How to update a property of an item in the array
```
const completeTaskObject = (id) => {
  setTodoListObject(
    todoListObject.map((task) => {
      if(task.id === id) {
        return {...task, isComplete: true}
      } else {
        return task
      }
    })
  );
}
```

Understanding the filter and map functions

filter
```
todoListObject.filter((task) => task.id !== id)
```

map
```
todoListObject.map((task) => {
  if(task.id === id) {
    return {...task, isComplete: true}
  } else {
    return task
  }
})
```

Using components