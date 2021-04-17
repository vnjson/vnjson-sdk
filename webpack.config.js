const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin'); 

module.exports = {
  mode: 'development', //production
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './app'),
    publicPath: '/app',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
   ]
 },
 plugins: [
        new VueLoaderPlugin()
  ]
};