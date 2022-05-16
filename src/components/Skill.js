import React from 'react'
import { Monitor, Users, Zap, Search, Activity, Award, GitHub, Database, Cpu } from "react-feather";

export default function Skill(props) {
    const iconSvg = {'monitor': <Monitor />, 'users': <Users />, 'zap': <Zap />, 'search': <Search />, 'activity': <Activity />, 'award': <Award />, 'github': <GitHub />, 'database': <Database />, 'cpu': <Cpu />};
    
    return (
        <div className='skill'>
            <div>{iconSvg[props.icon]? iconSvg[props.icon] : <Zap />}</div>
            <h3>{props.heading ? props.heading : 'Detail Title'}</h3>
            <p>{props.desc ? props.desc : 'Some details are coming soon'}</p>
        </div>
    )
}
