const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isdev = (process.env['NODE_ENV'] || 'development') === 'development';

module.exports = {
  mode: isdev ? 'development' : 'production',
  watch: process.env['WATCH'] === 'true',
  entry: [
    path.join(__dirname, 'src', 'index.js')
  ],
  devtool: isdev ? 'eval' : 'source-map',
  output: {
    path: path.join(__dirname, 'docs'),
    pathinfo: true,
    filename: 'bundle.js',
    publicPath: ''
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    static: {
      directory: path.join(__dirname),
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: [{ from: 'static', to: 'static' }] }),
  ],
};
