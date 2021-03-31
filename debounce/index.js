/**
 * 防抖
 * @param { Function } func 函数
 * @param { Number } delay 延迟执行毫秒数，默认值 600
 */
function debounce (func, delay = 600) {
  let timer = null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, delay)
  }
}
