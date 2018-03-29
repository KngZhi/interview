const MyModules = (function Manage() {
  let modules = {}; 
  function define(name, deps, impl) {
    deps.map((val, idx) => {
      val = modules[val] 
    }) 
    modules[name] = impl.apply(impl, deps)
  }

  function get(name) {
    return modules[name];
  }

  return {
    define,
    get,
  }
})()


MyModules.define("bar", [], function (params) {
  function hello(who) {
    return "Let me introduce: " + who
  }

  return { hello }
})