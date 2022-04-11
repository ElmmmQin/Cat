/*
 * @Author: qinyushan
 * @Date: 2022-04-08 16:19:53
 * @LastEditTime: 2022-04-11 16:00:05
 * @LastEditors: qinyushan
 * @FilePath: \cat\webpack.config.js
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

    mode: 'none',

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'head'
        })
    ]
}