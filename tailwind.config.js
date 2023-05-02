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
                purple: "#b90d97",
                darkBlue: "#195ad2",
                lightDark: "#314668",
                lightGray: "#f2f2f5",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            screens: {
                md: "813px",
                lg: "1111px",
            },
        },
    },
    plugins: [],
};
