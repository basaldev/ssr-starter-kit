const path = require('path');

module.exports = {
  entry: './src/client/main.ts',

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'build/client'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', 'src']
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', include: /src\/client/ },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ]
  },

  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'src/static'),
  }
};
