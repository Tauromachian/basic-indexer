const path = require("path");

var commonJsConfig = {
  target: "node",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "basic-indexer.node.js",
    libraryTarget: "commonjs-module",
  },
};

var browserConfig = {
  target: "web",
  mode: "production",
  output: {
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
    filename: "basic-indexer.min.js",
  },
};

module.exports = [commonJsConfig, browserConfig];
