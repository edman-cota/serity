module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: ['off', 'always'],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
    // 'object-curly-newline': [
    //   'error',
    //   {
    //     ImportDeclaration: {
    //       multiline: true,
    //       minProperties: 5,
    //     },
    //     ExportDeclaration: {
    //       multiline: true,
    //       minProperties: 5,
    //     },
    //   },
    // ],
    'import/extensions': [
      'error',
      'never',
      {
        js: 'never',
        jsx: 'never',
        ts: 'always',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
}
