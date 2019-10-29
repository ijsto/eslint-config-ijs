// see https://github.com/apollographql/eslint-plugin-graphql

module.exports = {
  parser: 'babel-eslint',
  plugins: ['graphql'],

  rules: {
    'graphql/capitalized-type-name': 'off',
    'graphql/named-operations': 'error',
    'graphql/no-deprecated-fields': 'error',
    'graphql/template-strings': ['error', { env: 'literal' }],
    'graphql/required-fields': 'off'
  }
};
