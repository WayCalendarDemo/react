export const Task = (props) => {
    return (
        <div>
          <p style={{color: props.isComplete ? "green" : "initial"}}>{props.taskName}</p>
          <button onClick={() => props.completeTaskObject(props.id)}>complete</button>
          <button onClick={() => props.deleteTaskObject(props.id)}>delete</button>
        </div>
    )
}