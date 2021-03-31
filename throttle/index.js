/**
 * 节流
 * @param { Function } func 函数
 * @param { Number } delay 延迟执行毫秒数，默认值 600
 */
 function throttle (func, delay = 600) {
  let timer = null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      timer = null
      func()
    }, delay)
  }
}
