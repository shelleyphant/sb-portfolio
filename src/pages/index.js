import React from 'react'
import Layout from "../components/Layout";
import Skill from '../components/Skill'
import CaseStudy from '../components/CaseStudy'
import ContactForm from '../components/ContactForm';
// import * as Icon  from "react-feather";
// import {Link} from "gatsby"
import {FormspreeProvider} from '@formspree/react';
// import { StaticImage } from "gatsby-plugin-image"


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
        <Skill icon='monitor' heading='Responsive Usability'/>
        <Skill icon='users' heading='User Centric' />
        <Skill icon='zap' heading='SEO Focused' />
      </section>

      <section id="work">
        <h2>Selected Work</h2>
        <CaseStudy 
          heading='coloretur.com'
          tagline='Digital colour palette samples'
          live=''
          link='/projects/coloretur'
        />
        <CaseStudy 
          heading='joannebingham.com'
          tagline='Artist portfolio and ecommerce website'
          live=''
          link='/projects/joannebingham'
        />
        <CaseStudy 
          heading='Mongol Ulus Duu'
          tagline='Mongolian Instrument App'
          live=''
          link='/projects/mongolulusduu'
        />
        <CaseStudy 
          heading=''
          tagline=''
          live=''
          link='/'
        />
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
