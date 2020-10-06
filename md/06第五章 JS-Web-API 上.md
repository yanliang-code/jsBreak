##### 一、回顾 JS 基础知识（chapter02\05 JS-Web-API 上.html）

1. 特点：表面看来并不能用于工作种开发代码
   - 内置函数：Object、Array、Boolean、String ...
   - 内置对象：JSON、Math ...
2. JS基础知识：遵循 ECMA 262 标准，定义基础语法与规则
3. JS-Web-API：遵循 W3C 标准，定义如何在浏览器上进行操作（在 ECMA 262 基础上定义操作页面的API和全局变量）
   - DOM 操作
   - BOM 操作
   - 事件绑定
   - ajax请求（包括 http 协议）
   - 存储

##### 二、总结（基础与Web的关系）

1. 浏览器下的 JS 包含两部分：
   - JS 基础知识（EMCA262标准）
   - JS-Web-API（W3C标准）（Node环境下就没有此部分）

##### 三、DOM操作

1. 全称 ：Document Object Model  文档对象模型
   - DOM可理解为：浏览器把获取到的HTML代码，结构化成一个浏览器可识别并且 js 可操作的一个模型
   - DOM 节点操作
     - 获取DOM节点
     - prototype
     - atrribute
   - DOM 结构操作
     - 新增节点
     - 获取父元素
     - 获取子元素
     - 删除节点
2. 题目
   - DOM 是哪些基本的数据结构
     - 树
   - DOM 操作的常用API有哪些
     - 获取 DOM 节点，以及节点的 property 和 attribute
     - 获取父节点，获取子节点
     - 新增节点，删除节点
   - DOM 节点的 attr 和 property 有何区别
     - property 是对 JS 对象属性的修改和获取
     - atrribute 是对 HTML 标签属性的修改和获取
3. 知识点
   - DOM 本质
     - html 属于 xml 中的一种，本身是字符串，会被浏览器解析为树形结构（浏览器和JS都能识别的结构），不过有些地方必须按W3C规定书写
   - DOM 节点操作
     - 获取节点的方式
     - 获取、修改节点的属性
     - 获取、修改HTML标签的属性（getAttribute、setAtrribute）
   - DOM 结构操作
     - 新增、移动
     - 获取父元素、子元素
     - 删除

##### 四、BOM 操作

1. 全称 ：Brower Object Model  浏览器对象模型
2. 题目
   - 如何检测浏览器的类型（94行）
   - 拆解 url 的各部分（108行）
3. 知识点
   - navigator（导航器）
   - srceen（屏幕）
   - location（地址）
   - history（历史）















