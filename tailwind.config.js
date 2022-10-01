/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                mont: ["Montserrat", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                ps: ["Product Sans", "sans-serif"],
                np: ["NeuePower", "sans-serif"],
            },
            colors: {
                primary: "#70dd36",
                secondary: "#386e1b",
            },
        },
    },
};
