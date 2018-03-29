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
> 组件化 (createClass)，定义数据 (getInit)，渲染 (render)

能简单说一下 JSX 吗？
> JSX 就是将 XML 语法直接加入到 JS 代码中，有点类似于HTML。我们熟知的包含属性的树状结构语法, 增强了 js 语义，增强了代码的可读性；

在 react 中我们是如何传输数据的？
> 通过 state 和 props 来传输，`state` 用于存取一些需要时刻变动的值或后期需要变更的值， `props` 存取静态的常量，用于父子组件间传参。

在实际项目中 你们是如何设计 React 组件的？
> 我们通常根据组件的职责将其分为**UI**组件和**容器**组件。前者负责 UI 的呈现，容器组件负责处理数据和业务逻辑。两者通过 *Redux* 提供的 *connect()* 联系起来。

调用 `setState` 之后发生了什么？
> 当调用 `setState` 方法时， 会告知 React 该状态需要进行更新，然后将其添加到更新队列中，然后根据该队列进行批量更新。`setState` 更像是一个请求，而不是立即执行的命令。

能谈一下 react 中的事件对象吗？
> 它是为了解决不同浏览器中事件的兼容问题，初始状态下默认为空，为了减少性能的消耗

什么是被动更新呢？
> react 属于单向数据流操作，因此默认不主动更新。但是我们可以使用 mixin 配合 onChange 事件模拟，手动更新数据。

在 react 我们如何获取真实的 DOM 节点？
> 通过 `ref` 属性，或者 `findDOMNodeAt` 方法

说一下 `refs` 属性，以及为什么它们这么重要？
> 它允许我们直接获取一个 DOM 元素或者一个组件的实例。

能谈一下 `key` 属性吗？
> react 通过该属性来追踪哪些列表元素被增删改的辅助标识，在同级元素中具有唯一性；React diff 算法中会借助元素的 `key` 来判断该元素是否增删该过的元素，从而减少不惜要的元素渲染；

[s]能说下 `diff` 算法的具体执行过程吗？

[note: 使用总分总的方式去叙述]
> diff 算法是指操作 DOM 元素的一种计算方法，常规的 JS diff 算法时间复杂度为 O(n^3) ，而 react 中只需要 O(n)。通过查找目标节点和同类节点，然后利用虚拟 DOM 进行一次性替换
> 1. 将树形结构按照层级分解，只比较同级元素
> 1. 给列表结构的每个单元添加唯一的 key 属性，用于比较
> 1. 匹配相同 class 的组件
> 1. 合并操作，调用 component 的 `setState` 方法，
> 1. 选择性渲染子树。通过重写 `shouldComponentUpdate` 来提高 diff 的性能 

为什么虚拟 DOM 会提高性能？
> 利用DOM diff 算法避免了没有必要的 DOM 操作，从而提高性能。我个人的理解对 Virtual DOM 的本质就是在 JS 和 DOM 之间加一个缓存，可以类比于CPU 和硬盘，既然硬盘很慢，那我们就在他们呢之间加一个缓存。CPU 只操作内存，最后的时候再写入到硬盘中。

