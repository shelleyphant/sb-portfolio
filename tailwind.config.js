/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        colors: {
            blue: '#a7c9de',
            green: '#62b1a2',
            'light-pink': '#fac6c2',
            'dark-pink': '#ba436b',
            'light-grey': '#f8f8f8',
            'dark-grey': '#4d4d4d',
            white: '#ffffff',
            black: '#000000',
        },
        fontFamily: {
            raleway: ['Raleway', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
        },
        extend: {
            textShadow: { DEFAULT: '1px 0 0 currentColor' },
        },
    },
    plugins: [
        'gatsby-plugin-postcss',
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            )
        }),
    ],
}
