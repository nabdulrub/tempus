/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "var(--backgroundColor)",
        "secondary-color": "var(--secondaryColor)",
        "active-color": "var(--activeColor)",
        "text-gray": "var(--textGray)",
        "text-white": "var(--textWhite)",
      },
    },
  },
  plugins: [],
};
