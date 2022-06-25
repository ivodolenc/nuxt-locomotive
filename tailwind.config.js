module.exports = {
  content: [
    './components/**/*.{js,vue}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.js'
  ],

  theme: {
    fontFamily: {
      sans: ['I', 'Helvetica', 'Arial', 'sans-serif']
    },

    extend: {
      colors: {
        dark: '#030303'
      }
    }
  }
}
