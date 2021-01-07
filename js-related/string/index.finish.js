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

export { repeat, padStart, padEnd, trim, trimStart, trimEnd }
