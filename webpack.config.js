const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: [
      `${__dirname}/src/index.jsx`,
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: `${__dirname}/dist/public`,
      publicPath: '/public',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CopyPlugin([
        { from: `${__dirname}/public`, to: `${__dirname}/dist/public` },
      ]),
    ],
  };