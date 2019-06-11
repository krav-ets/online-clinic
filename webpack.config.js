module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: [
      `${__dirname}/src/index.jsx`,
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: `${__dirname}/public`,
      //publicPath: '/public',
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
  };