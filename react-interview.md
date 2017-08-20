# react 面试题
[[ref](https://jimmylv.gitbooks.io/learning-react-js/content/reactjs_tutorial/reactjs_tutorial_part_1.html)]

[[jsx](http://imweb.io/topic/579e27f193d9938132cc8d91)]

[[常见面试](https://zhuanlan.zhihu.com/p/24856035)]
---

能说说为什么使用 react 来构建你的项目吗？
> - 数据交互比较频繁
> - 单向数据流
> - 使用 jsx 模板，结构清晰
> - 比较轻量，只是 mvc 中的 view 层
> - 使用组件，复用性高；

具体工作中，您是怎么用 react 构建一个项目
> create-react-app 脚手架 和 antd
- 开发目录，上线目录
- webpack
  - babel-loader

react 的核心思想是什么？
> 组件化(createClass)，定义数据(getInit)，渲染(render)

在 react 中我们是如何传输数据的？
> 通过 state 和 props 来传输，`state` 用于存取一些需要时刻变动的值或后期需要变更的值， `props` 存取静态的常量, 用于父子组件间传参。

在 react 中我们如何更新状态？
> `setState()`

它的原理是什么？
> 当调用 `setState` 方法时， React 会重新调用 `render` 渲染组件；通过  `setState` 方法将需要更新的 state 放入一个状态队列中，根据该队列批量更新 `state`

能谈一下 react 中的事件对象吗？
> 它是为了解决不同浏览器中事件的兼容问题，初始状态下默认为空，为了减少性能的消耗

什么是被动更新呢？
> react 属于单向数据流操作，因此默认不主动更新。但是我们可以使用 mixin 配合 onChange 事件模拟，手动更新数据。

在 react 我们如何获取真实的 DOM 节点？
> 通过 `ref` 属性，或者 `findDOMNodeAt` 方法

能谈一下 `key` 属性吗？
> react 通过该属性来追踪哪些列表元素被增删改的辅助标识，具有唯一性; React diff 算法中会借助元素的 `key` 来判断该元素是否增删该过的元素，从而减少不惜要的元素渲染；

那么，能详细说一下 `diff` 算法了？

> diff 算法是指操作 DOM 元素的一种计算方法。常规JS的 diff 算法时间复杂度为 O(n^3)，而 react 中只需要 O(n) react 通过查找目标节点和同类节点，然后通过创建虚拟 DOM 一次性替换。

[que]能说下 react 的生命周期？
> 它分为三个生命周期
> - Mounting
>   - [que] getDefaultProps  初始化默认属性
>   - getInitialStates() 初始化默认状态
>   - componentWillMount() 渲染前最后一次执行的函数
>   - render() 渲染
>   - componentDidMount() 渲染后执行的函数，通常此时操作真实 DOM 节点
> - Updating
>   - receiveProps 接受新的属性时触发，并进行逻辑处理
>   - componentWillUpdate 更新前触发的函数
>   - componentShouldUpdate 决定子组件是否更新
>   - render()
>   - componentDidUpdate() 更新后触发的函数
> - Unmounting
>   - componentDidUnmouting() 卸载组件后触发的函数


数据请求以及操作 DOM 节点应该放在哪个钩子函数中呢？为什么？
> `componentDidMount`; 原因如下:
> - 将 Ajax 请求放在 `componentWillMount` 函数容易被多次触发
> - 我们并不能保证请求仅在组件挂载完毕后才会要求响应。如果我们的数据请求在组件挂载之前就完成，并且调用了setState函数将数据添加到组件状态中，对于未挂载的组件则会报错。而在 componentDidMount 函数中进行 AJAX 请求则能有效避免这个问题。

react 中如何进行数据请求？
> 引入 `n-zepto` ，放在 `componentDidMount`,

哪个钩子函数中影响模块的渲染？为什么？
> componentShouldUpdate, 它允许我们手动判断是否进行组件更新。所以根据组件的应用场景设置函数的合理返回值能够帮我们避免不必要的更新。

您怎么看待 react 和 angular 的区别？
1. 数据流，react 是单向，而 angular 是双向的；
2. react 由小到大，view 层。 angular 是由大到小，包括所有层级；

[que]那我们能在 react 中实现数据的双向绑定吗？
> 可以的，引入 mixins

在 ES6 中可以使用 `mixins` 吗？如果不能是否有替代方法？
> 不能。

能多说下你对 mixin 的理解吗？
> 在 react 中是以组件构建项目的，原则上要保持每个组件的独立，但有时我们需要共享一些方法和属性，这时候我们就可以使用 mixins，*它往往与生命周期函数配合使用*

react 中 createElement 与 cloneElement 的区别是什么？
> - createElement 中 type 类型可以是字符串或 reactClass
> - cloneElement 中 type 必须是 reactClass

- createElement 是 JSX 编译之后使用的创建 React Element 的函数
- cloneElement 用于复制某个元素并传入新的 Props。

createElement, createClass, createFactory 三者的不同
>
三者用途稍有不同，按依赖关系调整下顺序：
>
1. createClass，创建React组件对应的类，描述你将要创建组件的各种行为，其中只有当组件被渲染时需要输出的内容的render接口是必须实现的，其他都是可选：
```js
var Hello = React.createClass({
    render: function() {
        return Hello Taobao, Hello UED</div>;
    }
});
```
2. createElement，创建React组件实例，支持type，config，children三个参数：
ReactElement.createElement = function(type, config, children) {
  ...
}
如我们在jsx中描述的 < Hello /> ，编译后就是 React.createElement(Hello)
3. createFactory，通过工厂方法创建React组件实例，在js里要实现工厂方法只需创建一个带type参数的createElement的绑定函数：
ReactElement.createFactory = function(type) {
  var factory = ReactElement.createElement.bind(null, type);
  return factory;
};
创建模式目的是隔离与简化创建组件的过程，模式的东西自然是可用可不用，如果需要批量创建某个组件时，可以通过工厂方法来实现：
var h = React.createFactory(Hello);
h({x:1})
h({x:2})

react 中的工厂方法是什么？
> createFactory()

您之前了解过函数化编程吗？

> 函数化编程就是以函数作为核心进行模块化代码的编写；主要解决回调地狱, 进行模块化代码的编写主要运用到了 es6 中的 promise 和柯理化(curry)函数编程的思想；

如何在 es6 初始化默认了声明状态
> constructor, super()

react 中我们如何使用路由？
> 通过引入 `react-router` 引入 Link, Router, Route 等组件

路由切换的内容块在哪里渲染？
> this.props.children 它表示组件的所有子节点

单向数据流与双向数据流的异同？
- 单向数据流，数据流动方向可以跟踪，对于复杂应用实施统一的状态管理，利于应用的维护
- 双向流动，在一些需要实时反应用户输入的场合会非常方便（比如多级联动菜单）。


## Flux
flux 数据流管理(状态集管理)框架  由facebook 创建专门用来构建前端框架结构的框架

描述：Flux 是一种强制执行单向数据流的架构模式——其核心目的是控制派生数据，以便多个组件可以与该数据进行交互，而不会造成污染；

它的主要目的是记住数据的流向
Flux 将一个应用分为四个部分
- view 视图层
- action 动作层
- dispatcher 派发层 用于接受 Actions 执行回调函数
- store 仓库层, 存放应用的状态，一旦发生变动，就提醒 views 要更新页面

流程是
1. 用户访问 View
2. View 发出用户的 Action
3. Dispatcher 收到 Action，要求 Store 进行相应的更新
4. Store 更新后，发出一个"change"事件
5. View 收到"change"事件后，更新页面

以上的整个过程使得数据总是“单向流动”，任何相邻的部分都不会发生数据的双向流动，保证了流程的清晰；

并不是所有的项目都需要flux 进行数据流的构建  往往只应用于大型复杂项目 使用flux最大的好处就是将状态集中化管理 便于维护便于追踪
