const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    remoteEntry: './src/plugin.tsx',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  externals: {
    react: 'react',
  },
  devServer: {
    hot: true,
    port: 9001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|jsx|tsx|ts)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['js', 'ts', 'tsx', 'json', 'jsx'].map((ext) => `.${ext}`),
  },
};
