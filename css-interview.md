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

CSS2.0 的兼容性问题
```css
/*双边距 bug float引起的*/
.x { display: inline}
/* IE5-8 不支持 opacity*/
.y {opacity: .4; filter: alpha(opacity=60);}
```

让文字在垂直和水平方向上重叠的两个属性是什么？
> 垂直方向：`line-height`；水平方向：`letter-spacing`

`letter-spacing` 的作用是什么？
控制字节之间的空隙，可以用来消除 `inline-block` 元素之间的换行符空格间隙问题

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
描述 z-index 和叠加上下文是如何形成的。 
> z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。 
注释：元素可拥有负的 z-index 属性值。
注释：Z-index 仅能在定位元素上奏效(e.g. `position:absolute`)

- 创建了堆叠上下文的元素比其他元素层级高
- 两个层叠上下文相遇时，后一个层级高。可以通过 `z-index` 来改变层级

而凡是拥有层叠上下文的元素，将离用户最近，也就是越靠在Z轴前面。默认情况下只有根元素HTML会产生一个层叠上下文，并且元素一旦使用了一些属性也将会产生一个层叠上下文，如我们常用的定位属性。如两个层叠上下文相遇时，总是后一个层叠前一个，除非使用z-index来改变。


块元素与行内元素的区别?
> 块级元素：总是独占一行，另起一行开始。其后的元素也是另起一行显示。宽高和内边距可调整
> 行内元素：和相邻的内联元素在同一行。宽高由内容撑开，不可以设置。

行内块元素的特征是什么？有哪些是行内块元素？
> 特征：可以设置宽高，但不会自动换行； `<img>`, `<input>`, `<button>`, `<textarea>` `<label>`

什么是外边距折叠？
> 在普通文档流中，但两个或多个垂直边距相遇时，它们会形成一个外边距。这个外边距的高度取相遇的元素的最大值。

折叠外边距的高度是如何计算的？
> 两个相邻外边距都是正数时，折叠结果为较大值；一正一负则是和的绝对值；都是负数则为两者绝对值的较大值；

如何避免外边距折叠？
> 首先为了避免外边距折叠，只需要两个外边距不会碰到一起即可。

`rgba()` 和 `opacity` 的透明效果有什么不同？

> - `opacity` 作用于元素整体，包括它的内容。但不被其子元素所继承
> - `rgba()` 只作用于元素的颜色或其背景色

`px` `em` `rem` 三者的区别？ px 是固定值， em 值根据对应

> `px` 是固定值; `em` 是相对单位，其对应父级元素的字体大小; `rem` 是基于根元素`<html>`来确定的

reset.css 与 normalize.css 的区别？

> reset 的目的是清除浏览器的默认样式，让浏览器成为一张白纸；而 normalize 是为了让所有的浏览器遵循一个默认样式

为什么要初始化样式？

> 因为不同浏览器的自带样式使不同的，如果不初始化会造成不同的显示效果

你有对 CSS 预处理器的实践思考(SASS, LESSa) [[ref](http://efe.baidu.com/blog/revisiting-css-preprocessors/)]
> 我个人用过 SASS LESS, 如果团队内的人员有相应的经验，然后大家尽力做到模块化，提升可读性和维护性，那么引入 CSS 预处理器是很有价值的。因为两者都是 CSS 预处理器。它们赋予了 CSS 动态语言的特性，如变量，继承，运算，函数； 解构清晰，方便扩展；解决了浏览器私有语法的差异。

[topic] WebFont
- 什么是 WebFont, 它是为了解决什么问题出现的？
> WebFont 是一种字体格式需要指定的 license 允许开发者使用无需安装在用户电脑上的字体。


css 中 `link` 和 `@import` 的区别？

> link 属于 Html 标签，而 @import 是 CSS2.1 中提供的； @import 有执行效率的问题，因为它打破了浏览器的并行加载机制，导致加载页面速度变慢；

简单介绍下盒模型
> 盒模型分为两种：一为 IE 盒模型（怪异盒模型），宽高包括 border, padding, content; 一为标准的 W3C 盒模型 宽高就是 content 的宽高；

什么是 BFC[tbc]

> BFC 又称为 block formatting context , 块级格式化上下文；它规定了内部的如何布局，并且与这个独立盒子里的布局不受外部影响，当然它也不会影响到外面的元素。

如何触发 BFC？

> float, 除了 None 以外的值；overflow: visible 以外的值；display: table-cell, table-caption, inline-block, flex, inline-flex; position:absolute, fixed;


你用过栅格系统 (grid system) 吗？如果使用过，你最喜欢哪种？
> 栅格系统通过运用固定的格子设计版面布局，在报刊杂志上尤为常见。支持响应式设计，栅格系统本身能很好的和响应式设计结合在一起。一般的栅格布局通常包含 4 个要素：container/rows/columns/gutters

> 我最喜欢 Bootstrap 提供了一套响应式的流式栅格系统，随着屏幕或视口 (viewport) 尺寸的增加，系统会自动分为最多 12 列。

如何提高 CSS 选择器的性能优化？
> 主要把握一点原则：越具体的关键选择器，其性价比越高。即 id 和类名是效率最高的。而 C3 的仿伪类和属性选择器虽然使用方便，但效率最低.

## CSS3

css3 中重要的新特性：

> animation; 2d/3d transformations; 文字特效，线性渐变，旋转；媒体查询；border-image

[topic] Media query？
> Media query 就是媒体查询。媒体查询可以根据不同的设备或特定的特征(比如宽度)动态适配
- 移动端布局用过媒体查询吗？
> 通过媒体查询可以为不同大小和尺寸的设备动态适配不同的 CSS


什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？它的缺点是什么？
> - Responsive Web design: 以低成本的方式实现一套代码一个网页在多终端多设备下达到一定用户体验的开发方式； 通过弹性盒子，媒体查询来完成设计；
> - 基本原理：通过媒体参训检测不同的设备或屏幕尺寸做相应处理，配置弹性盒子完成布局.页面头部必须有 meta 声明的 `viewpoint`
```html
<meta name=’viewport’ content=”width=device-width, initial-scale=1. maximum-scale=1,user-scalable=no”>
```
> - 缺点：为适配不同的设备而编写的 css 代码过多过影响加载速度；图片视频超过低分辨率的屏幕造成流量不必要的浪费；

CSS3 新增伪类以及含义
- `ele:nth-child(n)` 选中父元素下的第 n 个子元素，并且这个子元素标签名为 elem, n 可以接受具体的数值.或者传入 `even`
- `elem:ntm-last-child(n)` 与 `elem:nth-child(n)` 类似。只是反向计算。
- `elem:last-child` 选中最后一个子元素
- `elem:only-child` 若是父元素下唯一的子元素，则选中。
- `elem:nth-of-type(n)`选择父元素下第 n 个 elem 元素。
- `elem:first-of-type` / `elem:last-of-type`
- `elem:only-of-type` 如果父元素下的子元素只有一个 elem 元素，选中该元素。
- `elem:empty` 选中不包含子元素和内容的 elem 标签。

Chapter 1: this Or That?
Chapter 2: this All Makes Sense Now!
Chapter 3: Objects
Chapter 4: Mixing (Up) "Class" Objects
Chapter 5: Prototypes
Chapter 6: Behavior Delegation
Appendix A: ES6 class
Appendix B: Thank You's!