import React from 'react'
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            
            <div className="wrapper">
                { children }
                <Footer />
            </div>
        </div>
        
    )
}
