/** @type {import('tailwindcss').Config} */
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
            'dark-grey': '#333333',
            white: '#ffffff',
            black: '#000000',
        },
        fontFamily: {
            raleway: ['Raleway', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
        },
        extend: {},
    },
    plugins: ['gatsby-plugin-postcss'],
}
