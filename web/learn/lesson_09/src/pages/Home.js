import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
    const {username} = useContext(AppContext);
    return (
        <div>
            test
        <h1>This is {username}'s Homepage</h1>

        </div>
    )
}