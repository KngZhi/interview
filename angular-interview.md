# Angular 面试总结

您为什么选用 angular 框架啊？
> 它是由 Google 开源发布的一款 MVW 框架，适用于增删改查或单页面应用，我们当时的项目的需求就是这个。

使用的 1.0 版本，为什么不用最新版本呢？
> angular 1.0 ，但因为 4.0 已经出了，但还是不够稳定，所以后期我们肯定会进行移植的；

您的 angular 是项目如何构建的
> 定义需求；UI 设计图稿；前后端商议接口等问题；
> - 具体到我们前端部门是开发设计层级
    - 过滤层
    - 服务层
    - 控制层
  - 将每个层级的任务派发给小组成员
  - 进行测试
  - 上线时使用 gulp 来打包

[que] 怎么搭建一个 angular 项目
> 按照需求分为几个模块，然后每个模块分为几个层，过滤控制，服务层，根据MVC，视图获取数据，过滤成过滤，控制层发送到服务层，服务层进行数据的对接；

如果使用 ionic 框架怎么使用?
> 通过 seed 来搭建 Ionic

能简单说一下 MVC 和 MVVM 的区别吗？

>
- MVC: model, view, controller;MVVM: model, view, viewmodel;
- [que] MVC: 除了 view 和 controller 不能相互传递之外，其他都可以相互传递值;MVVM:  ;
- MVVM 是 mvc 的一个分支 ， angular 是 MVW 框架，即 model view whatever;

能说下 angular 框架的有什么优点吗？
> 支持数据的双向绑定，依赖注入，还有丰富的指令，angular 是一套非常完整的体系，可以用来帮助构建项目，

什么是依赖注入？
> 依赖是指一个函数的运行需要另一个函数。而依赖注入又分为两种，一种是主动依赖，一种是被动依赖。 angular 就是属于被动依赖。所谓的被动依赖就是当在创建控制器的时候会根据形参来建立依赖该控制器的形参对象，通常情况下注入的是服务。

能说下 angular 中数据双向绑定的原理吗？
> 它运用到了脏值检测；当指定的事件触发时 angular 就会进入 $digest 循环中去遍历当前项目中所有双向绑定的数据，然后对比返回的值与以往的值，发生改变的就判定为脏值；

您刚才提到的指定事件触发脏值检测，具体指哪些事件？
> - $http 请求
> - $location 的变动
> - dom 事件 如 ng-click
> - 时间 $timeout, $interval
> - $digest , $apply

能说一下 `$digest` 与 `$apply` 的区别吗？
> 前者自动，后者手动调用；前者的作用范围是 **整个项目**，后者是当前控制器

能简单说一下 $scope 和 $rootScope 的区别吗？
> - $scope 是局部作用域，作用范围是当前控制器
> - $rootScope 是全局作用域，作用范围是整个项目
> - angular 中遵循先公有后私有，优先匹配局部的原则；
> - 页面中声明的所有变量都必须在作用域服务中声明；

angular 的方法和普通的函数，哪个优先级更高？
> angular 中优先执行 ng 指令和方法；

自定义服务的方法有几种？
> `service`, `factory`, `provider`

能说下三者的区别吗？
> service 用来定义枚举或构造函数服务，factory 必须使用 return 返回，通常用于自定义接口。provider 用于初始化，同时必须使用 $get 返回定义的属性和方法

自定义供应商服务中 $get 是什么用？
> 用于返回控制器中定义的属性和方法；

[que]factory和service，provider是什么关系？
> factory 把 service 的方法和数据放在一个对象里，并返回这个对象；service 通过构造函数方式创建 service，返回一个实例化对象；provider 创建一个可通过 config 配置的 service。

> 从底层实现上来看，service 调用了 factory，返回其实例；factory 调用了 provider，将其定义的内容放在 $get 中返回。factory 和 service 功能类似，只不过 factory 是普通 function，可以返回任何东西（return 的都可以被访问，所以那些私有变量怎么写你懂的）；service 是构造器，可以不返回（绑定到 this 的都可以被访问）；provider 是加强版 factory，返回一个可配置的 factory。


自定义指令
> `directive()`

angular 中模块化的优点是什么？
> 解耦合，便于管理，增强代码可读性和复用性

在 angular 中如何修改 this 指向？
> ng-bind

搜索框是如何实现的？
> 通过 model 获取变更的值 ng-change 进行模拟

---

能简单说几个 angular 的过滤器吗？
> `filter`, `currency`, `date`, `number`, `orderBy`, `LimitTo`


[que] `{{now | 'yyyy-MM-dd'}}` 这种表达式里面，竖线和后面的参数通过什么方式可以自定义？

```js
app.filter('过滤器名称',function(){
    return function(需要过滤的对象, 过滤器参数1, 过滤器参数2, ...){
        //...做一些事情   
        return 处理后的对象;
    }
});
```

使用方式有两种，一种是直接在页面里：
```html
<p>{{now | date : 'yyyy-MM-dd'}}</p>
```
一种是在 js 里面用：
```js
// $filter('过滤器名称')(需要过滤的对象, 参数1, 参数2,...)
$filter('date')(now, 'yyyy-MM-dd hh:mm:ss');
```

[que]`$q` 是什么用的？

> $q 延迟服务，为了给异步操作提供扩展, 属于底层的服务。

---

传统的路由与单页面路由的区别是什么？
> 传统的是页面的切换，而单页面只是页面中内容的切换

angular 中的路由切换？
> angular 中的路由分为 ui-route, ng-route

能分别阐述下 ngRoute 和 ui-route 异同吗？

>共同点:
- 两者都需要以模块依赖的形式引入

>不同点：
>
- ng 是 angular自带的模块， ui 是基于 ngRoute 模块的第三方模块
- ui 是基于 state(状态) , ng 是基于 url(路径) 配合 $location 设置 path, ui 路由具有更强大的功能，主要体现在视图的嵌套(views 的配置)
- 这种嵌套通过 `<div ui-view>` 实现视图嵌套

如何检索当前路由参数集合？
> `routeParams`


---

以下问题属于附加问题，能够较好的考察一个人的 ng 水平，属于附加题 [[ref](https://www.zhihu.com/question/36040694)]

小问题：

1. ng-if跟ng-show/hide的区别有哪些？
2. ng-repeat迭代数组的时候，如果数组中有相同值，会有什么问题，如何解决？
3. ng-click中写的表达式，能使用JS原生对象上的方法，比如Math.max之类的吗？为什么？
4. {{now | 'yyyy-MM-dd'}}这种表达式里面，竖线和后面的参数通过什么方式可以自定义？
5. factory和service，provider是什么关系？

解答题：

1. angular的数据绑定采用什么机制？详述原理
2. 两个平级界面块a和b，如果a中触发一个事件，有哪些方式能让b知道，详述原理
3. 一个angular应用应当如何良好地分层？
4. angular应用常用哪些路由库，各自的区别是什么？
5. 如果通过angular的directive规划一套全组件化体系，可能遇到哪些挑战？
6. 分属不同团队进行开发的angular应用，如果要做整合，可能会遇到哪些问题，如何解决？
7. angular的缺点有哪些？
8. 如何看待angular 1.2中引入的controller as 语法？
9. 详述angular的“依赖注入”
10.  如何看待angular 2……
