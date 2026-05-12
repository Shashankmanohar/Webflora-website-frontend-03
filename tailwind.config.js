/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",   // covers app + app/Components
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["var(--font-cursive)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;

// Force cache purge trigger
