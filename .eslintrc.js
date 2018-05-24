module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ["warn", 200],
    'import/extensions': 0,
    'comma-dangle': 0,
    'semi': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
