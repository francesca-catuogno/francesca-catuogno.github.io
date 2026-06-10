/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,svelte}", // Cerca dentro tutti i file .svelte e .js/.ts
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacaembu': ['"Pacaembu Trial"', 'sans-serif'],
        'arimo': ['"Arimo"', 'sans-serif'],
      },
    },
  plugins: [],
}