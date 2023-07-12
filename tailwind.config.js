/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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