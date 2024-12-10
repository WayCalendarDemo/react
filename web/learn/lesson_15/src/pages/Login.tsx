import React, { useState } from 'react';
import { login, logout } from '../Store';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
    const [newUserName, setNewUserName] = useState<string>("");
    const dispatch = useDispatch();
    const userName = useSelector((state: any) => state.user.value.userName);
    return (
        <div>
            <h1>Login Page {userName !=="" && <span>of {userName}</span>}</h1>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setNewUserName(e.target.value);}} />
            <button onClick={() => {dispatch(login({userName: newUserName}))}}>Log In</button>
            <button onClick={() => {dispatch(logout())}}>Log Out</button>
        </div>
    )
}