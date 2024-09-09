/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#F9FAFC",
        "dark-gray": "#303030",
        "cool-gray": "#797D8C",
        "deep-blue": "#04103B",
        "steel-blue": "#3D4756",
        "vibrant-blue": "#5041BC",
        "ghost-white": "#F8F9FB",
        "icon-color": "#1E232AA1",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 6.51px 11.39px 0px #9E8CC741",
      },
    },
  },
  plugins: [],
};
