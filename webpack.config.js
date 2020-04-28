const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

module.exports = (env) => {
  const proxyConfig = {
    target: 'http://localhost:8000',
    secure: false,
    changeOrigin: true,
  }
  return {

    entry: resolve('./client/index'),
    mode: env.mode,
    output: {
      path: resolve('./dist'),
      filename: 'js/[name]-[hash:8].js',
      chunkFilename: 'js/[name].chunk.[chunkhash:4].js',
      // publicPath : 'www.host.com/',
      //publicPath: 'http://localhost:3000/',
      publicPath: '/',
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: { Api: resolve('./client/app/api'), Pages: resolve('./client/app/pages') },
    },
    module: {
      rules: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
        {
          test: /\.(css|less)/,
          include: [
            resolve('./client'),
          ],
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader', options: { modules: true, url: true } },
            'less-loader'],
        },
        {
          test: /\.(css)/,
          include: [
            resolve('./node_modules/antd'),
          ],
          use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|ico)$/i,
          loader: 'file-loader',
          options: { name: '[name].[ext]' },
        },
      ],
    },
    plugins: [
      new htmlWebpackPlugin({
        template: resolve('./client/assets/index.html'),
        title: 'Shao Management',
        favicon: resolve('./client/assets/icon.png'),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash:4].css',
        chunkFilename: 'css/[id].[chunkhash:4].css',
        ignoreOrder: false,
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 3000,
      open: true,
    },
  }
}
