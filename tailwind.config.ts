import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(196 18% 84%)",
        input: "hsl(195 24% 92%)",
        ring: "hsl(193 81% 29%)",
        background: "hsl(190 28% 92%)",
        foreground: "hsl(210 45% 8%)",
        primary: {
          DEFAULT: "hsl(194 84% 24%)",
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(191 28% 88%)",
          foreground: "hsl(210 45% 8%)",
        },
        muted: {
          DEFAULT: "hsl(194 24% 89%)",
          foreground: "hsl(199 22% 38%)",
        },
        accent: {
          DEFAULT: "hsl(189 55% 83%)",
          foreground: "hsl(210 45% 8%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 98%)",
          foreground: "hsl(210 45% 8%)",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(5, 53, 73, 0.08)",
        glow: "0 0 0 1px rgba(6, 95, 115, 0.06), 0 20px 50px rgba(6, 95, 115, 0.18)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(14, 116, 144, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 116, 144, 0.08) 1px, transparent 1px)",
        hero: "radial-gradient(circle at top left, rgba(96, 165, 250, 0.14), transparent 28%), radial-gradient(circle at 85% 15%, rgba(20, 184, 166, 0.20), transparent 24%), linear-gradient(180deg, rgba(240, 249, 255, 0.95), rgba(236, 253, 245, 0.9))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
