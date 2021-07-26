import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm({ Component, pageProps }) {
    const [state, handleSubmit] = useForm('contactForm');
    
    if (state.succeeded) {
        return <div>Thank you for your message!</div>;
    }
    // else if (state.errors) {return <div>Sorry, your message couldn't be sent</div>}
    
    return (
        <form onSubmit={handleSubmit} method='POST'>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name"></input>
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">Message</label>
            <textarea id="message" type="text" name="message"></textarea>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" className="button" disabled={state.submitting}>Send</button>
        </form>
    )
}
