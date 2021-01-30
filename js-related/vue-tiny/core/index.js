import { effectWatch } from './reactivity/index.js'

export default function createApp(rootComponent) {
  return {
    mount(rootContainer) {
      let context = rootComponent.setup()
      effectWatch(() => {
        let ele = rootComponent.render(context)
        rootContainer.appendChild(ele)
      })
    }
  }
}
