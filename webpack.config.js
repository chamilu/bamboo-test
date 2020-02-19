const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
    entry: { main: path.resolve(__dirname, "src", "index.js") },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.[hash].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html"
        })
    ]
});
