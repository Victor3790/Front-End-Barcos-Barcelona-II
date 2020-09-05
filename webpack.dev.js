const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:  {
    home:     path.resolve(__dirname,'src/devEntryHome.js'),
    archive:  path.resolve(__dirname,'src/devEntryArchive.js'),
    single:   path.resolve(__dirname,'src/devEntrySingle.js')
  },
  mode: 'development',
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: [ {loader:'html-loader-srcset'} ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home',
      template: path.resolve(__dirname,'src/index.html'),
      filename: 'home'
    }),
    new HtmlWebpackPlugin({
      title: 'Archive',
      template: path.resolve(__dirname,'src/yatch-archive.html'),
      filename: 'archive'
    }),
    new HtmlWebpackPlugin({
      title: 'Single',
      template: path.resolve(__dirname,'src/single_yacht.html'),
      filename: 'single'
    })
  ]
};
