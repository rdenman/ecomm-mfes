const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  return {
    ...config,
    output: {
      uniqueName: 'product-details',
      publicPath: 'auto',
    },
    optimization: {
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'product-details',
        filename: 'remoteEntry.js',
        shared: dependencies,
        exposes: {
          './ProductDetailsApp': './src/bootstrap',
        },
      }),
    ],
  };
};
