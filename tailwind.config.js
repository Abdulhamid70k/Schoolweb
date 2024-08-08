module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        monserrat: ["Lilita One", "sans-serif"],
        raleway: ["Raleway", "sans-serif"] 
      },
      animation: {
        scroll: 'scroll var(--animation-duration, 20s) linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(var(--visible-content-width))' },
          '100%': { transform: 'translateX(calc(-1 * var(--content-width)))' },
        },
      },
    },
  },
  plugins: [],
}