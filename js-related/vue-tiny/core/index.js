import { effectWatch } from './reactivity/index.js'
import { mountElement, diff } from './renderer/index.js'

export default function createApp(rootComponent) {
  return {
    mount(rootContainer) {
      let context = rootComponent.setup()
      let isMounted = false
      let oldSubTree
      effectWatch(() => {
        if (!isMounted) {
          isMounted = true
          rootContainer.innerHTML = ``
          // render返回的是vnode节点
          let subTree = (oldSubTree = rootComponent.render(context))
          mountElement(subTree, rootContainer)
        } else {
          let newSubTree = rootComponent.render(context)
          diff(newSubTree, oldSubTree)
          oldSubTree = newSubTree
        }
      })
    }
  }
}
