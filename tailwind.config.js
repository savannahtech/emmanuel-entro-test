/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Liminal/Gray/700
        laminar: {
          gray: {
            1000: "#101828",
            700: "#475467",
            600: "#667085",
            500: "#98A2B3",
            200: "#DFE3EB",
            100: "#F0F2F7",
            50: "#F7F9FC",
          },
        },
        // Tag/Sapphire_blue/1000
        tag: {
          sapphire: {
            blue: {
              1000: "#0F52BA",
              400: "#99B4DD",
              100: "#DEE5F0",
            },
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card_row: "0px 4px 6px -2px #10182808",
        card_row2: "0px 12px 16px -4px #10182814",
        card_row3: "0px 24px 32px -8px #1018281A",
      },
      spacing: {
        sm: "8px",
        md: "50px",
        lg: "130px",
        xl: "120px",
        "2xl": "160px",
      },
      fontSize: {
        14: "14px",
        16: "16px",
      },
      lineHeight: {
        18: "18px",
        20: "20px",
      },
    },
  },
  plugins: [],
};
