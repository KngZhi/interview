# 面试
- html
- css
- javascript
  - angular
  - react
  - Other
    - 实际工作类问题
    - 个人喜好
- http

## Other


webjavascript bridge, 原生和h5对接；


[QS]碰到大而笼统的问题应该怎么做？

- 说明是什么，简单解释下该名词包含的概念

  - 基本概念，通过与其他语言的比较说明不同；

    - 数组的长度是可读写的。也就是说可以直接通过 `Array.length` 来操作数组的长度

- 怎么用？

  - 创建数组的两种方法

    - 这两种方法的异同
    - 方法中的细节点，可以进行延伸

  - 操作数组的方法？

    - 遵循两个原则，一是先进先出，一是后进先出

      - 先进先出的方法有两点，`shift()` & `unshift()`
      - 后进先出的方法有两点，`pop()`

- 需要注意的地方
  - 不要说一些显得自己很不稳定的话语，比如喜欢到处转转

[QS]不要代入具体的例子； [QS]如果对方用英语，你也是用英语，中文也用中文； 如果对方使用的英语单词和发音与你的不同，采取对方的单词发音

放慢语速；老练点；表述应该尽量专业；要将核心的思想总结出来;



## TODAY

react 的路由切换

gulp 和 webpack 的区别？


返回状态码和回调函数，在里面处理逻辑；

瀑布流实现的原理？

事件冒泡是什么？

事件委托？

`@mixin` 共享方法和属性；

this.proprs.params
第三个参数可以使用前两个的方法；

crate react app 脚手架  和 antd ui 组件，引入 flux ，

package.json 中 script 中的指令

react 路由


负载并发的解决方式？
- 分批载入；
- forever 负载均衡

---

react

event/diff/

真实 DOM 渲染
createElement , class, factory

createElement yu cloneElement 的区别

react 中项目，两者侧重点不同：
wp 转义成浏览器兼容的版本
gp 打包上线压缩混淆

两者共同使用；dev, config.js


---

props 和 attr 的区别？

伪数组和数组的区别是什么？

事件流是什么？
- 事件冒泡，事件捕获，事件
- 事件代理

如果进行页面跳转，涉及到金融方面

- 要清除缓存
- 使用 session , 而不能使用 Localstion.href
- 如何将 session 中的信息放到 request 的 session

h5 中我们如何实现应用缓存

为什么 H5 中不需要 DTD， 因为官方已经声明了这些

说几条 JavaScript 的基本规范

1. 从上至下，从外至内

why sass?

- sass 遵循 css 语法
- 有一个基于 sass 的插件 compass, like jQuery for JavaScript

express 这个框架？

express 内置了一个中间件叫 static ，可以用来访问静态资源；

css-htc, 强制 ie8- 使用 css3;

box-shadow 如何换算？

aax 的形成；


函数表达式可以 函数声明可以马上执行，不可以在 for , if , try, catch 的条件语句中创建；

如何在 IE8 上兼容 H5 的新标签

> 通过动态创建标签；使用 html5 shirve Google发明的 目的，让低版本浏览器兼容 h5 c3;

函数节流是什么？ 当我们去监听一些事件，当有些事件需要时刻监听，比如滚动，但是时刻监听就意味要时刻消耗性能，为了解决这个问题，我们每隔一段时间去监听它，节约了流向

direction writeMode c3 中影响文档流的执行顺序；

函数字面量声明方式；

预加载怎么实现；

gulp 中常用的四个命令

> task/src/watch/pipe/desk

什么是变量提升/函数声明提升，两者的区别是什么？

> JS 分为两个阶段，一个是预编译，一个是代码执行，当解析器进入函数执行环境中，

这个需求对数据库的操作到底是哪一个？

需求，逻辑层的考虑

constructor 来判断是否是数组；

static 生成静态的类；

引擎:jdk, sdk

怎么修改 Input placeholder 中的属性

```css
input:: -webkit-input-placeholder{/* code here */}
```

每一个功能写好之后都必须要测试一下；

## 常见问题

绝对路径与相对路径的区别?

