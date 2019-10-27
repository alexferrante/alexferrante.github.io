module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:jest/recommended'],
  plugins: ['jest'],
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },

  rules: {
    'no-unused-expressions': 'off',
    camelcase: 'off',
    'object-curly-newline': 'off',
    'spaced-comment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'max-len': [
      'error',
      100,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'react/no-danger': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'react/no-array-index-key': 'off',
    'import/prefer-default-export': 'off',
    'react/no-typos': 'off',
  },

  settings: {
    'import/resolver': {
      webpack: {},
    },
  },
};
