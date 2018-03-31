module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['flowtype', 'import', 'prettier', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:import/errors',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  rules: {
    'prettier/prettier': [
      2,
      {
        printWidth: 120,
        semi: false,
        singleQuote: true
      }
    ]
  }
}
