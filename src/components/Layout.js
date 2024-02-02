import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="bg-light-grey p-12 min-h-screen">
            <Header />

            <div className="bg-white container m-auto mt-14 rounded-md flex flex-col justify-between">
                {children}
                <Footer />
            </div>
        </div>
    )
}
