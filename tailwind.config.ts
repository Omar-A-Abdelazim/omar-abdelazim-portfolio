import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0a0a0f",
        card: "#111118",
        border: "#1f1f2e",
        "text-primary": "#ffffff",
        "text-secondary": "#9ca3af",
        accent: "#00d4ff",
        "accent-dim": "rgba(0, 212, 255, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "cursor-pulse": "cursorPulse 2s ease-in-out infinite",
      },
      keyframes: {
        cursorPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
