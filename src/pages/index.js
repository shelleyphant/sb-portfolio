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

import contentful from '../../static/images/logos/contentful.svg'
import CSCart from '../../static/images/logos/cs-cart.svg'
import dato from '../../static/images/logos/dato.svg'
import strapi from '../../static/images/logos/strapi.svg'
import cpanel from '../../static/images/logos/cpanel.svg'
import whm from '../../static/images/logos/whm.svg'

export default function index({ data }) {
    library.add(fab)
    return (
        <Layout>
            <Helmet title="Shelley Bassett" />
            <section
                id="welcome"
                className="flex flex-col justify-center gap-12 md:flex-row"
            >
                <div className="flex flex-col justify-center">
                    <h1 className="h2 !text-left !text-5xl after:!left-0 after:!translate-x-0">
                        Welcome
                    </h1>
                    <p className="text-xl">
                        Shelley Bassett is a digital designer/developer based in
                        Melbourne, Aus
                    </p>
                </div>
                <StaticImage
                    src="../images/shelley bassett.jpeg"
                    className="w-full lg:w-1/3 aspect-square"
                    alt="Portrait of Shelley Bassett"
                />
            </section>

            <section id="about" className="content">
                <h2>About Shelley</h2>
                <StaticImage
                    src="../images/shelley and chester 1.jpeg"
                    className="float-left w-full mb-4 mr-8 md:w-1/2 lg:w-2/5"
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
                    and freelances under{' '}
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

            <section id="expertise" className="w-full m-auto md:w-2/3">
                <h2>Expertise</h2>

                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <h3>Languages & Frameworks</h3>
                        <ul className="flex flex-row flex-wrap gap-4 mb-6 text-3xl">
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-html5"
                                    aria-describedby="html5-desc"
                                />
                                <span role="tooltip" id="html5-desc">
                                    HTML5
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-css3-alt"
                                    aria-describedby="css3-desc"
                                />
                                <span role="tooltip" id="css3-desc">
                                    CSS3
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-sass"
                                    aria-describedby="sass-desc"
                                />
                                <span role="tooltip" id="sass-desc">
                                    Sass
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-less"
                                    aria-describedby="less-desc"
                                />
                                <span role="tooltip" id="less-desc">
                                    Less
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-tailwindcss-plain"
                                    aria-describedby="tailwind-desc"
                                ></i>
                                <span role="tooltip" id="tailwind-desc">
                                    TailwindCSS
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-bootstrap"
                                    aria-describedby="bootstrap-desc"
                                />
                                <span role="tooltip" id="bootstrap-desc">
                                    Bootstrap
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-javascript-plain"
                                    aria-describedby="javascript-desc"
                                ></i>
                                <span role="tooltip" id="javascript-desc">
                                    JavaScript
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-typescript-plain"
                                    aria-describedby="typescript-desc"
                                ></i>
                                <span role="tooltip" id="typescript-desc">
                                    Typescript
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-php"
                                    aria-describedby="php-desc"
                                />
                                <span role="tooltip" id="php-desc">
                                    PHP
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-mysql-plain"
                                    aria-describedby="mysql-desc"
                                ></i>
                                <span role="tooltip" id="mysql-desc">
                                    MySQL
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-graphql-plain"
                                    aria-describedby="graphql-desc"
                                ></i>
                                <span role="tooltip" id="graphql-desc">
                                    GraphQL
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-react"
                                    aria-describedby="react-desc"
                                />
                                <span role="tooltip" id="react-desc">
                                    React
                                </span>
                            </li>

                            <li>
                                <i
                                    className="devicon-nextjs-original"
                                    aria-describedby="next-desc"
                                ></i>
                                <span role="tooltip" id="next-desc">
                                    NextJS
                                </span>
                            </li>

                            <li>
                                <i
                                    className="devicon-gatsby-plain"
                                    aria-describedby="gatsby-desc"
                                ></i>
                                <span role="tooltip" id="gatsby-desc">
                                    Gatsby
                                </span>
                            </li>

                            <li>
                                <i
                                    className="devicon-laravel-plain"
                                    aria-describedby="laravel-desc"
                                ></i>
                                <span role="tooltip" id="laravel-desc">
                                    Laravel
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-codeigniter-plain"
                                    aria-describedby="codeigniter-desc"
                                ></i>
                                <span role="tooltip" id="codeigniter-desc">
                                    CodeIgniter
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>CMS</h3>
                        <ul className="flex flex-row flex-wrap gap-4 mb-6 text-3xl">
                            <li>
                                <i
                                    className="devicon-wordpress-plain"
                                    aria-describedby="wordpress-desc"
                                ></i>
                                <span role="tooltip" id="wordpress-desc">
                                    WordPress
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-woocommerce-plain"
                                    aria-describedby="woocommerce-desc"
                                ></i>
                                <span role="tooltip" id="woocommerce-desc">
                                    WooCommerce
                                </span>
                            </li>
                            <li>
                                <img
                                    src={CSCart}
                                    alt="CS-Cart Logo"
                                    aria-describedby="cs-cart-desc"
                                />
                                <span role="tooltip" id="cs-cart-desc">
                                    CS-Cart
                                </span>
                            </li>
                            <li>
                                <img
                                    src={strapi}
                                    alt="Strapi Logo"
                                    aria-describedby="strapi-desc"
                                />
                                <span role="tooltip" id="strapi-desc">
                                    Strapi
                                </span>
                            </li>
                            <li>
                                <img
                                    src={dato}
                                    alt="DatoCMS Logo"
                                    aria-describedby="dato-desc"
                                />
                                <span role="tooltip" id="dato-desc">
                                    DatoCMS
                                </span>
                            </li>
                            <li>
                                <img
                                    src={contentful}
                                    alt="Contentful Logo"
                                    aria-describedby="contentful-desc"
                                />
                                <span role="tooltip" id="constentful-desc">
                                    Contentful
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Servers</h3>
                        <ul className="flex flex-row flex-wrap gap-4 mb-6 text-3xl">
                            <li>
                                <img
                                    src={whm}
                                    alt="WHM Logo"
                                    aria-describedby="whm-desc"
                                />
                                <span role="tooltip" id="whm-desc">
                                    WHM
                                </span>
                            </li>
                            <li>
                                <img
                                    src={cpanel}
                                    alt="cPanel Logo"
                                    aria-describedby="cpanel-desc"
                                />
                                <span role="tooltip" id="cpanel-desc">
                                    cPanel
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-apache-plain"
                                    aria-describedby="apache-desc"
                                ></i>
                                <span role="tooltip" id="apache-desc">
                                    Apache
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-node-js"
                                    aria-describedby="node-desc"
                                />
                                <span role="tooltip" id="node-desc">
                                    NodeJS
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-heroku-original"
                                    aria-describedby="heroku-desc"
                                ></i>
                                <span role="tooltip" id="heroku-desc">
                                    Heroku
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Integrations</h3>
                        <ul className="flex flex-row flex-wrap gap-4 mb-6 text-3xl">
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-paypal"
                                    aria-describedby="paypal-desc"
                                />
                                <span role="tooltip" id="paypal-desc">
                                    PayPal
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-stripe-s"
                                    aria-describedby="stripe-desc"
                                />
                                <span role="tooltip" id="stripe-desc">
                                    Stripe
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-facebook"
                                    aria-describedby="facebook-desc"
                                />
                                <span role="tooltip" id="facebook-desc">
                                    Facebook
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-instagram"
                                    aria-describedby="instagram-desc"
                                />
                                <span role="tooltip" id="instagram-desc">
                                    Instagram
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-twitter"
                                    aria-describedby="twitter-desc"
                                />
                                <span role="tooltip" id="twitter-desc">
                                    Twitter
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-x-twitter"
                                    aria-describedby="x-desc"
                                />
                                <span role="tooltip" id="x-desc">
                                    X (Twitter)
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Tools</h3>
                        <ul className="flex flex-row flex-wrap gap-4 mb-6 text-3xl">
                            <li>
                                <i
                                    className="devicon-jamstack-original"
                                    aria-describedby="jamstack-desc"
                                ></i>
                                <span role="tooltip" id="jamstack-desc">
                                    JamStack
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-git-plain"
                                    aria-describedby="git-desc"
                                ></i>
                                <span role="tooltip" id="git-desc">
                                    Git
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-github-original"
                                    aria-describedby="github-desc"
                                ></i>
                                <span role="tooltip" id="github-desc">
                                    GitHub
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-gitlab-plain"
                                    aria-describedby="gitlab-desc"
                                ></i>
                                <span role="tooltip" id="gitlab-desc">
                                    GitLab
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-vscode-plain"
                                    aria-describedby="vscode-desc"
                                ></i>
                                <span role="tooltip" id="vscode-desc">
                                    VS Code
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-npm"
                                    aria-describedby="npm-desc"
                                />
                                <span role="tooltip" id="npm-desc">
                                    NPM
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon="fa-brands fa-yarn"
                                    aria-describedby="yarn-desc"
                                />
                                <span role="tooltip" id="yarn-desc">
                                    Yarn
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-composer-line"
                                    aria-describedby="composer-desc"
                                ></i>
                                <span role="tooltip" id="composer-desc">
                                    Composer
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Software & Programs</h3>
                        <ul className="flex flex-row flex-wrap gap-4 mb-6 text-3xl">
                            <li>
                                <i
                                    className="devicon-figma-plain"
                                    aria-describedby="figma-desc"
                                ></i>
                                <span role="tooltip" id="figma-desc">
                                    Figma
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-illustrator-plain"
                                    aria-describedby="illustrator-desc"
                                ></i>
                                <span role="tooltip" id="illustrator-desc">
                                    Adobe Illustrator
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-photoshop-plain"
                                    aria-describedby="photoshop-desc"
                                ></i>
                                <span role="tooltip" id="photoshop-desc">
                                    Adobe Photoshop
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-filezilla-plain"
                                    aria-describedby="filezilla-desc"
                                ></i>
                                <span role="tooltip" id="filezilla-desc">
                                    FileZilla
                                </span>
                            </li>
                            <li>
                                <i
                                    className="devicon-vscode-plain"
                                    aria-describedby="vscode-desc"
                                ></i>
                                <span role="tooltip" id="vscode-desc">
                                    VS Code
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="work">
                <h2>Selected Work</h2>

                <div className="grid grid-cols-1 gap-12 case-studies xl:grid-cols-3 md:grid-cols-2">
                    {data.allMdx.edges.map(({ node }) => {
                        return (
                            <CaseStudy
                                key={node.id}
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
