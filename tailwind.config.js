const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-open-sans)', ...fontFamily.sans],
                'title-font': ['var(--title-font)', ...fontFamily.sans]
            },
            colors: {
                'edsoft-blue': '#2A8BF4',
                'edsoft-gray-light': '#676F73'
            },
            screens: {
                xxs: '480px',
                xs: '576px'
            }
        }
    },
    plugins: []
}
