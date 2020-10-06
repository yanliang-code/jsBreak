##### 一、事件绑定（chapter02\06 JS-Web-API 下.html）

1. 题目
   - 编写一个通用的事件监听函数（90行）
   - 描述事件冒泡流程（57行）
     - DOM 树形结构
     - 事件冒泡
     - 阻止冒泡
     - 冒泡的应用（代理）
   - 对于一个无限下拉加载图片的页面，如何给每个图片绑定事件（72行）
     - 代理方式解决
2. 知识点
   - 通用事件绑定
   - 事件冒泡
   - 代理
     - 利用冒泡机制，给父元素绑定指定事件
     - 好处
       - 代码简洁 （只有一行绑定事件的代码）
       - 减少浏览器的内存占用（执行的代码少）



##### 二、Ajax-XMLHttpRequest

1. 题目
   - 手动编写一个 ajax，不依赖第三方库（独立默写）（139行）
   - 跨域的几种实现方式
     - JSONP（前端处理跨域请求）（165行）
     - 服务器端设置 http header（后端处理跨域请求）
   
2. 知识点
   - XMLHttpRequest（139行）
   - 状态码说明
     - readyState:
       - 0：（未初始化）还没调用 send 方法
       - 1：（载入）已经调用 send 方法，正在发送请求
       - 2：（载入完成）send 方法执行完成，已经收到全部响应内容
       - 3：（交互）正在解析响应内容
       - 4：（完成）响应内容解析完成，可在客户端调用
     - status：
       - 2xx：表示成功处理请求，如：200
       - 3xx：需要重定向，浏览器直接跳转
       - 4xx：客户端请求错误，如：404
       - 5xx：服务器端错误
   - 跨域
     - 什么是跨域
       - 浏览器有同源策略，不允许 ajax 访问其他域的接口
       - 主要是出于安全，若没有此策略，任何网站的接口你都可以调用
       - 跨域条件：协议、域名（IP）、端口，有一个不同就是跨域
       - 可跨域加载资源的三个标签
         - img 的 src
         - link 的 href
         - script 的 src
       - 三个标签的应用场景
         - img 用于打点统计，统计网站可能是其他域（百度统计、站长统计）
         - link、script 可以使用 CDN，CDN也是其他域
         - script 可用于 JSONP，跨域的 JSON 请求
       - 注意事项
         - 所有的跨域请求都必须经过信息提供方的允许
         - 如果未经允许即可获取，那就是浏览器同源策略出现漏洞
     - JSONP（前端处理跨域请求）（165行）
     - 服务器端设置 http header（后端处理跨域请求）
       - Access-Control-Allow-Origin  设置允许跨域访问的源

   

##### 三、存储

1. 题目

   - 请描述一下cookie、sessionStorage 和 localStorage 的区别
     - 容量
     - ajax 请求是否携带
     - API 易用性

2. 知识点

   - cookie
     - 本身用于客户端和服务端通信
       - 每次客户端发起请求，请求头 headers 都出带上 cookie
     - 但是它有本地存储的功能，于是就被“借用”
     - 使用 document.cookie = .... 获取和修改即可（字符串格式，存储多个key-value，就需要拆分）
     - cookie作为的存储的缺点
       - 存储量太小，只有4KB（由于每次请求都会携带，不方便太大）
       - 所有 http 请求都会携带，会影响获取资源的效率
       - API 简单，需要封装才能用 document.cookie = ....

   - localStorage 和 sessionStorage
     - HTML5 专门为存储而设计，最大容量 5M（请求不会携带）
     - API 简单易用
     - localStorage.setItem(key, value);  localStorage.getItem(key);
     - 区别
       - sessionStorage 关闭浏览器执行 setItem 函数所在窗口就会清空，浏览器不同窗口不共享
       - localStorage 一直存在，除非手动清除缓存（需要访问同一IP、端口号）
     - 注意
       - IOS safari 隐藏模式下，localStorage.getItem 会报错，建议使用 try-catch 封装