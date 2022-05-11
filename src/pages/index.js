import React from 'react'
import Layout from "../components/Layout";
import Skill from '../components/Skill'
import CaseStudy from '../components/CaseStudy'
import ContactForm from '../components/ContactForm';
import { graphql } from "gatsby"
// import * as Icon  from "react-feather";
// import {Link} from "gatsby"
import { FormspreeProvider } from '@formspree/react';
import { StaticImage } from "gatsby-plugin-image"


export default function index({ data }) {
  return (
    <Layout>
      <section id="welcome">
        <h2>Welcome</h2>
        <p>Shelley Bassett is a digital designer/developer based in Melbourne, Aus</p>
        <StaticImage src='../images/shelley bassett.jpeg' className='portrait' alt='Portrait of Shelley Bassett'/>
      </section>

      <section id="about" className='content'>
        <h2>About Shelley</h2>
        <StaticImage src='../images/shelley and chester 1.jpeg' className='candid1' alt='Shelley Bassett and her ginger cat Chester'/>
        <p>
          Shelley Bassett is a digital designer based in Melbourne, Australia. She specialises in full-stack websites and applications, and likes to experiment with branding and typography. She can often be found with her pets, and spends her free time illustrating and designing.
        </p>
        <p>
          Shelley likes to design her projects to be fast, responsive and perform well on new and old machines while still being accessible to users and search engines. She has extensive experience with Wordpress, and is currently exploring the world of flat and headless CMS's, in addition to libraries like React.
        </p>
        <p>
            In 2020, Shelley founded <a href='https://www.brolgadigital.com.au' target={"_blank"} rel="noopener noreferrer">Brolga Digital</a>, a small agency using her freelance contacts to build better experiences for her clients.
        </p>
      </section>

      <section id="expertise">
        <h2>Expertise</h2>
        <div>
            <Skill icon='monitor' heading='Responsive Designs' desc='Web apps that are fully responsive and usable across multiple screens, from mobile to 4K'/>
            <Skill icon='users' heading='User Centric' desc='Designs that cater to all user types, and use A11y practices to make a better experience for everyone'/>
            <Skill icon='zap' heading='Interactive' desc='Animations, storytelling and sounds create immersive and captivating experiences'/>
            <Skill icon='award' heading='Cutting Edge' desc='Projects evolve with technology stacks, using the latest and greatest'/>
            <Skill icon='activity' heading='Data-Driven' desc='How users interact with elements determines the adjustments that need to be made'/>
            <Skill icon='search' heading='SEO Focused' desc='Ensuring that search engines can crawl pages, making them findable by anyone'/>
        </div>
      </section>

      <section id="work">
        <h2>Selected Work</h2>

        {data.allMdx.edges.map(({node}) => {
          return (
            <CaseStudy
              heading={node.frontmatter.title}
              tagline={node.frontmatter.tagline}
              live={node.frontmatter.site ? node.frontmatter.site : ''}
              link={node.frontmatter.slug}
              image={node.frontmatter.thumbnail}
            />
          )
        })}
      </section>

      <section id="contact">
        <h2>Get in Contact</h2>
        <FormspreeProvider project="1710348955751022432">
          <ContactForm />
        </FormspreeProvider>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MDXPages {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            tagline
            slug
            site
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`