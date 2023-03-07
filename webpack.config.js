const path = require("path");
const devtool = "source-map";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool,
  entry: {
    index: path.resolve(__dirname, "songbird", "index.js"),
    ["quiz-page"]: path.resolve(
      __dirname,
      "songbird",
      "quiz-page",
      "quiz-page.js"
    ),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "[name].js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/i,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "songbird", "index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "songbird",
        "quiz-page",
        "quiz-page.html"
      ),
      filename: "quiz-page.html",
      chunks: ["quiz-page"],
    }),
    new MiniCssExtractPlugin({}),
  ],
};
