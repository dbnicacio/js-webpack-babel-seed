const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, './src/main.js')],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map[query]'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './public'),
    }
  },
  devtool: 'source-map'
}