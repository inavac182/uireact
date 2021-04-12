// eslint-disable-next-line no-undef
module.exports = {
  extends:
  [
      '@commitlint/config-conventional'
  ],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-enum': [
      2,
      'always',
      [
        'button',
        'card',
        'checkbox',
        'chore',
        'grid',
        'config',
        'demo',
        'docs',
        'flexgrid',
        'foundation',
        'icon',
        'input',
        'list',
        'release',
        'themes',
        'table',
        'text',
        'view',
        'release',
      ]
    ]
  }
}