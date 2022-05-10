module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spacemono: ["Space Mono", "monospace"],
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        backgif: "url(./images/backgif.gif)",
        explode: "url(./images/powder.png)",
      },
      colors: { dBlue: "#13161E" },
    },
  },
  plugins: [],
};
