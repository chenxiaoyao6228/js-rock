import { reactive } from './core/reactivity/index.js'
import { h } from './core/h.js'

const App = {
  render(context) {
    return h(
      'div',
      {
        id: 'id-1',
        class: 'class-1'
      },
      [h('p', null, String(context.value)), h('p', null, String(context.value))]
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
