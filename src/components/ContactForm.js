import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm({ Component, pageProps }) {
    const [state, handleSubmit] = useForm('xwkaqlnd')
    if (state.succeeded) {
        return <p>Thanks! Your message has been sent.</p>
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name"></input>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

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

            <button
                type="submit"
                className="button"
                disabled={state.submitting}
            >
                Send
            </button>
        </form>
    )
}
