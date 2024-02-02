import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="bg-light-grey p-12 pb-0 min-h-screen">
            <Header />

            <div className="bg-white container m-auto mt-14 rounded-lg flex flex-col justify-between max-w-screen-xl">
                {children}
                <Footer />
            </div>
        </div>
    )
}
