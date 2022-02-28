const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('dotenv').config()

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/js/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, './build')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.bundle.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    }
}