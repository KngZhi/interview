# Vue interview

能简单介绍下 Vue 吗？
> Vue 是一个用于创建 web 交互界面的库，是一个精简的 `MVVM`，通过数据双向绑定将 `View` 和 `Model` 层连接起来。

vue 比 react 有什么优势?
> 快速开发小；兼容 webapp 使用 react

vue 中数据请求？
> 分两种情况
> - 导航完成之后获取, 一般都放在 `mounted` 生命周期函数中
> - 导航完成之前获取：在路由的 `beforeRouteEnter` 获取数据，获取成功后调用 `next` 方法

vue 父子组件传参(组件如何通信)？
> 父->子 props 属性; 父组件通过 on 事件进行监听接收

vue component 是做什么用？
> 购物车，用于切换组件

Vue `slot` 是什么用的？
> 当我们需要复用组件时，可能在具体的情景中有不同的地方，如何控制某个 DOM 节点就是 `slot` 的作用，因此它可以通过`name`属性来*分发内容*

`$mount` 的作用是什么？
> 如果一个 Vue 实例没有接收到 `el` 属性，那么可以通过 `$mount` 进行挂载，直接替换

vue computed 与 method 表达式有什么区别？
> 计算属性基于他们的依赖进行缓存的，只有在它相关的依赖改变时才会重新求值；

evnet 对象
> 也是为了兼容性的考虑。

vue 中遇到哪些坑比较难以解决；
> 当时的项目没有用到 vuex , 而组件与组件之间嵌套的又很深，组件的传参非常麻烦；再一个就是同级组件之间的参数传递；

Vue 中 router-link 在电脑好用安卓没反应怎么办？
> Babel 的问题，通过安装 bebael polypill 插件解决

vue 的路由
> router-view, router-link, children 子路由

