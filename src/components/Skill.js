import React from 'react'
import { Monitor, Users, Zap, Search, Activity, Award } from "react-feather";

export default function Skill(props) {
    const iconSvg = {'monitor': <Monitor />, 'users': <Users />, 'zap': <Zap />, 'search': <Search />, 'activity': <Activity />, 'award': <Award />};
    
    return (
        <div className='skill'>
            <div>{iconSvg[props.icon]}</div>
            <h3>{props.heading}</h3>
            <p>{props.desc}</p>
        </div>
    )
}
