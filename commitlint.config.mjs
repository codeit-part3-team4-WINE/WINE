const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'header-max-length': [2, 'always', 100],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
      ],
    ],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[#(\d+)\]\s(\w+)(\(\w+\))?:\s(.+)$/,
      headerCorrespondence: ['ticket', 'type', 'scope', 'subject'],
    },
  },
};

export default config;
