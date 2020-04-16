module.exports = {
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', [
      'build',
      'chore',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'src',
      'style',
      'test'
    ]],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [0, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [0, 'always'],
    'body-max-line-length': [2, 'always', 72],
    'footer-leading-blank': [0, 'always'],
    'footer-max-line-length': [2, 'always', 72]
  }
};
