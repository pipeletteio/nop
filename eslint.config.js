module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-tsdoc'
  ],
  ignorePatterns: [
    'node_modules',
    'build',
    'coverage'
  ],
  rules: {
    'arrow-body-style': 0,
    'comma-dangle': [2, 'never'],
    'eol-last': 2,
    'quote-props': [2, 'consistent-as-needed'],
    'import/no-anonymous-default-export': 0,
    'max-len': [2, {
      code: 120,
      ignoreComments: false,
      ignoreStrings: false,
      ignoreRegExpLiterals: false
    }],
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-trailing-spaces': 2,
    'prefer-const': 2,

    'space-before-function-paren': [2, 'always'],

    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-function': [0, { allow: ['arrowFunction'] }],
    '@typescript-eslint/no-explicit-any': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [1, { varsIgnorePattern: '[_]' }],
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-var-requires': 0,
    'semi': 0,
    '@typescript-eslint/semi': 2,

    'tsdoc/syntax': 2
  }
};
