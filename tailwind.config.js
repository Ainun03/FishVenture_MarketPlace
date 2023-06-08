/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors : {
                'transparent': 'transparent',
                'primary' : '#39A2DB',
                'primary1' : '#74FEBD',
                'secondary' : '#103CEF',
                'secondary2' : '#64E9FF',
                'third' : '#B5A61F',
            },
            animation:{
                'loading' : 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;'

            },
            

        },
    },
    plugins: [],
}