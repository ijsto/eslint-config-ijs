// see https://github.com/yannickcr/eslint-plugin-react

module.exports = {
  plugins: ['react-hooks'],

  rules: {
    // React Configs
    'react/display-name': 1,
    // Allow using Array index in key prop
    'react/no-array-index-key': 0,
    // Allow missing React when using JSX
    // (NextJS for example has an implicit import of it)
    'react/react-in-jsx-scope': 0,
    // Enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true }
    ],
    'react/forbid-prop-types': 0,
    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'error',
    // Allow absence of a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 0,
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  }
};
