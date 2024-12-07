import Proptypes from 'prop-types';

export const Person = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Age: {props.age}</p>
            <p>This person {props.isMarried ? "is" : "is not"} married</p>
            <p>This person's friends:
            {props.friends.map((friend) => (
                <span>{friend}</span>
            ))}
            </p>
        </div>
    )
}

Person.propTypes = {
    name: Proptypes.string,
    email: Proptypes.string,
    age: Proptypes.number,
    isMarried: Proptypes.bool,
    friends: Proptypes.arrayOf(Proptypes.string)
}