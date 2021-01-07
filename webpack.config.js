
var path = require('path');

module.exports = {
  mode: 'production', // change based on 'development' or 'production' needs.
  entry: './src/index.js',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  output: {
    filename: './dist/main.js',
    path: __dirname
  },
  devServer: {
    contentBase: './public',
    host: 'localhost',
    port: '3000',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
