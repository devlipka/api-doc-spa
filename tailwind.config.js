/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            brandBlue: "#102544",
            brandGreen: "#15eca3",
            brandDarkGreen: "#4f9298",
            brandLightGreen: "#03bfa0",
        },
        fontFamily: {
            open: ["Open Sans"],
            montserrat: ["Montserrat"],
            roboto: ["Roboto Condensed"],
        },
        extend: {
            border: ["focus"],
        },
    },
    plugins: [],
};
