module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true
    }
  },

  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true
  },

  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'comma-dangle': 0,
    // Requires return statements to always specify return value
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 0,
    'func-names': ['error', 'always'],
    import: 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    // Allow the use of console.log / .warm / .error (still should be stripped from stage === production!)
    // https://eslint.org/docs/rules/no-console
    'no-console': 0,
    'no-underscore-dangle': 0,
    // Ensure debugger is not used
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',
    // Allow alert - but should not be used in production
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 0,
    'no-return-assign': ['error', 'except-parens'],
    radix: 0,
    // Make sure imports are consistent across files
    'sort-imports': 'error',
    // Allow/don't warn about a space before function parenthesis
    'space-before-function-paren': 0,
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error']
      }
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
    'no-unused-vars': [
      1,
      {
        ignoreSiblings: true,
        argsIgnorePattern: 'res|next|^err'
      }
    ],
    // Enforce proper use of scoped variables
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],

    // Ensure consistent quotes
    // https://eslint.org/docs/rules/no-shadow
    quotes: [
      2,
      'single',
      {
        // Allows strings to use single-quotes or double-quotes so long as the string
        // contains a quote that would have to be escaped otherwise
        avoidEscape: true,
        // Allows to use backticks
        allowTemplateLiterals: true
      }
    ]
  }
};
