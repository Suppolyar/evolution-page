/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "war-robots": "url('@/assets/bg.jpeg')",
      },
      borderRadius: {
        'xd': '20px',
      },
      colors: {
        footer: '#131114',
        btn: 'rgba(0, 0, 0, 0.15)',
        block: 'rgba(0, 0, 0, 0.55)',
      }
    },
  },
  plugins: [],
};
