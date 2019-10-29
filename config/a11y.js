// see https://github.com/evcohen/eslint-plugin-jsx-a11y

module.exports = {
  rules: {
    // Accessibility Options
    // Enforce emojis are wrapped in and provide screenreader access.
    'jsx-a11y/accessible-emoji': 'error',
    // Allow anchors to have invalid hrefs,
    // warning: may not be navigable elements because of it.
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref']
      }
    ]
  }
};
