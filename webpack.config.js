const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    home: './home.js',
    about: './about.js',
    contact: './contact.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader'
    }]
  }
};