[s] 能简单说下虚拟 DOM 的实现步骤吗？[[ref](https://www.zhihu.com/question/29504639?sort=created)]

> 1. 用 JS 对象结构创建一个虚拟的 DOM 树结构，然后将其插入到 DOM 节点中
> 1. 当状态发生变化时，重新创建一棵新的 DOM 树，使用 **diff** 算法对新旧树进行对比，记录两棵树之间的差异
> 1. 将记录的差异应用到之前创建出来的真实 DOM 树上，实现视图的更新

能说下 react 的生命周期？
> 它分为三个生命周期
> - Mounting
>   - getDefaultProps  初始化默认属性
>   - getInitialStates() 初始化默认状态
>   - componentWillMount() 渲染前最后一次执行的函数
>   - render() 渲染
>   - componentDidMount() 渲染后执行的函数，通常此时操作真实 DOM 节点
> - Updating
>   - receiveProps 接受新的属性时触发，并进行逻辑处理
>   - componentWillUpdate 更新前触发的函数
>   - shouldcomponentUpdate 决定子组件是否更新
>   - render()
>   - componentDidUpdate() 更新后触发的函数
> - Unmounting
>   - componentDidUnmouting() 卸载组件后触发的函数

数据请求以及操作 DOM 节点应该放在哪个钩子函数中呢？为什么？
> `componentDidMount`; 原因如下：
> - 将 Ajax 请求放在 `componentWillMount` 函数容易被多次触发
> - 我们并不能保证请求仅在组件挂载完毕后才会要求响应。如果我们的数据请求在组件挂载之前就完成，并且调用了 setState 函数将数据添加到组件状态中，对于未挂载的组件则会报错。而在 componentDidMount 函数中进行 AJAX 请求则能有效避免这个问题。

react 中如何进行数据请求？
> 引入 `axios` ，放在 `componentDidMount`,

哪个钩子函数中影响模块的渲染/React 性能优化在哪个生命周期函数？
> componentShouldUpdate, 它允许我们手动判断是否进行组件更新。所以根据组件的应用场景设置函数的合理返回值能够帮我们避免不必要的更新。

我们如何对 React 进行性能优化？

> 1. 重写 `shouldComponentUpdate` 来避免不必要的 DOM 操作
> 1. 使用 production 版本的 react.js
> 1. 利用 *key* 来帮助 react 识别列表中所有子组件的最小变化

您怎么看待 react 和 angular 的区别？

1. 数据流，react 是单向，而 angular 是双向的；
1. react 由小到大，view 层。 angular 是由大到小，包括所有层级；

那我们能在 react 中实现数据的双向绑定吗？
> 可以的，引入 `react-with-addon` 插件，然后使用 `mixins` 共享方法

在 ES6 中可以使用 `mixins` 吗？如果不能是否有替代方法？
> 不能。

能说下你对 mixin 的理解吗？
> 在 react 中是以组件构建项目的，原则上要保持每个组件的独立，但有时我们需要共享一些方法和属性，这时候我们就可以使用 mixins，*它往往与生命周期函数配合使用*

React 中 Element 与 Component 的区别是？
> 简单的说就是一个 ReactElement 就是你现在屏幕上看到的内容。而 Component 是一个**函数或类**会有选择地接受输入并返回一个 ReactElement(typically via JSX which gets transpiled to a createElement invocation) [[ref](https://tylermcginnis.com/react-elements-vs-react-components/)]

什么时候我们使用 Class Component 而不是 Functional Component?
> 当组件内部需要使用生命周期函数的时候

react 中 createElement 与 cloneElement 的区别是什么？

> - createElement 中 type 类型可以是字符串或 reactClass
> - cloneElement 中 type 必须是 ReactElement

- createElement 是 JSX 编译之后使用的创建 React Element 的函数
- cloneElement 用于复制某个元素并传入新的 Props。

createElement, createClass, createFactory 三者的不同
>
三者用途稍有不同，按依赖关系调整下顺序：

> 1. createClass，创建 React 组件对应的类，描述你将要创建组件的各种行为，其中只有当组件被渲染时需要输出的内容的 render 接口是必须，其他都是可选：

```js
var Hello = React.createClass({
    render: function() {
        return <div>Hello Taobao, Hello UED</div>;
    }
});
```

> 1. createElement，创建 React 组件实例，支持 type，config，children 三个参数：

  ```js
  ReactElement.createElement = function(type, config, children) {
    ...
  }
  ```

如我们在 jsx 中描述的 `< Hello />` ，编译后就是 `React.createElement(Hello)`
3. createFactory，通过工厂方法创建 React 组件实例，在 js 里要实现工厂方法只需创建一个带 type 参数的 createElement 的绑定函数：

```js
ReactElement.createFactory = function(type) {
  var factory = ReactElement.createElement.bind(null, type);
  return factory;
};
```

创建模式目的是隔离与简化创建组件的过程，模式的东西自然是可用可不用，如果需要批量创建某个组件时，可以通过工厂方法来实现：
var h = React.createFactory(Hello);
h({x:1})
h({x:2})

react 中的工厂方法是什么？
> createFactory()

[s]您之前了解过函数式编程吗？

> 函数化编程就是以函数作为核心进行模块化代码的编写；主要解决回调地狱，进行模块化代码的编写主要运用到了 es6 中的 promise 和柯理化 (curry) 函数编程的思想；

如何在 es6 初始化默认了声明状态
> constructor, super()

react 中我们如何使用路由？
> 通过引入 `react-router` 引入 Link, Router, Route 等组件

路由切换的内容块在哪里渲染？
> this.props.children 它表示组件的所有子节点

单向数据流与双向数据流的优缺点，以及适用场景？
对于非UI控件来说，不存在双向，只有单向。只有UI控件才有双向的问题。

单向绑定使得数据流也是单向的，对于复杂应用来说这是实施统一的状态管理（如redux）的前提。

双向绑定在一些需要实时反应用户输入的场合会非常方便（比如多级联动菜单）。但通常认为复杂应用中这种便利比不上引入状态管理带来的优势。

react 被动更新？
> react 中的被动更新，用 onchange 事件模拟，然后用 `setState` 更新，更新的内容为 `event.target.value`, react 中主要是单向数据流，默认不会主动更新，需要手动更新数据。

## Redux [[ref](http://cn.redux.js.org/docs)]

能简单说一下你觉得 Redux 是什么吗？[[ref](https://is.gd/hBCGSu)]
> 一个实现 Flux 思想的数据流框架。将动作 (actions) 转换为 state 转换函数 (reducer) ，然后放到一个统一的地方(store) 进行更新 (setState) 。

它的设计遵循什么原则？

> - 单一数据源, 项目中的 *state* 被储存在一颗 object tree 中，且该树只存在于唯一一个 *store* 中。
> - state 是只读的, 能改变的 *state* 的方法就是触发 *action*。
> - 使用纯函数执行修改；通过 *reducers* 来描述 *actions* 如何修改 state tree.

什么是 Redux 中的中间件
> Redux 中间件本质的目的是提供第三方插件的模式，用于自定义拦截 *action -> reducer* 的过程。变成 *action -> middlewares -> reduce*。这种机制可以让我们改变数据流，实现如异步 action, action 过滤，日志输出，异常报告等功能；

常见的中间件有哪些？
> redux-logger: 提供日志输出； redux-thunk 处理异步操作; redux-promise 处理

Redux 的缺点？

> - 组件所需要的数据必须从父组件传递过来，而无法直接从 store 获取；
> - 当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新 render, 可能会有效率影响，或者需要利用 shouldComponentUpdate 进行判断;


## React-router
路由实现的原理？
