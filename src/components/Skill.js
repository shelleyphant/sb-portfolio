import React from 'react'
import { Monitor, Users, Zap, Search, Activity, Award, GitHub, Database, Cpu, HelpCircle, MapPin, Code } from "react-feather";

export default function Skill(props) {
    const iconSvg = {'monitor': <Monitor />, 'users': <Users />, 'zap': <Zap />, 'search': <Search />, 'activity': <Activity />, 'award': <Award />, 'github': <GitHub />, 'database': <Database />, 'cpu': <Cpu />, 'help': <HelpCircle />, 'map': <MapPin />, 'code': <Code />};
    
    return (
        <div className='skill'>
            <div>{iconSvg[props.icon]? iconSvg[props.icon] : <HelpCircle />}</div>
            <h3>{props.heading ? props.heading : ''}</h3>
            <p>{props.desc ? props.desc : ''}</p>
        </div>
    )
}
