// see https://github.com/prettier/eslint-plugin-prettier

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier', 'prettier/react'],

  rules: {},

  overrides: [
    {
      // disable prettier processing of graphql files
      // eslint-plugin-graphql is required to process graphql files, but it also
      // suppresses all lint violations except its own, which results in a
      // wasteful no-op.
      files: ['*.graphql', '*.gql'],
      rules: {
        'prettier/prettier': 'off'
      }
    },
    {
      files: ['*.js', '*.jsx']
    }
  ]
};
