const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  return {
    ...config,
    output: {
      uniqueName: 'products',
      publicPath: 'auto',
    },
    optimization: {
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'products',
        filename: 'remoteEntry.js',
        shared: dependencies,
        remotes: {
          details: 'details@http://localhost:3002/remoteEntry.js',
        },
        exposes: {
          './ProductsApp': './src/bootstrap',
        },
      }),
    ],
  };
};
