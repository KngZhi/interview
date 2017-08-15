offsetParent()  :  获取祖先节点有定位的元素
closest()  :  查找满足条件最近的祖先节点
first()  : 集合中的第一个元素
last()  :  集合中的最后一个元素
slice()  :  截取某一部分元素
toggle()  : 切换显示隐藏（可以运动）
position()   :  元素的相对位置
wrap()  :  包装操作
get()  :  把JQ转成原生JS
width()/height()  :  元素大小
innerWidth()/innerHeight()  :  带padding的元素大小
outerWidth()/outerHeight()  :  带padding和border的元素大小
each()  :  遍历
slideDown()/slideUp()  :  向上收缩向下展开

. Q :  如何通过jquery来扩展插件？
A :  利用$.extend()和$.fn.extend()方法。


. Q :  如何通过jquery来扩展插件？
A :  利用$.extend()和$.fn.extend()方法。

Q :  $.get()和$.ajax()的区别？
A :  ajax()方法更加强大，可以配置信息。而get()方法只是抽象出的高级方法，功能比较单一。

自己封装一个 $() 函数？

---[akd]

`$`和 `$.fn` 的区别？
> $在JQ中是一个对象，而 $.fn 是 $ 这个函数的prototype原型。
