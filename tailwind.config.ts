import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        thu: {
          purple: "#82318E",
          deep: "#120718",
          blue: "#3A78FF",
          cyan: "#36D8FF",
          ink: "#050607",
          neon: "#A3FF12",
          acid: "#D7FF4A"
        }
      },
      boxShadow: {
        glow: "0 0 36px rgba(163, 255, 18, 0.18)",
        purple: "0 20px 80px rgba(130, 49, 142, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
