# HTML-interview

现在主流的浏览器有哪些，说一下他们的内核？

- Chrome, [webkit], blink
- IE8-, trident; Edge, webkit
- Opera, [Presto], blink
- Safari, webkit;
- Firefox, Gecko

`<!DOCTYPE>` 的作用是什么？

> 文档声明； 用于告知浏览器当前文档的 HTML或XML 规范；(doc)[<https://is.gd/TNlkhc>] IE8 下如果不写文档声明会使用怪异模式解析网页导致一系列 CSS 兼容问题

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

为什么利用多个域名来储存网站资源会更有效？

> 1. cdn 缓存更方便
> 2. 突破浏览器并发限制
> 3. 节约 cookie 带宽
> 4. 节约主域名的连接数，优化页面响应速度
> 5. 防止不必要的安全问题 (上传 js 盗取主站 cookie )

cookies and Session difference?

- Cookies:服务器和客户端都可以访问；大小只有4KB左右；且每次请求新页面的时候 Cookie 都会被发送过去。
- Session：只有本地浏览器端可访问数据，服务器不能访问本地存储直到通过POST或者GET的通道发送到服务器；每条 session 有5MB；没有过期数据，它将保留直到用户从浏览器清除或利用 Javascript代码移除，有更多丰富易用的接口

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

--------------------------------------------------------------------------------

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
