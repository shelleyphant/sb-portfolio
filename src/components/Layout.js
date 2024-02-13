import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="min-h-screen !pt-20 sm:!pt-8 p-6 !pb-0 bg-light-grey sm:p-12">
            <Header />

            <div className="container flex flex-col justify-between max-w-screen-xl m-auto bg-white rounded-lg mt-14">
                {children}
                <Footer />
            </div>
        </div>
    )
}
