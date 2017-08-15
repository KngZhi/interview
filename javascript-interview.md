# JS interview
temp

array.splice()的用法


---

隐式转换与显示转换

> +, !, ~, >= , == ; parseInt, parseFloat, Number;

常见的浏览器模式有哪些？

> 严格模式、混合模式（怪异盒模型/）、兼容模式（已经被淘汰）；

`typeof` 返回哪些数据类型？

> object, string, number, undefined, function, symbol

兼容性写法

```javascript
var ev = event || window.event
var width = document.documentElement.clientWidth || document.body.clientWidth
var target = event.srcElement || event.target
```

截取字符串 'abcdefg' 的 efg

```javascript
var str = 'abcdefg'
console.log(str.substring(4))
```

字符串反转，如将 '12345678' 变成 '87654321'
```js
//思路：先将字符串转换为数组 split()，利用数组的反序函数 reverse()颠倒数组，再利用 jion() 转换为字符串
var str = '12345678';
str = str.split('').reverse().join('');
```

js 延迟加载的方式有哪些？

1. defer和async
2. 动态创建DOM <script> 标签（创建script，插入到DOM中，加载完毕后callBack）
3. 按需异步载入js

哪些会造成内存泄漏
- 全局变量
- 计时器没有关闭
- 闭包
- 控制台日志
- 两个对象都存在且彼此引用，由此产生了一个循环

请谈一下 JavaScript 中的垃圾回收机制
> JavaScript 中使用计数回收，它定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收

`iframe` 的优缺点

优点：
1. 解决加载缓慢的第三方内容如图标和广告等的加载问题
2. Security sandbox
3. 并行加载脚本

缺点：
1. iframe会阻塞主页面的Onload事件
2. 即使内容为空，加载也需要时间
3. 没有语意

如何对节点进行增删改？

> `appendChild/removeChild/createElement`

