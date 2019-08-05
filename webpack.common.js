const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Currencies',
            template: './src/index.html',
        }),
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            disable: false,
            allChunks: true,
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                    publicPath: '/dist',
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                    publicPath: '/dist',
                }),
            },
        ],
    },
};
