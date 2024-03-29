const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    path: path.join(__dirname, `public`),
    filename: `bundle.js`,
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: true,
    publicPath: `http://localhost:8080`,
    watchContentBase: true,
  }
};