如何进行跨域操作？[ref](https://github.com/wengjq/Blog/issues/2)

> - CORS：关键点在于后端设置了 `Access-Control-Allow-Origin`
> - JSONP
> - 后端代理
> - window.postMessage (h5)

描述下这四个数组方法 `push/pop/shift/unshift` ;

## Basic

JS 常用的设计模式有哪些? [tbc]

> 单例模式/观察模式/工厂模式


截取字符串由哪些方法

- `string.slice()`；
- `string.substring()`;
- `string.substr()`;
- 利用 `''` 来

如何检测数组和字符串

- isArray();
- x instanceOf Array

如何将伪数组转化为数组？

> `array.prototype.slice.call(fakearray)`;


前端模块化规范标准

- 什么是模块? 模块的意义是什么?

  > 模块: 实现特定功能且相互独立的一组方法; 方便管理, 提高复用性;

- 为什么我们需要模块化规范标准?

  > 为了让大家能方便的加载各种模块，因此需要一套编写模块的规范;

- 有哪些模块化规范

  > CMD, 同步加载模块; AMD, 非同步加载模块; CommonJS;

JavaScript 的内置对象和宿主对象？

- 内置： Object, Array, Function, Data, Math
- 宿主： 浏览器自带的 Window

`window.onload` 和 `document.ready` 的区别

- 前者是当文档树和所有文件加载完后执行函数
- 后者是指当文档树加载完毕后执行的函数

AMD(Modules/Asychronous-Definition), CMD(Common Module Definition), CommonJS 规范区别？

- AMD 是异步加载规范，CMD 是同步加载规范
- 对于依赖的模块，AMD提前引入，CMD是按需引入
- CMD 推崇依赖就近，AMD 推崇依赖前置
- CommonJS 是按需引入，核心的接受和暴露

  - 通过 `require()` 进行接受
  - 通过 `module.export` 进行暴露

深拷贝和浅拷贝(shallow copy)的区别

- 浅拷贝只复制一层对象的属性

  ```javascript
  var o1 = {a: 1}
  var o2 = o1;
  console.log(o1 === o2); // true

  var arr1 = ['darko', {age: 22}]
  var arr2 = arr1.slice();
  var arr3 = arr1.concat();
  console.log(arr1 === arr2); // false 拷贝的只是一个实例
  console.log(arr1 === arr3); // false 拷贝的只是一个实例
  ```

- 深拷贝是递归复制对象的所有层级

  - 实现方式：递归、JSON.stringify、JSON.parse

  ```javascript
  function deepClone(source) {
    return JSON.parse(JSON.stringify(source))
  }
  var o1 {
    arr: [1, 2, 3],
    obj : {key: 'value'},
    func: function() {
      return 1
    }
  }

  var o2 = deepClone(o1)
  console.log(o2);
  ```

如何实现深拷贝?

```javascript
var cloneObj = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ?
            cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
};
```

### Date

输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26

```javascript
var d = new Date();
// 获取年，getFullYear()返回4位的数字
var year = d.getFullYear();
// 获取月，月份比较特殊，0是1月，11是12月
var month = d.getMonth() + 1;
// 变成两位
month = month < 10 ? '0' + month : month;
// 获取日
var day = d.getDate();
day = day < 10 ? '0' + day : day;
console.log(year + '-' + month + '-' + day);
```


### 闭包、原型与原型链
什么是闭包?

> 外部函数访问内部函数变量的过程称作闭包; 在 es6 中 let 生成的块级作用域就是为了替代闭包的; 生成的变量会被 GC 回收机制回收，那么就不会造成内存的泄漏了；

闭包的使用场景有哪些?

> 面向功能(模块)的封装;

请描述下闭包的优/缺点?

> 延长函数的生命周期/防止变量全局空间的污染; 干扰垃圾回收机制/造成内存泄漏

什么是内存泄漏，在 JS 中哪些操作会造成内存泄漏？
> 不再用到的内存，没有及时释放，就是 memory leak;

你能手写一个闭包吗？[tbc]
> function 中 return 一个 function


原型和原型链

> 每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。(mdn)[]

对象中内置了一个 Constructor；

js 中如何实现继承[exp](https://is.gd/2j8Zx6)

- 构造函数继承：使用父类的构造函数来增强子类的实例，等于是复制父类的实例属性给子类
- 原型链继承：将父类的实例作为子类的原型
- 实例继承：为父类实例添加新特性，作为子类实例返回
- 拷贝继承
- 组合继承：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
- (best)寄生组合继承：通过寄生方式去掉父类的实例属性，如此在调用两次父类的构造的时候，就不会初始化两次实例方法属性，避免了组合继承的缺点；

## 事件

事件绑定和普通事件的区别？

> 普通事件不支持添加多个事件，且无法取消。最下面的事件会覆盖上面的事件。事件绑定可以为一个元素添加多个事件。

IE 和 DOM 事件流的区别？

> 1. 执行顺序不一样，IE属于事件冒泡，DOM属于事件先捕获再冒泡
> 2. 参数不一样
> 3. 事件加不加on
> 4. IE this 指向 window, dom 指向调用事件处理函数的对象

同步(Synchronous)与异步(Asynchronous)的区别？
> 阻塞和非阻塞关注的是程序在等待调用结果（消息，返回值）时的状态.
## RegEx




## this

`call` 与 `apply` 的异同

- 两者都是为了改变某个函数运行时的 context ，即改变 this 的指向
- 两者作用完全相同，但前者接受一个个参数的传入，后者接受数组为参数


--------------------------------------------------------------------------------------------------------
## Ajax

什么是 Ajax？

> Asychronous JavaScript and XMl, 用于实现客户端与服务器端的异步通信效果，实现页面的局部刷新。主要通过 XMLHttlpRequest(标准浏览器)/ActiveXObject(IE)对象 发送请求实现异步通信效果

实现 Ajax 的基本步骤

```javascript
var xhr = null;
if (window.XMLHttlpRequest) {
  xhr = new XMLHttlpRequest();
} else {
  xhr = new ActiveXObject('Microsoft.XMLHttlpRequest')
}

// initializes a request xhr.open(menthod, url, async, user)
xhr.open('GET', '/bar/foo.txt', true)
// 设置 http 请求头
xhr.setRequestHeader(header, value)
// 指定回调函数
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.statusText);
    }
  }
}
xhr.onerror = function (e) {
  console.error(xhr.statusText)
}
// 发送请求
xhr.send(null)
```

Ajax 的工作原理

> 原理就是在用户和服务器之间加一个中间层，使用户操作与服务器响应异步化。将以往一些服务器负担的工作转移到客户端


## 数组
在Javascript中什么是伪数组？如何将伪数组转化为标准数组？
> 伪数组（类数组）：无法直接调用数组方法或 length 属性，但仍可以对真正数组遍历方法来遍历它们。典型的是函数的argument参数，还有像调用getElementsByTagName,document.childNodes之类的,它们都返回NodeList对象都属于伪数组。可以使用Array.prototype.slice.call(fakeArray)将数组转化为真正的Array对象

数组去重：算法术语

稳定性：如果a原本在b前面，而a=b，排序之后a仍然在b的前面； 不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；

内排序：所有排序操作都在内存中完成； 外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；

时间复杂度: 一个算法执行所耗费的时间。 空间复杂度: 运行完一个程序所需内存的大小。

[JavaScript 数组去重 #9](https://is.gd/F8x7Ox)

方法一，使用 `indexOf` & `array.filter`, 复杂度 O(n^2)

```javascript
function unique(arr) {
  var res = arr.filter(function(item, index, array) {
    return array.indexOf(item) === index;
  })
  return res;
}
```

方法二，使用 `.push`, 复杂度 O(n^2)

```javascript
function unique(arr) {
  var res = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      // 这一步十分巧妙
      // 如果发现相同元素
      // 则 i 自增进入下一个循环比较
      if (a[i] === a[j])
        // 为什么不是 i++
        j = ++i
    }
    res.push(arr[i])
  }
  return res;
}
```

方法三，`.sort()`

```javascript
function unique(arr) {
  return arr.concat().sort().filter(function (item, pos, array) {
    return !pos || item != array[pos - 1]
  })
}
```

方法四

```javascript
function unique(arr) {
  var seen = {}

  return a.filter(function (item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  })
}
```

方法五（ES6）

```javascript
function unique(arr) {
  return Array.from(new Set(arr))
}
```
