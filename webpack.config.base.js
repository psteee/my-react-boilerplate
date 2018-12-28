const path = require('path');
const HtmlWebpackBlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node-modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackBlugin({
      template: './src/index.html'
    })
  ]
};
