import { reactive } from './core/reactivity/index.js'

const App = {
  render(context) {
    return document.createTextNode(context.value)
  },
  setup() {
    const state = reactive({
      value: 0
    })
    return state
  }
}
export default App
