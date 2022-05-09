import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function Template({data}) {

    // const { markdownRemark } = data
    // const { frontmatter, html } = markdownRemark

    return (
        <>
            <Layout>
                <div className='content'>
                    <h2>{data.mdx.frontmatter.title}</h2>
                    <MDXProvider>
                      <MDXRenderer>
                        {data.mdx.body}
                      </MDXRenderer>
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
      }
      body
    }
  }
`