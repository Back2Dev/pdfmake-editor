var path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
     {
       test: /\.js$/,
       loader: 'esbuild-loader',
       options: {
         loader: 'jsx',  // Remove this if you're not using JSX
         target: 'es2015'  // Syntax to compile to (see options below for possible values)
       }
     },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ]
  },
  externals: {
    react: "react"
  }
};
