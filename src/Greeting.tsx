import React from "react";

interface GreetingProps {
    name : string;
    age : number;
}

function Greeting(props : GreetingProps) {
    return <h2>Hello, {props.name}! Are you {props.age} yet?</h2>
}

export default Greeting;