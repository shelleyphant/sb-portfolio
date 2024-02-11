import React from 'react'
import * as Icon from 'react-feather'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function CaseStudy(props) {
    return (
        <Link to={props.link} className="case-study-wrapper">
            <div className="case-study-header">
                <GatsbyImage
                    image={getImage(props.image)}
                    className="case-study-image"
                    alt=""
                />
            </div>

            <div className="case-study-detail">
                <div>
                    <h3>{props.heading}</h3>
                    <p>{props.tagline}</p>
                </div>
                <ul className="techstack">
                    {props.techstack.map((e) => {
                        return <li>{e}</li>
                    })}
                </ul>

                <ul className="flex flex-row items-center gap-3 code-links">
                    <li>
                        <p className="button">Learn More</p>
                    </li>
                    {props.git !== '' ? (
                        <li>
                            <a
                                href={props.git}
                                title="Veiw Source Code"
                                aria-label="Source Code"
                                target={'_blank'}
                                rel="noopener noreferrer"
                                className="icon"
                            >
                                <Icon.Code />
                            </a>
                        </li>
                    ) : (
                        <></>
                    )}
                    {props.live !== '' ? (
                        <li>
                            <a
                                href={props.live}
                                title="View Live Site"
                                aria-label="Live Project"
                                target={'_blank'}
                                rel="noopener noreferrer"
                                className="icon"
                            >
                                <Icon.ExternalLink />
                            </a>
                        </li>
                    ) : (
                        <></>
                    )}
                </ul>
            </div>
        </Link>
    )
}
