import React from "react";

import './btn.css'

interface Props{
    text:string;
}

export const Btn = (props:Props) =>(
    <button>{props.text}</button>
)