[que: 先放弃，内容太复杂了]Vue 路由实现原理
> 
[[ref](http://www.tuicool.com/articles/jQRnIrF)]

vuex 中的 `getter` 什么用？
> 可以认为是 store 的计算属性。getters 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

vue 中`computed` 的作用？
> `computed` 本身就是一个数值。用于过滤数值；

vuex 中的 `mutation` 是什么用的？
> 唯一一个能更改状态的周期函数

请问 vuex 中 mutation actions 的区别？

> - Instead of mutating the state, actions **commit** mutations.
> - Actions can contain arbitrary **asynchronous** operations.


如果你使用过Redux与Vuex的话，聊聊他们的区别与你的心得

vue 是由饿了么ued团队开发并维护的一个渐进式 js 框架
vue 以数据作为驱动的一个框架  既有angular中的数据双向绑定 也有react中的组件
与他类似的框架 knockout.js avalon.js

如何使用vue去构建项目
>
使用 vue-cli 脚手架工具进行整个项目的构建
使用 vue-router 来实现vue中路由的切换
使用 vuex 来进行状态集的管理
利用 axios 或者 fetch 或者 vue-resource 进行数据的交互
使用 template 模板引擎进行组件化开发

你们 Vue 的项目是打包一个 JS 文件，一个 CSS 文件还是多个文件？
> 根据 vue-cli 脚手架规范，是一个 JS 文件， 一个 CSS 文件

vue 常用指令
>
v-if 条件渲染指令
v-for 循环遍历指令
v-bind 绑定指令 绑定属性的
v-html 替换dom内容指令
v-text 替换文本内容指令
v-on 监听事件指令
v-model
```html
<!--使用v-on在html中监听-->
<my-component v-on:test="callbackFun"></my-component>
<script>
  //直接用$on监听
  vm.$on('text',function(){})
</script>
```

vue 中创建组件的三种方法：

> - `Vue.component`
> - 组件继承 Vue.extend

    ```js
    var Pro = Vue.extend({
    template:'{{info}}',
    data:function(){
        return {
        info:"这是首页头部"
        }
    }
    })
    new Pro().$mount("#demo")
    ```
> - 在 components 属性中直接创建

Vue 与 Angular 的双向绑定的区别？
angular中数据双向绑定实现原理 脏值检测  vue中数据双向绑定实现的原理 getter 和 setter
> Vue 中采用的 Object.defineProperty() 方法来监控对数据的操作，从而可以自动触发数据同步。并且，由于是不同的数据上触发同步，因此可以精确的将变更发送给绑定的视图，而不是对所有的数据都执行一次检测

[que]methods 和 computed 的区别？
>
- methods 中的方法必须要通过事件才能触发
- computed 中的方法要进行return，{基于它们的依赖进行缓存的。它只会 re-evaluate 当它的依赖项发生改变。}
- 前者在页面上不能直接显示，后者可以

[que] computed 和表达式的区别？
> computed只有在数据变更后才会重新计算，这样就可以降低对性能的损耗

## vue 的特性

[q*3] 为什么你使用 Vue 构建项目
>
简洁，主要是由 html 模板 json 数据和 vue 的实例构成

- __数据作为驱动 自动计算属性 以及追踪依赖构成的__
- 轻量 代码量少
- 组件化 复用性高
- 快速 使用虚拟dom 批量dom更新
- 友好 对seo友好 模板友好

vue能不能替代react

两者尽管有部分类似的地方，但适用的场景不同所以不能相互替代。

- vue 更适合于喜欢用模板语言开发或者敏捷式开发的情景
- 而如果要构建的项目需要兼容 web app 或者数据交互比较频繁的，适合react 。因为 vue 只支持 ie9 及以上的浏览器；

vue中的过滤器
在2.0版本以后 主要只保留了自定义过滤器 作为过滤的使用
```html
<div id="demo">
  {{info|reverseInfo}}
</div>
<script type="text/javascript">
  Vue.filter("reverseInfo",function(value){
    return value.split("").reverse().join("")
  })
</script>

```

vue 中的 event 对象

vue中本身也内置了event对象 主要是为了解决各个浏览器对事件的兼容性问题
和react不同的地方 vue中的event对象不为空

vue 生命周期分为四个阶段
- 组件创建时 (creating)
  - beforeCreate 实例化对象之后触发
  - created 组件接受data后触发
- 模板渲染时 (mounting)
  - beforeMount 在模板渲染之前最后一次触发
  - mounted 模板渲染之后触发
- 数据更新时 (updating)
  - beforeUpdate 更新渲染之前最后一次触发
  - updated 更新渲染之后第一次触发
- 组件卸载时 (destroying)
  - beforeDestroy 销毁之前触发
  - destroyed 在卸载之后触发

vue 中创建组件的几种方式

```js
Vue.component("tadaHeader",{
	template:"<h2>论打学生的重要性</h2>"
})

var Content =  Vue.extend({
	template:"<div>打剑高</div>"
})

Vue.component("tadaContent",Content)

var Father = { template:"<h2>绝不反抗</h2>" }

var vm = new Vue({
	el:"#demo",
	components:{
		"tadaFooter":Father
	}
})
```

关于组件的作用域
> 每一个组件模板都有自己的作用域 他们是相互独立 互不干涉的

[q*2] 为什么自定义组件 data 必须是一个函数
> 在vue中 data是一个特殊的例子 官方规定 为了避免组件与组件间声明的变量互相影响 所以 **必须使用函数声明局部变量** 避免互相干涉

[q*2] vue 中的组件模板
> vue中提供了一个标签叫 template 辅助你构建模板组件, 但它是虚拟dom 必须使用块级元素包裹

父子间传参
```html
<!-- 父传子 -->
<Child v-bind:tulongdao="msg" :yitianjian="msg2"></Child>
<!-- 子接受父 -->
<script type="text/javascript">
var grandChild = {
  props:["tulongdao"],
}
</script>
```

`$emit` 子向父传参，子获取父通过 `props`

什么是 slot 标签？
> 分发属性标签，当我们创建向相似组件时，使用slot标签来替换组件内部元素来减少组件的重复率

vue中的ref属性
> 用于获取子组件中的信息

vue 中的路由切换
> `router-vue`

购物车标签(切换标签) component 声明绑定属性，切换

常见的 UI 框架

> 1. mint UI
> 1. Vux

redux 和 flux 的区别
- 在 redux 中我们只能定义一个 store 在 flux 中我们可以定义多个
- 在 redux 中 store 和 dispathch 都放到 store 中 结构清晰
- redux 中内置了 state 对象，对仓库的管理更加明确
