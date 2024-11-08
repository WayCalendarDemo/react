import React from "react";
import {useState, useEffect} from "react";

export const Text = () => {
    const [text, setText] = useState("");
    useEffect(() => {
        console.log('mounted');
        return () => {
            console.log('unmount');
        }
    }, []);

    return (
        <div>
            <input 
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />
            <h1>{text}</h1>
        </div>
    )
}