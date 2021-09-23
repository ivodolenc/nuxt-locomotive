module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],

  plugins: [],

  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['apply', 'screen']
      }
    ]
  }
}
