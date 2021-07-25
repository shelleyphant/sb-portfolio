import React from 'react'
import { Link } from 'gatsby'
import * as Icon  from "react-feather";

export default function Footer() {
    return (
        <footer className="footer">
            <Link to="/"><h1>Shelley Bassett</h1></Link>
            <div>
                <p>This website was built by <Link to="/">Shelley Bassett</Link> using <a href="https://www.gatsbyjs.com/">Gatsby</a> and <a href="https://sass-lang.com/">Sass</a></p>
                <ul className="social-links">
                    <li><a href="https://github.com/shelleyphant" title="GitHub" aria-label="GitHub"><Icon.GitHub /></a></li>
                    <li><a href="https://www.linkedin.com/in/shelley-bassett/" title="LinkedIn" aria-label="LinkedIn"><Icon.Linkedin /></a></li>
                    <li><a href="https://dribbble.com/shelleybassett" title="Dribbble" aria-label="Dribbble"><Icon.Dribbble /></a></li>
                </ul>
            </div>
            <div>
                <dl>
                    <dt>Location</dt>
                    <dd>Altona, Melbourne</dd>
                    <dt>Phone</dt>
                    <dd>0430 306 207</dd>
                    <dt>Email</dt>
                    <dd>hello@shelleybassett.com</dd>
                </dl>
            </div>
            
        </footer>
    )
}
