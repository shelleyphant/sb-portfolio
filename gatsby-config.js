require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: 'Shelley Bassett',
        siteUrl: 'https://shelleybassett.com',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Shelley Bassett',
                short_name: 'Shelley Bassett',
                start_url: '/',
                icon: 'src/images/SB_monogram.png',
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-postcss',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-anchor-links',
            options: {
                offset: -100,
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'downloads',
                path: `${__dirname}/src/downloads`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: `${__dirname}/src/projects`,
            },
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/projects`,
            },
        },
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                            showCaptions: ['title', 'alt'],
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ['G-6JV7SZD5RX', 'UA-77511112-1'],
                gtagConfig: {
                    optimize_id: 'OPT_CONTAINER_ID',
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                src: 'https://www.google.com/recaptcha/api.js?render={6LcO4aEpAAAAAEDwdADSDJSvgv_j0hAmXBsL9aWN}',
            },
        },
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                src: '/js/recaptcha.js',
            },
        },
    ],
}
