import React from 'react'
import {useForm} from '@formspree/react';

export default function ContactForm({ Component, pageProps }) {
    const [state, handleSubmit] = useForm('contactForm');
    if (state.succeeded) {
        return <div>Thank you for signing up!</div>;
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
            <label htmlFor="message">message</label>
            <textarea id="message" type="text" name="message"></textarea>
            <button type="submit" disabled={state.submitting}>Sign up</button>
        </form>
    )
}
