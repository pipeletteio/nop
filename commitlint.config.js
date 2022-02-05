module.exports = {
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', [
      'build',
      'chore',
      'ci',
      'deps',
      'docs',
      'feat',
      'fix',
      'perf',
      'release',
      'refactor',
      'revert',
      'src',
      'style',
      'test'
    ]],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [0, 'always'],
    'body-max-line-length': [2, 'always', 72],
    'footer-leading-blank': [0, 'always'],
    'footer-max-line-length': [2, 'always', 72]
  }
};
