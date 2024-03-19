// eslint-disable-next-line no-undef
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-styled-components`,
    options: {
      ssr: true,
      displayName: true,
      preprocess: false,
    },
  });
};
