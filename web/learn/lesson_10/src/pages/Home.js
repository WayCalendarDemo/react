import { useContext } from "react";
import { AppContext } from "../App";
import {useQuery} from "@tanstack/react-query";
import Axios from 'axios';

const getData = () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
};

export const Home = () => {
    const {username} = useContext(AppContext);
    const {data: catFact, isLoading, refetch} = useQuery({ queryKey: ['cat'], queryFn: getData });

    if(isLoading) {
        return <h1>is Loading...</h1>
    }

    return (
        <div>
            test
        <h1>This is {username}'s Homepage</h1>
        <p>Here is a cat fact: {catFact?.fact}</p>
        <button onClick={refetch}>Refresh data</button>
        </div>
    )
}