import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

const lost = () => {
    return (
        <Layout>
            <Helmet title="Shelley Bassett" />
            <section>
                <h2>Page Not Found</h2>
                <p>
                    Whoops, that page doesn't exist. If you think it should,
                    reach out to hello@shelleybassett.com
                </p>
            </section>
        </Layout>
    )
}

export default lost
