module.exports = {
  root: true,
  extends: ['plugin:react/recommended', './index.js'],
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    'react-native/react-native': true,
  },
  globals: {
    Promise: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'no-use-before-define': ['warn', { variables: false }],
  },
};
