import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfiles } from "../components/ChangeProfiles"

export const Profile = () => {
    const {username} = useContext(AppContext);
    return (
        <div>
            <h1>Profile Page of {username} </h1>
            <ChangeProfiles />
        </div>
    )
}