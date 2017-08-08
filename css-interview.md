# css 面试题目整理

css 基本语句构成是？

> 选择器，属性，属性值

什么是Css Hack？ie6,7,8的hack分别是什么？

> 为了兼容不同的浏览器所做的

```css
.clas {
  background: yellow;
  +background-color: pink; /*ie7*/
  _background-color: orange; /*ie6*/
}
```

<!-- TODO: 找三个 CSS2.0 的兼容性问题 -->

 哪些 CSS 属性可以继承？

> 可继承：font-size, font-family, color, text-indent 有关于字体的

CSS 优先级的算法

> !important > 内联样式 > id > class > 标签，同级采取就近原则，最后载入的为准

超链接访问过后hover样式就不出现的问题是什么？如何解决？

> 因为被点击访问过的超链接样式不再具有 `hover` 和 `active` 了,解决方法是改变CSS属性的排列顺序: L-V-H-A（link,visited,hover,active）

什么是外边距重叠？重叠的结果是什么？

> 相邻的两个盒子（兄弟或父子关系）的外边距会结合成一个单独的外边距。折叠结果的计算方式是，两外边距都是正数取最大值，都为负取绝对值的最大值，一正一负取和；

什么情况下会触发外边距折叠？

> 相邻的兄弟元素；块级父元素与其第一个/最后一个子元素；空块元素

怎么解决外边距折叠？

> BFC/

CSS中可以通过哪些属性定义，使得一个DOM元素不显示在浏览器可视范围内？

```css
.class {
  display: none;
  visibility: hidden;
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1000;
  text-indent: -999px;
}
```

块元素与行内元素的区别?

> 块元素宽高继承父元素; 独占一行； 行内元素的宽高由内容撑开;

行内块元素的特征是什么？有哪些是行内块元素？

> 特征：可以设置宽高，但不会自动换行； `<img>`, `<input>`, `<button>`, `<textarea>` `<label>`

什么是外边距折叠？

> 相邻的两个盒子（可能是兄弟关系或祖先关系）的外边距结合成一个单独的外边距。这种合并外边距的方式被称为外边距折叠。因此所结合的外边距成为折叠外边距

折叠外边距的高度是如何计算的？

> 两个相邻外边距都是正数时，折叠结果为较大值；一正一负则是和的绝对值；都是负数则为两者绝对值的较大值；

`rgba()` 和 `opacity` 的透明效果有什么不同？

> - `opacity` 作用于元素整体，包括它的内容。但不被其子元素所继承
> - `rgba()` 只作用于元素的颜色或其背景色

`px` `em` `rem` 三者的区别？ px 是固定值， em 值根据对应

> `px` 是固定值; `em` 是相对单位，其对应父级元素的字体大小; `rem` 是基于根元素`<html>`来确定的

reset.css 与 normalize.css 的区别？

> reset 的目的是清除浏览器的默认样式，让浏览器成为一张白纸；而 normalize 是为了让所有的浏览器遵循一个默认样式

为什么要初始化样式？

> 因为不同浏览器的自带样式使不同的，如果不初始化会造成不同的显示效果

sass、less 是什么？为什么使用它们？

> 两者都是 CSS 预处理器。它们赋予了 CSS 动态语言的特性，如变量，继承，运算，函数； 解构清晰，方便扩展；解决了浏览器私有语法的差异。

css 中 `link` 和 `@import` 的区别？

> link 属于 Html 标签，而 @import 是 CSS2.1 中提供的； @import 有执行效率的问题，因为它打破了浏览器的并行加载机制，导致加载页面速度变慢；

简单介绍下盒模型

> 盒模型分为两种：一为 IE 盒模型（怪异盒模型），宽高包括 border, padding, content; 一为标准的 W3C 盒模型 宽高就是 content 的宽高；

什么是 BFC[tbc]

> BFC 又称为 block formatting context , 块级格式化上下文；

如何触发 BFC？

> float, 除了 None 以外的值；overflow: visible 以外的值；display: table-cell, table-caption, inline-block, flex, inline-flex; position:absolute, fixed;

## CSS3

css3 中重要的新特性：

> animation; 2d/3d transformations; 文字特效，线性渐变，旋转；媒体查询；border-image

什么是响应式设计？它的优缺点是什么？

> 以低成本的方式实现一套代码一个网页在多终端多设备下达到一定用户体验的开发方式； 通过弹性盒子，媒体查询来完成设计；

> 缺点：为适配不同的设备而编写的 css 代码过多过影响加载速度；图片视频超过低分辨率的屏幕造成流量不必要的浪费；
