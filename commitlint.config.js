// eslint-disable-next-line no-undef
module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'BREAKING CHANGE',
        'feat',
        'refactor',
        'fix',
        'chore',
        'docs'
      ]
    ],
    'scope-empty': [1, 'always'],
    'scope-enum': [
      1,
      'always',
      [
        'badge',
        'button',
        'card',
        'checkbox',
        'chore',
        'config',
        'demo',
        'dialog',
        'docs',
        'flexgrid',
        'foundation',
        'form',
        'grid',
        'header',
        'icon',
        'input',
        'label',
        'link',
        'list',
        'menu',
        'navbar',
        'progress-indicator',
        'release',
        'select',
        'table',
        'tabs',
        'text',
        'textarea',
        'themes',
        'view',
      ]
    ]
  }
}