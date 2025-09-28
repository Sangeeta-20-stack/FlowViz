export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gemini: {
          50: "#F8F9FF",   // subtle background
          100: "#F3F0FF",  // code block bg
          300: "#E0DBFF",  // borders
          500: "#6C63FF",  // primary purple
          400: "#9C8CFF",  // secondary lavender
          700: "#4B44CC",  // darker purple
          text: "#2D2D2D"  // dark text
        }
      }
    }
  }
}
