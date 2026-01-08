import flowbite from "flowbite/plugin";

export default {
  content: [
    "./components/**/*.tsx",
    "./node_modules/flowbite-react/lib/**/*.{js,ts}",
    "./pages/**/*.tsx",
    "./index.html",
    "./index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed", // User's primary
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        // User's secondary/accent colors
        accent: "#ec4899",
        success: "#10b981",
        indigo: "#6574cd",
        purple: "#9561e2",
        pink: "#f66D9b",
        red: "#B42583",
        orange: "#EEB55A",
        yellow: "#F58140",
        green: "#38c172",
        teal: "#4dc0b5",
        cyan: "#6cb2eb",
        // Backgrounds
        "bg-body": "#0f172a",
        "bg-card": "#1e293b",
      },
      fontFamily: {
        sans: [
          "Nunito",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        body: [
          "Nunito",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        "2xs": "16rem",
        "8xl": "90rem",
      },
    },
  },
  plugins: [flowbite],
};
