/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to all your React component files
    "node_modules/flowbite-react/**/*.js" // Include Flowbite React components
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-md': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      colors: {
        'custom-tab': '#6C7B95', // Add your custom color
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Flowbite
    require('@tailwindcss/typography'), // Typography plugin
  ],
}

