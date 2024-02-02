import React from 'react'
import { Link } from 'gatsby'
import '../styles/main.scss'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useStaticQuery, graphql } from 'gatsby'

export default function Header() {
    const data = useStaticQuery(graphql`
        {
            file(sourceInstanceName: { eq: "downloads" }) {
                publicURL
                name
            }
        }
    `)
    return (
        <div className="left-0 right-0 h-12 fixed top-0 text-white z-50 header">
            <div className="container m-auto flex flex-row justify-between">
                <Link to="/">
                    <span className="name">Shelley Bassett</span>
                </Link>
                <ul className="flex flex-row gap-3 items-center font-raleway font-normal">
                    <li>
                        <AnchorLink to="/#about" title="About">
                            About
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#work" title="Work">
                            Work
                        </AnchorLink>
                    </li>
                    <li>
                        <a
                            href={data.file.publicURL}
                            target={'_blank'}
                            rel="noopener noreferrer"
                            title="Download PDF Resume"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <AnchorLink to="/#contact" title="Contact">
                            Contact
                        </AnchorLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
