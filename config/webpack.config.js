module.exports = {
  entry: "./app/app.jsx",
  output: {
    filename: "bundle.js",
    sourceMapFilename:"bundle.js.map"
  },
  devtool: "#inline-source-map",
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  module: {
    loaders: [
        { test: /\.jsx$|\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
