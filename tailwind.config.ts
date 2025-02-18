import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#012c66',
        'primary-yellow': '#ffb80d',
        'gray-dark': '#545454',
        'gray-light': '#a6a6a6',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'benedict': ['Benedict', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
