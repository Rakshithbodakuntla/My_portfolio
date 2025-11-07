/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111215",         // Background
        card: "rgba(255,255,255,0.05)", // Glass panels
        accent: "#06b6d4",       // Cyan accent
        textPrimary: "#e5e5e5",  // Main text
        textSecondary: "#9ca3af", // Muted text
      },
      boxShadow: {
        glow: "0 0 15px rgba(6,182,212,0.3)",
      },
    },
  },
  plugins: [],
}
