const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: "./index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
        alias: {
            "styled-components": path.resolve("./node_modules/styled-components.ts"),
            react: path.resolve('./node_modules/react'),
            "react-dom": path.resolve('./node_modules/react-dom'),
            symlinks: false
        }
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
                use: ['ts-loader'],

            }
        ]
    },
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react",
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom",
        },
        "styled-components": {
            commonjs: "styled-components",
            commonjs2: "styled-components",
            amd: "styled-components",
        },
    },
}
