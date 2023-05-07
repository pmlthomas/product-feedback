/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                purple: "#af20ff",
                darkBlue: "#195ad2",
                lightDark: "#314668",
                lightGray: "#f2f2f5",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            screens: {
                md: "813px",
                lg: "1204px",
            },
        },
    },
    plugins: [],
};
