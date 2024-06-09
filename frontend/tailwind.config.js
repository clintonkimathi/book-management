const elloTheme = require('./src/styles/theme.js')

module.exports = {
  jit: true,
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: elloTheme,
  plugins: [],
}