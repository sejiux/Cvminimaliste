const loadablePlugin = require('@loadable/webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [new loadablePlugin()],
  });
};
