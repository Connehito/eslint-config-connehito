module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    // Path of `tsconfig.json`.
    // ex. `project: './tsconfig.json'`
    project: './tsconfig.json',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['import', 'prettier', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        printWidth: 120,
        semi: false,
        singleQuote: true
      }
    ]
  },
  overrides: [
    {
      env: {
        jest: true
      },
      files: ['*.test.ts', '*.test.tsx']
    }
  ]
}
