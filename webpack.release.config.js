const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    performance: { hints: false },
    mode: "production",
    context: __dirname,
    entry: {
      app: "./src/index.js",
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {},
    optimization: {},
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ],
  },
];
