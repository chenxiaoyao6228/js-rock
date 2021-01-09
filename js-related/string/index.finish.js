// function repeat(target, n) {
//   return new Array(n + 1).join(target)
// }

/**
 * 重复字符串n次
 *
 * @param {*} target
 * @param {*} n
 * @return {*}
 */
function repeat(target, n) {
  var s = target,
    total = ''
  while (n > 0) {
    if (n % 2 === 1) {
      total += s
    }
    if (n == 1) break
    s += s
    n = n >> 1
  }
  return total
}

/**
 * 用filling填补target, 长度不超过n
 *
 * @param {*} target
 * @param {*} n
 * @param {*} filling
 * @return {*}
 */
function padStart(target, n, filling) {
  if (target.length >= n) return target
  var res
  filling = filling || ' '
  var lenToFill = n - target.length
  var textToFill = new Array(n).join(filling).substr(0, lenToFill)
  res = textToFill + target
  return res
}

function padEnd(target, n, filling) {
  if (target.length >= n) return target
  var res
  filling = filling || ' '
  var lenToFill = n - target.length
  var textToFill = new Array(n).join(filling).substr(0, lenToFill)
  res = target + textToFill
  return res
}

/**
 * 字符串去空格
 *
 * @param {*} target
 * @return {*}
 */
function trimStart(target) {
  return target.replace(/^\s+/, '')
}
function trimEnd(target) {
  return target.replace(/\s+$/, '')
}
function trim(target) {
  return target.replace(/\s+(\w+)\s*/, '$1')
}

/**
 * 下划线处理
 *
 * @param {*} target
 * @return {*}
 */
function underscored(target) {
  return target
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/-/g, '_')
    .toLowerCase()
}

/**
 * 连字符
 *
 * @param {*} target
 * @return {*}
 */
function dasherize(target) {
  return target
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/_/g, '-')
    .toLowerCase()
}

/**
 * 首字母大写, 其余小写
 *
 * @param {*} target
 * @return {*}
 */
function capitalize(target) {
  return target.charAt(0).toUpperCase() + target.slice(1).toLowerCase()
}

/**
 * 驼峰式
 *
 * @param {*} target
 * @return {*}
 */
function camelize(target) {
  if (target.indexOf('_') < 0 && target.indexOf('_') < 0) {
    return target
  }
  return target.replace(/[-_][^-_]/g, function(match) {
    return match.charAt(1).toUpperCase()
  })
}

export {
  repeat,
  padStart,
  padEnd,
  trim,
  trimStart,
  trimEnd,
  underscored,
  dasherize,
  capitalize,
  camelize
}