# ESLint and Prettier configs by iJS

A set of awesome ESLint + Prettier configs.
Makes it easier to work with React, NextJS, GraphQL, Node apps.

This package is intended for use with VS Code, however, can be easily used with any text editor just as well.

# Installation

## Local / Per Project

1. Install eslint-config-ijs:

```
npx install-peerdeps --dev eslint-config-ijs
```

2. Create an `.eslintrc` file in the root of your project's directory. Paste in the following:

```json
{
  "extends": ["ijs"]
}
```

3. You're done!

4. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## Global Install

You can avoid the need to do the previous step for each project and install this globally.

1. Install eslint-config-ijs:

```
npx install-peerdeps --dev eslint-config-ijs
```

2. Create a global `.eslintrc` file on your computer:

- MacOS location: `~/.eslintrc`
- Windows location: `C:\Users\you\.eslintrc`

Paste in the follow to newly created `.eslintrc`:

```json
{
  "extends": ["ijs"]
}
```

# VS Code setup

1. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. In VS Code go to settings (`⌘Cmd + ,` or `Ctrl + ,`) → type in `settings.json` file → click on `Edit in settings.json` and paste in the following on the root of the object:

```js
"editor.formatOnSave": true,
// Prevent default React formatting (replaced by ESLint configs)
"[javascript]": {
  "editor.formatOnSave": false
},
// Prevent default React formatting
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// Run ESLint each time you save a file
"eslint.autoFixOnSave": true,
// Disable Prettier for JavaScript and React (but not for HTML, CSS or others in future)
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```

**For other editors, you can add the following to your `package.json` and run it manually:**

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

## That's all!

Enjoy the package and feel free to contribute! Pull request or suggestions are most welcome!

[iJS.to](https://ijs.to)

### Credits/Inspirations

https://github.com/Shopify/eslint-plugin-shopify
https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
https://github.com/dustinspecker/awesome-eslint
https://github.com/wesbos/eslint-config-wesbos
