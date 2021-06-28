import React from 'react'
import Layout from "../components/Layout";
import ContactForm from '../components/ContactForm';
import * as Icon  from "react-feather";
import {Link} from "gatsby"
import {FormspreeProvider} from '@formspree/react';


export default function index({ Component, pageProps }) {
  return (
    <Layout>
      <section id="welcome">
        <h2>Welcome</h2>
        <p>Shelley Bassett is a digital interaction designer based in Melbourne, Aus</p>
      </section>
      <section id="about">
        <h2>About Shelley</h2>
      </section>
      <section id="expertise">
        <h2>Expertise</h2>
        <div className="skill">
          <div><Icon.Monitor/></div>
          <h3>Responsive Usability</h3>
          <p>Duis malesuada vitae nisi sed scelerisque. Mauris dictum consequat orci in vestibulum.</p>
        </div>
        <div className="skill">
        <div><Icon.Users/></div>
          <h3>User Centric</h3>
          <p>Duis malesuada vitae nisi sed scelerisque. Mauris dictum consequat orci in vestibulum.</p>
        </div>
        <div className="skill">
        <div><Icon.Zap/></div>
          <h3>SEO Focused</h3>
          <p>Duis malesuada vitae nisi sed scelerisque. Mauris dictum consequat orci in vestibulum.</p>
        </div>
      </section>
      <section id="work">
        <h2>Selected Work</h2>
        <div className="case-study">
          <h3>project name</h3>
          <p>Project tagline</p>
          <ul className="social-links">
            <li><a href="https://github.com/shelleyphant" title="Veiw Source Code" aria-label="Source Code"><Icon.Code /></a></li>
            <li><a href="https://www.google.com" title="View Live Site" aria-label="Live Project"><Icon.Link /></a></li>
          </ul>
          <Link to="/" className="button">Learn More</Link>
        </div>
        <div className="case-study">
          <h3>project name</h3>
          <p>Project tagline</p>
          <ul className="social-links">
            <li><a href="https://github.com/shelleyphant" title="Veiw Source Code" aria-label="Source Code"><Icon.Code /></a></li>
            <li><a href="https://www.google.com" title="View Live Site" aria-label="Live Project"><Icon.Link /></a></li>
          </ul>
          <Link to="/" className="button">Learn More</Link>
        </div>
        <div className="case-study">
          <h3>project name</h3>
          <p>Project tagline</p>
          <ul className="social-links">
            <li><a href="https://github.com/shelleyphant" title="Veiw Source Code" aria-label="Source Code"><Icon.Code /></a></li>
            <li><a href="https://www.google.com" title="View Live Site" aria-label="Live Project"><Icon.Link /></a></li>
          </ul>
          <Link to="/" className="button">Learn More</Link>
        </div>
        <div className="case-study">
          <h3>project name</h3>
          <p>Project tagline</p>
          <ul className="social-links">
            <li><a href="https://github.com/shelleyphant" title="Veiw Source Code" aria-label="Source Code"><Icon.Code /></a></li>
            <li><a href="https://www.google.com" title="View Live Site" aria-label="Live Project"><Icon.Link /></a></li>
          </ul>
          <Link to="/" className="button">Learn More</Link>
        </div>
      </section>
      <section id="contact">
        <h2>Get in Contact</h2>
        <FormspreeProvider project="1710348955751022432">
          <ContactForm {...pageProps} />
        </FormspreeProvider>
      </section>
    </Layout>
  )
}
