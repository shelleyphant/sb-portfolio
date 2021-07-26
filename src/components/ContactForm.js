import React from 'react'
import {useForm} from '@formspree/react';

export default function ContactForm({ Component, pageProps }) {
    const [state, handleSubmit] = useForm('contactForm');
    if (state.succeeded) {
        return <div>Thank you for signing up!</div>;
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name"></input>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" type="text" name="message"></textarea>
            <button type="submit" className="button" disabled={state.submitting}>Send</button>
        </form>
    )
}
