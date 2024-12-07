interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country?: Country;
}

export enum Country {
    Brazil = "Brazil",
    France = "France",
    Canada = "Canada"
}

export const Person = (props: Props) => {

    const getAge = (name: string): number => {
        return 99;
    }

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Age: {props.age}</p>
            <p>This person {props.isMarried ? "is" : "is not"} married</p>
            <p>This person's friends:
            {props.friends.map((friend: string) => (
                <span>{friend}</span>
            ))}
            </p>
            <p>This person is from {props.country}</p>
        </div>
    )
}