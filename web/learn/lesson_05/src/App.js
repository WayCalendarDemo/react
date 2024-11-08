import './App.css';
import {useState} from 'react';
import {Task} from './Task';

function App() {
  const [todoListArray, setTodoListArray] = useState([]);
  const [newTaskArray, setnewTaskArray] = useState("");
  const handleChangeArray = (event) => {
    setnewTaskArray(event.target.value);
  }
  const addTaskArray = () => {
    setTodoListArray([...todoListArray, newTaskArray]);
  }
  const deleteTaskArray = (taskName) => {
    // const newtodoListArray = todoListArray.filter((task) => {
    //   // if( task === taskName) {
    //   //   return false;
    //   // } else {
    //   //   return true;
    //   // }
    //   return task !== taskName
    // })
    // const newtodoListArray = todoListArray.filter((task) => task !== taskName);
    // setTodoListArray(newtodoListArray);
    setTodoListArray(todoListArray.filter((task) => task !== taskName));
  }

  const [todoListObject, setTodoListObject] = useState([]);
  const [newTaskObject, setnewTaskObject] = useState("");

  const handleChangeObject = (event) => {
    setnewTaskObject(event.target.value);
  }

  const addTaskObject = () => {
    const task = {
      id: todoListObject.length === 0 ? 1 : todoListObject[todoListObject.length - 1].id + 1,
      taskName: newTaskObject,
      isComplete: false
    }
    setTodoListObject([...todoListObject, task]);
  }
  const deleteTaskObject = (id) => {
    setTodoListObject(todoListObject.filter((task) => task.id !== id));
  }
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
  return (
    <div className="App">
      <div className="addTaskArray">
        <input onChange={handleChangeArray}/>
        <button onClick={addTaskArray}>Add Task</button>
      </div>
      <div className="listArray">
        {todoListArray.map((task) => {
          return (
          <div>
            <p>{task}</p>
            <button onClick={() => deleteTaskArray(task)}>delete</button>
          </div>
          )
        })}
      </div>
      <div className="addTaskObject">
        <input onChange={handleChangeObject}/>
        <button onClick={addTaskObject}>Add Task</button>
      </div>
      <div className="listObject">
        {todoListObject.map((task) => {
          return <Task  taskName={task.taskName} 
                        id={task.id} 
                        isComplete={task.isComplete}
                        deleteTaskObject={deleteTaskObject}
                        completeTaskObject={completeTaskObject}
                  />
        })}
      </div>
    </div>
  );
}

export default App;
