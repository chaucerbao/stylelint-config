// Import the default preset
const config = require('./index.js')

// Export the Stylelint configuration preset for SCSS
module.exports = {
  ...config,
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
