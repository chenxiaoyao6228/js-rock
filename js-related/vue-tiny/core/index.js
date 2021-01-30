import { effectWatch } from './reactivity/index.js'
import { mountComponent } from './renderer/index.js'

export default function createApp(rootComponent) {
  return {
    mount(rootContainer) {
      let context = rootComponent.setup()
      effectWatch(() => {
        rootContainer.innerHTML = ``
        let subTree = rootComponent.render(context)
        mountComponent(subTree, rootContainer)
      })
    }
  }
}
