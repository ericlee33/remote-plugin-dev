const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/plugin.tsx',
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs',
  },
  externals: {
    react: 'react',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
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
