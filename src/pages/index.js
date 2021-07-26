import React from 'react'
import Layout from "../components/Layout";
import Skill from '../components/Skill'
import CaseStudy from '../components/CaseStudy'
import ContactForm from '../components/ContactForm';
// import * as Icon  from "react-feather";
// import {Link} from "gatsby"
import {FormspreeProvider} from '@formspree/react';
import { StaticImage } from "gatsby-plugin-image"


export default function index({ Component, pageProps }) {
  return (
    <Layout>
      <section id="welcome">
        <h2>Welcome</h2>
        <p>Shelley Bassett is a digital interaction designer based in Melbourne, Aus</p>
        <StaticImage src='../images/shelley bassett.jpeg' className='portrait'/>
      </section>

      <section id="about">
        <h2>About Shelley</h2>
        <StaticImage src='../images/shelley and chester 1.jpeg' className='candid1'/>
        <p>
          Shelley Bassett is a digital designer based in Melbourne, Australia. She specialises in full-stack websites and applications, and likes to experiment with branding and typography. She can often be found with her pets, and spends her free time illustrating and designing.
        </p>
        <p>
          Shelley likes to design her projects to be fast, responsive and perform well on new and old machines while still being accessible to users and search engines. She has extensive experience with Wordpress, and is currently exploring the world of flat and headless CMS's, in addition to libraries like React.
        </p>
      </section>

      <section id="expertise">
        <h2>Expertise</h2>
        <Skill icon='monitor' heading='Responsive Usability' desc='Web apps that are fully responsive and usable across multiple screens, from mobile to 4K'/>
        <Skill icon='users' heading='User Centric' desc='Designs that cater to all user types, from those with imparments to the technologically-challenged'/>
        <Skill icon='zap' heading='SEO Focused' desc='Ensuring that search engines can crawl pages, making them findable by anyone'/>
      </section>

      <section id="work">
        <h2>Selected Work</h2>
        <CaseStudy 
          heading='coloretur.com'
          tagline='Digital colour palette samples'
          live='https://coloretur.com'
          link='/projects/coloretur'
        />
        <CaseStudy 
          heading='joannebingham.com'
          tagline='Artist portfolio and ecommerce website'
          live='https://joannebingham.com'
          link='/projects/joannebingham'
        />
        <CaseStudy 
          heading='Mongol Ulus Duu'
          tagline='Mongolian Instrument App'
          live=''
          link='/projects/mongolulusduu'
        />
        <CaseStudy 
          heading='Massacre in Melbourne'
          tagline='AR walking tour concept'
          live=''
          link='/projects/massacreinmelbourne'
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
