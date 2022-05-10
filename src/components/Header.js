import React from 'react'
import { Link } from "gatsby";
import "../styles/main.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links";


export default function Header() {
    return (
        <div className="header">
            <div>
                <Link to="/"><h1>Shelley Bassett</h1></Link>
                <ul>
                    <li><AnchorLink to="/#about" title="About">About</AnchorLink></li>
                    <li><AnchorLink to="/#work" title="Work">Work</AnchorLink></li>
                    <li><a href='../downloads/Resume 2022.pdf' target={"_blank"} rel="noopener noreferrer" title="Download PDF Resume">Resume</a></li>
                    <li><AnchorLink to="/#contact" title="Contact">Contact</AnchorLink></li>
                </ul>
            </div>
        </div>
    )
}
