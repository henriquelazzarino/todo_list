/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    colors: {
      "dark-green": "#38823B",
      "green": "#4CAF50",
      "green-2":"#469E49",
      "light-green": "#CFE9D1",
      "dark-gray": "#2C2C2C",
      "gray":"#B5B5B5",
      "light-gray": "#EBEBEB",
      "white": "#F5F5F5",
      "slate-800": "#1E293B"
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
    },
    screens: {
      'xs': {'min': '100px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {},
  },
  plugins: [],
}

