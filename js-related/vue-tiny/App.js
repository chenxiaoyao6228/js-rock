import { reactive } from './core/reactivity/index.js'
import { h } from './core/h.js'

const App = {
  render(context) {
    let children = [
      h('p', null, String(context.value)),
      h('p', null, String(context.value))
    ]
    if (context.value > 1 && context.value < 3) {
      children.push(h('p', null, String(context.value)))
    }
    return h(
      'div',
      {
        id: 'id-' + context.value,
        class: 'class-' + context.value
      },
      children
    )
  },
  setup() {
    const state = reactive({
      value: 0
    })
    window.state = state
    return state
  }
}

export default App
