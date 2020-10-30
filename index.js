module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    es2020: true,
  },
  rules: {
    // Best Practices
    'no-console': ['error', { allow: ['warn', 'error'] }],
    curly: 'error',
    eqeqeq: ['error', 'always'],
    'no-eq-null': 'error',
    'no-use-before-define': ['error', 'nofunc'],

    // ES6+
    'no-duplicate-imports': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
  },
};
