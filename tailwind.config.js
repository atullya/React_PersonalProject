/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    "node_modules/flowbite/**/*.js", // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require("preline/plugin"),
    require("daisyui"),

    require("flowbite/plugin"), // Add Flowbite as a plugin
  ],
};
