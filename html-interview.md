# HTML-interview

现在主流的浏览器有哪些，说一下他们的内核？

- Chrome, [webkit], blink
- IE8-, trident; Edge, webkit
- Opera, [Presto], blink
- Safari, webkit;
- Firefox, Gecko

`<!DOCTYPE>` 的作用是什么？ [[doc](<https://is.gd/TNlkhc>)]
> 文档声明； 用于告知浏览器当前文档的 HTML或XML 规范； IE8 下如果不写文档声明会使用怪异模式解析网页导致一系列 CSS 兼容问题

## HTML5
[basic] data-属性的作用和相关 API 的操作 [[doc](http://w3c.github.io/html/dom.html#embedding-custom-non-visible-data)]
- 解释下 `data` 属性的作用？
> `data` 是 HTML5 新增的特性，用于给用户提供 **自定义属性**. 在 H5 中我们可以通过 `data` 来存储字符串类型的数据。
> - 可以存储对象吗？
> 不可以，但是如果采取对象序列化的方式还是可以的。`JSON.stringify`, 然后通过 `JSON.parse()` 来还原对象。

- 如何获取 `data` 中存放的数据？
> 有两种存放和设置的方式 `element.getAttribute('date-*')`/`element.dataset.*`  `element.setAttribute('data-*', foo)` / `element.setAttribute.* = foo`

- 在实践项目的过程中我们如何使用 `data`?
> - 存放简单的数据。
> - 资源媒体的邮箱加载处理或者懒加载
> - 过滤，通过关键字来进行模糊搜索。我们只要将关键字放入 `data-*` 中即可。

```html
<input type="text" id="filter">
<ul class="person">
    <li data-models="'王明', 25, '网络工程', '篮球'">王明</li>
    <li data-models="'张华', 23, '软件工程', '足球'">张华</li>
    <li data-models="'张华', 24, '计算机科学技术', '篮球'">王丽</li>
    <li data-models="'王大牛', 25, '网络工程', '篮球'">王大牛</li>
    <li data-models="'王小二', 25, '机电自动化', '篮球'">王小二</li>
    <li data-models="'张丽', 24, '机电自动化', '篮球'">张丽</li>
</ul>

<script>
$('#filter').on('keyup', function() {
    const keyword = $(this).val().toLowerCase();
    $('.person > li').each( function() {
        $(this).toggle( keyword.length < 1 || $(this).attr('data-models').indexOf(keyword) > -1 );
    });
});
</script>
```
> - 通过 `data-*` 或者它的属性值配置 CSS3 的属性选择器来定义样式
```html
<span class="label" data-warning></span>

<style>
[data-warning] { ... }
[data-warning*=error] { ... }
[data-warning*=update] { ... }
[data-warning*=modify] { ... }
</style>
```
> - 响应式开发中利用 `data-*` 来甄别需要特殊处理的元素
```html
<div data-role="mobile"> 移动端内容 </div>
<style>
div[data-role="mobile"] {  
  display:block;  
}
</style>
```
- 与伪元素结合实现 tool tip 的效果
```html
<span class="tooltip" data-tooltip="我是一个数据属性值">数据属性</span>
<style>
.tooltip::after {
  ...
  content: attr(data-tooltip); /* 最重要的地方 */
  ...
}
.tooltip:hover::after { display: inline-block }
</style>
```
- 在什么时候，我们应该避免使用 `data-` 属性？
> - 不可以用它来替换一个现有的属性或元素, 如 `datetime`
- 使用 `data-` 时有哪些需要注意的地方？
> - 仅限于网站或 app 内部使用，不能用于外部。

请简单说下 `defer` 和 `async` 这两个属性？[[ref](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)]
> - 首先这两者都是 `<script>`标签的属性。正常的加载顺序是 html 在解析过程中如果遇到 `<script>` 时会暂停解析直到文件被下载完并执行完毕，然后继续解析剩余的 html 内容。
> - 当元素标签添加 `async` 属性时，异步下载文件且继续解析 HTML，直到结束下载然后停止 HTML 解析并开始执行 JS 文件。因此它并不会根据页面上的顺序来执行脚本文件，而是优先执行下载好的文件。
> - `defer`: HTML 的解析和 JS 文件的下载完全异步，且等所有的 HTML 解析完毕才会去执行下载完毕的 JS 文件, 遵循页面的加载顺序来执行文件。

请说一下 `defer` 和 `async` 两者的使用场景吧？
- 如果脚本是一个模块且不依赖任何其他模块则可以使用 `async`
- 如果脚本依赖其他模块或脚本才能执行，那么使用 `defer`

[topic] LocalStorage
- LocalStorage Session 与 cookie 的异同？

| 特性     | Cookie                                     | localStorage        | sessionStorage         |
|---------|--------------------------------------------|---------------------|-------------------------|
| 数据的生命期 | 一般由服务器生成，可设置失效时间。如果在浏览器端生成，默认是关闭浏览器后失效     | 除非被清除，否则永远保存        | 仅在当前会话下有效，关闭页面或浏览器后会被清除 |     |
| 存放数据大小 | 4KB                                        | 5MB                 | 5MB                    
| 易用性    | 原生 Cookie 接口不友好需要自己封装                      | 原生接口定义的很好           |                         

记住密码这个功能是如何实现的？ 
> 通常就是通过在 Cookie 中存入一段辨别用户身份的数据来实现的。

应用场景
- Cookie: 判断用户是否登录。通过插入唯一标识符，只要读取该值即可辨别/全球化，通过读取 Cookie 来返回不同语言的文案
- localStorage: 离线操作。新闻编辑上传功能，离线保存，有网络提交。购物车。表单自动持久化。
- sessionStorage: 将内容特别多的表单拆分成多个子页面，然后通过 sessionStorage 来储存。 

localStorage/sessionStorage 在什么情况下会失效?
- 浏览器清除缓存
- 超过 5M 大小的限制
- Chrome/Safari 的隐私模式时，浏览器本身支持 localStorage(`!!window.localStorage -> true`) 无法使用 `getItem` & `removeItem`, 使用 `try..catch..` 避免这种 edge case, 可以使用 cookie 存储信息。
```js
try {
  localStorage.setItem('a', 'hello world');
  console.log(localStorage.getItem('a'));
} catch(e) {
  // 当 Safari 开启无痕模式时的补救措施
  console.log(e.message, e.name, e.stack);  // 输出错误信息
  // ...
}
```

描述下 `window.postMessage` 以及它所带来的安全问题
> H5 为了解决跨域问题新增的 API: 即跨文档通信(Cross-document message)。它允许窗口之间进行通信，无论两个宽口是否同源。

出于于安全的考虑, 在发送 `postMessage` 时，我们最好做一下几件事情[[mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)]
- 当使用 `postMessage` 将数据发送到其他窗口时，始终指定精确的目标 *origin*, 而不是 `*`
- 如果不希望从其他网站接收 message, 则不要为 message 事件添加任何时间侦听器。
- 如果希望接受的 message，则始终使用 `origin` 和 `source` 属性验证发件人的身份。同时我们还可以始终验证接收到的信息的语法。

严格模式与混杂模式的区别？为什么使用严格模式？
> 严格模式下：页面排版及JS解析是以该浏览器支持的最高标准来执行, 作用域只针对当前的 JS 文件 混杂模式：不严格按照标准执行，主要用来向后兼容旧的浏览器

`<html>` 与 `xhtml`的区别?

> 1. 所有标记必须有一个相应的结束标记
> 2. 所有标签和属性名必须小写
> 3. 所有的 xhtml 标记必须合理嵌套
> 4. 属性必须使用双引号，且必须赋值
> 5. 图片必须有说明文字
> 6. 不要在注释内容中使用 `--`

浏览器标准模式与怪异模式的区别是什么？如何查看当前的模式？

> 盒子模型；渲染模式的不同； `window.top.document.compatMode`

如何理解 HTML 语义化

> 符合 W3C 统一规范；对功能障碍者更加友好；利于 SEO；

div + css 布局比 table 布局的优势在哪里？

> 结构与样式分离，代码语义化，更符合 HTML 标准规范，SEO 更加友好；

`<img alt="" title="">` 两个属性的区别是什么？

> `alt` 是对图片内容的描述，当图片无法加载的时候，会显示alt 中的内容； `title`是指该图片的名称

`<strong>` 与 `<em>` 的异同？

> 两者都表强调，但 strong 表现形式为粗体，语义为强烈语气，强调程度超过 em; em 表现为斜体;

有哪些常见的块元素和行内元素?

> 块: div/table/ul/ol/dl.. 行内: i/em/b/u/s/span

空元素的标签有哪些?

> imput/img/hr/br/script/link/meta

渐进增强与优雅降级之间的区别？

> 渐进增强：向上兼容，优先实现低版本浏览器的功能再针对高级浏览器添加更好的交互功能；优雅降级：向下兼容，优先实现高版本的功能再对低版本浏览器做兼容处理

说一下对网页标准和标准指定机构的理解

> 这两者都是为了同一个目的，让 web 发展更加"健康"，所谓的健康就是指定标准，降低开发难度和成本，防止因为代码的滥用造成 Bug、安全问题，最终提高网站的易用性；

简述 url/src/href 的区别？(sof)[<https://is.gd/7hLSSX>]

> URL(uniform resource locator) 统一资源定位符，是对从互联网上得到的资源的位置和访问方法的一种简介的表示。

> src(source) 指向外部资源的位置，指向内容将会嵌入到文档中当前标签所在位置，例如 JS 脚本，img 图片等。用于外部跨域； 当浏览器解析到 `<script src="xxx.js">` 时会暂停其他资源的下载和处理直至该资源加载、编译、执行完毕

> href(hpertext reference) 指向网络资源所在位置，在当前文档和引用资源之间确定联系(for establighing a relationship between the ref doc and an externa resource)。

知道的网页制作会用到的图片格式有哪些?

> png-8, png-24, jpeg, gif, svg, **Webp**; Webp: 时Google开始的一种旨在加快图片加载速度的图片格式；在同质量下，比 jepg 格式小 40%;

常见的网页图片格式有 icon, jpg, png, gif 他们各自的使用场景是什么？

> png: 清晰，无损压缩，压缩比率高，可渐变透明，**逐次逼近显示** jpg: 色彩还原度高。 gif: 体积小，极好的压缩效果，支持动画和透明效果。 IE6 不支持 PNG 透明背景，因此使用 gif 图片 png-24 在 ie6 出现背景，解决方案是换成 png-8;

有哪些方式可以对一个DOM 元素设置其 CSS 样式

> 外部样式表；内部样式表；内联样式；

常见的节点有哪些？

> 文本节点/元素节点/属性节点/注释节点/文档节点

为什么利用多个域名来储存网站资源会更有效？[[zhihu](https://www.zhihu.com/question/19997004)]

> 1. cdn 缓存更方便
> 2. 突破浏览器并发限制
> 3. 节约 cookie 带宽
> 4. 节约主域名的连接数，优化页面响应速度
> 5. 防止不必要的安全问题 (上传 js 盗取主站 cookie )

## HTML5

html5 新增的标签

> header/nav/aside/main/article/section/footer/audio/video

如何处理 h5 新标签的兼容问题？如何区分 html 和 html5 ?

> ie8/7/6 支持 document.createElement 产生的标签，也可以使用 html5shim 框架; 区分：DOCTYPE 的声明

html5 新增的的内容

> Canvas/Geolocation/websocket

什么是语义化?

> 根据页面标签的含义来对页面进行重构;

渐变的方法

> webkit-liner-gradent;

视口：渲染的宽度

如何实现浏览器内多个标签页之间的通信?

> 调用 localstorge、cookies 等本地存储方式

html 中 properties 与 attr 之间的区别是什么？

```javascript
// 两者之间的区别
jQuery.attr()
jQuery.prop()
```

File API 的使用场景 [[ref](http://tutorials.jenkov.com/html5/file-api.html)]：
- 拖拉和放置的特性。user can drag files from a file explorer on his / her computer (outside the browser) onto a "drop zone" HTML element inside the HTML page
- 文件上传预览
- 类型检测
- 大小检测
- 监控文件加载的进度

### WebSocket
WebSocket [[rfc](https://tools.ietf.org/html/rfc6455)] [[zhihu](https://www.zhihu.com/question/20215561)]
- 简单介绍下 WebSocket
WebSocket 属于新的协议，用于连接客户端和服务端的双向持久通信，实现服务器推送技术。 相对于HTTP这种非持久的协议来说，Websocket是一个持久化的协议。在发起 WebSocket 协议之前会借助 HTTP 来完成握手阶段(出于兼容的考虑)。
本质是基于 TCP 的连接，是与 HTTP 同级的应用层协议。

- WebSocket 是为了解决什么问题出现的？

Ajax 轮询：让浏览器隔几秒发送一次请求，询问服务器是否有新信息出现。
long Poll: 客户端发起连接后，如果没消息，就一直不返回Response给客户端。直到有消息才返回，返回完之后，客户端再次建立连接，周而复始。(采取阻塞模型);

两者的本质都是在不断建立 HTTP 连接，然后等待服务端处理，都体现了 HTTP 协议的一个特点：**被动性**,即服务端不主动联系客户端，只能由客户端发起。两者的缺陷是都非常消耗资源。

ajax 轮询需要服务器又很快的处理速度和资源。(速度)
long poll 需要很高的并发，也就是说同时接待客户的能力。（场地大小）

WebSocket 的出现就是为了解决以上的几个问题：
- 被动性：当服务器完成协议升级后 (HTTP-> WebSocket), 服务端可以主动推送信息给客户端。即只需要经过一次 HTTP 请求，就可以源源不断的传输信息。
- 无状态：在以往的不断建立和关闭 HTTP 的方式中，每次都要重新传输 **identity info(鉴别信息)**，这一步就会浪费处理的时间，还会在网路传输中消耗**过多的时间和流量**。而由于 WebSocket 只需要一次 HTTP 握手，因此整个通讯过程中是建立在一次连接/状态中。

- 描述 WebSocket 的建立过程
1. 发送 HTTP 请求，头文件中会包含 `Upgrade`, `Connection`, `Sec` 几个字段
  ```js
  Upgrade: websocket
  Connection: Upgrade
  Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ== // 16位随机值，经过 base64编码后生成，给服务器进行 UUID 连接再由客户端校验
  Sec-WebSocket-Protocol: chat, superchat // 诗选的子协议，可选字段。用于区分同 URL 下，不同的服务所需要的协议。
  Sec-WebSocket-Version: 13 // 使用的版本号
  ```
1. 服务端 `Sec-WebSocket-Key` 发送响应头，建立握手连接，告知客户端即将升级的是 WebSocket 协议。
  ```js
  HTTP/1.1 101 Switching Protocols
  Upgrade: websocket
  Connection: Upgrade
  Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
  ```
1. 客户端校验 `Sec-WebSocket-Accept`, 然后使用`Sec-WebSocket-Protocol` 作为最终使用的协议。至此 HTTP 完成任务，接下来都是按照 WebSocket 协议进行。

- HTTP 之前的 `keep-alive` 有什么问题吗？
> `keep-alive` 在一次 TCP 连接中完成多个 HTTP 请求，但是每个请求仍然需要单独发 Header.

- WebSocket 会存在哪些问题？
> - 因为它与原有的 HTTP 协议有所区别，因此它需要对服务器和客户端进行升级才能实现。
> - 有可能陷入一种半死不活的状态。原因出在原有网络世界的一些缺陷的设计。因为服务端和客户端之间存在网络链路，需要经过很多次转发，过滤才能最终抵达终点，而中间节点可能会认为一份连接再一段时间内没有数据发送就等于失效，会自作主张的将其切断这些链接。而此时由于服务端和客户端都接收不到任何提示，会误认为连接一直存在，还在不断的发送数据，直到缓存会填满才会发现出现错误。
>    - 解决方法是让服务端和客户端能够发送 **Ping/Pong Frame**。这种 Frame 是一种特殊的数据包，只包含元数据，可以在不影响 Application 的情况下维持住中间网络的理解状态。

### Web Worker [[doc](https://html.spec.whatwg.org/multipage/workers.html#module-worker-example)]
- Web Worker 是什么？
> Web Workers allow you to run JavaScript in parallel on a web page, without blocking the user interface.不会阻塞 UI 线程

- 为什么委员会要创建 Web Worker?
> 在 JS 中，所有的内容都是单线程的运行，所有的声明都是添加到栈当中，然后一个接一个的执行；为了解决这个问题，委员会推出了 *Web Worker*

- Web Worker 背后实现的原理是什么？

- 使用场景是什么？
> 因为不涉及 DOM，且与外界通讯只通过事件句柄，因此 worker 适合计算量大、异步的事情。
> - polling URLs in background. That way we don't block the UI waiting for polling result
> - perform processor-intensive calculations without blocking the user interface thread.

- Web Worker 局限性（缺点）？
> - 在 WebWork 中不能获取 DOM 元素(No document, getElementById)
> - Workers can't have direct access to the 'parent' page.
> - 无法获取 GlobalObjects or functions on 主文件中
> - 有较高的启动性能消耗以及较高的内存消耗(have a high start-up performance cost, and a high per-instance memory cost.)
> - 与应用之间的通信只能通过 `postMessage`。因此还需要考虑安全性。对接收到的 `postMessage` 要一直校验 origin;

Reference:
- [web worker实践尝试](https://github.com/p2227/p2227.github.io/issues/19)
- [Understanding Web Workers](http://codelikeapoem.com/2017/03/web-workers-beginners-guide.html)
- [[sof]What are the use-cases for Web Workers? [closed]](https://stackoverflow.com/questions/2773682/what-are-the-use-cases-for-web-workers)

---

## 性能优化

页面有大量图片需要加载，有何优化方案？

> 核心方法：去掉无意义的修饰通过 css 来实现；矢量图替代位图；使用恰当的图片格式(使用优秀的图片编码器及合适的参数); 图片懒加载；轮播图，相册使用预加载； css 图片使用雪碧图/svg/iconfont; 如果图片过大，先加载一张压缩率很大的缩略图，以提高用户体验；

各种资源加载的优化手段：[zhihu](https://www.zhihu.com/question/21815101)

> 使用 data url，将资源内嵌于 CSS 或 HTML 中，而不用单独请求。多个地方都要使用的资源不采取该方法； 按照 HTTP 协议设置合理的缓存；文件最小化/文件压缩/文件合并

前端角度如何做好 SEO ，需要考虑的东西？

- 外联数量和质量；
- meta 标签优化；
- 符合 W3C 规范的语义化标签的使用

在css/js代码上线之后开发人员经常会优化性能，从用户刷新网页开始，一次js请求一般情况下有哪些地方会有缓存处理？

> dns缓存，cdn缓存，浏览器缓存，服务器缓存。
