const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve('src/pages/{Mdx.frontmatter__slug}.js')

    return graphql(`
        {
            allMdx {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            slug
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
                path: node.frontmatter.slug,
                component: projectTemplate,
                context: {
                    id: node.id,
                },
            })
        })
    })
}
