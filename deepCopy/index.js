// 深拷贝
function deepCopy (obj) {
  let result
  if (obj !== null && typeof obj === 'object') {
    result = Array.isArray(obj) ? [] : {}
    for (var i in obj) {
      result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i]
    }
  } else {
    result = obj
  }
  return result
}

/**
 * 验证
 */
// 1、数组拷贝
let arr = [{ a: 1 }, { b: 2 }]
let arr1 = arr
let arr2 = deepCopy(arr)
console.log(arr1[0] === arr[0]) // true，浅拷贝，赋址
console.log(arr2[0] === arr[0]) // false，深拷贝，赋值

// 2、对象拷贝
let obj = { a: { b: 1 } }
let obj1 = obj
let obj2 = deepCopy(obj)
console.log(obj1.a === obj.a) // true，浅拷贝，赋址
console.log(obj2.a === obj.a) // false，深拷贝，赋值

// let arr = []
// arr.constructor === Array // true
// Array.isArray(arr) // true
