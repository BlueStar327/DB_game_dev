/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,scss}", // Add scss to the list of extensions
    // other paths go here
  ],
  // other configurations
  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
};

