/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      safelist: [
        "animate-[fade-in_1s_ease-in-out]",
        "animate-[fade-in-down_1s_ease-in-out]",
      ],
      backgroundImage: {
        "world-map": "url('/src/assets/World-Map.svg')",
      },
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
}
