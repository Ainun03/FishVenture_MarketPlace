/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors : {
                'transparent': 'transparent',
                'primary' : '#0172AF',
                'secondary' : '#103CEF',
                'third' : '#B5A61F',
            },
        },
    },
    plugins: [],
}