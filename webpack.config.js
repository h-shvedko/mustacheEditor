const webpack = require('webpack')
const path = require('path')
const config = {
    entry: './js/mustache/app.js',
    output: {
        filename: 'mustache-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: [
                    {
                        loader: "jshint-loader",
                        options: {
                            esversion: 6
                        }
                    }
                ]
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-[hash].min.js',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        })
    ]
};

module.exports = config;