module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  rules: {
    'no-script-url': 0,
    'generator-star-spacing': 0,
    'max-len': 0,
    'react/prefer-stateless-function': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'no-unused-expressions': 0,
    'no-restricted-syntax': 0,
    'object-shorthand': 0,
    'prefer-destructuring': 0,
    quotes: 0, // 字符串单双引号限制
  },
};
