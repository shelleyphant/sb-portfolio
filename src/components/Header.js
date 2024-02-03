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
            <div className="container h-full m-auto flex flex-row justify-between">
                <Link to="/" className="flex items-center">
                    <span className="name">Shelley Bassett</span>
                </Link>
                <ul className="flex flex-row gap-3 items-center font-raleway font-normal">
                    <li>
                        <AnchorLink
                            to="/#about"
                            title="About"
                            className="hover:text-shadow focus:text-shadow focus-visible:text-shadow"
                        >
                            About
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink
                            to="/#work"
                            title="Work"
                            className="hover:text-shadow focus:text-shadow focus-visible:text-shadow"
                        >
                            Work
                        </AnchorLink>
                    </li>
                    <li>
                        <a
                            href={data.file.publicURL}
                            target={'_blank'}
                            rel="noopener noreferrer"
                            title="Download PDF Resume"
                            className="hover:text-shadow focus:text-shadow focus-visible:text-shadow"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <AnchorLink
                            to="/#contact"
                            title="Contact"
                            className="hover:text-shadow focus:text-shadow focus-visible:text-shadow"
                        >
                            Contact
                        </AnchorLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
