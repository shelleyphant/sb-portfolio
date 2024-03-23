import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import * as Icon from 'react-feather'

export default function ContactForm() {
    const [state, handleSubmit] = useForm('xwkaqlnd')
    if (state.succeeded) {
        return <p>Thanks! Your message has been sent.</p>
    }
    return (
        <form onSubmit={handleSubmit} method="POST">
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
            ></input>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" autoComplete="email" />
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

            <input
                type="hidden"
                id="g-recaptcha-response"
                name="g-recaptcha-response"
            ></input>

            <button
                type="submit"
                className="button"
                disabled={state.submitting}
            >
                Send <Icon.Send className="inline -mt-1 stroke-1" />
            </button>

            <ValidationError errors={state.errors} className="pl-3" />
        </form>
    )
}
