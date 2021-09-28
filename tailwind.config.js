module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#171717',
                marker: '#22B809',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