> 绝对路径:文件或目录在硬盘上真正的地址; 相对路径: 相对与某个基准目录的路径; 缺少一个基本路径;

前端的三个层次;

- 表现层(CSS)
- 行为层(JavaScript)
- 结构层(HTML)

非阻塞/阻塞 I/O 流?

- I/O 什么意思?

  > Input/Output 读写的意思

非阻塞/阻塞 与 同步/异步之间的区别是什么?

> 前者关注的是 **程序在等待调用结果（消息，返回值）时的状态.**, 后者关注的是 **消息通信机制** [zhihu](https://is.gd/bvhHhR)

## html

有哪些常见的块元素和行内元素?

> 块: div/table/ul/ol/dl.. 行内: i/em/b/u/s/span

空元素的标签有哪些?

> img/hr/br/script/link/meta

块元素与行内元素的区别?

> 块元素宽高继承父元素, 行内元素的宽高由内容撑开;

html5 新增的标签, 10个;

什么是语义化?

> 根据页面标签的含义来对页面进行重构;

常见的节点有哪些？

> 文本节点/元素节点/属性节点/注释节点/文档节点

## CSS

CSS 的兼容性的写法

> -moz, -o, -webkit, -ms; 火狐/欧朋/谷歌/IE

清除浮动的有几种方法? [tbc]

> - 万能清除法
> - 在末尾添加空标签设置 clear:both
> - 给父元素设置 overflow:hidden

简单说一下 BFC? [tbc]

> Block Formatting context; 块级格式作用域

说一下 `transition` & `animation` 的参数 >

媒体查询的声明方式？

> `@media screen` and only ; 在html 中引入 link 的 `@media`

link 与 `@import` 的区别？ `@import` 兼容性问题；

什么是响应式？

> 使用弹性图片盒子以及媒体查询，进行各个终端的页面折衷性方案；

响应式的缺点是什么？

> PC 端和移动端

## JS 相关问题


### ES6

模板字符串的特性: - 模板占位符

## 前端优化

如何提高加载页面速度

- 文档碎片
- 雪碧图(CSS 精灵)
- 将 JS 文件放在body 尾部
- 尽量减少对 DOM 操作；
- 雅虎军规

预加载与懒加载，以及各自的优缺点；

> 提前加载所需图片；降低用户体验, 提高了网页的性能;

两者怎么实现？

`innerHTML innerText outerHTML`

- 包括当前元素
- 文本内容
- 不包括当前元素

如何进行字符串查重；

typeof 的返回值

- `undefined`
- `object`
- `string`
- `number`
- `boolean`
- `function`

### 面向对象

面向对象的继承

- 属性的继承
- 方法的继承

  - 浅拷贝 for..in
  - 父类的实例给子类的原型,将子类的构造函数改变了

### 事件

事件绑定和事件

- 事件绑定可以绑定多个事件
- 事件绑定中 IE 和 DOM 有什么区别?

事件流的三个事件;

### JSON

### 算法的问题

冒泡排序; 二叉树交换; 快速排序; 左右数列, 递归函数; 插入排序;

## HTTP

TCP 的为了解决什么问题？

> 为了更容易的将大数据传输将其切割，同时能够确认数据是否送达；

它是如何确认数据已经送达到对方手上了？

> 三次握手策略 (three-way handshaking)

get 与 Post 的区别？

> 加密与否/储存的长度/增删改

cookie 的缺点

> 以文本格式存储在本地/大小4kb/受带宽的/设置很麻烦

http 请求头有哪些信息？
> cookie/ Accept(mime) /Accept-Charset/Host/

http 事务(对数据库进行操作)是一个怎样的过程？

1. 域名解析
2. 发起 tcp 三次握手
3. 通过 tcp 连接发起 http 请求 http 请求就是 ajax 的过程
4. 服务器响应 http 请求，返回数据, 浏览器获得html 代码
5. 浏览器通过响应头中的 `text\html` 解析 html 代码
6. 浏览器渲染页面

## Web 安全

什么是 XSS 攻击？

如何防止 Xss 攻击？
