/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playFairDisplay' : ['"Playfair Display"', 'serif'],
        'roboto' : ['"Roboto"', 'sans-serif'],
      },
      colors: {        
        silver : '#C0C0C0',
        gold : '#FFD700',
        darkGray : '#233040',
        lightGray : '#23304098',
        lightOrange: 'rgb(240, 177, 88)',
        matisse : '#197391',
        frenchPass : '#cfeffc',
      },
      gridTemplateColumns: {
        'auto-fit-minmax' : 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      boxShadow: {
        'customShadow' : '0 5px 10px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        hero: "url('/assets/sample-bg.png')",
      }
    },
  plugins: [],
  }
}
