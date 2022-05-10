import React from 'react'
import * as Icon from 'react-feather'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function CaseStudy(props) {
    return (
        <div className='case-study-wrapper'>
            <div className='case-study'>
                <h3>{props.heading}</h3>
                <p>{props.tagline}</p>
                <ul className='code-links'>
                    <li><a href="https://github.com/shelleyphant" title="Veiw Source Code" aria-label="Source Code" target={"_blank"} rel="noopener noreferrer"><Icon.Code /></a></li>
                    <li><a href={props.live} title="View Live Site" aria-label="Live Project" target={"_blank"} rel="noopener noreferrer"><Icon.ExternalLink /></a></li>
                </ul>
                <Link to={props.link} className="button">Learn More</Link>
            </div>

            <GatsbyImage image={getImage(props.image)} className='case-study-image' alt=''/>
        </div>
    )
}
