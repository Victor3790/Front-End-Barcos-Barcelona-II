const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
      bootstrap_reboot: path.resolve(__dirname,'src/wpEntryReboot.js'),
      bootstrap_grid:   path.resolve(__dirname,'src/wpEntryGrid.js'),
      main:             path.resolve(__dirname,'src/wpEntryMain.js'),      
      header:           path.resolve(__dirname,'src/wpEntryHeader.js'),
      home:             path.resolve(__dirname,'src/wpEntryHome.js'),
      yacht_archive:    path.resolve(__dirname,'src/wpEntryYachtArchive.js'),
      single_yacht:     path.resolve(__dirname,'src/wpEntryYachtSingle.js'),
      search:           path.resolve(__dirname,'src/wpEntrySearch.js')
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            'css-loader', 'postcss-loader', 'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
      new CleanWebpackPlugin()
    ]
};
