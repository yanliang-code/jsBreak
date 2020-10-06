var path = require('path');
var webpack = require('webpack');

module.exports = {
  // 会在此文件的路径下，拼接上第二个参数
  context: path.resolve(__dirname, './src'),
  // 入口
  entry: {
    // 此路径是在上面context路径的基础下，寻找'./app.js'
    app: './app.js',
  },
  // 输出位置，以及名称
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  //   pulgins: [
  //     // 压缩 JS 代码
  //     new config.optimization.minimize(),
  //   ],
};
