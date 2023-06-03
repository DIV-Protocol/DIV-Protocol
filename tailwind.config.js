/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: { // Limiting the theme so the colors are consistent
      text: "#2b2b2b",
      background: "#e1e1e1",
      primary: "#43508f",
      secondary: "#353a53",
      accent: "#6676b2",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
