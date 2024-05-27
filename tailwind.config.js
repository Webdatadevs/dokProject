/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            "header-bg": "#FFFFFF",
            "blue-bg": "#42B2FC",
            "dark-bg": "#282828",
            "gray-bg": "#717171",
            "layout-bg": "#DEDEDE",
            "blue-btn": "#E1F1FF",
            "input-bg": "#F5F7FA",
            "text-bg": "#263238",
        },
        extend: {
            gridTemplateColumns: {
                "grid-cart": "repeat(auto-fill, minmax(300px, 1fr))",
            },
        },
    },
    plugins: [],
};
