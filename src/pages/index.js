import React from 'react'
import Layout from '../components/Layout'
import CaseStudy from '../components/CaseStudy'
import ContactForm from '../components/ContactForm'
import { graphql } from 'gatsby'
import { FormspreeProvider } from '@formspree/react'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default function index({ data }) {
    library.add(fab)
    return (
        <Layout>
            <Helmet title="Shelley Bassett" />
            <section
                id="welcome"
                className="flex flex-row gap-12 justify-center"
            >
                <div className="flex flex-col justify-center">
                    <h1 className="h2 !text-left !text-3xl after:!left-0 after:!translate-x-0">
                        Welcome
                    </h1>
                    <p>
                        Shelley Bassett is a digital designer/developer based in
                        Melbourne, Aus
                    </p>
                </div>
                <StaticImage
                    src="../images/shelley bassett.jpeg"
                    className="w-1/3 aspect-square"
                    alt="Portrait of Shelley Bassett"
                />
            </section>

            <section id="about" className="content">
                <h2>About Shelley</h2>
                <StaticImage
                    src="../images/shelley and chester 1.jpeg"
                    className="float-left w-2/5 mr-8"
                    alt="Shelley Bassett and her ginger cat Chester"
                />
                <p>
                    Shelley is a strategic and results-driven Technical Studio
                    Lead, with experience leading high-performance development
                    teams. She studied digital design with a focus on UI/UX and
                    accessibility, and now brings her careful eye into
                    development and management roles. Based in Melbourne,
                    Australia, she has recently discovered a new enjoyment in
                    traveling to work overseas.
                </p>
                <p>
                    She is proficient in leveraging PHP, JavaScript, other
                    modern languages, and associated frameworks to architect,
                    develop, and optimise robust web applications. With a proven
                    track record of successfully delivering complex projects
                    within scope, on time, and within budget; she can not only
                    manage client expectations, but exceed them.
                </p>
                <p>
                    She specialises in full-stack websites and applications;
                    implementing best practices, code standards, accessibility
                    requirements and performance optimisation techniques to
                    ensure scalable and maintainable projects. Within the
                    agency, she is recognised for strong problem-solving skills
                    and the ability to train, motivate, and coach team members.
                </p>
                <p>
                    Currently, Shelley is Studio Lead at{' '}
                    <a
                        href="https://www.swim.com.au"
                        target={'_blank'}
                        rel="noopener noreferrer"
                    >
                        Swim Communications
                    </a>{' '}
                    and freelances as{' '}
                    <a
                        href="https://www.brolgadigital.com.au"
                        target={'_blank'}
                        rel="noopener noreferrer"
                    >
                        Brolga Digital
                    </a>
                    .
                </p>
            </section>

            <section id="expertise">
                <h2>Expertise</h2>
                <h3>Languages & Frameworks</h3>
                <div>
                    <FontAwesomeIcon icon="fa-brands fa-html5" />
                    <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
                    <FontAwesomeIcon icon="fa-brands fa-sass" />
                    <FontAwesomeIcon icon="fa-brands fa-less" />
                    <i class="devicon-tailwindcss-plain"></i>
                    <FontAwesomeIcon icon="fa-brands fa-bootstrap" />
                    <FontAwesomeIcon icon="fa-brands fa-js" />
                    <i class="devicon-typescript-plain"></i>
                    <FontAwesomeIcon icon="fa-brands fa-php" />
                    <i class="devicon-mysql-plain"></i>
                    <i class="devicon-graphql-plain"></i>
                    <FontAwesomeIcon icon="fa-brands fa-react" />

                    <i class="devicon-nextjs-original"></i>

                    <i class="devicon-gatsby-plain"></i>

                    <i class="devicon-laravel-plain"></i>
                    <i class="devicon-codeigniter-plain"></i>
                </div>
                <h3>CMS</h3>
                <div>
                    <i class="devicon-wordpress-plain"></i>
                    <i class="devicon-woocommerce-plain"></i>
                    <p>CS-Cart, Strapi, Contentful, DatoCMS</p>
                </div>
                <h3>Servers</h3>
                <p>WHM, , </p>
                <FontAwesomeIcon icon="fa-brands fa-cpanel" />
                <i class="devicon-apache-plain"></i>
                <FontAwesomeIcon icon="fa-brands fa-node-js" />
                <h3>Integrations</h3>
                <div>
                    <FontAwesomeIcon icon="fa-brands fa-paypal" />
                    <FontAwesomeIcon icon="fa-brands fa-stripe-s" />

                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                </div>
                <h3>Tools</h3>
                <div>
                    <i class="devicon-jamstack-original"></i>
                    <i class="devicon-git-plain"></i>
                    <i class="devicon-github-original"></i>
                    <i class="devicon-gitlab-plain"></i>
                    <i class="devicon-vscode-plain"></i>
                    <FontAwesomeIcon icon="fa-brands fa-npm" />
                    <FontAwesomeIcon icon="fa-brands fa-yarn" />
                    <i class="devicon-composer-line"></i>
                </div>
                <h3>Software & Programs</h3>
            </section>

            <section id="work">
                <h2>Selected Work</h2>

                <div className="case-studies">
                    {data.allMdx.edges.map(({ node }) => {
                        return (
                            <CaseStudy
                                heading={node.frontmatter.title}
                                tagline={node.frontmatter.tagline}
                                live={
                                    node.frontmatter.site
                                        ? node.frontmatter.site
                                        : ''
                                }
                                git={
                                    node.frontmatter.git
                                        ? node.frontmatter.git
                                        : ''
                                }
                                link={node.frontmatter.slug}
                                image={node.frontmatter.thumbnail}
                                techstack={node.frontmatter.techstack}
                            />
                        )
                    })}
                </div>
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
                        git
                        techstack
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
