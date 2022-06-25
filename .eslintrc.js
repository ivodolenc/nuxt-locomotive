module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  extends: ['@nuxtjs', 'eslint-config-prettier'],

  ignorePatterns: ['node_modules', '.nuxt', 'dist', 'sw.js']
}
