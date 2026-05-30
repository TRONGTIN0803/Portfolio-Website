import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        accent: "hsl(var(--accent))",
        signal: "hsl(var(--signal))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 28px 90px -54px rgba(124, 92, 255, 0.5)",
        signal: "0 18px 60px -30px rgba(124, 92, 255, 0.65)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.04)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
