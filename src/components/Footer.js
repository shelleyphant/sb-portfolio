import React from 'react'
import { Link } from 'gatsby'
import * as Icon from 'react-feather'

export default function Footer() {
    return (
        <footer className="flex flex-wrap gap-12 p-12 footer">
            <div className="basis-full">
                <Link to="/">
                    <span className="name">Shelley Bassett</span>
                </Link>
            </div>
            <div className="flex-1">
                <p>
                    This website was built by{' '}
                    <Link to="/">Shelley Bassett</Link> using{' '}
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        TailwindCSS
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://www.gatsbyjs.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Gatsby
                    </a>
                    .
                </p>
                <ul className="flex flex-row gap-8 mt-8">
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
                    <dd>Melbourne, AUS</dd>
                    <dt>Phone</dt>
                    <dd>0430 306 207</dd>
                    <dt>Email</dt>
                    <dd>hello@shelleybassett.com</dd>
                </dl>
            </div>
        </footer>
    )
}
