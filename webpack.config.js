const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'src/[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.ejs$/,
        use: [
            {
              loader: 'ejs-webpack-loader',
              options: {
                data: {title: 'New Title', someVar:'hello world'},
                htmlmin: true
              }
            }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8000,
    hot: true,
    open: true,
    inline: true
  }
};
