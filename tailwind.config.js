/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {



          "primary": "#12bccc",



          "secondary": "#41d1db",



          "accent": "#f7e540",



          "neutral": "#201C2C",



          "base-100": "#444550",



          "info": "#81A0DF",



          "success": "#27BE66",



          "warning": "#C29005",



          "error": "#EF816B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

