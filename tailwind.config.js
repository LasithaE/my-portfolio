module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["scrollbar-hide"],
  theme: {
    extend: {
      fontFamily: {
        loverine: ["Loverine", "sans-serif"],
      },
      maxWidth: {
        "content-wrapper": "92vw",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
};
