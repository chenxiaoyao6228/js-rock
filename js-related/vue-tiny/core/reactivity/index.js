class Dep {
  constructor() {
    this.effects = new Set()
  }
  depend() {
    // 注意使用的是currentEffect将Dep和被Proxy的数联系起来
    if (currentEffect) {
      this.effects.add(currentEffect)
    }
  }
  notice() {
    this.effects.forEach(effect => {
      effect()
    })
  }
}

let targetMaps = new Map()
function getDeps(target, key) {
  let targetMap = targetMaps.get(target)
  if (!targetMap) {
    targetMap = new Map()
    targetMaps.set(target, targetMap)
  }
  // key也一样
  let depsOfKey = targetMap.get(key)
  if (!depsOfKey) {
    depsOfKey = new Dep()
    targetMap.set(key, depsOfKey)
  }
  return depsOfKey
}
export function reactive(target) {
  return new Proxy(target, {
    get(target, key) {
      // 每个target都会有一个map来收集
      let deps = getDeps(target, key)
      deps.depend()
      return Reflect.get(target, key)
    },
    set(target, key, val) {
      let result = Reflect.set(target, key, val)
      let deps = getDeps(target, key)
      deps.notice()
      return result
    }
  })
}

let currentEffect
export function effectWatch(effect) {
  currentEffect = effect
  effect()
  currentEffect = null
}
