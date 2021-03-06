const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  return {
    ...config,
    output: {
      uniqueName: 'container',
      publicPath: 'auto',
    },
    optimization: {
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'container',
        shared: dependencies,
        remotes: {
          auth: 'auth@http://localhost:3003/remoteEntry.js',
          products: 'products@http://localhost:3001/remoteEntry.js',
        },
      }),
    ],
  };
};
