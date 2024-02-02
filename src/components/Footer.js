import React from 'react'
import { Link } from 'gatsby'
import * as Icon from 'react-feather'

export default function Footer() {
    return (
        <footer className="footer p-12 flex gap-12 flex-wrap">
            <Link to="/" className="basis-full">
                <span className="name">Shelley Bassett</span>
            </Link>
            <div className="flex-1">
                <p>
                    This website was built by{' '}
                    <Link to="/" className="link">
                        Shelley Bassett
                    </Link>{' '}
                    using{' '}
                    <a href="https://www.gatsbyjs.com/" className="link">
                        Gatsby
                    </a>{' '}
                    for{' '}
                    <a href="https://reactjs.org/" className="link">
                        React
                    </a>{' '}
                    and{' '}
                    <a href="https://sass-lang.com/" className="link">
                        Sass
                    </a>
                </p>
                <ul className="flex flex-row justify-center gap-8">
                    <li>
                        <a
                            href="https://github.com/shelleyphant"
                            title="GitHub"
                            aria-label="GitHub"
                            className="opacity-25 hover:opacity-100 focus:opacity-100 focus-visible:opacity-100"
                        >
                            <Icon.GitHub />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/shelley-bassett/"
                            title="LinkedIn"
                            aria-label="LinkedIn"
                            className="opacity-25 hover:opacity-100 focus:opacity-100 focus-visible:opacity-100"
                        >
                            <Icon.Linkedin />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://dribbble.com/shelleybassett"
                            title="Dribbble"
                            aria-label="Dribbble"
                            className="opacity-25 hover:opacity-100 focus:opacity-100 focus-visible:opacity-100"
                        >
                            <Icon.Dribbble />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <dl className="m-auto grid grid-cols-[1fr_3fr] gap-y-4 gap-x-2">
                    <dt>Location</dt>
                    <dd>Windsor, Melbourne</dd>
                    <dt>Phone</dt>
                    <dd>0430 306 207</dd>
                    <dt>Email</dt>
                    <dd>hello@shelleybassett.com</dd>
                </dl>
            </div>
        </footer>
    )
}
