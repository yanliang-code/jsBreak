// webpack 打包生成的代码，会多一些代码，用于前端兼容 commonJs 语法
console.log('1111111');

// 通过 require 将 jquery 引入（主要是 package.json 中有此依赖）
var $ = require('jquery');
console.log('$===', $);
var $root = $('#root');
$root.html('<p>这是 jquery 插入的文字</p>');

// 由于此文件在 package.json 中没有定义，所以需要使用相对路径的方式引入
var util = require('./a-util');
console.log('util====', util);
util.print();
