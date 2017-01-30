const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: [ 'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.scss$/,
        loader: [ 'style', 'css-loader', 'sass-loader' ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
