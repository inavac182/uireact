export default {
  editBranch: 'main',
  ignore: ['utils/**/*', 'packages/**/CHANGELOG.md', 'packages/**/README.md', 'examples/**/*', 'README.md', "uireact"],
  typescript: true,
  themeConfig: {
    mode: 'dark',
    showDarkModeSwitch: true,
    showMarkdownEditButton: false,
  },
  title: '@uireact',
  public: '/public',
  description: 'Themed library of components for react development',
  menu: ['Documentation', 'Contributions', ''],
};
