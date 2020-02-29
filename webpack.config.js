const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // 模式设置
  mode: 'development', //development and production

  // 入口设置
  // 使用babel-polyfill 可以兼容低版本浏览器（不支持es6）
  entry: {
    './js/common': __dirname + '/src/js/common.js',
    './js/details': __dirname + '/src/js/details.js',
    './js/index': __dirname + '/src/js/index.js',
    './js/list': __dirname + '/src/js/list.js',
    './js/user-login': __dirname + '/src/js/user-login.js'
  },

  // 出口设置
  output: {
    path: __dirname + '/dist',
    filename: '[name]_bundle_[hash].js'
  },

  // loader设置
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jsx|js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.xml$/,
        loaders: ['xml-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './img',
              publicPath: './img'
            }
          }
        ]
      }
    ]
  },

  // 本地服务器 webpack-dev-server插件，开发中server，便于开发，可以热加载
  devServer: {
    contentBase: './dist', //默认本地服务器所在的根目录
    historyApiFallback: true, //是否跳转到index.html
    inline: true, //源文件改变时刷新页面
    port: 8084 //端口号，默认8080
  },

  // 插件设置
  // HtmlWebpackPlugin 可以在开发中按照模板生成 html文件
  plugins: [
    new HtmlWebpackPlugin({
      //输出html文件1
      filename: 'index.html', //生成html文件的文件名，默认是index.html
      template: './src/index.html', //本地html文件模板的地址
      hash: true,
      chunks: ['./js/common', './js/index']
    }),
    new HtmlWebpackPlugin({
      //输出html文件2
      filename: 'list.html',
      template: './src/list.html',
      hash: true,
      chunks: ['./js/list', './js/common']
    }),
    new HtmlWebpackPlugin({
      //输出html文件3
      filename: 'details.html',
      template: './src/details.html',
      hash: true,
      chunks: ['./js/details', './js/common']
    }),
    new HtmlWebpackPlugin({
      //输出html文件3
      filename: 'cart.html',
      template: './src/cart.html',
      hash: true,
      chunks: ['./js/common']
    }),
    new HtmlWebpackPlugin({
      //输出html文件3
      filename: 'user-login.html',
      template: './src/user-login.html',
      hash: true,
      chunks: ['./js/common', './js/user-login']
    })
  ]
}
