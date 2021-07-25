import React from 'react'
import { Monitor } from "react-feather";
import { Users } from "react-feather";
import { Zap } from "react-feather";


export default function Skill(props) {
    const iconSvg = {'monitor': <Monitor />, 'users': <Users />, 'zap': <Zap />};
    
    return (
        <div className='skill'>
            <div>{iconSvg[props.icon]}</div>
            <h3>{props.heading}</h3>
            <p>{props.desc}</p>
        </div>
    )
}
