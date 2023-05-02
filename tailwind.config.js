/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  /* daisyui: {
    themes: [
      {
        mytheme: {



          "primary": "#f3a6f4",



          "secondary": "#c9fc6a",



          "accent": "#edb723",



          "neutral": "#24262E",



          "base-100": "#253F55",



          "info": "#93A6F1",



          "success": "#0F805A",



          "warning": "#B9660E",



          "error": "#F1466B",
        },
      },
    ],
  }, */
  theme: {
    extend: {
      fontFamily: {
        Playfair: ['Playfair Display', 'serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

