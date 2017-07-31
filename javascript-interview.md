# JS interview

监听事件的兼容性写法；取消监听事件；

常见的浏览器模式有哪些？

> 严格模式、混合模式（怪异盒模型/）、兼容模式（已经被淘汰）；

`typeof` 返回哪些数据类型？

> object, string, number, undefined, function, symbol

银行支付：通联，银联；

查询： query

兼容性写法

```javascript
var ev = event || window.event
var width = document.documentElement.clientWidth || document.body.clientWidth
var target = event.srcElement || event.target
```

## 事件

事件绑定和普通事件的区别？

> 普通事件不支持添加多个事件，且无法取消。最下面的事件会覆盖上面的事件。事件绑定可以为一个元素添加多个事件。

IE 和 DOM 事件流的区别？

> 1. 执行顺序不一样，IE属于事件冒泡，DOM属于事件先捕获再冒泡
> 2. 参数不一样
> 3. 事件加不加on
> 4. IE this 指向 window, dom 指向调用事件处理函数的对象

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

> 原理就是在用户和服务器之间加一个中间层，使用户操作与服务器响应异步化。这将以往一些服务器负担的工作转移到

同步(Synchronous)与异步(Asynchronous)的区别？

## RegEx

## Node

## this

call 与 apply 的区别？

## 数组去重

算法术语：

稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面； 不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；

内排序：所有排序操作都在内存中完成； 外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；

时间复杂度: 一个算法执行所耗费的时间。 空间复杂度: 运行完一个程序所需内存的大小。

(JavaScript 数组去重 #9) [<https://github.com/hanzichi/underscore-analysis/issues/9>] 方法一，使用 `indexOf` & `array.filter`, 复杂度 O(n^2)

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

方法四，``

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
  return Array.from(new Set(a))
}
```
