const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: "./index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: "umd",
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpeg|png|svg|gif)/,
                use: ['file-loader']
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    },
    externals: {
        react: 'react'
    },
}