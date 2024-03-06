/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        body: ["Roboto"],
      },
      colors: {
        primary: "hsl(4, 100%, 67%)",
        "darker-grey": "hsl(234, 29%, 20%)",
        "dark-grey": "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
      },
    },
  },
  plugins: [],
};
