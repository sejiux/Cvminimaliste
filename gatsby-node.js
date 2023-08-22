const loadablePlugin = require('@loadable/webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: { fs: 'empty' },
    plugins: [new loadablePlugin()],
  });
};
