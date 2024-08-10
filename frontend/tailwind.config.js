/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        yellowtail: ['var(--font-yellowtail)'],
      },
      colors: {
        bnexGreen: '#49dd6d',
        bnexBlue: '#4f00e8',
        bnexDarkBlue: '#04123a',
        bnexLight: '#dee5ef',
      }
    },
  },
  plugins: [],
};
