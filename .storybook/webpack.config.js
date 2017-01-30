const path = require('path');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.css?$/,
                loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'],
                include: path.resolve(__dirname, '../')
            },
            {
                test: /\.scss$/,
                loader: ['style', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../')
            },
            {
        // inline base64 URLs for <=8k images, direct URLs for the rest
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};
