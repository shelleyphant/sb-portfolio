const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const yourTemplate = require.resolve('src/pages/{Mdx.frontmatter__slug}.js')

    return graphql(`
        {
            allMdx {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            tagline
                            details
                        }
                        body
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        result.data.allMdx.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: `${yourTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
                context: {
                    path: node.frontmatter.path,
                },
            })
        })
    })
}
