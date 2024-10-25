export const User = (props) => {
    return (
        <div>
        {props.name} is {props.age} years old.
        {props["name"]} is {props["age"]} years old
        </div>
    )
}