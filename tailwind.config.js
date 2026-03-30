/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["'Syne'", "sans-serif"],
        dm: ["'DM Sans'", "sans-serif"],
      },
      animation: {
        "float-1": "float 3s ease-in-out infinite",
        "float-2": "float 3s ease-in-out 0.4s infinite",
        "float-3": "float 3s ease-in-out 0.8s infinite",
        "float-4": "float 3s ease-in-out 1.2s infinite",
        "float-5": "float 3s ease-in-out 1.6s infinite",
        "float-6": "float 3s ease-in-out 2.0s infinite",
        "pulse-slow": "pulse 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.5s ease both",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        appnest: {
          primary: "#7C3AED",
          "primary-content": "#ffffff",
          secondary: "#06B6D4",
          "secondary-content": "#ffffff",
          accent: "#F59E0B",
          "accent-content": "#ffffff",
          neutral: "#1A1A2E",
          "neutral-content": "#94A3B8",
          "base-100": "#0F0F1A",
          "base-200": "#1A1A2E",
          "base-300": "#16213E",
          "base-content": "#F1F5F9",
          info: "#06B6D4",
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ],
    darkTheme: "appnest",
  },
};
