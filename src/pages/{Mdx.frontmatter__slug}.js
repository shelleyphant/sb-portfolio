import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Skill from '../components/Skill'
import ProjectInsights from '../components/ProjectInsights'
import { Helmet } from 'react-helmet'

export default function Template({ data, children }) {
    const components = {
        ProjectInsights,
    }

    return (
        <>
            <Helmet
                title={data.mdx.frontmatter.title + ' // Shelley Bassett'}
            />
            <Layout>
                <div className="content">
                    <h1 className="heading">{data.mdx.frontmatter.title}</h1>
                    <ul className="flex flex-row justify-center gap-3 mb-4 -mt-6 text-xs opacity-60">
                        {data.mdx.frontmatter.techstack.map((e) => {
                            return <li>{e}</li>
                        })}
                    </ul>
                    <div className="project-detail">
                        {data.mdx.frontmatter.details
                            ? data.mdx.frontmatter.details.map((detail) => {
                                  return (
                                      <Skill
                                          icon={detail[0] ? detail[0] : ''}
                                          heading={detail[1] ? detail[1] : ''}
                                          desc={detail[2] ? detail[2] : ''}
                                      />
                                  )
                              })
                            : ''}
                    </div>
                    <MDXProvider components={components}>
                        {children}
                    </MDXProvider>
                </div>
            </Layout>
        </>
    )
}

export const pageQuery = graphql`
    query MDXQuery($id: String!) {
        mdx(id: { eq: $id }) {
            id
            frontmatter {
                title
                tagline
                details
                techstack
            }
            body
        }
    }
`
