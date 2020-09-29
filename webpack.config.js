const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    mode: "development",
    context: __dirname,
    entry: {
      app: "./src/index.js",
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: "eval",
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ],
    // development server options
    devServer: {
      contentBase: path.join(__dirname, "dist"),
    },
  },
];
