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
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    curly: 'warn',
    eqeqeq: ['error', 'always'],
    'no-eq-null': 'error',
    'no-use-before-define': 'warn',

    // ES6+
    'no-duplicate-imports': 'error',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
  },
};
