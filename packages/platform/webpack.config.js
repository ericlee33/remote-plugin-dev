const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/app.tsx',
  },
  mode: 'development',
  output: {
    //出口配置
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    hot: true,
    port: 9000,
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
    alias: {
      'lite-module-federation.config.js': path.resolve(
        __dirname,
        'lite-module-federation.config.js'
      ),
    },
    extensions: ['js', 'ts', 'tsx', 'json', 'jsx'].map((ext) => `.${ext}`),
    fallback: {
      https: require.resolve('https-browserify'),
      url: require.resolve('url/'),
      http: require.resolve('stream-http'),
    },
  },
};
