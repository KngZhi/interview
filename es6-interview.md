# ES6-Interview
`var`, `let`, `const` what's the difference of those? [sof](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable)
- `let` 与 `const` 会创建块级作用域，块级作用域中声明的变量会在使用之后会消除
- `let` 声明的变量不能重复声明，但可以修改，而 `const` 声明的变量不可以修改也不可以重复声明
- `var` 可以重复声明变量，也可以修改。同时还会有变量提升的情况。但在严格模式下不会出现变量提升。
- 其本质的区别在于作用域。var 的作用域依附在最近的函数作用域，而 let 则依附在最近的 /enclosing/ block, 可以小于函数作用域.
- 在全局作用域下声明 `let` 变量将不会作为属性被添加到 `window` 中。而 `var` 则可以, 严格模式下则不可以。

