var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./lib/index.tsx",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
  },
  externals: {
    react: "react",
  },
  optimization: {
    minimize: true,
  },
  plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
};
