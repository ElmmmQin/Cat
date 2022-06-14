/*
 * @Author: qinyushan
 * @Date: 2022-04-08 16:19:53
 * @LastEditTime: 2022-06-14 17:23:09
 * @LastEditors: qinyushan
 * @FilePath: \Cat\webpack.config.js
 * @Description: 
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true
    },

    // mode: 'none',
    mode: 'production',

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'head'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}