import React from "react";
import * as Icon from "react-feather";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function CaseStudy(props) {
    return (
        <div className="case-study-wrapper">
            <div className="case-study-header">
                <div className="case-study-title">
                    <h3>{props.heading}</h3>
                    <p>{props.tagline}</p>
                </div>

                <GatsbyImage
                    image={getImage(props.image)}
                    className="case-study-image"
                    alt=""
                />
            </div>
            <div className="case-study-detail">
                <ul className="techstack">
                    {props.techstack.map((e) => {
                        return <li>{e}</li>;
                    })}
                </ul>
                <Link to={props.link} className="button">
                    Learn More
                </Link>
                <ul className="code-links">
                    {props.git !== "" ? (
                        <li>
                            <a
                                href={props.git}
                                title="Veiw Source Code"
                                aria-label="Source Code"
                                target={"_blank"}
                                rel="noopener noreferrer"
                                className="icon"
                            >
                                <Icon.Code />
                            </a>
                        </li>
                    ) : (
                        <></>
                    )}
                    {props.live !== "" ? (
                        <li>
                            <a
                                href={props.live}
                                title="View Live Site"
                                aria-label="Live Project"
                                target={"_blank"}
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
        </div>
    );
}
