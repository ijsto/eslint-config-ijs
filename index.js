// see https://github.com/ijsto/eslint-config-ijs

module.exports = {
  extends: ['airbnb', './rules/ijs'].map(require.resolve),
  plugins: ['html'],

  rules: {},

  configs: {
    // Accessibility
    react: require('./config/a11y'),

    // React
    react: require('./config/react'),

    // Augmenting configs - When extending, these go after the core config
    graphql: require('./config/graphql'),

    // Prettier config - When extending, this must go last
    prettier: require('./config/prettier')
  }
};
