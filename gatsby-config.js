// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: '/packages/icons/src/svgs/',
        },
      },
    },
  ],
};
