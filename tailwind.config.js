/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: "#D8DB2F",
        "slate-900": "#133041",
        "slate-700": "#4E6E7E",
        "slate-500": "#6B94A8",
        "slate-300": "#9ABED5",
        "slate-100": "#E4F4FD",
        red: "#D73328",
      },
    },
    fontSize: {
      t1: [
        "3.5rem",
        {
          lineHeight: "125%",
          letterSpacing: "-1px",
        },
      ],
      t2: [
        "1.5rem",
        {
          lineHeight: "125%",
          letterSpacing: "-1px",
        },
      ],
      t3: [
        "1.125rem",
        {
          lineHeight: "125%",
          letterSpacing: "-1px",
        },
      ],
      t4: [
        "1rem",
        {
          lineHeight: "150%",
          letterSpacing: "0px",
        },
      ],
      t5: [
        "0.875rem",
        {
          lineHeight: "150%",
          letterSpacing: "0px",
        },
      ],
    },
    fontFamily: {
      sans: ["PlusJakartaSans", "sans-serif"],
    },
  },
  plugins: [],
};
