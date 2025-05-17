/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./assets/pug/**/*.pug",
    "./assets/scss/**/*.scss",
    // Add paths to scan the CUBA template files
  ],
  theme: {
    screens: {
      // Copy screen breakpoints from CUBA template
      xxl: { max: "1399px" },
      xl: { max: "1199px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "575px" },
    },
    extend: {
      // Copy any theme extensions from CUBA template
      colors: {
        // Add CUBA's color palette
      },
    },
  },
  plugins: [],
}
