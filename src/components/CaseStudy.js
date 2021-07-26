import React from 'react'
import * as Icon from 'react-feather'
import { Link } from 'gatsby'

export default function CaseStudy(props) {
    const classes = 'case-study ' + props.className;

    return (
        <div className={props.className ? classes : 'case-study'}>
            <h3>{props.heading}</h3>
            <p>{props.tagline}</p>
            <ul className='code-links'>
                <li><a href="https://github.com/shelleyphant" title="Veiw Source Code" aria-label="Source Code"><Icon.Code /></a></li>
                <li><a href={props.live} title="View Live Site" aria-label="Live Project"><Icon.ExternalLink /></a></li>
            </ul>
            <Link to={props.link} className="button">Learn More</Link>
        </div>
    )
}
