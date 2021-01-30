// vdom => dom
export function mountComponent(vnode, container) {
  const { tag, props, children } = vnode
  // tag
  let ele = document.createElement(tag)
  // props
  for (const key in props) {
    if (Object.hasOwnProperty.call(props, key)) {
      const value = props[key]
      ele.setAttribute(key, value)
    }
  }
  /* children
        1. string
        2. object
    */
  if (typeof children === 'string') {
    const textNode = document.createTextNode(children)
    ele.appendChild(textNode)
  } else if (isArray(children)) {
    children.forEach(vnode => {
      mountComponent(vnode, ele)
    })
  }
  container.appendChild(ele)
}

function isArray(ele) {
  return typeof ele.sort === 'function'
}
